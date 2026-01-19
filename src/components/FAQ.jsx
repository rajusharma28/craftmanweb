import { useState } from 'react'
import { faqData } from '../data/faqData'

export default function FAQ() {
  const [expanded, setExpanded] = useState(null)

  const toggleFAQ = (id) => {
    setExpanded(expanded === id ? null : id)
  }

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item) => (
          <div key={item.id} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(item.id)}
            >
              {item.question}
              <span>{expanded === item.id ? '−' : '+'}</span>
            </button>
            {expanded === item.id && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
