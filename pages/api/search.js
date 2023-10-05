import { client } from "@/lib/apolio";
import { gql } from "@apollo/client";

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);
    const { data } = await client.query({
      query: gql`
        query AllWhiskiesQuery {
          whiskies(where: { offsetPagination: { size: 3, offset: ${
            ((filters.page || 1) - 1) * 3
          } } }) {
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
