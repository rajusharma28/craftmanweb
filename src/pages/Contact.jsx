import { useState } from 'react'
import FAQ from '../components/FAQ'

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', contactForm)
    setContactForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <main className="contact-page">
      <h1>Contact Us</h1>
      
      <div className="contact-container">
        <section className="contact-form-section">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactForm.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={contactForm.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </section>
        
        <section className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-item">
            <h3>Address</h3>
            <p>123 Craftsmen Lane<br />Woodville, WV 12345</p>
          </div>
          
          <div className="info-item">
            <h3>Phone</h3>
            <p>(555) 123-4567</p>
          </div>
          
          <div className="info-item">
            <h3>Email</h3>
            <p>info@furniturecraftsmen.com</p>
          </div>
          
          <div className="info-item">
            <h3>Hours</h3>
            <p>Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 4PM<br />Sunday: Closed</p>
          </div>
        </section>
      </div>
      
      <FAQ />
    </main>
  )
}
