import { craftsmenData } from '../data/craftsmenData'

export default function Craftsmen() {
  return (
    <main className="craftsmen-page">
      <h1>Our Craftsmen</h1>
      <div className="craftsmen-grid">
        {craftsmenData.map((craftsman) => (
          <div key={craftsman.id} className="craftsman-card">
            <img src={craftsman.image} alt={craftsman.name} />
            <h2>{craftsman.name}</h2>
            <p className="specialty">{craftsman.specialty}</p>
            <p className="bio">{craftsman.bio}</p>
            <div className="expertise">
              <span>Experience: {craftsman.experience} years</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
