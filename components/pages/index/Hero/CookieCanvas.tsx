import { PublicApi, useCylinder, usePlane } from "@react-three/cannon"
import { Physics, PlaneProps } from "@react-three/cannon"
import { Canvas, useFrame } from "@react-three/fiber"
import { EffectComposer, SSAO } from "@react-three/postprocessing"

import { RefObject, useCallback } from "react"
import * as THREE from "three"
import { useGLTF } from "@react-three/drei"
import { Vector3 } from "three"
import _ from "lodash"

const COUNT = 50
const INTERVAL = 1000

function Plane(props: PlaneProps) {
	const [ref]: any = usePlane(() => ({ mass: 0, ...props }))
	return (
		<mesh ref={ref} receiveShadow>
			<planeBufferGeometry attach='geometry' args={[5, 5]} />
			<shadowMaterial attach='material' color='#171717' opacity={0.65} />
		</mesh>
	)
}

const Cookies = () => {
	const { nodes } = useGLTF("/assets/3d/cookie.glb") as any

	const texture = new THREE.TextureLoader().load("/assets/3d/cookie.jpg")
	texture.encoding = THREE.sRGBEncoding
	texture.magFilter = THREE.NearestFilter
	texture.minFilter = THREE.NearestMipmapLinearFilter

	const args: [
		radiusTop?: number | undefined,
		radiusBottom?: number | undefined,
		height?: number | undefined,
		numSegments?: number | undefined
	] = [0.125, 0.125, 0.075, 5]

	const [ref, api]: [RefObject<any>, PublicApi] = useCylinder(() => ({
		mass: 1,
		args: args,
		position: [Math.random() - 0.5, Math.random() * 2, Math.random() - 0.5],
	}))

	const update = useCallback(
		_.throttle(() => {
			api.at(Math.floor(Math.random() * COUNT)).position.set(
				0,
				3.0 + Math.random() * 2,
				0
			)
		}, INTERVAL),
		[]
	)

	useFrame(update)

	return (
		<instancedMesh
			receiveShadow
			castShadow
			ref={ref}
			args={[undefined, undefined, COUNT]}
			material={
				new THREE.MeshStandardMaterial({
					roughness: 0.5,
					envMapIntensity: 0.2,
					map: texture,
				})
			}
			geometry={nodes.cookie.geometry}
			scale={new Vector3(1, 1, 1)}
		>
			{/* Debug */}
			{/* <cylinderBufferGeometry attach='geometry' args={args} /> */}
		</instancedMesh>
	)
}

const CookieCanvas = () => {
	return (
		<Canvas
			shadows
			dpr={1.5}
			gl={{
				alpha: true,
				stencil: false,
				depth: false,
				antialias: false,
			}}
			camera={{ position: [-2, 1.5, 2.5], fov: 50 }}
			onCreated={state => {
				state.gl.toneMappingExposure = 1.5
				state.camera.lookAt(0, 0.75, 0)
			}}
		>
			<Physics>
				<Cookies />
				<Plane rotation={[-Math.PI / 2, 0, 0]} />
			</Physics>
			<hemisphereLight intensity={0.35} />
			<spotLight
				position={[5, 5, 5]}
				angle={0.3}
				penumbra={1}
				intensity={1.5}
				castShadow
				shadow-mapSize-width={512}
				shadow-mapSize-height={512}
			/>
			<EffectComposer multisampling={0}>
				<SSAO
					samples={11}
					radius={0.1}
					intensity={20}
					luminanceInfluence={0.6}
					color='#5B3D29'
				/>
				<SSAO
					samples={21}
					radius={0.03}
					intensity={10}
					luminanceInfluence={0.6}
					color='#5B3D29'
				/>
			</EffectComposer>
		</Canvas>
	)
}

export default CookieCanvas
