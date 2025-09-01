'use client'
import { Container } from '@/shared/ui/container'
import Image from 'next/image'
import { useLanguage, useTranslation } from '../../i18n/client'

export const AboutUs = () => {
	const { language } = useLanguage()
	const { t } = useTranslation(language)
	return (
		<section id='about-us' className='w-full py-12  bg-gray-50'>
			<Container>
				<section className='flex flex-col md:flex-row   pt-10 items-center gap-10'>
					<div className='w-full md:w-1/2 flex justify-center'>
						<Image
							src={'/cementsv.png'}
							alt='about-us'
							width={500}
							height={400}
							className='rounded-2xl shadow-lg object-contain'
						/>
					</div>

					<div className='w-full md:w-1/2 space-y-6'>
						<h2 className='text-squirrel-950 text-3xl md:text-4xl font-bold border-b-4 border-squirrel-400 pb-2 inline-block'>
							{t('AboutUs.1')}
						</h2>

						<div>
							<h3 className='text-xl font-semibold text-squirrel-900 mb-2'>
								{t('AboutUs.2')}
							</h3>
							<p className='text-gray-700 leading-relaxed'>{t('AboutUs.3')}</p>
						</div>

						<div>
							<h3 className='text-xl font-semibold text-squirrel-900 mb-2'>
								{t('AboutUs.4')}
							</h3>
							<p className='text-gray-700 leading-relaxed'>{t('AboutUs.5')}</p>
						</div>

						<div>
							<h3 className='text-xl font-semibold text-squirrel-900 mb-2'>
								{t('AboutUs.6')}
							</h3>
							<p className='text-gray-700 leading-relaxed'>{t('AboutUs.7')}</p>
						</div>

						<div>
							<h3 className='text-xl font-semibold text-squirrel-900 mb-3'>
								{t('AboutUs.8')}
							</h3>
							<ul className='list-disc pl-6 space-y-1 text-gray-700'>
								<li>
									{' '}
									<span className='font-medium text-squirrel-950'>
										{t('AboutUs.9.list.1')}
									</span>{' '}
								</li>
								<li>
									<span className='font-medium text-squirrel-950'>
										{t('AboutUs.9.list.2')}
									</span>{' '}
								</li>

								<li>
									{' '}
									<span className='font-medium text-squirrel-950'>
										{t('AboutUs.9.list.3')}
									</span>{' '}
								</li>
								<li>
									{' '}
									<span className='font-medium text-squirrel-950'>
										{t('AboutUs.9.list.4')}
									</span>{' '}
								</li>
								<li>
									{' '}
									<span className='font-medium text-squirrel-950'>
										{t('AboutUs.9.list.5')}
									</span>{' '}
								</li>
							</ul>
						</div>
					</div>
				</section>
			</Container>
		</section>
	)
}
