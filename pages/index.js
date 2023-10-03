import { getPageStaticProps } from "@/utils/getPageStaticProps";
import { Page } from "@/components/Page";

const Home = ({ mainMenuItems, callToAction, pageComponents }) => {
  return (
    <Page
      mainMenuItems={mainMenuItems}
      callToAction={callToAction}
      pageComponents={pageComponents}
    />
  );
};

export const getStaticProps = getPageStaticProps;

export default Home;
