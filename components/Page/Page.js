import Head from "next/head";
import { Header } from "../Header";
import { ComponentsRenderer } from "@/components/ComponentsRenderer";
import { Footer } from "../Footer";

export const Page = ({
  mainMenuItems,
  callToAction,
  pageContent,
  whiskeyRegions,
  whiskeyOrigins,
  whiskyTypes,
  mainLogo,
  footerData,
}) => {
  return (
    <>
      <Head>
        <title>Dram Adventure - {pageContent.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        items={mainMenuItems}
        callToAction={callToAction}
        mainLogo={mainLogo}
      />
      <main>
        <ComponentsRenderer
          pageComponents={pageContent.pageComponents}
          whiskeyRegions={whiskeyRegions}
          whiskeyOrigins={whiskeyOrigins}
          whiskyTypes={whiskyTypes}
        />
      </main>
      <Footer footerData={footerData} />
    </>
  );
};
