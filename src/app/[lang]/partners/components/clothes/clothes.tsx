import { Container } from '@/shared/ui/container'

export const Clothes = () => {
	return (
		<div className='w-screen min-h-screen relative pt-[120px] bg-center'>
			<div className='absolute inset-0 bg-[url("/wear-bg.jpg")]  bg-center'></div>
			<div className='absolute inset-0 bg-black/40'></div>

			<Container>
				<div className='relative w-full bg-white min-h-[800px] rounded-3xl flex flex-col z-10 p-10 md:p-16 shadow-xl'>
					<h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
						Производство спецодежды
					</h1>

					<p className='text-gray-600 text-lg leading-relaxed mb-8'>
						Помимо производства полипропиленовых мешков, наша компания также
						занимается пошивом спецодежды для рабочих и производственных
						предприятий.
					</p>

					<div className='grid md:grid-cols-2 gap-12'>
						<div>
							<h2 className='text-xl font-semibold text-gray-800 mb-4'>
								Мы предлагаем:
							</h2>
							<ul className='list-disc pl-6 text-gray-600 space-y-2'>
								<li>Рабочие костюмы и формы</li>
								<li>Комбинезоны и куртки</li>
								<li>Одежду для строительных и промышленных объектов</li>
							</ul>

							<h2 className='text-xl font-semibold text-gray-800 mt-8 mb-4'>
								Преимущества:
							</h2>
							<ul className='list-disc pl-6 text-gray-600 space-y-2'>
								<li>Практичные и износостойкие материалы</li>
								<li>Комфорт и защита для сотрудников</li>
								<li>Возможность индивидуального дизайна и брендирования</li>
							</ul>
						</div>

						<div className='bg-gray-50 rounded-2xl p-6 shadow-inner'>
							<h2 className='text-xl font-semibold text-gray-800 mb-4'>
								Международный опыт
							</h2>
							<p className='text-gray-600 leading-relaxed'>
								Наша спецодежда ранее экспортировалась в Россию и получила
								высокую оценку за качество и удобство. Мы продолжаем расширять
								направления поставок, чтобы обеспечить предприятия надёжной
								рабочей одеждой на международном уровне.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
