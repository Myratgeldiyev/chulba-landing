'use client'
import { useLanguage, useTranslation } from '@/app/[lang]/i18n/client'
import Link from 'next/link'

export const Navigators = ({ isMobile }: { isMobile?: boolean }) => {
	const { language } = useLanguage()
	const { t } = useTranslation(language)

	const routes = [
		{ path: '#main', key: 'main' },
		{ path: '#about-us', key: 'about_us' },
		{ path: '/partners', key: 'partners' },
		{ path: '/contact-us', key: 'contact_us' },
	]

	const scrollTo = (id: string) => {
		if (id.startsWith('#')) {
			const element = document.querySelector(id)
			element?.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div
			className={`flex ${
				isMobile ? 'flex-col gap-4' : 'flex-col lg:flex-row gap-4 lg:gap-8'
			}`}
		>
			{routes.map((route, index) =>
				route.path.startsWith('#') ? (
					<button
						key={index}
						onClick={() => scrollTo(route.path)}
						className={`${
							isMobile
								? 'w-full px-6 py-4 text-lg rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-left'
								: 'relative text-[17px] font-medium transition-colors duration-200 text-gray-600 hover:text-squirrel-900'
						}`}
					>
						{t(route.key)}
						{!isMobile && (
							<span
								className={`absolute left-0 -bottom-1 h-[2px] bg-squirrel-900 transition-all duration-300`}
							/>
						)}
					</button>
				) : (
					<Link
						key={index}
						href={`/${language}${route.path}`}
						className={`${
							isMobile
								? 'w-full px-6 py-4 text-lg rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-left'
								: 'relative text-[17px] font-medium transition-colors duration-200 text-gray-600 hover:text-squirrel-900'
						}`}
					>
						{t(route.key)}
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
