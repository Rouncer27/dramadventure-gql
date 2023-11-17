import { getPageStaticProps } from "@/utils/getPageStaticProps";
import { Page } from "@/components/Page";

const Home = ({
  mainMenuItems,
  callToAction,
  pageContent,
  mainLogo,
  footerMenuItems,
  footerLogo,
  instagramUrl,
  youtubeUrl,
}) => {
  return (
    <Page
      mainMenuItems={mainMenuItems}
      callToAction={callToAction}
      pageContent={pageContent}
      mainLogo={mainLogo}
      footerMenu={footerMenuItems}
      footerData={{ footerMenuItems, footerLogo, instagramUrl, youtubeUrl }}
    />
  );
};

export const getStaticProps = getPageStaticProps;

export default Home;
