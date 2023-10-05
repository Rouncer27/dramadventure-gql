export const Pagination = ({ totalPages, onPageClick }) => {
  return (
    <div>
      {Array.from({ length: totalPages }).map((_, i) => {
        return (
          <div key={i}>
            <button
              onClick={() => {
                onPageClick(i + 1);
              }}
            >
              {i + 1}
            </button>
          </div>
        );
      })}
    </div>
  );
};
