import React from "react";
import { client } from "../lib/apolio";
import { gql } from "@apollo/client";
import { getPageStaticProps } from "@/utils/getPageStaticProps";
import { Page } from "@/components/Page";
import { Whiskey } from "@/components/Whiskey";

const SlugPage = ({ pageContent, mainMenuItems, callToAction }) => {
  console.log("pageContent", pageContent);

  if (pageContent.contentTypeName === "page") {
    return (
      <Page
        mainMenuItems={mainMenuItems}
        callToAction={callToAction}
        pageComponents={pageContent.pageComponents}
      />
    );
  } else if (pageContent.contentTypeName === "whiskey") {
    return (
      <Whiskey
        mainMenuItems={mainMenuItems}
        callToAction={callToAction}
        pageContent={pageContent}
      />
    );
  } else {
    return null;
  }
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
        whiskies {
          nodes {
            uri
          }
        }
      }
    `,
  });

  return {
    paths: [...data.pages.nodes, ...data.whiskies.nodes]
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
