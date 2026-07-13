export default function sitemap() {
  const baseUrl = "https://tokencap.dev";
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
