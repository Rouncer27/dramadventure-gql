import { client } from "../lib/apolio";
import { mapMainMenuItems } from "@/utils/mapMainMenuItems";
import { GET_MAIN_MENU } from "./Queries/getMainMenu";
import { GET_FOOTER_MENU } from "./Queries/getFooterMenu";
import { GET_PAGE_DATA } from "./Queries/getPageData";
import { GET_WHISKEY_DATA } from "./Queries/getWhiskeyData";
import { GET_REVIEWS_DATA } from "./Queries/getReviewsData";

export const getPageStaticProps = async (context) => {
  const uri = context?.params?.slug
    ? `/${context?.params?.slug.join("/")}/`
    : "/";

  const pages = await client.query({
    query: GET_PAGE_DATA,
    variables: {
      uri,
    },
  });

  const whiskies = await client.query({
    query: GET_WHISKEY_DATA,
    variables: {
      uri,
    },
  });

  // const reviews = await client.query({
  //   query: GET_REVIEWS_DATA,
  //   variables: {
  //     uri,
  //   },
  // });

  const mainMenu = await client.query({
    query: GET_MAIN_MENU,
  });

  const footerMenu = await client.query({
    query: GET_FOOTER_MENU,
  });

  const pageType =
    pages?.data.nodeByUri?.contentTypeName === "page"
      ? pages?.data.nodeByUri?.contentTypeName
      : whiskies?.data.nodeByUri?.contentTypeName === "whiskey"
      ? whiskies?.data.nodeByUri?.contentTypeName
      : null;

  const pageContent =
    pageType === "page"
      ? pages?.data.nodeByUri
      : pageType === "whiskey"
      ? whiskies?.data.nodeByUri
      : null;

  const whiskeyRegions = pages?.data ? pages?.data?.whiskeyRegions : [];
  const whiskeyOrigins = pages?.data ? pages?.data?.whiskeyOrigins : [];
  const whiskyTypes = pages?.data ? pages?.data?.whiskyTypes : [];
  const reviews = pages?.data ? pages?.data?.reviews?.nodes : [];

  // const mainMenuItems = null;
  const mainMenuItems = mapMainMenuItems(
    mainMenu?.data?.mainMenu?.mainMenu?.menuItems
  );

  const footerMenuItems = footerMenu.data.footerMenu.footerMenu.footerMenuItems;
  const footerLogo =
    footerMenu.data.acfOptionsSiteWideSettings.siteWideSettings.footerLogo;
  const instagramUrl =
    footerMenu.data.acfOptionsSiteWideSettings.siteWideSettings.instagramUrl;
  const youtubeUrl =
    footerMenu.data.acfOptionsSiteWideSettings.siteWideSettings.youtubeUrl;

  const mainLogo =
    mainMenu?.data?.acfOptionsSiteWideSettings?.siteWideSettings?.mainLogo;
  const callToAction = mainMenu?.data?.mainMenu?.mainMenu?.callToActionButton;

  if (pageContent === null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageContent,
      pageType,
      whiskeyRegions,
      whiskeyOrigins,
      whiskyTypes,
      mainMenuItems,
      callToAction,
      mainLogo,
      footerMenuItems,
      footerLogo,
      instagramUrl,
      youtubeUrl,
      reviews,
    },
  };
};
