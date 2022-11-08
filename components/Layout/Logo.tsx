import { css } from "@emotion/css"
import { forwardRef, useEffect, useRef } from "react"
import tw from "twin.macro"

const Logo = forwardRef((props: any, ref) => {
	// https://codepen.io/dmnkb/pen/wvjKRgm

	// The strings to morph between. You can change these to anything you want!
	const texts = ["pbg", "wtf"]

	// Controls the speed of morphing.
	const MORPH_TIME = 1.5
	const COOL_DOWN_TIME = 5

	let textIndex = texts.length - 1
	let time: any = new Date()
	let morph = 0
	let cooldown = COOL_DOWN_TIME

	const text1 = useRef<any>()
	const text2 = useRef<any>()

	function doMorph() {
		morph -= cooldown
		cooldown = 0

		let fraction = morph / MORPH_TIME

		if (fraction > 1) {
			cooldown = COOL_DOWN_TIME
			fraction = 1
		}

		setMorph(fraction)
	}

	// A lot of the magic happens here, this is what applies the blur filter to the text.
	function setMorph(fraction: number) {
		// fraction = Math.cos(fraction * Math.PI) / -2 + .5;

		text2.current.style.filter = `blur(${Math.min(
			8 / fraction - 8,
			100
		)}px)`
		text2.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

		fraction = 1 - fraction
		text1.current.style.filter = `blur(${Math.min(
			8 / fraction - 8,
			100
		)}px)`
		text1.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

		text1.current.textContent = texts[textIndex % texts.length]
		text2.current.textContent = texts[(textIndex + 1) % texts.length]
	}

	function doCooldown() {
		morph = 0

		text2.current.style.filter = ""
		text2.current.style.opacity = "100%"

		text1.current.style.filter = ""
		text1.current.style.opacity = "0%"
	}

	// Animation loop, which is called every frame.
	function animate() {
		if (!text1.current || !text2.current) {
			return
		}

		requestAnimationFrame(animate)

		let newTime: any = new Date()
		let shouldIncrementIndex = cooldown > 0
		let dt = (newTime - time) / 1000
		time = newTime

		cooldown -= dt

		if (cooldown <= 0) {
			if (shouldIncrementIndex) {
				textIndex++
			}
			doMorph()
		} else {
			doCooldown()
		}
	}

	// Start the animation.
	useEffect(() => {
		text1.current.textContent = texts[textIndex % texts.length]
		text2.current.textContent = texts[(textIndex + 1) % texts.length]
		animate()
	}, [])

	return (
		<>
			<div
				{...props}
				className={css`
					/* This filter is a lot of the magic, try commenting it out to see how the morphing works! */
					filter: url(#threshold) blur(0.6px);

					cursor: pointer;
					& > span {
						position: absolute;
						user-select: none;
						${tw`
							text-[60px]
							font-bold
							font-heading
							leading-h1
							tracking-h1
							text-center
							text-white
						`}
					}
				`}
			>
				<span ref={text1}></span>
				<span ref={text2}></span>
			</div>

			<svg
				id='filters'
				className={css`
					height: 0;
					width: 0;
				`}
			>
				<defs>
					<filter id='threshold'>
						<feColorMatrix
							in='SourceGraphic'
							type='matrix'
							values='1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140'
						/>
					</filter>
				</defs>
			</svg>
		</>
	)
})

// Next <Link /> needs th Logo componentn to be passed as forwardRef. However, ESLint seems to lose the displayName that way
Logo.displayName = "Logo"

export default Logo
