'use client'
import { Container } from '@/shared/ui/container'
import Image from 'next/image'
import { useLanguage, useTranslation } from '../../i18n/client'

export const Partners = () => {
	const { language } = useLanguage()
	const { t } = useTranslation(language)

	return (
		<section className='w-full py-20 bg-gray-50'>
			<Container>
				<div className='flex flex-col items-center gap-6 text-center'>
					<h1 className='text-squirrel-900 text-[36px] font-bold tracking-tight'>
						{t('OurPartners.1')}
					</h1>
					<p className='text-gray-600 max-w-xl text-[18px]'>
						{t('OurPartners.2')}
					</p>

					<div className='grid grid-cols-1 sm:grid-cols-2  gap-8 mt-10 w-full'>
						<div className='bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden'>
							<Image
								src='/baherden.jpg'
								alt='baherden'
								width={400}
								height={250}
								className='w-full h-48 object-cover'
							/>
							<div className='p-4'>
								<h3 className='text-gray-900 font-semibold text-lg'>
									{t('OurPartners.3')}
								</h3>
							</div>
						</div>
						<div className='bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden'>
							<Image
								src='/lebap.jpg'
								alt='baherden'
								width={400}
								height={250}
								className='w-full h-48 object-cover'
							/>
							<div className='p-4'>
								<h3 className='text-gray-900 font-semibold text-lg'>
									{t('OurPartners.4')}
								</h3>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
