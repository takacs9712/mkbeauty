interface PaginationProps {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  pageCount,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2.5 text-sm font-medium rounded-xl border-2 border-rose-200 bg-white text-rose-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-rose-50 hover:border-rose-300 transition-all duration-200 shadow-sm hover:shadow-md"
      >
        ← Előző
      </button>

      <div className="hidden sm:flex items-center gap-2">
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 text-sm font-semibold rounded-xl border-2 transition-all duration-200 ${
              page === currentPage
                ? "bg-rose-600 text-white border-rose-600 shadow-lg scale-110"
                : "bg-white text-rose-700 border-rose-200 hover:bg-rose-50 hover:border-rose-300 hover:scale-105 shadow-sm"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="sm:hidden px-4 py-2 text-sm font-semibold text-rose-700 bg-rose-50 rounded-xl border-2 border-rose-200">
        {currentPage} / {pageCount}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pageCount}
        className="px-4 py-2.5 text-sm font-medium rounded-xl border-2 border-rose-200 bg-white text-rose-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-rose-50 hover:border-rose-300 transition-all duration-200 shadow-sm hover:shadow-md"
      >
        Következő →
      </button>
    </div>
  );
};

export default Pagination;
