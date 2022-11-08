import { Suspense } from "react"
import { CheckCircleIcon } from "@heroicons/react/outline"
import Button from "../../../Button"

import CookieCanvas from "./CookieCanvas"
import { css } from "@emotion/css"
import scrollTo from "../../../../lib/scrollTo"

const Hero: React.FC<{
	title: string
	subtitle: string
	cta: string
	uspList: { Title: string; Subtitle: string }[]
}> = ({ title, subtitle, cta, uspList }) => {
	return (
		<header className='flex flex-col h-screen bg-primary'>
			<div className='h-full overflow-hidden'>
				<div
					className='
						h-full
						container
						mx-auto
						px-8

						flex
						flex-col

						lg:grid
						lg:grid-cols-2
						lg:gap-4
						lg:px-8
						'
				>
					{/* prettier-ignore */}
					<div className={"flex-1 " + css`max-height: calc(100vh - 150px);`}>
						<Suspense>
							<CookieCanvas />
						</Suspense>
					</div>
					<div
						className='
							flex
							flex-col
							justify-center
							items-start
							pb-8'
					>
						<h1
							data-aos='fade-up'
							data-aos-delay='1000'
							className='
								font-heading
								tracking-h1
								font-bold
								leading-h1
								text-black
								mb-[10px]
								text-[30px]
								lg:text-[40px]
								xl:text-[45px]
								2xl:text-[60px]'
						>
							{title}
						</h1>
						<p
							data-aos='fade-up'
							data-aos-delay='1250'
							className='
								text-black
								tracking-copy-large
								leading-copy-large
								text-[16px]
								md:text-[20px]
								lg:text-copy-large
								mb-[25px]
								xl:max-w-[90%]'
							dangerouslySetInnerHTML={{
								__html: subtitle
									? subtitle.replace("\n", "<br />")
									: "",
							}}
						></p>
						<div data-aos='fade-up' data-aos-delay='1500'>
							<Button
								callback={() => {
									scrollTo("two-seconds")
								}}
								text={cta}
							/>
						</div>
					</div>
				</div>
			</div>
			{/* USP list */}
			<div
				data-aos='fade-up'
				data-aos-delay='1750'
				data-aos-offset='-500'
				className='
					border-t-2
					border-b-2
					border-black
					bg-white'
			>
				<div
					className='
						mx-auto
						flex
						overflow-x-scroll
						md:w-full
						md:max-w-full
						lg:container
						lg:overflow-auto
						lg:justify-between
						lg:px-3'
				>
					{uspList?.map(
						(
							usp: { Title: string; Subtitle: string },
							idx: number
						) => (
							<div
								className='
								h-[120px]
								md:h-[150px]
								flex
								flex-col
								items-center
								justify-center
								shrink-0
								w-[60%]
								md:w-[30%]
								lg:w-auto'
								key={idx}
							>
								<div className='relative w-[24px] h-[24px] z-[10] mb-[10px] text-black'>
									<CheckCircleIcon className='w-[24px] h-[24px] z-0' />
								</div>
								<h4 className='text-copy text-black tracking-copy leading-[120%] font-bold mb-[5px]'>
									{usp.Title}
								</h4>
								<span className='text-copy text-black tracking-copy leading-[120%]'>
									{usp.Subtitle}
								</span>
							</div>
						)
					)}
				</div>
			</div>
		</header>
	)
}

export default Hero
