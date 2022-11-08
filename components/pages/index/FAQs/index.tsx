const FAQ: React.FC<{
	title: string
	text: JSX.Element
	responsiveClasses: string
}> = ({ title, text, responsiveClasses }) => {
	return (
		<div
			data-aos='fade-up'
			className={`p-[16px] mb-8 md:mb-0 md:p-[25px] md:col-span-3 md:row-span-3 lg:p-[25px] lg:col-span-4 lg:row-span-3 bg-white border-2 border-black shadow-main ${responsiveClasses}`}
		>
			<h4 className='text-cop tracking-copy leading-copy font-bold black text-black mb-3'>
				{title}
			</h4>
			{text}
		</div>
	)
}

const responsiveClasses = [
	"md:col-start-1 md:row-start-1 lg:col-start-1 lg:row-start-2",
	"md:col-start-4 md:row-start-2 lg:col-start-6 lg:row-start-1",
	"lg:col-start-11 lg:row-start-2",
	"lg:col-start-2 lg:row-start-6",
	"lg:col-start-7 lg:row-start-5",
	"lg:col-start-12 lg:row-start-6",
]

const FAQs: React.FC<{ data: { Title: string; Text: JSX.Element }[] }> = ({
	data,
}) => (
	<div
		className='
			container
			mx-auto
			p-8
			flex
			flex-col

			md:max-w-full
			md:grid

			md:gap-[30px]
			md:p-[30px]

			lg:gap-[50px]
			lg:p-[50px]
		'
	>
		{data?.map((content: { Title: string; Text: JSX.Element }, idx: number) => (
			<FAQ
				title={content.Title}
				text={content.Text}
				responsiveClasses={responsiveClasses[idx]}
				key={idx}
			/>
		))}
	</div>
)

export default FAQs
