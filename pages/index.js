import { getPageStaticProps } from "@/utils/getPageStaticProps";
import { Page } from "@/components/Page";

const Home = ({ blocks, mainMenuItems, callToAction, components }) => {
  return (
    <Page
      blocks={blocks}
      mainMenuItems={mainMenuItems}
      callToAction={callToAction}
      components={components}
    />
  );
};

export const getStaticProps = getPageStaticProps;

export default Home;
