import { WhiskeyCard } from "../WhiskeyCard";

export const Results = ({ whiskies }) => {
  return (
    <>
      {whiskies.map((whiskey) => {
        return (
          <WhiskeyCard
            key={whiskey.node.databaseId}
            title={whiskey.node.title}
            uri={whiskey.node.uri}
            description={whiskey.node.whiskyContent.description}
            specs={whiskey.node.whiskyContent.specs}
            origins={whiskey.node.whiskeyOrigins.node}
            regions={whiskey.node.whiskeyRegions.node}
            types={whiskey.node.whiskyTypes.node}
          />
        );
      })}
    </>
  );
};
