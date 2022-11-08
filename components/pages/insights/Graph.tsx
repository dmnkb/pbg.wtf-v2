interface GraphInterface {
	readonly loading: boolean
	readonly data: any
}
const Graph: React.FC<GraphInterface> = ({ loading, data }) => {
	return loading ? (
		<>Loading...</>
	) : (
		<div>
			<h3 className='text-l font-bold mb-3'>
				Visitor count: {data?.length}
			</h3>
			<ul>
				{data?.map((entry: any) => {
					return (
						<li key={entry.id} className='flex'>
							<span className='mr-6'>ID: {entry.id}</span>
							<ul className='flex'>
								{entry.page_trace
									.split(",")
									.map((page: string, idx: number) => {
										return (
											<li key={idx} className='mr-3'>
												{page.trim()}
											</li>
										)
									})}
							</ul>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Graph
