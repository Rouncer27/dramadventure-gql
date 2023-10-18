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

    acfOptionsSiteWideSettings {
      siteWideSettings {
        mainLogo {
          altText
          sourceUrl
        }
      }
    }
  }
`;
