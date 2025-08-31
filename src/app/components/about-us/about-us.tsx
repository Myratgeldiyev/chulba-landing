import { Container } from '@/shared/ui/container'
import Image from 'next/image'

export const AboutUs = () => {
	return (
		<main className='w-full py-12 bg-gray-50'>
			<Container>
				<section className='flex flex-col md:flex-row items-center gap-10'>
					{/* Left Side - Image */}
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
							О компании
						</h2>

						<div>
							<h3 className='text-xl font-semibold text-squirrel-900 mb-2'>
								Кто мы
							</h3>
							<p className='text-gray-700 leading-relaxed'>
								Мы — современный производитель полипропиленовых клапанных мешков
								для цемента и строительных материалов, а также мешков для
								пищевых и сельскохозяйственных продуктов (мука, зерно, сахар и
								др.). С 2017 года мы успешно работаем на рынке, обеспечивая
								стабильные поставки для компаний региона и за его пределами.
								Сегодня наша команда из более чем{' '}
								<span className='font-semibold text-squirrel-950'>
									200 специалистов
								</span>{' '}
								выпускает до
								<span className='font-semibold text-squirrel-950'>
									{' '}
									20,000 мешков в день
								</span>
								.
							</p>
						</div>

						<div>
							<h3 className='text-xl font-semibold text-squirrel-900 mb-2'>
								Международное присутствие
							</h3>
							<p className='text-gray-700 leading-relaxed'>
								Наша продукция экспортируется в Россию и другие страны. Мы уже
								активно работаем на внешнем рынке и продолжаем укреплять свои
								позиции в международной торговле.
							</p>
						</div>

						<div>
							<h3 className='text-xl font-semibold text-squirrel-900 mb-2'>
								Наша миссия
							</h3>
							<p className='text-gray-700 leading-relaxed'>
								Мы создаём упаковочные решения, которые помогают клиентам быть
								более эффективными и конкурентными. Наша цель — предоставлять
								качественные и надёжные решения для партнёров в строительной,
								пищевой и сельскохозяйственной отраслях.
							</p>
						</div>

						<div>
							<h3 className='text-xl font-semibold text-squirrel-900 mb-3'>
								Почему выбирают нас
							</h3>
							<ul className='list-disc pl-6 space-y-1 text-gray-700'>
								<li>
									<span className='font-medium text-squirrel-950'>
										Опыт и надёжность
									</span>{' '}
									— работа на рынке с 2017 года.
								</li>
								<li>
									<span className='font-medium text-squirrel-950'>
										Современное производство
									</span>{' '}
									и высокая производительность.
								</li>
								<li>
									<span className='font-medium text-squirrel-950'>
										Универсальность
									</span>{' '}
									— мешки для цемента, муки и других сыпучих продуктов.
								</li>
								<li>
									<span className='font-medium text-squirrel-950'>
										Международный опыт
									</span>{' '}
									— экспорт и долгосрочные партнёрские отношения.
								</li>
								<li>
									<span className='font-medium text-squirrel-950'>
										Конкурентоспособность
									</span>{' '}
									— качество и условия для устойчивого сотрудничества.
								</li>
							</ul>
						</div>
					</div>
				</section>
			</Container>
		</main>
	)
}
