import { useEffect } from 'react'
import '../styles/clean-pages.css'

const beliefs = [
  ['Students come first.', '/images/3135773-c2d227e3.png'],
  ['Continuous learning is essential to prepare for college and career opportunities.', '/images/2930520-e302c807.png'],
  ["Each student's success is the shared responsibility of students, families, schools, and communities.", '/images/999735-314c6aef.png'],
  ['Learning is influenced by environment.', '/images/40.png']
]

const objectives = [
  ['Personalized learning', 'Literacy – Students will enhance their literacy skills annually to meet or surpass grade-level expectations.\n\nAcademic Progress – Students will achieve personalized academic objectives to attain at least one year’s growth in all subjects.\n\nCollege, Career & Military Readiness – Students will graduate prepared for life, equipped for success in college, career, or military service.'],
  ['Dedicated staff', 'Recruitment – The institution will prioritize the recruitment of top-tier professionals committed to educational excellence.\n\nAppreciation – The institution will foster a supportive culture that nurtures, develops, and empowers staff to positively impact the learning environment.\n\nRetention – The institution will retain effective staff through meaningful relationships, ongoing support, and opportunities for professional advancement.'],
  ['A secure community', 'Engagement – The institution will encourage collaborative dialogue and partnership to ensure active community participation.\n\nCulture – The institution will cultivate a sense of belonging by ensuring all voices within the school community are recognized and valued.\n\nSafety – The institution will enhance, maintain, and communicate support systems to promote the physical and emotional well-being of students, staff, and the community.']
]

export default function AboutParivarthanaPage() {
  useEffect(() => {
    document.title = 'About Parivarthana Residential School and PU College'
  }, [])

  return (
    <main className="clean-page about-parivarthana-clean">
      <header className="clean-hero" style={{ backgroundImage: 'url("/images/img3.jpg")' }}>
        <div className="clean-container">
          <p className="eyebrow">Our institution</p>
          <h1>About Parivarthana</h1>
          <p className="hero-summary">A residential learning environment designed to help every student thrive.</p>
        </div>
      </header>

      <section className="clean-section intro-editorial">
        <div className="clean-container editorial-feature">
          <img src="/images/_MG_11271.jpg" alt="Parivarthana campus" />
          <div>
            <p className="eyebrow">A place where learning sparks transformation</p>
            <h2>Rooted in nature, built around students</h2>
            <p>Parivarthana School and PU College is the visionary creation of our honorable chairman, Dr. M. Puttegowda, an eminent lawyer and educationist with a passion for shaping young minds. Established in 2015, the institution was founded to provide unique and transformative educational experiences within a residential system. Nestled amidst serene natural surroundings on the banks of the river Kaveri, Parivarthana is a place where learning truly sparks transformation.</p>
            <p>The 5-acre campus, once a thriving resort named Fort View Resorts, underwent a remarkable transformation. Although the resort was a profitable venture, Dr. Puttegowda was inspired to convert it into a school, recognizing the location’s tranquil and spiritual ambiance as ideal for nurturing children’s education and growth. The resort was skillfully renovated to house Parivarthana School and PU College, creating a perfect blend of modern infrastructure and a connection with nature.</p>
            <p>Today, Parivarthana welcomes students from across Karnataka and beyond, including international students, fostering a rich, diverse community. With its lush green campus and commitment to academic excellence, Parivarthana provides an inspiring environment where students can thrive academically, socially, and personally.</p>
          </div>
        </div>
      </section>

      <section className="clean-section clean-section-tint">
        <div className="clean-container">
          <div className="section-heading"><p className="eyebrow">What guides us</p><h2>Our core belief</h2></div>
          <div className="belief-grid">{beliefs.map(([text, image]) => <article className="belief-card" key={text}><img src={image} alt="" aria-hidden="true" /><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="clean-section">
        <div className="clean-container mission-grid">
          <article className="mission-card" style={{ backgroundImage: 'url("/images/img3.jpg")' }}><div><p className="eyebrow">Our mission</p><h2>Mission</h2><p>Our mission is to partner with students, staff, families, and the community to create an engaging learning environment that nurtures growth, promotes academic excellence, and equips every student with the skills and confidence to succeed in their future endeavors.</p></div></article>
          <article className="mission-card" style={{ backgroundImage: 'url("/images/img3.jpg")' }}><div><p className="eyebrow">Our vision</p><h2>Vision</h2><p>Our vision is to be a leading educational institution that inspires a lifelong love of learning, empowers every student to reach their full potential, and fosters a culture of inclusivity, resilience, and achievement. We aim to graduate students who are well-prepared for college, careers, and meaningful contributions to society.</p></div></article>
        </div>
      </section>

      <section className="clean-section clean-section-tint">
        <div className="clean-container"><div className="section-heading"><p className="eyebrow">How we move forward</p><h2>Strategic objectives</h2></div><div className="objective-grid">{objectives.map(([title, text], index) => <article className="objective-card" key={title}><span className="objective-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>
    </main>
  )
}
