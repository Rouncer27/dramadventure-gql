import Head from "next/head";
import { ComponentsRenderer } from "@/components/ComponentsRenderer";
import { MainMenu } from "@/components/MainMenu/MainMenu";

export const Page = ({ mainMenuItems, callToAction, pageComponents }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainMenu items={mainMenuItems} callToAction={callToAction} />
        <ComponentsRenderer pageComponents={pageComponents} />
      </main>
    </>
  );
};
