export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 p-6">
      <div className="grid gap-4 md:grid-cols-2">

        <div className="h-40 animate-pulse rounded-3xl bg-zinc-900 md:col-span-2" />

        <div className="h-48 animate-pulse rounded-3xl bg-zinc-900" />
        <div className="h-48 animate-pulse rounded-3xl bg-zinc-900" />
        <div className="h-48 animate-pulse rounded-3xl bg-zinc-900" />
        <div className="h-48 animate-pulse rounded-3xl bg-zinc-900" />

      </div>
    </main>
  );
}