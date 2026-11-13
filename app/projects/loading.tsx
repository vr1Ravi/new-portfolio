const bar = 'rounded bg-surface-2';

function CardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-[20px] border border-line bg-surface">
      <div className="h-44 w-full border-b border-line bg-surface-2" />
      <div className="flex flex-col gap-3 p-5">
        <div className={`${bar} h-5 w-1/2`} />
        <div className="flex flex-col gap-2">
          <div className={`${bar} h-3 w-full`} />
          <div className={`${bar} h-3 w-4/5`} />
        </div>
        <div className="flex gap-2">
          <div className="h-6 w-16 rounded-full bg-surface-2" />
          <div className="h-6 w-16 rounded-full bg-surface-2" />
          <div className="h-6 w-16 rounded-full bg-surface-2" />
        </div>
        <div className={`${bar} h-3 w-20`} />
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <main
      className="animate-pulse pb-6 pt-14"
      aria-busy="true"
      aria-label="Loading projects"
    >
      <div className={`${bar} mb-3 h-10 w-48`} />
      <div className={`${bar} mb-10 h-4 w-full max-w-[40ch]`} />
      <div className={`${bar} mb-3.5 h-3 w-28`} />
      <div className="grid gap-3.5 sm:grid-cols-2">
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </main>
  );
}
