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
    <div>
      <h1>Filters</h1>
      <p>Whiskey Regions</p>
      {whiskeyRegions.nodes.map((region, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              id={region.slug}
              name="whiskeyRegions"
              value={region.slug}
              onChange={(event) => handleCheckbox(event, "regions")}
              checked={filterRegions?.indexOf(region.slug) !== -1}
            />
            <label htmlFor={region.slug}>{region.name}</label>
          </div>
        );
      })}
      <p>Whiskey Origins</p>
      {whiskeyOrigins.nodes.map((origin, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              id={origin.slug}
              name="whiskeyOrigins"
              value={origin.slug}
              onChange={(event) => handleCheckbox(event, "origins")}
              checked={filterOrigins?.indexOf(origin.slug) !== -1}
            />
            <label htmlFor={origin.slug}>{origin.name}</label>
          </div>
        );
      })}

      <p>Whiskey Types</p>
      {whiskyTypes.nodes.map((type, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              id={type.slug}
              name="whiskyTypes"
              value={type.slug}
              onChange={(event) => handleCheckbox(event, "types")}
              checked={filterTypes?.indexOf(type.slug) !== -1}
            />
            <label htmlFor={type.slug}>{type.name}</label>
          </div>
        );
      })}
    </div>
  );
};
