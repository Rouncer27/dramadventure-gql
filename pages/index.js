import { getPageStaticProps } from "@/utils/getPageStaticProps";
import { Page } from "@/components/Page";

const Home = ({
  mainMenuItems,
  callToAction,
  pageContent,
  mainLogo,
  footerMenuItems,
}) => {
  return (
    <Page
      mainMenuItems={mainMenuItems}
      callToAction={callToAction}
      pageContent={pageContent}
      mainLogo={mainLogo}
      footerMenu={footerMenuItems}
    />
  );
};

export const getStaticProps = getPageStaticProps;

export default Home;
