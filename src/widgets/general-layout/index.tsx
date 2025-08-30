import { Container } from '@/shared/ui/container'
import { ReactNode } from 'react'
import { Footer } from '../footer'
import { Header } from '../header'

interface t {
	children: ReactNode
}
export const GeneralLayout = ({ children }: t) => {
	return (
		<div>
			<Container>
				<Header />
			</Container>
			{children}
			<Footer />
		</div>
	)
}
