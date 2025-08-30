import { ReactNode } from 'react'

interface t {
	children: ReactNode
}
export const Container = ({ children }: t) => {
	return <div className='mx-auto container px-3 xl:px-[122px]'>{children}</div>
}
