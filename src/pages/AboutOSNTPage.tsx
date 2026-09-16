import { useEffect } from 'react'
import '../styles/clean-pages.css'

const stories = [
  {
    image: '/images/img3.jpg',
    label: '1983 — The beginning',
    text: 'The Oom Shreenikethana Trust (OSNT) was founded on December 29, 1983, by Dr. M. Puttegowda, an esteemed visionary committed to providing accessible education. The trust was established in Srirangapatna, a town where access to quality education was a significant challenge due to limited infrastructure and transportation facilities. OSNT has since grown to become a cornerstone of educational development in the region, dedicated to transforming the lives of children and young adults through learning.'
  },
  {
    image: '/images/img3.jpg',
    label: 'Growing access to education',
    text: 'OSNT began its journey by setting up a school in Srirangapatna named after Dr. Puttegowda’s mentor, K.N. Ramaiah, and gradually expanded to nearby locations, including Baburayanakoppalu, Krishnarajasagar, and Kodiyala. The trust provides education from lower kindergarten to pre-university levels, and in 2015, it launched Parivartana School and College, which offers education from LKG to graduation.'
  },
  {
    image: '/images/img3.jpg',
    label: 'Expanding the mission',
    text: 'In 2022, OSNT further expanded its impact by establishing Parivarthana Business School in Mysore. This institution offers graduate and postgraduate programs, including MBA, MCA, BCom, BCA, and BBA, focusing on equipping students with essential business and technology skills.'
  },
  {
    image: '/images/img3.jpg',
    label: 'A steadfast commitment',
    text: 'Despite closing some schools in Mahadevapura and Doddapalya due to government initiatives, the trust remains steadfast in its mission to empower students and foster educational excellence across Srirangapatna Taluk and beyond.'
  },
  {
    image: '/images/img3.jpg',
    label: 'The next milestone',
    text: 'OSNT is set to achieve yet another milestone by launching its law school in the academic year 2025. This initiative is particularly significant, as both our Founder Chairman, Dr M Puttegowda and Managing Director, Manjuram Puttegowda hold law degrees and actively practice in the field.'
  }
]

export default function AboutOSNTPage() {
  useEffect(() => {
    document.title = 'About OSNT | Parivarthana Residential School and PU College'
  }, [])

  return (
    <main className="clean-page about-osnt-clean">
      <header className="clean-hero" style={{ backgroundImage: 'url("/images/img3.jpg")' }}>
        <div className="clean-container">
          <p className="eyebrow">Our story</p>
          <h1>About OSNT</h1>
          <p className="hero-summary">A long-standing commitment to accessible education and community development.</p>
        </div>
      </header>
      <section className="clean-section">
        <div className="clean-container editorial-stack">
          {stories.map((story, index) => (
            <article className={`editorial-story ${index % 2 === 1 ? 'editorial-story-reverse' : ''}`} key={story.label}>
              <img src={story.image} alt="Parivarthana campus" />
              <div>
                <p className="eyebrow">{story.label}</p>
                <p className="story-copy">{story.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
