export default function sitemap() {
  const baseUrl = "https://tokencap.vansharora.app";
  const routes = [
    "/",
    "/about",
    "/changelog",
    "/cli",
    "/docs",
    "/downloads",
    "/faq",
    "/features",
    "/resources",
    "/reviews",
    "/roadmap",
    "/vscode",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1.0 : 0.8,
  }));
}
