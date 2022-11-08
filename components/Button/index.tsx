import { ArrowDownIcon } from "@heroicons/react/outline"
import styled from "@emotion/styled"
import tw from "twin.macro"

interface ButtonInterface {
	readonly callback?: () => void
	readonly className?: string
	readonly text: string
}

/* prettier-ignore */
const ButtonBase: React.FC<ButtonInterface> = ({ callback, className, text }) => {
	className = className || ""
	return (
		<button onClick={callback} className={className}>
			<span className='text-copy leading-copy tracking-copy font-bold '>
				{text}
			</span>
			<div className='w-[24px] h-[24px] ml-[10px] relative overflow-hidden'>
				<ArrowDownIcon className='icon' />
				<ArrowDownIcon className='icon' />
			</div>
		</button>
	)
}

const Button = styled(ButtonBase)`
	${tw`
		flex
		px-[30px]
		py-[15px]
		pr-[20px]
		md:px-[40px]
		md:py-[20px]
		md:pr-[30px]
		border-2
		border-black
		text-black
		shadow-main
		transition-all
	`}
	.icon {
		position: absolute;
		transition: transform;
		transition-duration: 300ms;
		&:first-of-type {
			transform: translateY(-200%);
		}
		&:last-of-type {
		}
	}
	&:hover {
		${tw`shadow-main-off`}
		.icon {
			&:first-of-type {
				transform: translateY(0);
			}
			&:last-of-type {
				transform: translateY(200%);
			}
		}
	}
`

export default Button
