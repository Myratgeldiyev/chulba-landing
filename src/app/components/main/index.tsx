import { Container } from '@/shared/ui/container'
import Image from 'next/image'
import { LeftSide } from './components/left-side'

export const Main = () => {
	return (
		<main className='w-full min-h-screen bg-gradient-to-b from-gray-50 to-[#eeeeee] flex items-center py-16'>
			<Container>
				<div className='w-full flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20'>
					<LeftSide />
					<div className='flex w-full lg:w-[50%] justify-center lg:justify-end'>
						<Image
							src='/main-logo1.png'
							alt='flag'
							width={600}
							height={500}
							className='w-[300px] h-[180px] lg:w-[600px] lg:h-[500px] object-contain drop-shadow-lg animate-fadeIn'
						/>
					</div>
				</div>
			</Container>
		</main>
	)
}
