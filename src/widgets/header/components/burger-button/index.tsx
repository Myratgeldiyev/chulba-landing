'use client'
import { Icon } from '@/shared/ui/icon'

interface BurgerButtonProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

export const BurgerButton = ({ isOpen, setIsOpen }: BurgerButtonProps) => {
	const toggleSidebar = () => {
		setIsOpen(!isOpen)
	}

	return (
		<button
			className='bg-squirrel-200 border border-squirrel-300 flex items-center px-2 py-1 rounded-lg lg:hidden'
			onClick={toggleSidebar}
		>
			<Icon type='burger' className='w-6 h-6 self-center' />
		</button>
	)
}
