import { gql } from "@apollo/client";

export const GET_WHISKEY_DATA = gql`
  query PageQuery($uri: String!) {
    nodeByUri(uri: $uri) {
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
