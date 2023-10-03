import React from "react";
import { client } from "../lib/apolio";
import { gql } from "@apollo/client";
import { ComponentsRenderer } from "@/components/ComponentsRenderer";

const SlugPage = (props) => {
  console.log("Page props", props);
  return (
    <>
      <ComponentsRenderer data={props.components} />
    </>
  );
};

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `,
  });

  return {
    paths: data.pages.nodes
      .filter((page) => page.uri !== "/")
      .map((page) => {
        return {
          params: {
            slug: page.uri.substring(1, page.uri.length - 1).split("/"),
          },
        };
      }),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const uri = `/${context.params.slug.join("/")}/`;
  console.log("uri", uri);

  const GET_PAGE_DATA = gql`
    query GetPageData($uri: String!) {
      nodeByUri(uri: $uri) {
        ... on Page {
          id
          title
          blocks
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

      posts {
        nodes {
          slug
          title
          postId
          uri
          date
          content
          postTemplate {
            postName
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

  console.log("response", response);

  return {
    props: {
      title: response.data.nodeByUri.title,
      components: response.data.nodeByUri.pageComponents,
    },
  };
}

export default SlugPage;
