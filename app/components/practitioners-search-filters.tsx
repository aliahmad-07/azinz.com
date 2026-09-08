import { ChevronDown } from "lucide-react";

export default function PractitionersSearchFilters() {
  return (
    <div className="w-full px-4 sm:px-6 xl:px-12 -mt-8 xl:-mt-10 relative z-10">
      <div className="max-w-358 mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <input
          type="text"
          placeholder="Search practitoners here..."
          className="w-full sm:max-w-[600px] h-12 px-4 rounded-lg border border-gray-200 bg-white text-sm shadow-sm outline-none"
        />
        <div className="flex gap-3 shrink-0">
          <button className="h-12 px-4 rounded-lg border border-gray-200 bg-white text-sm font-medium flex items-center justify-between gap-2 shadow-sm w-40">
            By Service <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
          <button className="h-12 px-4 rounded-lg border border-gray-200 bg-white text-sm font-medium flex items-center justify-between gap-2 shadow-sm w-40">
            By Location <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}