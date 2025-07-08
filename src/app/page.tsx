import { CreditCard } from "./components/CreditCard"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import Stats from "./components/Stats"

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Stats />
      <CreditCard />
      <FAQ />
      <Footer />
    </div>
  )
}
