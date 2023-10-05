import { gql } from "@apollo/client";

export const GET_PAGE_DATA_TWO = gql`
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
    }
  }
`;
