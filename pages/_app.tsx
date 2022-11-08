import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useEffect, useRef, useState } from "react"
import axios from "axios"

function MyApp({ Component, pageProps }: AppProps) {
	const [id, setID] = useState<null | number>(null)
	const lastPageRef = useRef<string | null>(null)

	// Called once
	useEffect(() => {
		if (typeof window !== "undefined") {
			setID(Date.now()) // Might replace with UID
		}
	}, [])

	// Called anytime the user moves to another page
	if (typeof window !== "undefined") {
		if (id) {
			let w: any = window
			let route = w.next.router.state.asPath
			let page = route === "/" ? "home" : route.replace("/", "")
			// Send request only once per subpage regardless of side-effects and re-renders
			if (page !== lastPageRef.current) {
				lastPageRef.current = page
				if (page !== "insights") {
					axios
						.get(
							`/api/visitor?id=${id}&page=${page}`,
							{
								headers: {
									"Content-Type": "text/plain",
								},
							}
						)
						.then(res => { console.log(res) }) /* prettier-ignore */
						.catch(err => { console.log(err) }) /* prettier-ignore */
				}
			}
		}
	}

	return <Component {...pageProps} />
}

export default MyApp
