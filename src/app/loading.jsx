export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-7xl items-center justify-center px-6 py-24 sm:px-8 lg:px-10">
      <div className="w-full max-w-4xl space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
        <div className="h-4 w-24 rounded-full bg-white/10" />
        <div className="h-10 w-3/4 rounded-2xl bg-white/10" />
        <div className="h-6 w-2/3 rounded-full bg-white/10" />
        <div className="grid gap-4 pt-4 sm:grid-cols-3">
          <div className="h-28 rounded-2xl bg-white/10" />
          <div className="h-28 rounded-2xl bg-white/10" />
          <div className="h-28 rounded-2xl bg-white/10" />
        </div>
      </div>
    </div>
  );
}