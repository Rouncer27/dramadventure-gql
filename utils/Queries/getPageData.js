import { gql } from "@apollo/client";

export const GET_PAGE_DATA = gql`
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
            uri
            name
          }
        }
        whiskeyRegions {
          nodes {
            name
            uri
          }
        }
        whiskyTypes {
          nodes {
            name
            uri
          }
        }
      }
    }
  }
`;
