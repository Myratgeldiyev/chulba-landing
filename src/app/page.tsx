import { AboutUs } from './components/about-us/about-us'
import { Banner } from './components/banner/banner'
import { Cards } from './components/cards'
import { ContactUs } from './components/contact-us'
import { Main } from './components/main'
import { Partners } from './components/partners'

export default function Home() {
	return (
		<main>
			<Banner />
			<Main />
			<AboutUs />
			<Cards />
			<Partners />
			<ContactUs />
		</main>
	)
}
