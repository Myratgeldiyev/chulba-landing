'use client'
import { useLanguage, useTranslation } from '@/app/[lang]/i18n/client'
import { Container } from '@/shared/ui/container'
import Image from 'next/image'

export const Clothes = () => {
	const { language } = useLanguage()
	const { t } = useTranslation(language)
	return (
		<div className='w-screen min-h-screen *: relative pt-[100px] bg-center'>
			<div className='absolute inset-0 w-full  h-[130vh] bg-[url("/wear-bg.jpg")]  bg-center'></div>
			<div className='absolute inset-0  h-[130vh]  bg-black/40'></div>

			<Container>
				<div className='relative w-full bg-white min-h-[800px] rounded-3xl flex  z-10 p-10 md:p-16 shadow-xl'>
					<div className='flex flex-col w-[50%] h-full'>
						<h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
							{t('Clothes.1')}
						</h1>
						<p className='text-gray-600 text-lg leading-relaxed mb-8'>
							{t('Clothes.2')}
						</p>
						<div className='grid md:grid-cols-2 gap-12'>
							<div>
								<h2 className='text-xl font-semibold text-gray-800 mb-4'>
									{t('Clothes.3')}
								</h2>
								<ul className='list-disc pl-6 text-gray-600 space-y-2'>
									<li> {t('Clothes.4')}</li>
									<li>{t('Clothes.5')}</li>
									<li>{t('Clothes.6')}</li>
								</ul>

								<h2 className='text-xl font-semibold  text-gray-800 mt-8 mb-4'>
									{t('Clothes.7')}
								</h2>
								<ul className='list-disc pl-6 text-gray-600 space-y-2'>
									<li>{t('Clothes.8')}</li>
									<li>{t('Clothes.9')}</li>
									<li>{t('Clothes.10')}</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='w-[50%] h-full flex-col flex items-center   justify-center'>
						<Image
							src='/Weixin Image_20250903222111_30.jpg'
							alt='clothes'
							className='w-full h-full'
							width={400}
							height={400}
						/>
						<div className='bg-gray-50 rounded-2xl mt-10 p-6 shadow-inner'>
							<h2 className='text-xl font-semibold text-gray-800 mb-4'>
								{t('Clothes.11')}
							</h2>
							<p className='text-gray-600 leading-relaxed'>{t('Clothes.12')}</p>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
