import Head from "next/head";
import { MainMenu } from "@/components/MainMenu/MainMenu";

export const Whiskey = ({ pageContent, mainMenuItems, callToAction }) => {
  console.log(pageContent);
  return (
    <>
      <Head>
        <title>Dram Adventure - {pageContent.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <MainMenu items={mainMenuItems} callToAction={callToAction} />
      </div>
      <main>
        <h1>{pageContent.title}</h1>
      </main>
    </>
  );
};
