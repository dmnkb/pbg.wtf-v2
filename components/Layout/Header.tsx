import Logo from "./Logo"
import Container from "../Container"
import Link from "next/link"
import { css } from "@emotion/css"
import tw from "twin.macro"

const Header = (props: any) => (
	<header
		{...props}
		className={
			"w-full flex fixed top-0 z-50 " +
			css`
				mix-blend-mode: difference;
			`
		}
	>
		<Container className='py-8'>
			<Link href='/' passHref>
				<Logo />
			</Link>
		</Container>
	</header>
)

export default Header
