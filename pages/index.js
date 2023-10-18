import { getPageStaticProps } from "@/utils/getPageStaticProps";
import { Page } from "@/components/Page";

const Home = ({ mainMenuItems, callToAction, pageContent, mainLogo }) => {
  return (
    <Page
      mainMenuItems={mainMenuItems}
      callToAction={callToAction}
      pageContent={pageContent}
      mainLogo={mainLogo}
    />
  );
};

export const getStaticProps = getPageStaticProps;

export default Home;
