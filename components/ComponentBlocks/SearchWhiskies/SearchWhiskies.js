import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter } from "next/router";
import queryString from "query-string";
import { Filters } from "./Filters";
import { Btn1One, medWrapper } from "@/styles/helpers";

export const SearchWhiskies = ({
  whiskeyRegions,
  whiskeyOrigins,
  whiskyTypes,
}) => {
  const [whiskies, setWhiskies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const [filterRegions, setFilterRegions] = useState([]);
  const [filterOrigins, setFilterOrigins] = useState([]);
  const [filterTypes, setFilterTypes] = useState([]);

  const PAGE_SIZE = 3;
  const router = useRouter();

  const search = async () => {
    const { page, filterRegions, filterOrigins, filterTypes } =
      queryString.parse(window.location.search);
    const filters = {};
    if (filterRegions) filters.filterRegions = filterRegions;
    if (filterOrigins) filters.filterOrigins = filterOrigins;
    if (filterTypes) filters.filterTypes = filterTypes;
    const response = await fetch(`/api/search`, {
      method: "POST",
      body: JSON.stringify({
        page: parseInt(page || "1"),
        ...filters,
      }),
    });
    const data = await response.json();
    setWhiskies(data.whiskies.edges);
    setTotalResults(data.whiskies.pageInfo.offsetPagination.total);
  };

  const handlePageClick = async (pageNumber) => {
    const searchRes = queryString.parse(window.location.search);
    const filterRegionsInit = searchRes.filterRegions
      ? `&filterRegions=${searchRes.filterRegions}`
      : "";
    const filterOriginsInit = searchRes.filterOrigins
      ? `&filterOrigins=${searchRes.filterOrigins}`
      : "";
    const filterTypesInit = searchRes.filterTypes
      ? `&filterTypes=${searchRes.filterTypes}`
      : "";

    console.log(
      "queryString.parse(window.location.search)",
      queryString.parse(window.location.search)
    );

    await router.push(
      `${router.query.slug.join(
        "/"
      )}?page=${pageNumber}${filterRegionsInit}${filterOriginsInit}${filterTypesInit}`,
      null,
      {
        shallow: true,
      }
    );
    search();
    console.log("PUSH");
  };

  useEffect(() => {
    const {
      filterRegions: filterRegionsInit,
      filterOrigins: filterOriginsInit,
      filterTypes: filterTypesInit,
    } = queryString.parse(window.location.search);

    if (filterRegionsInit !== undefined) {
      setFilterRegions(
        filterRegionsInit?.split(",").map((regoin) => `${regoin}`)
      );
    }
    if (filterOriginsInit !== undefined) {
      setFilterOrigins(
        filterOriginsInit?.split(", ").map((origin) => `${origin}`)
      );
    }

    if (filterTypesInit !== undefined) {
      setFilterTypes(filterTypesInit?.split(", ").map((type) => `${type}`));
    }

    search();
  }, []);

  const handleCheckbox = (event, filter) => {
    switch (filter) {
      case "regions":
        const currentRegions = filterRegions;
        const isRegionChecked = currentRegions?.indexOf(event.target.value);

        if (isRegionChecked === -1) {
          return setFilterRegions(() => {
            return [...currentRegions, event.target.value];
          });
        } else {
          currentRegions?.splice(isRegionChecked, 1);
          return setFilterRegions(() => {
            return [...currentRegions];
          });
        }

      case "origins":
        const currentrOrigins = filterOrigins;
        const isOriginChecked = currentrOrigins?.indexOf(event.target.value);

        if (isOriginChecked === -1) {
          return setFilterOrigins(() => {
            return [...currentrOrigins, event.target.value];
          });
        } else {
          currentrOrigins?.splice(isOriginChecked, 1);
          return setFilterOrigins(() => {
            return [...currentrOrigins];
          });
        }

      case "types":
        const currentrTypes = filterTypes;
        const isTypeChecked = currentrTypes?.indexOf(event.target.value);

        if (isTypeChecked === -1) {
          return setFilterTypes(() => {
            return [...currentrTypes, event.target.value];
          });
        } else {
          currentrTypes?.splice(isTypeChecked, 1);
          return setFilterTypes(() => {
            return [...currentrTypes];
          });
        }
      default:
        return null;
    }
  };

  const handleSearch = async () => {
    await router.push(
      `${router.query.slug.join(
        "/"
      )}?page=1&filterRegions=${filterRegions}&filterOrigins=${filterOrigins}&filterTypes=${filterTypes}`,
      null,
      {
        shallow: true,
      }
    );

    search();
  };

  console.log("filterRegions: ", filterRegions);
  console.log("filterOrigins: ", filterOrigins);
  console.log("filterTypes: ", filterTypes);

  return (
    <StyledSection>
      <div className="sec-wrapper">
        <div className="sec-filers">
          <Filters
            whiskeyRegions={whiskeyRegions}
            whiskeyOrigins={whiskeyOrigins}
            whiskyTypes={whiskyTypes}
            filterRegions={filterRegions}
            filterOrigins={filterOrigins}
            filterTypes={filterTypes}
            handleCheckbox={handleCheckbox}
          />
          <StyledButton>
            <button onClick={handleSearch}>Update Results</button>
          </StyledButton>
        </div>
        <div className="sec-results">
          <Results whiskies={whiskies} />
        </div>
        <div className="sec-pagination">
          <Pagination
            onPageClick={handlePageClick}
            totalPages={Math.ceil(totalResults / PAGE_SIZE)}
          />
        </div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.div`
  .sec-wrapper {
    ${medWrapper};
  }

  .sec-filers {
    width: 25%;
  }

  .sec-results {
    width: 75%;
  }

  .sec-pagination {
    width: 100%;
    margin-top: 2.5rem;
  }
`;

const StyledButton = styled.div`
  justify-content: flex-start;

  a,
  button {
    ${Btn1One};
  }
`;
