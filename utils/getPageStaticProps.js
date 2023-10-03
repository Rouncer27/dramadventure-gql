import { client } from "../lib/apolio";
import { gql } from "@apollo/client";
import { cleanAndTransformBlocks } from "@/utils/cleanAndTransformBlocks";
import { mapMainMenuItems } from "@/utils/mapMainMenuItems";

export const getPageStaticProps = async (context) => {
  const uri = context?.params?.slug
    ? `/${context?.params?.slug.join("/")}/`
    : "/";

  const GET_PAGE_DATA = gql`
    query PageQuery($uri: String!) {
      nodeByUri(uri: $uri) {
        ... on Page {
          id
          title
          blocks
          pageComponents {
            components {
              ... on Page_Pagecomponents_Components_Hero {
                fieldGroupName
                title
              }
            }
          }
        }
      }

      mainMenu {
        mainMenu {
          menuItems {
            menuItem {
              label
              destination {
                ... on Page {
                  id
                  slug
                  uri
                }
              }
            }
            subMenuItems {
              label
              destination {
                ... on Page {
                  id
                  slug
                  uri
                }
              }
            }
          }
          callToActionButton {
            label
            destination {
              ... on Page {
                id
                uri
                slug
              }
            }
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_PAGE_DATA,
    variables: {
      uri,
    },
  });

  const mainMenuItems = mapMainMenuItems(
    response?.data.mainMenu.mainMenu.menuItems
  );
  const blocks = cleanAndTransformBlocks(response?.data.nodeByUri.blocks);
  const callToAction = response?.data.mainMenu.mainMenu.callToActionButton;

  return {
    props: {
      blocks,
      mainMenuItems,
      callToAction,
      components: response.data.nodeByUri.pageComponents,
    },
  };
};
