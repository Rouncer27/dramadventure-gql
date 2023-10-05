import { Hero } from "../ComponentBlocks";

export const ComponentsRenderer = ({ pageComponents }) => {
  console.log("pageComponents", pageComponents);
  return pageComponents?.components?.map((comp, index) => {
    switch (comp.fieldGroupName) {
      case "Page_Pagecomponents_Components_Hero":
        return <Hero key={index} data={comp} />;
      default:
        return null;
    }
  });
};
