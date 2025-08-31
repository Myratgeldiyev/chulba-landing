'use client'
import { Icon } from '@/shared/ui/icon'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const images = [
	{
		img: '/ban1.jpeg',
		href: '',
		heading: 'Strong Structures, Strong Future',
		param:
			'Our cement products are engineered for strength, durability, and reliability. Every project built with our materials stands the test of time, ensuring a safe and lasting future',
	},
	{
		img: '/ban2.jpeg',
		href: '',
		heading: 'The Foundation of Quality',
		param:
			'We set the standard in the cement industry, delivering products that combine innovation, strength, and lasting performance. Trust us to be the cornerstone of every successful project',
	},
	{
		img: '/ban3.webp',
		href: '',
		heading: 'Reliability in Every Brick',
		param:
			'Every bag of our cement carries the promise of durability and consistency. From foundations to rooftops, our materials ensure your constructions stand strong for generations',
	},
	{
		img: '/ban3.webp',
		href: '',
		heading: 'Making Durability a Difference',
		param:
			'Our cement is designed to outperform and outlast. By choosing us, you invest in structures that resist time, weather, and wear, making every project truly remarkable',
	},
	{
		img: '/ban3.webp',
		href: '',
		heading: 'Building the Future',
		param:
			'We don’t just supply cement; we help build dreams. With our top-quality materials, you can create safe, sustainable, and forward-looking structures that shape tomorrow.',
	},
]

export const Banner = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [fadeOverlay, setFadeOverlay] = useState(false)

	useEffect(() => {
		const interval = setInterval(() => {
			handleNextWithFade()
		}, 15000)
		return () => clearInterval(interval)
	}, [])

	const handleNextWithFade = () => {
		setFadeOverlay(true)
		setTimeout(() => {
			nextSlide()
			setFadeOverlay(false)
		}, 500)
	}

	const handlePrevWithFade = () => {
		setFadeOverlay(true)
		setTimeout(() => {
			prevSlide()
			setFadeOverlay(false)
		}, 500)
	}

	const nextSlide = () => {
		setCurrentIndex(prev => (prev + 1) % images.length)
	}

	const prevSlide = () => {
		setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
	}

	return (
		<div className='relative w-full h-screen overflow-hidden'>
			{images.map((img, index) => (
				<div
					key={index}
					className={`absolute inset-0 transition-opacity ease-in-out duration-200 ${
						index === currentIndex ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<Image
						fill
						src={img.img}
						alt={`Slide ${index}`}
						className='object-center'
					/>

					<div className='absolute top-0 left-0 w-full h-full bg-black/40 pointer-events-none' />

					<div className='flex flex-col justify-center items-center absolute top-0 left-0 right-0 bottom-0 h-[50vh] sm:h-[60vh] sm:self-center md:h-[400px] w-full text-white px-4 sm:px-6 md:px-8 z-10 overflow-hidden'>
						<h1
							key={img.heading}
							className={`text-[24px] sm:text-[28px] text-center mt-5 md:text-[32px] font-bold text-white transform transition-all duration-700 ${
								index === currentIndex
									? 'translate-y-0 opacity-100'
									: '-translate-y-20 opacity-0'
							}`}
						>
							{img.heading}
						</h1>

						<p
							key={img.param}
							className={`w-[90%] sm:w-[70%] md:w-[40%] text-center text-[14px] sm:text-[16px] md:text-[18px] mt-4 sm:mt-6 transform transition-all duration-700 delay-200 ${
								index === currentIndex
									? 'translate-y-0 opacity-100'
									: 'translate-y-0 opacity-0'
							}`}
						>
							{img.param}
						</p>

						<Link
							key={img.href + index}
							href={''}
							className={`rounded-full bg-[#58acfa] px-4 sm:px-6 md:px-6 w-[140px] sm:w-[180px] md:w-[200px] flex justify-center items-center py-2 mt-4 sm:mt-6 transform transition-all duration-700 delay-400 hover:opacity-90 ${
								index === currentIndex
									? 'translate-y-0 opacity-100'
									: 'translate-y-20 opacity-0'
							}`}
						>
							About
						</Link>
					</div>
				</div>
			))}

			<div
				className={`absolute inset-0 bg-black transition-opacity duration-500 pointer-events-none ${
					fadeOverlay ? 'opacity-80' : 'opacity-0'
				}`}
			/>

			<button
				onClick={handlePrevWithFade}
				className='absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 bg-black/40 p-2 sm:p-3 rounded-full hover:bg-black/60 transition z-10'
			>
				<Icon
					type='left-arrow'
					color='white'
					className='text-white w-5 sm:w-6 h-5 sm:h-6'
				/>
			</button>

			<button
				onClick={handleNextWithFade}
				className='absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 bg-black/40 p-2 sm:p-3 rounded-full hover:bg-black/60 transition z-10'
			>
				<Icon
					type='right-arrow'
					color='white'
					className='text-white w-5 sm:w-6 h-5 sm:h-6'
				/>
			</button>

			<div className='absolute bottom-4 sm:bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2'>
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`h-1 rounded-full transition-all ${
							index === currentIndex ? 'w-8 bg-white' : 'w-4 bg-gray-400'
						}`}
					/>
				))}
			</div>
		</div>
	)
}
