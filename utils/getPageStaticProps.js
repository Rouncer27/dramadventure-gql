import { client } from "../lib/apolio";
import { gql } from "@apollo/client";
import { mapMainMenuItems } from "@/utils/mapMainMenuItems";
import { GET_MAIN_MENU } from "./Queries/getMainMenu";
import { GET_PAGE_DATA } from "./Queries/getPageData";

export const getPageStaticProps = async (context) => {
  const uri = context?.params?.slug
    ? `/${context?.params?.slug.join("/")}/`
    : "/";

  const response = await client.query({
    query: GET_PAGE_DATA,
    variables: {
      uri,
    },
  });

  const mainMenu = await client.query({
    query: GET_MAIN_MENU,
  });

  const pageData = response?.data;
  const pageContent = pageData?.nodeByUri ? pageData?.nodeByUri : null;
  const mainMenuItems = mapMainMenuItems(
    mainMenu?.data?.mainMenu?.mainMenu?.menuItems
  );
  const callToAction = mainMenu?.data?.mainMenu?.mainMenu?.callToActionButton;

  if (pageContent === null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageContent,
      mainMenuItems,
      callToAction,
    },
  };
};
