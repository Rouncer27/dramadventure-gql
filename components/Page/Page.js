import Head from "next/head";
import { Header } from "../Header";
import { ComponentsRenderer } from "@/components/ComponentsRenderer";
import { Footer } from "../Footer";

import { styled } from "styled-components";
import {
  B1Black,
  B2Black,
  H1Black,
  H2Black,
  H3Black,
  H4Black,
  medWrapper,
} from "@/styles/helpers";

export const Page = ({
  mainMenuItems,
  callToAction,
  pageContent,
  whiskeyRegions,
  whiskeyOrigins,
  whiskyTypes,
  mainLogo,
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

        <Typography>
          <div className="wrapper">
            <h1>Aliquam tincidunt mauris eu risus.</h1>
            <h2>Vestibulum auctor dapibus neque.</h2>
            <h3>Vivamus vestibulum ntulla nec ante.</h3>
            <h4>Integer vitae libero ac risus egestas placerat.</h4>
            <p className="p1">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
              elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
              volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
              pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
              fermentum et, dapibus sed, urna.
            </p>
            <p className="p2">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
              elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
              volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
              pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
              fermentum et, dapibus sed, urna.
            </p>
          </div>
        </Typography>
      </main>
      <Footer />
    </>
  );
};

const Typography = styled.div`
  .wrapper {
    ${medWrapper};
  }

  h1 {
    width: 100%;
    ${H1Black};
  }

  h2 {
    width: 100%;
    ${H2Black};
  }

  h3 {
    width: 100%;
    ${H3Black};
  }

  h4 {
    width: 100%;
    ${H4Black};
  }

  .p1 {
    width: 100%;
    ${B1Black};
  }

  .p2 {
    width: 100%;
    ${B2Black};
  }
`;
