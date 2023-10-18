import { H1Blue, H3Black, colors, medWrapper } from "@/styles/helpers";
import { styled } from "styled-components";

export const Filters = ({
  whiskeyRegions,
  whiskeyOrigins,
  whiskyTypes,
  filterRegions,
  filterOrigins,
  filterTypes,
  handleCheckbox,
}) => {
  return (
    <StyledFilters>
      <div className="wrapper">
        <div className="title">
          <h2>Filters</h2>
        </div>
        <div className="filter-wrap">
          <h3>Whiskey Regions</h3>
          {whiskeyRegions.nodes.map((region, index) => {
            const isFilterChecked =
              filterRegions &&
              filterRegions.length > 0 &&
              filterRegions?.indexOf(region.slug) !== -1
                ? true
                : false;
            return (
              <div className="checkbox" key={index}>
                <input
                  type="checkbox"
                  id={region.slug}
                  name="whiskeyRegions"
                  value={region.slug}
                  onChange={(event) => handleCheckbox(event, "regions")}
                  checked={isFilterChecked}
                />
                <label htmlFor={region.slug}>{region.name}</label>
              </div>
            );
          })}
        </div>
        <div className="filter-wrap">
          <h3>Whiskey Origins</h3>
          {whiskeyOrigins.nodes.map((origin, index) => {
            const isFilterChecked =
              filterOrigins &&
              filterOrigins.length > 0 &&
              filterOrigins?.indexOf(origin.slug) !== -1
                ? true
                : false;

            return (
              <div className="checkbox" key={index}>
                <input
                  type="checkbox"
                  id={origin.slug}
                  name="whiskeyOrigins"
                  value={origin.slug}
                  onChange={(event) => handleCheckbox(event, "origins")}
                  checked={isFilterChecked}
                />
                <label htmlFor={origin.slug}>{origin.name}</label>
              </div>
            );
          })}
        </div>
        <div className="filter-wrap">
          <h3>Whiskey Types</h3>
          {whiskyTypes.nodes.map((type, index) => {
            const isFilterChecked =
              filterTypes &&
              filterTypes.length > 0 &&
              filterTypes?.indexOf(type.slug) !== -1
                ? true
                : false;

            return (
              <div className="checkbox" key={index}>
                <input
                  type="checkbox"
                  id={type.slug}
                  name="whiskyTypes"
                  value={type.slug}
                  onChange={(event) => handleCheckbox(event, "types")}
                  checked={isFilterChecked}
                />
                <label htmlFor={type.slug}>{type.name}</label>
              </div>
            );
          })}
        </div>
      </div>
    </StyledFilters>
  );
};

const StyledFilters = styled.div`
  .wrapper {
  }

  .title {
    width: 100%;

    h2 {
      ${H1Blue};
    }
  }

  .filter-wrap {
    width: 100%;

    @media (min-width: 768px) {
      margin-bottom: 5rem;
    }

    h3 {
      ${H3Black};
      margin-bottom: 0;
    }

    .checkbox {
      label {
        display: inline-block;
        cursor: pointer;
        position: relative;
        padding-left: 2.5rem;
        margin-right: 1.5rem;
      }

      label:before {
        content: "";
        display: inline-block;

        width: 16px;
        height: 16px;

        margin-right: 10px;
        position: absolute;
        left: 0;
        bottom: 1px;
        background-color: ${colors.colorAccent};
        box-shadow: inset 0px 2px 3px 0px rgba(0, 0, 0, 0.3),
          0px 1px 0px 0px rgba(255, 255, 255, 0.8);
      }

      input[type="checkbox"] {
        display: none;
      }

      label:before {
        border-radius: 3px;
      }

      input[type="checkbox"]:checked + label:before {
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
        font-size: 12px;
        color: #fff;
        text-align: center;
        line-height: 12px;
        content: "✓";
      }
    }
  }
`;
