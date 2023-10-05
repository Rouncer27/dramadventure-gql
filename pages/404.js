import { client } from "../lib/apolio";
import { gql } from "@apollo/client";
import { mapMainMenuItems } from "@/utils/mapMainMenuItems";
import { MainMenu } from "@/components/MainMenu/MainMenu";

export default function Custom404(props) {
  return (
    <div>
      <MainMenu items={props.mainMenuItems} callToAction={props.callToAction} />
      <h1>404 Page not found!</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  const GET_PAGE_DATA = gql`
    query NotFoundQuery {
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
  });

  const pageData = response?.data;
  const mainMenuItems = mapMainMenuItems(
    pageData?.mainMenu?.mainMenu?.menuItems
  );

  const callToAction = pageData?.mainMenu?.mainMenu?.callToActionButton;

  return {
    props: {
      mainMenuItems,
      callToAction,
    },
  };
};
