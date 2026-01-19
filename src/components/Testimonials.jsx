import { testimonialsData } from '../data/testimonialsData'

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p>{testimonial.text}</p>
            <h4>{testimonial.author}</h4>
            <span className="rating">{'⭐'.repeat(testimonial.rating)}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
