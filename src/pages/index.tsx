import { About } from '../components/About'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Projects } from '../components/Projects'
import { Services } from '../components/Services'

export default function Home() {
  return (
    <>
      <Header />
      <Projects />
      <Services />
      <About />
      <Footer />
    </>
  )
}
