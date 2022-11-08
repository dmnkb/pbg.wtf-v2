import { NextPage } from "next";
import Container from "../components/Container";
import Layout from "../components/Layout";

import subPageData from "../content/subPageData";
import navData from "../content/navData";

const Page: NextPage = () => {
  return (
    <Layout navData={navData} className="bg-primary">
      <Container className="py-[3em] pt-[9em] md:py-[6em] md:pt-[9em] lg:py-[9em]">
        <h1
          className="
						font-heading
						tracking-h1
						leading-h1
						text-black

						text-[30px]
						lg:text-[40px]
						xl:text-[45px]
						2xl:text-[60px]

						mb-3
						"
        >
          {subPageData.datenschutz.title}
        </h1>
        {subPageData.datenschutz.content}
      </Container>
    </Layout>
  );
};

export default Page;
