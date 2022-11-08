import Image from "next/image"
import Button from "../../../Button"
import Container from "../../../Container"
import IllustrationBackground from "../../../../assets/illustration/illustration-background.jpg"
import IllustrationPopup, { IllustrationPopupTypes } from "./IllustrationPopup"
import { css } from "@emotion/css"
import Clock from "./Clock"
import scrollTo from "../../../../lib/scrollTo"
import tw from "twin.macro"
import Illustration from "./illustration"
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"
import React from "react"

const TwoSeconds: React.FC<{ title: string; text: JSX.Element; cta: string }> = ({
	title,
	text,
	cta,
}) => {
	return (
		<>
			<Container>
				<div className='grid grid-cols-1 '>
					<div className='col-span-1 mt-20'>
						<div className='flex flex-col items-center justify-center'>
							<Clock className='animate' />
							<h2
								className='
								font-heading
								tracking-h1
								leading-h1
								text-center
								text-black
								text-[30px]
								max-w-[730px]
								mt-8
								mb-8
								md:w-8/12
								lg:mb-0
								lg:text-[40px]
								2xl:text-[40px]
							'
							>
								{title}
							</h2>
						</div>
					</div>
				</div>
				<div
					className='grid grid-cols-12'
					data-aos='fade-up'
					data-aos-delay='2500'
				>
					<div
						className='
							my-8
							col-span-12
							md:col-span-6
							lg:col-span-4
							md:flex
							md:flex-col
							md:justify-center
							md:items-start
							'
					>
						<div
							className={
								"text-copy-large leading-copy-large tracking-copy-large text-black mb-[20px] " +
								css`
									p {
										&:not(:last-child) {
											margin-bottom: 1em;
										}
										&:last-child {
											font-size: 16px;
										}
									}
								`
							}							
						>{text}</div>

						<Button
							callback={() => {
								scrollTo("footer")
							}}
							text={cta}
						/>
					</div>
					<div
						className='
						col-span-12
						md:col-span-6
						lg:col-span-8

						flex
						justify-end
						items-end

						translate-y-2

						lg:pl-[20%]
						'
					>
						<div
							data-aos='fade-up'
							data-aos-delay='3000'
							data-aos-offset='-500'
							className={
								"w-full relative " +
								css`
									position: relative;

									& > * {
										${tw`
										absolute
										top-0
										-left-10
										md:left-0

										w-[160%]!
										max-w-[160%]!
										lg:w-full!
										lg:max-w-full!

										h-full
									`}
									}
									& > svg {
										g {
											// prettier-ignore
											animation: shake-animation 4.72s ease infinite;
											transform-origin: 50% 50%;
											position: relative;
											&:nth-of-type(2) {
												animation-delay: 100ms;
											}
											&:nth-of-type(3) {
												animation-delay: 200ms;
											}
											&:nth-of-type(4) {
												animation-delay: 300ms;
											}
										}
										.spinner {
											transform-box: fill-box;
											transform-origin: 50% 50%;
											${tw`animate-spin`} // TODO: I really want to make this work using @apply animate-spin;
											animation-duration: 3000ms;
										}
									}

									/* prettier-ignore */
									@keyframes shake-animation {
										0% { transform: translate(0, 0); }
										1.78571% { transform: translate(5px, 0); }
										3.57143% { transform: translate(0, 0); }
										5.35714% { transform: translate(5px, 0); }
										7.14286% { transform: translate(0, 0); }
										8.92857% { transform: translate(5px, 0); }
										10.71429% { transform: translate(0, 0); }
										100% { transform: translate(0, 0); }
									}
								`
							}
						>
							{/* TODO: yarn add sharp */}
							<Image
								src={IllustrationBackground}
								alt='Illustration eines Smartphones.'
							/>
							<Illustration />
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}

export default TwoSeconds
