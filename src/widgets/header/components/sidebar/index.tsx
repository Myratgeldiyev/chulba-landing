'use client'
import { Navigators } from '../navigators'

export const Sidebar = ({
	isOpen,
	closeSidebar,
}: {
	isOpen: boolean
	closeSidebar: () => void
}) => {
	return (
		<>
			{isOpen && (
				<div
					className='fixed inset-0 bg-black opacity-50 z-9'
					onClick={closeSidebar}
				/>
			)}

			<div
				className={`lg:hidden w-[70%] fixed left-0 top-0 z-10 bg-squirrel-300 h-screen transform ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} transition-transform duration-300 ease-in-out`}
			>
				<Navigators />
			</div>
		</>
	)
}
