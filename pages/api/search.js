import { client } from "@/lib/apolio";
import { gql } from "@apollo/client";

const handler = async (req, res) => {
  try {
    const { data } = await client.query({
      query: gql`
        query AllWhiskiesQuery {
          whiskies {
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
      whiskies: data.whiskies.edges,
    });
  } catch (e) {
    console.log("ERROR: ", e);
  }
};

export default handler;
