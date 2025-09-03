'use client'
import { Container } from '@/shared/ui/container'
import Image from 'next/image'
import { useLanguage, useTranslation } from '../../i18n/client'

export const Cards = () => {
	const { language } = useLanguage()
	const { t } = useTranslation(language)
	return (
		<div className='w-screen bg-gradient-to-b from-white to-gray-50 py-20'>
			<Container>
				<div className='flex flex-col items-center text-center gap-4'>
					<h1 className='text-squirrel-900 text-[36px] font-bold tracking-tight'>
						{t('Partners.1')}
					</h1>
					<p className='text-[#6a6a6a] text-[18px] max-w-2xl'>
						{t('Partners.2')}
					</p>

					<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14'>
						<div className='group w-full h-[440px] flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200'>
							<div className='w-full h-[50%] relative overflow-hidden'>
								<Image
									src='/bag1.webp'
									alt=''
									width={500}
									height={500}
									className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
								/>
								<span className='bg-[#CAE9BE] text-[12px] font-medium rounded-full absolute top-4 left-4 px-4 py-1 text-[#306844] border border-[#306844] shadow-sm'>
									{t('Cards.1')}
								</span>
							</div>
							<div className='w-full h-[50%] flex flex-col gap-4 p-6 text-left'>
								<h4 className='text-squirrel-950 text-[22px] font-semibold leading-snug'>
									{t('Cards.2')}
								</h4>
								<p className='text-gray-600 flex-1 text-[15px] leading-relaxed'>
									{t('Cards.3')}
								</p>
								<div className='flex w-full items-center justify-between mt-auto'>
									<p className='text-[#090088] font-medium'> {t('Cards.4')}</p>
								</div>
							</div>
						</div>

						<div className='group w-full h-[440px] flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200'>
							<div className='w-full h-[50%] relative overflow-hidden'>
								<Image
									src='/Technology.jpg'
									alt=''
									width={500}
									height={500}
									className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
								/>
								<span className='bg-[#CAE9BE] text-[12px] font-medium rounded-full absolute top-4 left-4 px-4 py-1 text-[#306844] border border-[#306844] shadow-sm'>
									{t('Cards.5')}
								</span>
							</div>
							<div className='w-full h-[50%] flex flex-col gap-4 p-6 text-left'>
								<h4 className='text-squirrel-950 text-[22px] font-semibold leading-snug'>
									{t('Cards.6')}
								</h4>
								<p className='text-gray-600 flex-1 text-[15px] leading-relaxed'>
									{t('Cards.7')}
								</p>
								<div className='flex w-full items-center justify-between mt-auto'>
									<p className='text-[#090088] font-medium'> {t('Cards.8')}</p>
								</div>
							</div>
						</div>
						<div className='group w-full h-[440px] flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200'>
							<div className='w-full h-[50%] relative overflow-hidden'>
								<Image
									src='/karayolu-tasimaciligi (1).jpg'
									alt=''
									width={500}
									height={500}
									className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
								/>
								<span className='bg-[#CAE9BE] text-[12px] font-medium rounded-full absolute top-4 left-4 px-4 py-1 text-[#306844] border border-[#306844] shadow-sm'>
									{t('Cards.9')}
								</span>
							</div>
							<div className='w-full h-[50%] flex flex-col gap-4 p-6 text-left'>
								<h4 className='text-squirrel-950 text-[22px] font-semibold leading-snug'>
									{t('Cards.10')}
								</h4>
								<p className='text-gray-600 flex-1 text-[15px] leading-relaxed'>
									{t('Cards.11')}
								</p>
								<div className='flex w-full items-center justify-between mt-auto'>
									<p className='text-[#090088] font-medium'> {t('Cards.12')}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
