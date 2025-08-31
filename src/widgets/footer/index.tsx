'use client'
import { Container } from '@/shared/ui/container'
import { Icon } from '@/shared/ui/icon'
import { Map } from '@/shared/ui/map'

export const Footer = () => {
	return (
		<footer className='w-full bg-[#544c48] mt-[80px] text-white pt-12'>
			<Container>
				<main className='grid grid-cols-1 justify-between w-full md:grid-cols-2 gap-10 pb-12'>
					<div className='flex gap-5 w-full'>
						<div className='flex flex-col gap-5 w-full'>
							<h1 className='text-[26px] font-bold'>Chulba Hususy Karhanasy</h1>
							<p className='text-[16px] font-medium text-gray-300'>
								Protecting sulphuric acid plants worldwide with innovative
								corrosion-resistant equipment and engineering excellence since
								1987.
							</p>
							<div className='flex gap-2 items-center'>
								<Icon type='call' color='white' className='w-6 h-6' />
								<p className='text-[16px]'>+993 00 00 00</p>
							</div>
							<div className='flex gap-2 items-center'>
								<Icon type='mail' color='white' className='w-6 h-6' />
								<p className='text-[16px]'>chulba@gmail.com</p>
							</div>
							<div className='flex gap-2 items-center'>
								<Icon type='location' color='white' className='w-6 h-6' />
								<p className='text-[16px]'>Ashgabat, Turkmenistan</p>
							</div>
						</div>

						<div className='flex flex-col gap-5 w-full'>
							<h2 className='text-[22px] font-semibold'>Quick Links</h2>
							<nav className='grid grid-cols-1 gap-3 text-gray-200'>
								<a href='#about' className='hover:text-white transition'>
									About Us
								</a>
								<a href='#products' className='hover:text-white transition'>
									Products
								</a>
								<a href='#services' className='hover:text-white transition'>
									Services
								</a>
								<a href='#news' className='hover:text-white transition'>
									News
								</a>
								<a href='#contact' className='hover:text-white transition'>
									Contact
								</a>
							</nav>
						</div>
					</div>

					<Map />
				</main>

				{/* Bottom bar */}
				<div className='border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-200'>
					<p>© {new Date().getFullYear()} Chulba HK — All rights reserved.</p>
					<div className='flex items-center gap-4'>
						<a href='#' aria-label='LinkedIn' className='hover:text-white'>
							<Icon type='linkedin' color='white' className='w-5 h-5' />
						</a>
						<a href='#' aria-label='Facebook' className='hover:text-white'>
							<Icon type='facebook' color='white' className='w-5 h-5' />
						</a>
						<a href='#' aria-label='X' className='hover:text-white'>
							<Icon type='x' color='white' className='w-5 h-5' />
						</a>
					</div>
				</div>
			</Container>
		</footer>
	)
}
