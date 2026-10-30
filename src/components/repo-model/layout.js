import { repoModel } from "@/data/repoModel";

const GAP = 0.32;      // between blocks inside a district
const STREET = 1.6;    // between districts

/** Block height for a file: grows with size, but sub-linearly so huge files do not dwarf the rest. */
function heightFor(lines) {
  return 0.3 + Math.sqrt(lines) / 6.5;
}

function buildLayout() {
  const files = repoModel.files.map(([path, dir, lines], id) => ({ id, path, dir, lines, height: heightFor(lines) }));

  const byDir = new Map();
  for (const f of files) {
    if (!byDir.has(f.dir)) byDir.set(f.dir, []);
    byDir.get(f.dir).push(f);
  }

  // Each folder is a district: a square-ish grid of blocks, tallest at the back.
  const districts = [...byDir.entries()]
    .map(([name, members]) => {
      const cols = Math.ceil(Math.sqrt(members.length));
      const rows = Math.ceil(members.length / cols);
      members.sort((a, b) => b.lines - a.lines);
      return { name, members, cols, rows, width: cols + (cols - 1) * GAP, depth: rows + (rows - 1) * GAP };
    })
    .sort((a, b) => b.members.length - a.members.length);

  // Shelf-pack districts into rows of roughly equal width.
  const area = districts.reduce((sum, d) => sum + (d.width + STREET) * (d.depth + STREET), 0);
  const targetWidth = Math.sqrt(area) * 1.25;
  let x = 0;
  let z = 0;
  let rowDepth = 0;
  let maxX = 0;
  for (const d of districts) {
    if (x > 0 && x + d.width > targetWidth) {
      x = 0;
      z += rowDepth + STREET;
      rowDepth = 0;
    }
    d.x = x;
    d.z = z;
    x += d.width + STREET;
    rowDepth = Math.max(rowDepth, d.depth);
    maxX = Math.max(maxX, x - STREET);
  }
  const totalDepth = z + rowDepth;

  // Centre the whole model on the origin.
  const offsetX = maxX / 2;
  const offsetZ = totalDepth / 2;
  for (const d of districts) {
    d.x -= offsetX;
    d.z -= offsetZ;
    d.members.forEach((f, i) => {
      const col = i % d.cols;
      const row = Math.floor(i / d.cols);
      f.position = [d.x + col * (1 + GAP) + 0.5, 0, d.z + row * (1 + GAP) + 0.5];
    });
    d.centre = [d.x + d.width / 2, 0, d.z + d.depth / 2];
  }

  return { files, districts, edges: repoModel.edges, size: [maxX, totalDepth] };
}

export const repoLayout = buildLayout();

const dependentsOf = (() => {
  const map = new Map();
  for (const [from, to] of repoLayout.edges) {
    if (!map.has(to)) map.set(to, []);
    map.get(to).push(from);
  }
  return map;
})();

/**
 * Files that depend on `id`, keyed by hop distance (0 is the file itself),
 * walking the real import edges backwards.
 * @returns {Map<number, number>}
 */
export function dependentsByDistance(id) {
  const dist = new Map([[id, 0]]);
  const queue = [id];
  while (queue.length) {
    const cur = queue.shift();
    for (const next of dependentsOf.get(cur) || []) {
      if (!dist.has(next)) {
        dist.set(next, dist.get(cur) + 1);
        queue.push(next);
      }
    }
  }
  return dist;
}

/** Plain-language summary for the readout panel. */
export function impactSummary(id) {
  const file = repoLayout.files[id];
  const dist = dependentsByDistance(id);
  let direct = 0;
  const folders = new Set();
  for (const [other, d] of dist) {
    if (d === 1) direct += 1;
    if (d > 0) folders.add(repoLayout.files[other].dir);
  }
  return { file, direct, total: dist.size - 1, folders: folders.size };
}
