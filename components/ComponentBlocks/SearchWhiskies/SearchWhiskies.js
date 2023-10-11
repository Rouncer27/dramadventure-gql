import { useEffect, useState } from "react";
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter } from "next/router";
import queryString from "query-string";
import { Filters } from "./Filters";

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
    const {
      filterRegions: filterRegionsInit,
      filterOrigins: filterOriginsInit,
      filterTypes: filterTypesInit,
    } = queryString.parse(window.location.search);

    await router.push(
      `${router.query.slug.join(
        "/"
      )}?page=${pageNumber}&filterRegions=${filterRegionsInit}&filterOrigins=${filterOriginsInit}&filterTypes=${filterTypesInit}`,
      null,
      {
        shallow: true,
      }
    );
    search();
  };

  useEffect(() => {
    const {
      filterRegions: filterRegionsInit,
      filterOrigins: filterOriginsInit,
      filterTypes: filterTypesInit,
    } = queryString.parse(window.location.search);

    setFilterRegions(filterRegionsInit.split(",").map((regoin) => `${regoin}`));
    setFilterOrigins(
      filterOriginsInit.split(", ").map((origin) => `${origin}`)
    );
    setFilterTypes(filterTypesInit.split(", ").map((type) => `${type}`));

    search();
  }, []);

  const handleCheckbox = (event, filter) => {
    switch (filter) {
      case "regions":
        const currentRegions = filterRegions;
        const isRegionChecked = currentRegions.indexOf(event.target.value);

        if (isRegionChecked === -1) {
          return setFilterRegions(() => {
            return [...currentRegions, event.target.value];
          });
        } else {
          currentRegions.splice(isRegionChecked, 1);
          return setFilterRegions(() => {
            return [...currentRegions];
          });
        }

      case "origins":
        const currentrOrigins = filterOrigins;
        const isOriginChecked = currentrOrigins.indexOf(event.target.value);

        if (isOriginChecked === -1) {
          return setFilterOrigins(() => {
            return [...currentrOrigins, event.target.value];
          });
        } else {
          currentrOrigins.splice(isOriginChecked, 1);
          return setFilterOrigins(() => {
            return [...currentrOrigins];
          });
        }

      case "types":
        const currentrTypes = filterTypes;
        const isTypeChecked = currentrTypes.indexOf(event.target.value);

        if (isTypeChecked === -1) {
          return setFilterTypes(() => {
            return [...currentrTypes, event.target.value];
          });
        } else {
          currentrTypes.splice(isTypeChecked, 1);
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

  return (
    <div>
      <div>
        <Filters
          whiskeyRegions={whiskeyRegions}
          whiskeyOrigins={whiskeyOrigins}
          whiskyTypes={whiskyTypes}
          filterRegions={filterRegions}
          filterOrigins={filterOrigins}
          filterTypes={filterTypes}
          handleCheckbox={handleCheckbox}
        />
        <div>
          <button onClick={handleSearch}>Search</button>
        </div>
        <Results whiskies={whiskies} />
        <Pagination
          onPageClick={handlePageClick}
          totalPages={Math.ceil(totalResults / PAGE_SIZE)}
        />
      </div>
    </div>
  );
};
