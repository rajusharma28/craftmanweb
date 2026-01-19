import Testimonials from '../components/Testimonials'
import FloatingButtons from '../components/FloatingButtons'

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <h1>Welcome to Furniture Craftsmen</h1>
        <p>Handcrafted furniture for your beautiful home</p>
        <button className="cta-button">Explore Our Work</button>
      </section>
      
      <Testimonials />
      <FloatingButtons />
    </main>
  )
}
