import { gql } from "@apollo/client";

export const GET_FOOTER_MENU = gql`
  query footerMenuQuery {
    footerMenu {
      footerMenu {
        footerMenuItems {
          menuItem {
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
      }
    }
  }
`;
