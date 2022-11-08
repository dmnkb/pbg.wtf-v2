import type { NextPage } from "next"

import Hero from "../components/pages/index/Hero"
import Layout, { NavElem } from "../components/Layout"
import { getAllNavElments, getHomepageData } from "../lib/api"

import FAQs from "../components/pages/index/FAQs"
import TwoSeconds from "../components/pages/index/TwoSeconds"
import Meta from "../components/Meta"

import pageData from "../content/indexPageData"
import navData from "../content/navData"

const Home: NextPage = () => {
	return (
		<Layout navData={navData}>
			<Meta />
			<Hero
				title={pageData && pageData.H1}
				subtitle={pageData && pageData.Subtitle}
				cta={pageData && pageData.Hero_CTA}
				uspList={pageData && pageData.USP}
			/>
			<main className='max-w-full overflow-hidden'>
				<section className='bg-grey' id='two-seconds'>
					<TwoSeconds
						title={pageData && pageData.Two_Seconds_Title}
						text={pageData && pageData.Two_Seconds_Text}
						cta={pageData && pageData.Two_Seconds_CTA}
					/>
				</section>
				<section className='bg-primary relative border-t-2 border-black'>
					<FAQs data={pageData && pageData.FAQ} />
				</section>
			</main>
		</Layout>
	)
}

export default Home
