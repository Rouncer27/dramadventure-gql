export const ComponentsRenderer = ({ data }) => {
  console.log("Data:", data);
  return data?.components?.map((comp, index) => {
    switch (comp.fieldGroupName) {
      case "Page_Pagecomponents_Components_Hero":
        return <div key={index}>Hero Componet</div>;
      default:
        return null;
    }
  });
};
