import React from "react";
import { client } from "../lib/apolio";
import { gql } from "@apollo/client";
import { getPageStaticProps } from "@/utils/getPageStaticProps";
import { Page } from "@/components/Page";

const SlugPage = ({ blocks, mainMenuItems, callToAction, components }) => {
  return (
    <Page
      blocks={blocks}
      mainMenuItems={mainMenuItems}
      callToAction={callToAction}
      components={components}
    />
  );
};

export const getStaticProps = getPageStaticProps;

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

export default SlugPage;
