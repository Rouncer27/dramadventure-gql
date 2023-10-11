import { Hero, SearchWhiskies } from "../ComponentBlocks";

export const ComponentsRenderer = ({
  pageComponents,
  whiskeyRegions,
  whiskeyOrigins,
  whiskyTypes,
}) => {
  return pageComponents?.components?.map((comp, index) => {
    switch (comp.fieldGroupName) {
      case "Page_Pagecomponents_Components_Hero":
        return <Hero key={index} data={comp} />;
      case "Page_Pagecomponents_Components_SearchWhiskies":
        return (
          <SearchWhiskies
            key={index}
            data={comp}
            whiskeyRegions={whiskeyRegions}
            whiskeyOrigins={whiskeyOrigins}
            whiskyTypes={whiskyTypes}
          />
        );
      default:
        return null;
    }
  });
};
