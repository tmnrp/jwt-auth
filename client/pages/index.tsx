import type { NextPage } from "next";
import Head from "next/head";
import { PageWrapper } from "../components/page-wrapper/PageWrapper";
import { PageWidthWrapper } from "../components/page-width-wrapper/PageWidthWrapper";

//
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWidthWrapper>
        <PageWrapper>
          <div>Landing page</div>
        </PageWrapper>
      </PageWidthWrapper>
    </>
  );
};

export default Home;
