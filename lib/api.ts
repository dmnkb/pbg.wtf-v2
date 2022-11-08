import { NavElem } from "../components/Layout"

export async function getAllPages() {
	const res = await fetch(process.env.STRAPI_URL + "/api/pages/")
	const json = await res.json()

	return json.data
}

export async function getAllNavElments() {
	const res = await fetch(process.env.STRAPI_URL + "/api/pages/")
	const json = await res.json()

	let navData: NavElem[] = []

	json?.data?.forEach((page: any, i: number) => {
		let nd: NavElem = {
			id: page.id,
			title: page.attributes["Title"],
			slug: page.attributes["Slug"],
		}
		navData?.push(nd)
	})

	return navData
}

export async function getPageDataBySlug(slug: string) {
	const url = process.env.STRAPI_URL + "/api/pages?filters[Slug][$eq]=" + slug /* prettier-ignore */
	const res = await fetch(url)
	const json = await res.json()

	return json.data
}

export async function getHomepageData() {
	const url = process.env.STRAPI_URL + "/api/homepage?populate=*"
	const res = await fetch(url)
	const json = await res.json()

	return json.data
}
