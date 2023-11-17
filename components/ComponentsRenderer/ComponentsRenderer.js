import { Hero, SearchWhiskies } from "../ComponentBlocks";

import ReviewSlider from "../ComponentBlocks/ReviewSlider/ReviewSlider";

export const ComponentsRenderer = ({
  pageComponents,
  whiskeyRegions,
  whiskeyOrigins,
  whiskyTypes,
  reviews,
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

      case "Page_Pagecomponents_Components_ReviewSlider":
        return <ReviewSlider reviews={reviews} key={index} data={comp} />;
      default:
        return null;
    }
  });
};
