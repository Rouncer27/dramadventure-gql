import { client } from "@/lib/apolio";
import { gql } from "@apollo/client";

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);

    let hasRegionFilter = ``;
    let hasOriginFilter = ``;
    let hasTypeFilter = ``;

    if (filters.filterRegions && filters.filterRegions !== "undefined") {
      const regionsArray = filters?.filterRegions?.split(",");
      hasRegionFilter = `{
        operator: IN,
        terms: [${regionsArray.map((regoin) => `"${regoin}"`)}],
        taxonomy: WHISKEYREGION,
        field: SLUG
        },`;
    }

    if (filters.filterOrigins && filters.filterOrigins !== "undefined") {
      const originsArray = filters?.filterOrigins?.split(",");
      hasOriginFilter = `{
        operator: IN,
        terms:[${originsArray.map((origin) => `"${origin}"`)}],
        taxonomy: WHISKEYORIGIN,
        field: SLUG
      },`;
    }

    if (filters.filterTypes && filters.filterTypes !== "undefined") {
      const typesArray = filters?.filterTypes?.split(",");
      hasTypeFilter = `   {
        operator: IN,
        terms:[${typesArray.map((type) => `"${type}"`)}],
        taxonomy: WHISKYTYPE,
        field: SLUG
      },`;
    }

    console.log("TREVOR --> ", hasRegionFilter, hasOriginFilter, hasTypeFilter);

    const { data } = await client.query({
      query: gql`
        query AllWhiskiesQuery {
          whiskies(where: { orderby: {field: TITLE, order: ASC},offsetPagination: { size: 3, offset: ${
            ((filters.page || 1) - 1) * 3
          } } taxQuery: {relation: AND, taxArray: [
            ${hasRegionFilter}
            ${hasOriginFilter}
            ${hasTypeFilter}
          ]}}) {
            pageInfo {
              offsetPagination {
                total
              }
            }
            edges {
              node {
                databaseId
                uri
                title
                whiskyContent {
                  description
                  specs {
                    avb46OrAbove
                    naturalColour
                    nonChillFiltered
                  }
                }

                whiskeyOrigins {
                  nodes {
                    name
                  }
                }
                whiskeyRegions {
                  nodes {
                    name
                  }
                }
                whiskyTypes {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
      `,
    });

    return res.status(200).json({
      whiskies: data.whiskies,
    });
  } catch (e) {
    console.log("ERROR: ", e);
  }
};

export default handler;
