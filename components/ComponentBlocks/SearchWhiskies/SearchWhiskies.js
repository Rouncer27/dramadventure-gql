import { useEffect, useState } from "react";
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter } from "next/router";
import queryString from "query-string";

export const SearchWhiskies = () => {
  const [whiskies, setWhiskies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const PAGE_SIZE = 3;
  const router = useRouter();

  const search = async () => {
    const { page } = queryString.parse(window.location.search);
    const response = await fetch(`/api/search`, {
      method: "POST",
      body: JSON.stringify({
        page: parseInt(page || "1"),
      }),
    });
    const data = await response.json();
    setWhiskies(data.whiskies.edges);
    setTotalResults(data.whiskies.pageInfo.offsetPagination.total);
  };

  const handlePageClick = async (pageNumber) => {
    await router.push(
      `${router.query.slug.join("/")}?page=${pageNumber}`,
      null,
      {
        shallow: true,
      }
    );
    search();
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div>
      <div>
        <Results whiskies={whiskies} />
        <Pagination
          onPageClick={handlePageClick}
          totalPages={Math.ceil(totalResults / PAGE_SIZE)}
        />
      </div>
    </div>
  );
};
