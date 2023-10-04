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
          contentTypeName
          pageComponents {
            components {
              ... on Page_Pagecomponents_Components_Hero {
                fieldGroupName
                title
              }
            }
          }
        }

        ... on Whiskey {
          id
          title
          contentTypeName
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

  const pageDetails = response?.data?.nodeByUri.contentTypeName;
  const mainMenuItems = mapMainMenuItems(
    response?.data?.mainMenu?.mainMenu?.menuItems
  );
  const callToAction = response?.data?.mainMenu?.mainMenu?.callToActionButton;
  const pageComponents = response?.data?.nodeByUri?.pageComponents
    ? response?.data?.nodeByUri?.pageComponents
    : [];

  return {
    props: {
      pageDetails,
      mainMenuItems,
      callToAction,
      pageComponents,
    },
  };
};
