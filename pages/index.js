import { getPageStaticProps } from "@/utils/getPageStaticProps";
import { Page } from "@/components/Page";

const Home = ({ mainMenuItems, callToAction, pageContent }) => {
  return (
    <Page
      mainMenuItems={mainMenuItems}
      callToAction={callToAction}
      pageContent={pageContent}
    />
  );
};

export const getStaticProps = getPageStaticProps;

export default Home;
