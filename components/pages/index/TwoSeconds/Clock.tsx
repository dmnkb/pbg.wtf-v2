import { css } from "@emotion/css"
import { useInView } from "react-intersection-observer"
import tw from "twin.macro"

interface ClockInterface {
	readonly className?: string
}

const Clock: React.FC<ClockInterface> = ({ className }) => {
	const { ref, inView } = useInView({ threshold: 0 })

	return (
		<div className='w-[70px] h-[70px] rounded-full bg-white border-2 border-black relative'>
			<div
				ref={ref}
				className={
					`w-[45px] ml-[-10px] h-[2px] bg-black absolute left-1/2 top-1/2 ${inView ? "in-view" : ""} ` +
					css`
						transform-origin: 10px center ;
						transform: rotate(250deg);
						${tw`text-primary fill-current`}
						&.in-view {
							animation-name: hand-animation;
							animation-duration: 2s;
							animation-fill-mode: forwards;
							animation-timing-function: linear;
							animation-delay: 1s;
						}
						/* prettier-ignore */
						@keyframes hand-animation {
							0% { transform: rotate(250deg); }
							1% { transform: rotate(260deg); }
							50% { transform: rotate(260deg); }
							51% { transform: rotate(270deg); }
							100% { transform: rotate(270deg);}
						}
					` + " " +(className ? className : "") /* prettier-ignore */
				}
			></div>
			<div className='w-[8px] h-[2px] left-0 top-1/2 mt-[-1px] bg-black absolute origin-left'></div>
			<div className='w-[8px] h-[2px] left-1/2 top-0 mt-[-1px] bg-black absolute origin-left rotate-90'></div>
			<div className='w-[8px] h-[2px] right-0 top-1/2 mt-[-1px] bg-black absolute origin-left '></div>
			<div className='w-[8px] h-[2px] left-1/2 bottom-0 -mb-[1px] bg-black absolute origin-left rotate-[270deg]'></div>
		</div>
	)
}

export default Clock
