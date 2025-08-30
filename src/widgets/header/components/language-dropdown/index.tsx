'use client'
import { Icon } from '@/shared/ui/icon'
import React from 'react'

const languages = [
	{ lg: 'Tm', icon: 'tk' },
	{ lg: 'Ru', icon: 'ru' },
]

export const LanguageDropDown = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const [selected, setSelected] = React.useState(languages[0])

	const handleDropDown = () => setIsOpen(prev => !prev)

	const handleSelect = (item: { lg: string; icon: string }) => {
		setSelected(item)
		setIsOpen(false)
	}

	return (
		<div className='relative w-[90px]'>
			<div
				className='flex items-center justify-between gap-2 bg-[#f5f3f2] border border-[#d6cfcb] rounded-xl px-3 py-2 cursor-pointer shadow-sm hover:shadow-md transition'
				onClick={handleDropDown}
			>
				<p className='text-[16px] font-medium'>{selected.lg}</p>
				<Icon type={selected.icon} className='w-5 h-5' />
			</div>

			{isOpen && (
				<div className='absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg animate-fadeIn z-10'>
					{languages.map(item => (
						<div
							key={item.lg}
							className={`flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-lg transition ${
								selected.lg === item.lg ? 'bg-gray-100 font-semibold' : ''
							}`}
							onClick={() => handleSelect(item)}
						>
							<p className='text-[16px]'>{item.lg}</p>
							<Icon type={item.icon} className='w-5 h-5' />
						</div>
					))}
				</div>
			)}
		</div>
	)
}
