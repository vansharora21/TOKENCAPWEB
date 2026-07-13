export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading page content"
      className="mx-auto flex min-h-[60vh] w-full max-w-7xl items-center justify-center px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="w-full max-w-4xl space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
        <div className="skeleton-bone h-4 w-24 rounded-full" />
        <div className="skeleton-bone h-10 w-3/4 rounded-2xl" />
        <div className="skeleton-bone h-6 w-2/3 rounded-full" />
        <div className="grid gap-4 pt-4 sm:grid-cols-3">
          <div className="skeleton-bone h-28 rounded-2xl" />
          <div className="skeleton-bone h-28 rounded-2xl" />
          <div className="skeleton-bone h-28 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
