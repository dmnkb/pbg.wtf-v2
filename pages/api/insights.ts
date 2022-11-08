import axios from "axios"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	console.log("asdgfj")
	return new Promise((resolve: any, reject: any) => {
		axios
			.get(`http://pbg-wtf-insights:3001/api/insights`, {
				headers: {
					"Content-Type": "text/plain",
				},
			})
			.then(response => {
				res.statusCode = 200
				res.setHeader("Content-Type", "application/json")
				res.setHeader("Cache-Control", "no-store")
				res.send(response.data)
				resolve()
			})
			.catch(error => {
				res.json(error)
				res.status(405).end()
				resolve() // in case something goes wrong in the catch block (as vijay commented)
			})
	})
}
