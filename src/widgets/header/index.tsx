'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { BurgerButton } from './components/burger-button'
import { LanguageDropDown } from './components/language-dropdown'
import { Navigators } from './components/navigators'
import { Sidebar } from './components/sidebar'

export const Header = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const closeSidebar = () => setIsSidebarOpen(false)

	return (
		<header className='fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-white/70 shadow-sm'>
			<div className='max-w-7xl mx-auto px-4 lg:px-8 py-3 flex justify-between items-center'>
				<Link href={'/'} className='flex items-center gap-2 group'>
					<Image
						src={'/logo.svg'}
						alt='logo'
						width={50}
						height={50}
						className='xl:w-[100px] w-[70px] transition-transform duration-200 group-hover:scale-105'
					/>
				</Link>

				<nav className='hidden lg:flex gap-6 items-center'>
					<Navigators />
					<LanguageDropDown />
				</nav>

				<BurgerButton isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

				<Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
			</div>
		</header>
	)
}
