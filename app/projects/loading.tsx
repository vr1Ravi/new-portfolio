export default function Loading() {
  return (
    <div className="mx-auto mt-12 animate-pulse  p-4 shadow">
      <div className="flex items-center gap-2">
        <div className="h-6 w-20 rounded bg-slate-200"></div>
        <div className="h-8 w-10 rounded bg-slate-200"></div>
      </div>
      <div
        className={`relative mx-auto mt-6 flex w-[80%] flex-col items-center rounded  bg-gray-100   dark:bg-neutral-950`}
      >
        <div className="w-full px-2 pt-2">
          <div className="h-56 w-full bg-slate-200"></div>
        </div>
        <div className="mt-3 flex w-full items-center gap-2 px-4">
          <div className="h-6 w-20 rounded bg-slate-200"></div>
          <div className="h-8 w-10 rounded bg-slate-200"></div>
        </div>
        <div className="flex w-full flex-wrap justify-start gap-2 p-4">
          <div className="h-2 w-full rounded bg-slate-200"></div>
          <div className=" h-2 w-1/2 rounded bg-slate-200"></div>
        </div>
        <div className="mb-4 mt-4 flex w-full gap-3 px-4">
          <div className="h-3 w-12 rounded bg-slate-200"></div>
          <div className=" h-3 w-12 rounded bg-slate-200"></div>
          <div className=" h-3 w-12 rounded bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
}
