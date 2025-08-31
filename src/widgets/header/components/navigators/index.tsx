'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navigators = ({ isMobile }: { isMobile?: boolean }) => {
	const pathname = usePathname()
	const routes = ['Home', 'About us', 'Partners', 'Products']

	return (
		<div
			className={`flex ${
				isMobile ? 'flex-col gap-4' : 'flex-col lg:flex-row gap-4 lg:gap-8'
			}`}
		>
			{routes.map((text, index) => {
				const path =
					text === 'Home' ? '/' : text.toLowerCase().replace(/\s+/g, '-')
				const isActive = pathname === path

				return (
					<Link
						key={index}
						href={path}
						className={`${
							isMobile
								? 'w-full px-6 py-4 text-lg rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200'
								: 'relative text-[17px] font-medium transition-colors duration-200 text-gray-600 hover:text-squirrel-900'
						} ${
							isActive
								? isMobile
									? 'bg-squirrel-200 font-semibold'
									: 'text-squirrel-900'
								: ''
						}`}
					>
						{text}
						{!isMobile && (
							<span
								className={`absolute left-0 -bottom-1 h-[2px] bg-squirrel-900 transition-all duration-300 
								${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
							/>
						)}
					</Link>
				)
			})}
		</div>
	)
}
