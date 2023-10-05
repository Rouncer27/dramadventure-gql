import Link from "next/link";

export const Results = ({ whiskies }) => {
  return (
    <div>
      {whiskies.map((whiskey) => {
        return (
          <div key={whiskey.node.databaseId}>
            <Link href={whiskey.node.uri}>{whiskey.node.title}</Link>
          </div>
        );
      })}
    </div>
  );
};
