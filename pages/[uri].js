import React from "react";
import { client } from "../lib/apolio";
import { gql } from "@apollo/client";

const SlugPage = ({ post }) => {
  console.log(post);
  return (
    <div>
      <h1>{post?.title ? post?.title : "Hello World"}</h1>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const GET_POST = gql`
    query GetPostByUri($id: ID!) {
      post(id: $id, idType: SLUG) {
        content
        title
        uri
        slug
        date
        author {
          node {
            firstName
          }
        }
        databaseId
      }
    }
  `;

  const response = await client.query({
    query: GET_POST,
    variables: {
      id: params.uri,
    },
  });

  const post = response?.data?.post;

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}

export default SlugPage;
