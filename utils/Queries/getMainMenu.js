import { gql } from "@apollo/client";

export const GET_MAIN_MENU = gql`
  query menuQuery {
    mainMenu {
      mainMenu {
        menuItems {
          menuItem {
            label
            destination {
              ... on Page {
                id
                uri
                slug
              }
            }
          }
          subMenuItems {
            destination {
              ... on Page {
                id
                uri
                slug
              }
            }
            label
          }
        }
        callToActionButton {
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
    }

    acfOptionsSiteWideSettings {
      siteWideSettings {
        mainLogo {
          sourceUrl
          altText
        }
      }
    }
  }
`;
