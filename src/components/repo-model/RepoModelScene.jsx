"use client";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { SoftShadows } from "@react-three/drei";
import { themeById } from "@/data/themes";
import { repoLayout, dependentsByDistance } from "./layout";

// Scene palette per site theme (data/themes.js). One accent marks the blast radius.
const PALETTE = Object.fromEntries(Object.entries(themeById).map(([id, t]) => [id, t.scene]));
const LIFT = 0.55; // how far a dependent rises, per unit of closeness

function Blocks({ selection, onHover, theme, reducedMotion }) {
  const mesh = useRef(null);
  const { files } = repoLayout;
  const tmp = useMemo(() => new THREE.Object3D(), []);
  const geometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0), []);
  const colours = useMemo(() => {
    const p = PALETTE[theme];
    return { block: new THREE.Color(p.block), accent: new THREE.Color(p.accent) };
  }, [theme]);
  // Current animated lift and tint per block; targets come from the selection.
  const state = useMemo(() => files.map(() => ({ lift: 0, tint: 0 })), [files]);
  const scratch = useMemo(() => new THREE.Color(), []);

  useLayoutEffect(() => {
    files.forEach((f, i) => {
      tmp.position.set(f.position[0], 0, f.position[2]);
      tmp.scale.set(1, f.height, 1);
      tmp.updateMatrix();
      mesh.current.setMatrixAt(i, tmp.matrix);
      mesh.current.setColorAt(i, colours.block);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
    mesh.current.instanceColor.needsUpdate = true;
  }, [files, tmp, colours]);

  useFrame((_, delta) => {
    const dist = selection.current.dist;
    const ease = reducedMotion ? 1 : 1 - Math.pow(0.0008, delta);
    let moving = false;
    files.forEach((f, i) => {
      const d = dist ? dist.get(i) : undefined;
      // Closer dependents rise higher and take more of the accent.
      const closeness = d === undefined ? 0 : d === 0 ? 1 : Math.max(0.25, 1 - (d - 1) * 0.25);
      const s = state[i];
      const nextLift = s.lift + (closeness * LIFT - s.lift) * ease;
      const nextTint = s.tint + (closeness - s.tint) * ease;
      if (Math.abs(nextLift - s.lift) < 1e-4 && Math.abs(nextTint - s.tint) < 1e-4) return;
      moving = true;
      s.lift = nextLift;
      s.tint = nextTint;
      tmp.position.set(f.position[0], s.lift, f.position[2]);
      tmp.scale.set(1, f.height, 1);
      tmp.updateMatrix();
      mesh.current.setMatrixAt(i, tmp.matrix);
      mesh.current.setColorAt(i, scratch.copy(colours.block).lerp(colours.accent, s.tint * (d === 0 ? 1 : 0.75)));
    });
    if (moving) {
      mesh.current.instanceMatrix.needsUpdate = true;
      mesh.current.instanceColor.needsUpdate = true;
    }
  });

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <instancedMesh
      ref={mesh}
      args={[geometry, undefined, files.length]}
      castShadow
      receiveShadow
      onPointerMove={(e) => { if (e.pointerType === "mouse") { e.stopPropagation(); onHover(e.instanceId); } }}
      onPointerOut={(e) => { if (e.pointerType === "mouse") onHover(null); }}
      // Touch screens have no hover: a tap selects the block instead.
      onClick={(e) => { e.stopPropagation(); onHover(e.instanceId); }}
    >
      <meshStandardMaterial roughness={0.82} metalness={0} />
    </instancedMesh>
  );
}

/** Import arcs from the selected file to each direct dependent. */
function Arcs({ selectedId, theme }) {
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    if (selectedId === null) return g;
    const { files } = repoLayout;
    const target = files[selectedId];
    const points = [];
    const from = new THREE.Vector3();
    const to = new THREE.Vector3(target.position[0], target.height + LIFT, target.position[2]);
    const mid = new THREE.Vector3();
    for (const [id, d] of dependentsByDistance(selectedId)) {
      if (d !== 1) continue;
      const f = files[id];
      from.set(f.position[0], f.height + LIFT * 0.75, f.position[2]);
      mid.addVectors(from, to).multiplyScalar(0.5);
      mid.y += 1.2 + from.distanceTo(to) * 0.18;
      const curve = new THREE.QuadraticBezierCurve3(from.clone(), mid.clone(), to.clone());
      const samples = curve.getPoints(16);
      for (let k = 0; k < samples.length - 1; k++) points.push(samples[k], samples[k + 1]);
    }
    g.setFromPoints(points);
    return g;
  }, [selectedId]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color={PALETTE[theme].arc} transparent opacity={0.85} />
    </lineSegments>
  );
}

function CameraRig({ focus, reducedMotion }) {
  const { camera, size } = useThree();
  const target = useMemo(() => new THREE.Vector3(), []);
  const goal = useMemo(() => new THREE.Vector3(), []);
  const wide = size.width > 900;

  useFrame(({ clock }, delta) => {
    const district = focus && repoLayout.districts.find((d) => d.name === focus);
    // On wide screens the model sits right of the headline; the camera looks left of centre.
    if (district) goal.set(...district.centre);
    else goal.set(wide ? -15 : 0, 0, wide ? 3 : 0);
    const ease = reducedMotion ? 1 : 1 - Math.pow(0.03, delta);
    target.lerp(goal, ease);
    const drift = reducedMotion ? 0 : Math.sin(clock.elapsedTime * 0.08) * 0.12;
    // Narrow, tall canvases see less sideways; back away so the whole model fits.
    const fit = Math.max(1, 1.2 / (size.width / size.height));
    const radius = (district ? 20 : wide ? 52 : 46) * fit;
    const angle = 0.72 + drift;
    camera.position.lerp(
      new THREE.Vector3(target.x + Math.sin(angle) * radius, radius * 0.78, target.z + Math.cos(angle) * radius),
      ease,
    );
    camera.lookAt(target);
  });
  return null;
}

/**
 * `lite` (phones and touch devices) drops the costly soft-shadow shader, halves
 * the shadow map and caps pixel density, so mobile GPUs can compile and hold it.
 * `onFail` fires when the WebGL context is lost, so the page can hide the model.
 */
export default function RepoModelScene({ focus, selection, selectedId, onHover, theme, reducedMotion, lite, onFail }) {
  const palette = PALETTE[theme];
  const [w, d] = repoLayout.size;
  return (
    <Canvas
      shadows
      dpr={lite ? [1, 1.5] : [1, 1.75]}
      camera={{ position: [30, 36, 34], fov: 26, near: 1, far: 300 }}
      gl={{ antialias: true, powerPreference: lite ? "low-power" : "default" }}
      // Vertical swipes over the model still scroll the page on phones.
      style={{ touchAction: "pan-y" }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener("webglcontextlost", (e) => { e.preventDefault(); onFail?.(); }, { once: true });
      }}
      aria-hidden="true"
    >
      {!lite && <SoftShadows size={18} samples={12} focus={0.6} />}
      <color attach="background" args={[palette.ground]} />
      <hemisphereLight args={[palette.sky, palette.ground, palette.hemi]} />
      <directionalLight
        castShadow
        position={[-24, 40, 18]}
        intensity={palette.sun}
        shadow-mapSize={lite ? [1024, 1024] : [2048, 2048]}
        shadow-camera-left={-w}
        shadow-camera-right={w}
        shadow-camera-top={d}
        shadow-camera-bottom={-d}
        shadow-bias={-0.0004}
      />
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[400, 400]} />
        <meshStandardMaterial color={palette.ground} roughness={1} />
      </mesh>
      <Blocks selection={selection} onHover={onHover} theme={theme} reducedMotion={reducedMotion} />
      <Arcs selectedId={selectedId} theme={theme} />
      <CameraRig focus={focus} reducedMotion={reducedMotion} />
    </Canvas>
  );
}
