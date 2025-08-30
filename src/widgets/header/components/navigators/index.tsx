import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navigators = () => {
	const pathname = usePathname()

	const routes = ['Home', 'About us', 'Partners', 'Products']

	return (
		<div className='flex flex-col lg:flex-row gap-4 lg:gap-8'>
			{routes.map((text, index) => {
				const path =
					text === 'Home' ? '/' : text.toLowerCase().replace(/\s+/g, '-')
				const isActive = pathname === path

				return (
					<Link
						key={index}
						href={path}
						className={`relative text-[17px] font-medium transition-colors duration-200 
							${isActive ? 'text-squirrel-900' : 'text-gray-600 hover:text-squirrel-900'}`}
					>
						{text}
						<span
							className={`absolute left-0 -bottom-1 h-[2px] bg-squirrel-900 transition-all duration-300 
							${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
						/>
					</Link>
				)
			})}
		</div>
	)
}
