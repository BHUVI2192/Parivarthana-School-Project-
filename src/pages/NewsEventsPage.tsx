import { useEffect } from 'react'
import '../styles/News_and_Events.css'

export default function NewsEventsPage() {
  useEffect(() => {
    document.title = "News & Events | Parivarthana Residential School and PU College"
  }, [])

  return (
    <main className="news-events-page">
      <section className="skrollable skrollable-between u-align-center u-clearfix u-container-align-center u-image u-parallax u-shading u-section-1" id="sec-b4ad" style={{ backgroundImage: 'url("/images/DSC_0129-scaled.jpg")' }}>
        <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-xl u-sheet-1">
          <h1 className="u-align-center u-custom-font u-heading-font u-text u-text-default u-text-1"> News &amp; Events</h1>
        </div>
      </section>

      <section className="u-align-center u-clearfix u-container-align-center u-custom-color-10 u-section-3" id="carousel_6189">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-blog u-expanded-width u-blog-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-blog-post u-repeater-item">
                <div className="u-container-layout u-similar-container u-container-layout-1">
                  <a className="u-post-header-link" href="https://parivarthanaschool.com/post/" target="_blank" rel="noreferrer">
                    <img src="/images/8ad73f3c.jpeg" alt="" className="u-blog-control u-image u-image-default u-image-1" />
                  </a>
                  <h2 className="u-blog-control u-text u-text-1">
                    <a className="u-post-header-link" href="https://parivarthanaschool.com/post/" target="_blank" rel="noreferrer">Annual Sports Day Celebration</a>
                  </h2>
                  <div className="u-blog-control u-post-content u-text u-text-2">Students participated with enthusiasm across various athletic events and team sports.</div>
                  <div className="u-blog-control u-metadata u-metadata-1">
                    <span className="u-meta-date u-meta-icon">Dec 08, 2024</span>
                  </div>
                </div>
              </div>

              <div className="u-blog-post u-repeater-item">
                <div className="u-container-layout u-similar-container u-container-layout-2">
                  <a className="u-post-header-link" href="https://parivarthanaschool.com/post/" target="_blank" rel="noreferrer">
                    <img src="/images/68f64b9d.jpeg" alt="" className="u-blog-control u-image u-image-default u-image-2" />
                  </a>
                  <h2 className="u-blog-control u-text u-text-3">
                    <a className="u-post-header-link" href="https://parivarthanaschool.com/post/" target="_blank" rel="noreferrer">Science &amp; Technology Exhibition</a>
                  </h2>
                  <div className="u-blog-control u-post-content u-text u-text-4">Showcasing innovative student projects and working models in STEM.</div>
                  <div className="u-blog-control u-metadata u-metadata-2">
                    <span className="u-meta-date u-meta-icon">Nov 20, 2024</span>
                  </div>
                </div>
              </div>

              <div className="u-blog-post u-repeater-item">
                <div className="u-container-layout u-similar-container u-container-layout-3">
                  <a className="u-post-header-link" href="https://parivarthanaschool.com/post/" target="_blank" rel="noreferrer">
                    <img src="/images/0fd3416c.jpeg" alt="" className="u-blog-control u-image u-image-default u-image-3" />
                  </a>
                  <h2 className="u-blog-control u-text u-text-5">
                    <a className="u-post-header-link" href="https://parivarthanaschool.com/post/" target="_blank" rel="noreferrer">Cultural Fest &amp; Talent Show</a>
                  </h2>
                  <div className="u-blog-control u-post-content u-text u-text-6">A grand evening filled with music, dance, and theatrical performances.</div>
                  <div className="u-blog-control u-metadata u-metadata-3">
                    <span className="u-meta-date u-meta-icon">Oct 15, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
