export default function ActivityTile() {
  const activity = [
    1, 0, 1, 1, 0,
    1, 1, 0, 1, 1,
    0, 1, 1, 1, 0,
    1, 0, 1, 1, 1,
  ];

  return (
    <article className="rounded-3xl bg-zinc-900 p-6">
      <h3 className="mb-4 text-lg font-semibold">
        Learning Activity
      </h3>

      <div className="grid grid-cols-5 gap-2">
        {activity.map((item, index) => (
          <div
            key={index}
            className={`h-8 w-8 rounded-md ${
              item
                ? "bg-green-500"
                : "bg-zinc-800"
            }`}
          />
        ))}
      </div>
    </article>
  );
}