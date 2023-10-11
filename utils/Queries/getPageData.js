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

            ... on Page_Pagecomponents_Components_SearchWhiskies {
              displayWhiskiesSearch
              fieldGroupName
            }
          }
        }
      }
    }

    whiskeyRegions {
      nodes {
        name
        slug
      }
    }

    whiskeyOrigins {
      nodes {
        name
        slug
      }
    }

    whiskyTypes {
      nodes {
        name
        slug
      }
    }
  }
`;
