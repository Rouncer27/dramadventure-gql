import { Hero, SearchWhiskies } from "../ComponentBlocks";

export const ComponentsRenderer = ({ pageComponents }) => {
  console.log("pageComponents", pageComponents);
  return pageComponents?.components?.map((comp, index) => {
    console.log("comp", comp);
    switch (comp.fieldGroupName) {
      case "Page_Pagecomponents_Components_Hero":
        return <Hero key={index} data={comp} />;
      case "Page_Pagecomponents_Components_SearchWhiskies":
        return <SearchWhiskies key={index} data={comp} />;
      default:
        return null;
    }
  });
};
