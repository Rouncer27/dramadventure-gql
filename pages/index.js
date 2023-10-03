import Head from "next/head";
import { client } from "../lib/apolio";
import { gql } from "@apollo/client";
import { BlockRenderer } from "../components/BlockRenderer";
import { cleanAndTransformBlocks } from "@/utils/cleanAndTransformBlocks";
import { mapMainMenuItems } from "@/utils/mapMainMenuItems";
import { MainMenu } from "@/components/MainMenu/MainMenu";

export default function Home({ blocks, posts, pageData, mainMenuItems }) {
  console.log("blocks", blocks);
  console.log("posts", posts);
  console.log("pageData", pageData);
  console.log("mainMenuItems", mainMenuItems);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainMenu items={mainMenuItems} />
        <div>
          <h1>{pageData.title}</h1>
        </div>
        <BlockRenderer blocks={blocks} />
        {posts.nodes.map((post) => {
          return (
            <div key={post.postId}>
              <h1>{post.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              <p>{post.postTemplate.postName}</p>
            </div>
          );
        })}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const GET_HOME_DATA = gql`
    query GetHomeData {
      nodeByUri(uri: "/") {
        ... on Page {
          id
          title
          blocks
        }
      }

      mainMenu {
        mainMenu {
          menuItems {
            menuItem {
              label
              destination {
                ... on Page {
                  id
                  slug
                  uri
                }
              }
            }
            subMenuItems {
              label
              destination {
                ... on Page {
                  id
                  slug
                  uri
                }
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
    query: GET_HOME_DATA,
  });

  const pageData = response?.data.nodeByUri;
  const posts = response?.data.posts;
  const mainMenuItems = mapMainMenuItems(
    response?.data.mainMenu.mainMenu.menuItems
  );
  const blocks = cleanAndTransformBlocks(response?.data.nodeByUri.blocks);

  return {
    props: {
      blocks,
      posts,
      pageData,
      mainMenuItems,
    },
  };
}
