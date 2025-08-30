import { Container } from '@/shared/ui/container'

export const Partners = () => {
	const partners = [
		'HINDALCO',
		'BASF',
		'Dupont',
		'Linde',
		'Siemens',
		'Dow Chemicals',
	]

	return (
		<section className='w-full py-20 bg-[#f7f7f7]'>
			<Container>
				<div className='flex flex-col items-center gap-6 text-center'>
					<h1 className='text-squirrel-900 text-[36px] font-bold tracking-tight'>
						Trusted Partners & Clients
					</h1>
					<p className='text-gray-600 max-w-xl text-[18px]'>
						We are proud to collaborate with industry leaders who trust our
						solutions.
					</p>

					{/* Partner logos */}
					<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10 w-full'>
						{partners.map((partner, i) => (
							<div
								key={i}
								className='bg-white flex items-center justify-center rounded-2xl h-[80px] border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transform'
							>
								<span className='text-gray-800 font-semibold text-sm tracking-wide'>
									{partner}
								</span>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
