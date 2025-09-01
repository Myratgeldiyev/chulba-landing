'use client'
import Link from 'next/link'

export const Navigators = ({ isMobile }: { isMobile?: boolean }) => {
	const routes = ['#main', '#about-us', '/partners', '/contact-us']

	const scrollTo = (id: string) => {
		if (id.startsWith('#')) {
			const element = document.querySelector(id)
			element?.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const formatText = (text: string) => {
		const cleanText = text.replace('#', '').replace('/', '')
		return cleanText
			.split('-')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ')
	}

	return (
		<div
			className={`flex ${
				isMobile ? 'flex-col gap-4' : 'flex-col lg:flex-row gap-4 lg:gap-8'
			}`}
		>
			{routes.map((text, index) =>
				text.startsWith('#') ? (
					<button
						key={index}
						onClick={() => scrollTo(text)}
						className={`${
							isMobile
								? 'w-full px-6 py-4 text-lg rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-left'
								: 'relative text-[17px] font-medium transition-colors duration-200 text-gray-600 hover:text-squirrel-900'
						}`}
					>
						{formatText(text)}
						{!isMobile && (
							<span
								className={`absolute left-0 -bottom-1 h-[2px] bg-squirrel-900 transition-all duration-300`}
							/>
						)}
					</button>
				) : (
					<Link
						key={index}
						href={`/en${text}`}
						className={`${
							isMobile
								? 'w-full px-6 py-4 text-lg rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-left'
								: 'relative text-[17px] font-medium transition-colors duration-200 text-gray-600 hover:text-squirrel-900'
						}`}
					>
						{formatText(text)}
						{!isMobile && (
							<span
								className={`absolute left-0 -bottom-1 h-[2px] bg-squirrel-900 transition-all duration-300`}
							/>
						)}
					</Link>
				)
			)}
		</div>
	)
}
