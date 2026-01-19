import { servicesData } from '../data/servicesData'

export default function Services() {
  return (
    <main className="services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <button className="learn-more">Learn More</button>
          </div>
        ))}
      </div>
    </main>
  )
}
