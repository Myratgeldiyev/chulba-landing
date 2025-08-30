import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { Icon } from '@/shared/ui/icon'
import Image from 'next/image'

const data = [
	{
		id: 1,
		title: 'Equipment Corrosion',
		desc: 'Acid attacks damage pipes, tanks, and components, leading to costly repairs and dangerous leaks.',
		price: 'Cost 20$ to one',
		img: '/factory1.jpg',
		tag: 'Critical',
	},
	{
		id: 2,
		title: 'Unplanned Downtime',
		desc: 'Corroded equipment fails unexpectedly, forcing emergency shutdowns and production losses.',
		price: 'Cost 20$ to one',
		img: '/factory2.avif',
		tag: 'Warning',
	},
	{
		id: 3,
		title: 'Safety Hazards',
		desc: 'Corroded equipment fails unexpectedly, forcing emergency shutdowns and production losses.',
		price: 'Cost 20$ to one',
		img: '/factory3.png',
		tag: 'Danger',
	},
]

export const Cards = () => {
	return (
		<div className='w-screen bg-gradient-to-b from-white to-gray-50 py-20'>
			<Container>
				<div className='flex flex-col items-center text-center gap-4'>
					<h1 className='text-squirrel-900 text-[36px] font-bold tracking-tight'>
						Critical Problems Plaguing SAP
					</h1>
					<p className='text-[#6a6a6a] text-[18px] max-w-2xl'>
						These costly issues threaten your efficiency, safety, and
						profitability every single day.
					</p>

					<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14'>
						{data.map(item => (
							<div
								key={item.id}
								className='group w-full h-[440px] flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200'
							>
								<div className='w-full h-[50%] relative overflow-hidden'>
									<Image
										src={item.img}
										alt={item.title}
										width={500}
										height={500}
										className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
									/>
									<span className='bg-[#CAE9BE] text-[12px] font-medium rounded-full absolute top-4 left-4 px-4 py-1 text-[#306844] border border-[#306844] shadow-sm'>
										{item.tag}
									</span>
								</div>
								<div className='w-full h-[50%] flex flex-col gap-4 p-6 text-left'>
									<h4 className='text-squirrel-950 text-[22px] font-semibold leading-snug'>
										{item.title}
									</h4>
									<p className='text-gray-600 flex-1 text-[15px] leading-relaxed'>
										{item.desc}
									</p>
									<div className='flex w-full items-center justify-between mt-auto'>
										<p className='text-[#090088] font-medium'>{item.price}</p>
										<button
											aria-label='Read more'
											className='p-2 rounded-full bg-[#f0f0f0] hover:bg-[#090088] hover:text-white transition-colors duration-300'
										>
											<Icon
												type='left-arrow'
												color='currentColor'
												className='w-5 h-5'
											/>
										</button>
									</div>
								</div>
							</div>
						))}
					</div>

					<Button
						title='See How We Solve Problems'
						className='lg:!w-[25%] mt-12 hover:opacity-90 !bg-[#2b2624] transition-all duration-300 ease-in-out shadow-md rounded-2xl px-6 py-3 text-lg'
					/>
				</div>
			</Container>
		</div>
	)
}
