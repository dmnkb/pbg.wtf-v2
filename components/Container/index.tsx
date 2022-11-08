interface ContainerInterface {
	readonly children?: any
	readonly className?: string
}
const Container: React.FC<ContainerInterface> = ({ children, className }) => {
	className = className || ""
	return (
		<div
			className={`container mx-auto px-8${
				className ? " " + className : ""
			}`}
		>
			{children}
		</div>
	)
}

export default Container
