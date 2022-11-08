import { useEffect } from "react"
import Meta from "../Meta"
import Footer from "./Footer"
import AOS from "aos"
import "aos/dist/aos.css"
import Header from "./Header"
import navData from "../../content/navData"

export interface NavElem {
	id: number
	title: string
	slug: string
}

interface LayouInterface {
	readonly navData: NavElem[]
	readonly children: React.ReactNode
	readonly className?: string
}

const Layout: React.FC<LayouInterface> = ({ navData, children, className }) => {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	})

	return (
		<main
			className={
				"min-h-screen flex flex-col justify-end" + className
					? ` ${className}`
					: ""
			}
		>
			<Meta />
			<Header />
			{children}
			<Footer/>
		</main>
	)
}
export default Layout
