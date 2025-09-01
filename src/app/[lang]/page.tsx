import { AboutUs } from './components/about-us/about-us'
import { Cards } from './components/cards'
import { Main } from './components/main'
import { Partners } from './components/partners'

export default function Home() {
	return (
		<main className=''>
			<Main />
			<AboutUs />
			<Cards />
			<Partners />
		</main>
	)
}
