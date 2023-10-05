import { useEffect, useState } from "react";
import { Results } from "./Results";

export const SearchWhiskies = () => {
  const [whiskies, setWhiskies] = useState([]);

  useEffect(() => {
    const search = async () => {
      const response = await fetch(`/api/search`);
      const data = await response.json();
      console.log("SEARCH DATA", data.whiskies);
      setWhiskies(data.whiskies);
    };

    search();
  }, []);

  return (
    <div>
      <h2>Whiskey Search!!</h2>
      <div>
        <Results whiskies={whiskies} />
      </div>
    </div>
  );
};
