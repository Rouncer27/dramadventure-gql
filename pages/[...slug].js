import React from "react";
import { client } from "../lib/apolio";
import { gql } from "@apollo/client";

const SlugPage = (props) => {
  console.log("Page props", props);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
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

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}

export default SlugPage;
