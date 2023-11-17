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
              heroImage {
                altText
                sourceUrl
              }
              heroContent {
                boxColour
                title
                button {
                  buttonText
                  buttonType
                  buttonUrl
                  pageLink {
                    ... on Page {
                      id
                      slug
                      uri
                    }
                  }
                }
              }
            }

            ... on Page_Pagecomponents_Components_SearchWhiskies {
              displayWhiskiesSearch
              fieldGroupName
            }

            ... on Page_Pagecomponents_Components_ReviewSlider {
              displayReviewSlider
              fieldGroupName
            }
          }
        }
      }
    }

    reviews: spritsReviews {
      nodes {
        slug
        uri
        title
        reviewsContent {
          featuredImage {
            sourceUrl
            altText
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
