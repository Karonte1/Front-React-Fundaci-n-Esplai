function BookSkeletonItem () {
  return (
    <div className="animate-pulse border-2 border-slate-300 rounded">
      <div className="w-full aspect-[9/16] bg-slate-300"></div>

      <div className="p-4">
        <div className="h-4 bg-slate-300 rounded w-1/2"></div>

        <div className="flex items-center mt-2 justify-between">
          <div className="h-4 bg-slate-300 rounded w-1/4"></div>
          <div className="h-6 bg-slate-300 rounded w-16 ml-2"></div>
        </div>

        <div className="flex items-center mt-2 justify-between">
          <div className="h-4 bg-slate-300 rounded w-16"></div>
          <div className="flex space-x-2">
            <div className="size-5 rounded-full bg-slate-300"></div>
            <div className="size-5 rounded-full bg-slate-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookSkeletonItem;
