"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-950 text-white">
      <h1 className="text-2xl font-bold">
        Something went wrong
      </h1>

      <button
        onClick={() => reset()}
        className="rounded-lg bg-blue-600 px-4 py-2"
      >
        Try Again
      </button>
    </div>
  );
}