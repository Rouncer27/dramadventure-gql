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

  const pageData = response?.data;

  const pageContentType = pageData?.nodeByUri?.contentTypeName
    ? pageData?.nodeByUri?.contentTypeName
    : null;

  const pageComponents = pageData?.nodeByUri?.pageComponents
    ? pageData?.nodeByUri?.pageComponents
    : [];

  const mainMenuItems = mapMainMenuItems(
    pageData?.mainMenu?.mainMenu?.menuItems
  );

  const callToAction = pageData?.mainMenu?.mainMenu?.callToActionButton;

  return {
    props: {
      pageContentType,
      mainMenuItems,
      callToAction,
      pageComponents,
    },
  };
};
