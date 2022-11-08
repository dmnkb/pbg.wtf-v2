import axios from "axios"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import Container from "../components/Container"
import Layout, { NavElem } from "../components/Layout"
import Meta from "../components/Meta"
import Graph from "../components/pages/insights/Graph"
import { getAllNavElments } from "../lib/api"

const Insights: NextPage<{ navData: NavElem[] }> = ({ navData }) => {
	const [data, setData] = useState<null | any>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<null | string>(null)

	useEffect(() => {
		setLoading(true)
		axios
			.get("/api/insights")
			.then(response => {
				setData(response.data)
				setLoading(false)
			})
			.catch(error => {
				setError("Ein Fehler ist aufgetreten.")
				setLoading(false)
				console.error(error)
			})
	}, [])

	return (
		<Layout navData={navData} className='bg-primary'>
			<Meta />
			<Container className='py-[3em] pt-[9em] md:py-[6em] md:pt-[9em] lg:py-[9em]'>
				<div className='grid grid-cols-1'>
					<div className='col-span-1'>
						<h1
							className='
								font-heading
								tracking-h1
								leading-h1
								text-black

								text-[30px]
								lg:text-[40px]
								xl:text-[45px]
								2xl:text-[60px]

								mb-3
								'
						>
							Insights
						</h1>
					</div>
					<div className='col-span-1'>
						{error || <Graph loading={loading} data={data} />}
					</div>
				</div>
			</Container>
		</Layout>
	)
}

export async function getServerSideProps() {
	const navData = await getAllNavElments()
	return {
		props: {
			navData: navData,
		},
	}
}

export default Insights
