import { useEffect } from 'react'
import '../styles/clean-pages.css'

const leaders = [
  {
    name: 'Dr. M Puttegowda',
    title: 'Founder Chairman',
    image: '/images/PERSON871.jpg',
    bio: 'Our esteemed Chairman, a visionary advocate and former judge, took voluntary retirement to dedicate himself to justice, education, and social welfare. With an unwavering commitment to uplifting rural communities, he established Om Shreenikethana Trust to build educational institutions in and around Srirangapatna, ensuring that quality education reaches children who previously had limited access. A dramatist and student leader in his youth, he remains deeply engaged in politics and philanthropy, using his influence to drive meaningful change.'
  },
  {
    name: 'Mr. Manjuram Puttegowda',
    title: 'Managing Director',
    image: '/images/PERSON731.jpg',
    bio: 'Our Managing Director brings academic achievement and personal experience to his leadership of Parivarthana. A proud alumnus of Coorg Public School, he earned a Commerce degree from Christ University, Bangalore, and a Law degree from BES Law College, Bangalore. He furthered his academic journey with an MBA from Bangalore Institute of Management and is currently pursuing a PhD at Jain University. With just four papers remaining to complete his Chartered Accountancy, he exemplifies determination and lifelong learning.'
  },
  {
    name: 'Mr. B V Kumar',
    title: 'Managing Trustee',
    image: '/images/JerlinKumarA2.JPG',
    bio: 'Our Managing Trustee, B. V. Kumar, a retired Joint Secretary of KIADB, has been a steadfast pillar in the growth and development of our educational institutions. A close associate of our Chairman since childhood, he shares the same passion for education and social upliftment. His efforts in school operations, recruitment, and infrastructure have helped shape a nurturing learning environment and make quality education accessible to children across India.'
  },
  {
    name: 'Dr. Dhananjaya K B',
    title: 'Treasurer',
    image: '/images/PERSON951.jpg',
    bio: 'Dr. Dhananjaya K. B., our Treasurer, brings a Ph.D. in Economics and a distinguished career in education, including service as Principal of Sahyadri College, Shimoga. His commitment to youth development was further demonstrated as Joint Secretary of Youth Services, Government of Karnataka. A theatre enthusiast and active Rotarian, he combines academic, artistic, and administrative expertise with a continuing dedication to society.'
  }
]

export default function LeadershipPage() {
  useEffect(() => {
    document.title = 'Leadership | Parivarthana Residential School and PU College'
  }, [])

  return (
    <main className="clean-page leadership-clean">
      <header className="clean-hero" style={{ backgroundImage: 'url("/images/img3.jpg")' }}>
        <div className="clean-container">
          <p className="eyebrow">Our leadership</p>
          <h1>People who shape our purpose</h1>
          <p className="hero-summary">Meet the leaders guiding Parivarthana’s commitment to education, opportunity, and social good.</p>
        </div>
      </header>
      <section className="clean-section clean-section-tint">
        <div className="clean-container">
          <div className="section-heading">
            <p className="eyebrow">Parivarthana School and PU College</p>
            <h2>Meet our visionary leaders</h2>
            <p>Each leader brings a distinct experience and a shared commitment to building a stronger educational community.</p>
          </div>
          <div className="leadership-grid">
            {leaders.map((leader) => (
              <article className="leadership-card" key={leader.name}>
                <img src={leader.image} alt={leader.name} />
                <div className="leadership-card-body">
                  <p className="card-kicker">{leader.title}</p>
                  <h3>{leader.name}</h3>
                  <p>{leader.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
