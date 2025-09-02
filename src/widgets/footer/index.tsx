'use client'
import { useLanguage, useTranslation } from '@/app/[lang]/i18n/client'
import { Container } from '@/shared/ui/container'
import { Icon } from '@/shared/ui/icon'
import { Map } from '@/shared/ui/map'

export const Footer = () => {
	const { language } = useLanguage()
	const { t } = useTranslation(language)
	return (
		<footer className='w-full bg-[#544c48] mt-[80px] text-white pt-12'>
			<Container>
				<main className='grid grid-cols-1 justify-between w-full md:grid-cols-2 gap-10 pb-12'>
					<div className='flex gap-5 w-full'>
						<div className='flex flex-col gap-5 w-full'>
							<h1 className='text-[26px] font-bold'>{t('Home.1')}</h1>

							<div className='flex gap-2 items-center'>
								<Icon type='call' color='white' className='w-6 h-6' />
								<p className='text-[16px]'>+993 65 53 48 41</p>
							</div>
							<div className='flex gap-2 items-center'>
								<Icon type='call' color='white' className='w-6 h-6' />
								<p className='text-[16px]'>+993 65 80 22 02</p>
							</div>
							<div className='flex gap-2 items-center'>
								<Icon type='mail' color='white' className='w-6 h-6' />
								<p className='text-[16px]'>chulbaturkmen@gmail.com</p>
							</div>
							<div className='flex gap-2 items-center'>
								<div>
									<Icon type='location' color='white' className='w-6 h-6' />
								</div>
								<p className='text-[16px] w-[]'>
									{t('Footer.1')}, {t('Footer.2')}, {t('Footer.3')},
									{t('Footer.4')}
								</p>
							</div>
						</div>

						<div className='flex flex-col gap-5 w-full'>
							<h2 className='text-[22px] font-semibold'>Quick Links</h2>
							<nav className='grid grid-cols-1 gap-3 text-gray-200'>
								<a href='#about' className='hover:text-white transition'>
									{t('AboutUs.1')}
								</a>
								<a href='#products' className='hover:text-white transition'>
									{t('OurPartners.1')}
								</a>
								<a href='#services' className='hover:text-white transition'>
									{t('ContactUs.1')}
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
