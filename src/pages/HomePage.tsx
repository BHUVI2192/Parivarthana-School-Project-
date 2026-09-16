import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdmissionModal from '../components/forms/AdmissionModal'
import '../styles/home-page.css'
import '../styles/admission-modal.css'

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)

  // Show the modal after 3 seconds (matching original timer behavior)
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  // Re-init Nicepage animations when page loads
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).nicepage) {
      try {
        (window as any).nicepage.init?.()
      } catch (_) { /* ignore */ }
    }
  }, [])

  return (
    <>
      {/* ══ Hero Video Section ══ */}
      <section
        className="u-align-center u-clearfix u-container-align-center u-uploaded-video u-video u-section-1"
        id="carousel_4537"
      >
        <div className="u-background-video u-expanded">
          <div className="embed-responsive">
            <video
              className="embed-responsive-item"
              data-autoplay="1"
              loop
              muted
              autoPlay
              playsInline
            >
              <source src="/files/HomepageVideoSpeeded2.mp4" type="video/mp4" />
              <p>Your browser does not support HTML5 video.</p>
            </video>
          </div>
          <div className="u-video-shading"></div>
        </div>
        <div className="u-clearfix u-sheet u-valign-bottom u-sheet-1">
          <h1 className="u-text u-text-body-alt-color u-title u-text-1">
            {' '}Parivarthana Residential School &amp; PU&nbsp;College
          </h1>
          <div
            className="u-align-left u-container-align-left u-container-align-left-lg u-container-align-left-md u-container-align-left-sm u-container-align-left-xl u-container-style u-expanded-width-xs u-group u-radius u-shape-round u-group-1"
            data-animation-name="customAnimationIn"
            data-animation-duration="1500"
            data-animation-delay="500"
          >
            <div className="u-container-layout u-valign-top-xs u-container-layout-1">
              <h2 className="u-align-left u-text u-text-body-alt-color u-text-2">
                {' '}Transforming minds, Shaping Future
              </h2>
              <Link
                to="/about-parivarthana"
                className="u-active-grey-60 u-align-left u-border-none u-btn u-btn-round u-button-style u-custom-color-4 u-custom-font u-heading-font u-hover-custom-color-5 u-radius-50 u-text-body-alt-color u-btn-1"
                data-animation-name="customAnimationIn"
                data-animation-duration="1500"
                data-animation-delay="700"
              >
                Know more{' '}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Parallax / Campus Welcome Section ══ */}
      <section
        className="skrollable u-align-center u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-clearfix u-container-align-center u-container-align-center-lg u-container-align-center-xl u-image u-parallax u-section-2"
        id="carousel_9309"
        data-image-width="1645"
        data-image-height="1080"
      >
        <div className="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
          <div
            className="u-align-center u-container-align-center u-container-align-center-lg u-container-align-center-md u-container-align-center-sm u-container-align-center-xl u-container-style u-custom-color-5 u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-group u-radius u-shape-round u-group-1"
            data-image-width="1920"
            data-image-height="1280"
            data-animation-name="bounceIn"
            data-animation-duration="1000"
            data-animation-delay="0"
            data-animation-direction=""
          >
            <div className="u-container-layout u-container-layout-1">
              <h1 className="u-align-center u-custom-font u-font-source-sans-pro u-text u-text-custom-color-10 u-title u-text-1">
                TAKE THE <span className="u-text-custom-color-4">NEXT STEP!&nbsp;</span>
              </h1>
              <h3 className="u-align-center u-text u-text-body-alt-color u-text-default u-text-2">
                {' '}Welcome to Parivarthana! With its lush green campus and commitment to academic excellence, Parivarthana provides an inspiring environment where students can thrive academically, socially,&nbsp;and&nbsp;personally.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Mobile-only heading section ══ */}
      <section
        className="u-align-center u-clearfix u-container-align-center u-hidden-lg u-hidden-md u-hidden-sm u-hidden-xl u-section-3"
        id="sec-0cf2"
      >
        <div className="u-clearfix u-sheet u-valign-bottom-xs u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-sheet-1">
          <h1 className="u-align-center u-text u-text-default u-text-1">
            ' <span className="u-text-custom-color-4">How </span>your child will blossom at Parivarthana'
          </h1>
        </div>
      </section>

      {/* ══ Pillars / Cards Section ══ */}
      <section
        className="u-align-center u-clearfix u-container-align-center u-section-4"
        id="carousel_c427"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-expanded-width u-hidden-xs u-shape u-shape-svg u-text-custom-color-4 u-shape-1">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 80">
              <use xlinkHref="#svg-0b7f"></use>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              xmlSpace="preserve"
              className="u-svg-content"
              viewBox="0 0 160 80"
              x="0px"
              y="0px"
              id="svg-0b7f"
              style={{ enableBackground: 'new 0 0 160 80' } as React.CSSProperties}
            >
              <path d="M160,0H0c0,44.2,35.8,80,80,80S160,44.2,160,0z"></path>
            </svg>
          </div>
          <h1
            className="u-hidden-xs u-text u-text-body-alt-color u-text-1"
            data-animation-name="bounceIn"
            data-animation-duration="1000"
            data-animation-delay="0"
            data-animation-direction=""
          >
            {' '}'How your child will blossom at Parivarthana'
          </h1>

          <div className="data-layout-selected u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-col">
                <div className="u-size-30">
                  <div className="u-layout-row">
                    {/* Card 1: Quality of Education */}
                    <div
                      className="u-container-style u-grey-5 u-layout-cell u-size-30 u-layout-cell-1"
                      data-animation-name="flipIn"
                      data-animation-duration="1000"
                      data-animation-delay="0"
                      data-animation-direction="X"
                    >
                      <div className="u-container-layout u-container-layout-1">
                        <span className="u-file-icon u-icon u-text-custom-color-5 u-icon-1">
                          <img src="/images/1008958-400fd7ca.png" alt="" />
                        </span>
                        <h6 className="u-text u-text-2">&nbsp;(1)</h6>
                        <h5 className="u-text u-text-3"> QUALITY OF EDUCATION</h5>
                        <p className="u-custom-font u-heading-font u-text u-text-4">
                          {' '}Parivarthana is renowned for its decade-long legacy of academic excellence, dedicated faculty, comprehensive curriculum, and consistent student achievements.
                        </p>
                      </div>
                    </div>
                    {/* Card 2: Curriculum */}
                    <div
                      className="u-container-style u-grey-5 u-layout-cell u-size-30 u-layout-cell-2"
                      data-animation-name="flipIn"
                      data-animation-duration="1000"
                      data-animation-delay="0"
                      data-animation-direction="X"
                    >
                      <div className="u-container-layout u-container-layout-2">
                        <span className="u-file-icon u-icon u-text-custom-color-5 u-icon-2">
                          <img src="/images/1008958-400fd7ca.png" alt="" />
                        </span>
                        <h6 className="u-text u-text-5">(2)</h6>
                        <h5 className="u-text u-text-6"> CURRICULUM </h5>
                        <p className="u-custom-font u-heading-font u-text u-text-7">
                          {' '}Our curriculum cultivates critical thinking and innovation, equipping students for higher education at top universities worldwide. We shape future leaders through a holistic approach that extends beyond traditional academics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-size-30">
                  <div className="u-layout-row">
                    {/* Card 3: Facilities */}
                    <div
                      className="u-container-style u-grey-5 u-layout-cell u-size-20 u-layout-cell-3"
                      data-animation-name="flipIn"
                      data-animation-duration="1000"
                      data-animation-delay="0"
                      data-animation-direction="X"
                    >
                      <div className="u-container-layout u-container-layout-3">
                        <span className="u-file-icon u-icon u-text-custom-color-5 u-icon-3">
                          <img src="/images/1008958-400fd7ca.png" alt="" />
                        </span>
                        <h6 className="u-text u-text-8">(3)</h6>
                        <h5 className="u-text u-text-9"> FACILITIES AND RESOURCES</h5>
                        <p className="u-custom-font u-heading-font u-text u-text-10">
                          {' '}Immerse your child in a world of modern amenities, featuring smart classrooms, well-equipped libraries, and state-of-the-art labs.
                        </p>
                      </div>
                    </div>
                    {/* Card 4: Extracurricular */}
                    <div
                      className="u-container-style u-grey-5 u-layout-cell u-size-20 u-layout-cell-4"
                      data-animation-name="flipIn"
                      data-animation-duration="1000"
                      data-animation-delay="0"
                      data-animation-direction="X"
                    >
                      <div className="u-container-layout u-container-layout-4">
                        <span className="u-file-icon u-icon u-text-custom-color-5 u-icon-4">
                          <img src="/images/1008958-400fd7ca.png" alt="" />
                        </span>
                        <h6 className="u-text u-text-11">(4)</h6>
                        <h5 className="u-text u-text-12"> EXTRACURRICULAR ACTIVITIES</h5>
                        <p className="u-custom-font u-heading-font u-text u-text-13">
                          {' '}A wide array of opportunities in sports, arts, music, drama, and community service programs is available, all designed to nurture our students' skills and passions beyond academics.
                        </p>
                      </div>
                    </div>
                    {/* Card 5: Location */}
                    <div
                      className="u-container-style u-grey-5 u-layout-cell u-size-20 u-layout-cell-5"
                      data-animation-name="rubberBand"
                      data-animation-duration="1000"
                      data-animation-delay="0"
                      data-animation-direction=""
                    >
                      <div className="u-container-layout u-container-layout-5">
                        <span className="u-file-icon u-icon u-text-custom-color-5 u-icon-5">
                          <img src="/images/1008958-400fd7ca.png" alt="" />
                        </span>
                        <h6 className="u-text u-text-14">(5)</h6>
                        <h5 className="u-text u-text-15"> LOCATION&nbsp;</h5>
                        <p className="u-custom-font u-heading-font u-text u-text-16">
                          {' '}Located in the tranquil temple town of Srirangapatna, embraced by the pristine waters of the Kaveri River and renowned for its excellent air quality, Parivarthana provides an ideal setting for learning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Campus Highlights / Features Section ══ */}
      <section className="u-clearfix u-container-align-center u-white u-section-5" id="carousel_0a12">
        <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
          <div className="data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-col">
                <div className="u-size-30">
                  <div className="u-layout-row">
                    <div className="u-container-align-center u-container-style u-layout-cell u-size-60">
                      <div className="u-container-layout u-valign-middle">

                        {/* Virtual Tour Card */}
                        <div
                          className="u-group u-image u-radius-50 u-shape-round u-hover-feature u-expanded-width u-image-1"
                          data-animation-name="customAnimationIn"
                          data-animation-duration="1000"
                          style={{ position: 'relative', padding: '30px', textAlign: 'left' }}
                        >
                          <div className="u-container-layout">
                            {/* Icon */}
                            <span
                              className="u-icon u-icon-circle u-white u-text-black"
                              style={{
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                borderRadius: '50%',
                              }}
                            >
                              <img
                                src="/images/1788592-691fd6c8.png"
                                alt=""
                                style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                              />
                            </span>

                            {/* Title */}
                            <h5 className="u-text u-text-body-alt-color" style={{ marginTop: '15px' }}>
                              Tour Our Campus
                            </h5>

                            {/* Description */}
                            <p className="u-text u-text-white" style={{ marginBottom: '20px' }}>
                              Experience the Parivarthana difference firsthand with our immersive 360° virtual tour.
                            </p>

                            {/* CTA Button */}
                            <a
                              href="https://parivarthanaschool.com/360virtualtour/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="u-btn u-button-style"
                              style={{
                                backgroundColor: '#F15412',
                                color: '#fff',
                                padding: '12px 24px',
                                borderRadius: '30px',
                                fontWeight: 600,
                                textDecoration: 'none',
                                display: 'inline-block',
                                transition: '0.3s',
                              }}
                              onMouseOver={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.05)')}
                              onMouseOut={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
                            >
                              Explore 360° Tour →
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="u-size-30">
                  <div className="u-layout-row">
                    {/* Discover Our Vision card */}
                    <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-2">
                      <div className="u-container-layout u-valign-bottom-lg u-valign-bottom-md u-valign-bottom-sm u-valign-bottom-xl u-valign-top-xs u-container-layout-3">
                        <div
                          className="custom-expanded u-container-align-center-sm u-container-align-center-xs u-container-align-left-lg u-container-align-left-md u-container-align-left-xl u-container-style u-custom-color-6 u-group u-hover-feature u-radius-50 u-shape-round u-group-2"
                          data-animation-name="customAnimationIn"
                          data-animation-duration="2000"
                          data-href="/about-parivarthana"
                        >
                          <div className="u-container-layout u-valign-middle u-container-layout-4">
                            <span className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-file-icon u-icon u-icon-circle u-text-palette-4-base u-white u-icon-2">
                              <img src="/images/3173683-59d92169.png" alt="" />
                            </span>
                            <h5 className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-text u-text-default u-text-3">
                              {' '}Discover Our Vision
                            </h5>
                            <p className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-custom-font u-heading-font u-text u-text-default u-text-4">
                              {' '}"Learn more about how Parivarthana is redefining education."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Student Achievements card */}
                    <div className="u-container-align-center-lg u-container-align-center-md u-container-align-center-sm u-container-align-center-xl u-container-style u-layout-cell u-size-20 u-layout-cell-3">
                      <div className="u-container-layout u-valign-middle-lg u-valign-middle-xl u-valign-top-xs u-container-layout-5">
                        <div
                          className="u-container-align-center-sm u-container-align-center-xs u-container-align-left-lg u-container-align-left-md u-container-align-left-xl u-container-style u-custom-color-5 u-expanded-width-lg u-expanded-width-xl u-group u-hover-feature u-radius-50 u-shape-round u-group-3"
                          data-animation-name="customAnimationIn"
                          data-animation-duration="2000"
                          data-href="/about-osnt"
                        >
                          <div className="u-container-layout u-valign-middle u-container-layout-6">
                            <span className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-file-icon u-icon u-icon-circle u-text-palette-3-base u-white u-icon-3">
                              <img src="/images/109822-e97d4cb0.png" alt="" />
                            </span>
                            <h5 className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-text u-text-default u-text-5">
                              {' '}Student Achievements
                            </h5>
                            <p className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-custom-font u-heading-font u-text u-text-default u-text-6">
                              {' '}"Celebrating the milestones of our talented students."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Student Life card */}
                    <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-4">
                      <div className="u-container-layout u-valign-top-xs u-container-layout-7">
                        <div
                          className="custom-expanded u-container-align-center-sm u-container-align-center-xs u-container-align-left-lg u-container-align-left-md u-container-align-left-xl u-container-style u-custom-color-4 u-group u-hover-feature u-radius-50 u-shape-round u-group-4"
                          data-animation-name="customAnimationIn"
                          data-animation-duration="2000"
                          data-href="/campus-life"
                        >
                          <div className="u-container-layout u-valign-middle u-container-layout-8">
                            <span className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-file-icon u-icon u-icon-circle u-text-palette-5-base u-white u-icon-4">
                              <img src="/images/12691346-368d8e18.png" alt="" />
                            </span>
                            <h5 className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-text u-text-default u-text-7">
                              {' '}Student Life
                            </h5>
                            <p className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-custom-font u-heading-font u-text u-text-default u-text-8">
                              {' '}"Discover the vibrant and dynamic life at Parivarthana."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Leadership Preview Section ══ */}
      <section className="u-clearfix u-white u-section-6" id="carousel_cfad">
        <div className="u-clearfix u-sheet u-sheet-1">
          <h2
            className="u-align-center u-text u-text-default u-text-1"
            data-animation-name="flipIn"
            data-animation-duration="1000"
            data-animation-direction="X"
          >
            <span className="u-text-custom-color-4" style={{ fontWeight: 700 }}>Meet </span>Our Visionary Leaders
          </h2>
          <div className="u-expanded-width u-list u-list-1">
            <div className="u-repeater u-repeater-1">

              {/* Leader 1 */}
              <div
                className="u-container-style u-list-item u-radius-32 u-repeater-item u-shape-round u-white u-list-item-1"
                data-animation-direction="Up"
                data-animation-name="customAnimationIn"
                data-animation-duration="1500"
                data-animation-delay="500"
              >
                <div className="u-container-layout u-similar-container u-valign-bottom-lg u-valign-bottom-xl u-container-layout-1">
                  <h4 className="u-align-center-lg u-align-center-md u-align-center-xl u-text u-text-default u-text-2">
                    {' '}Dr M Puttegowda
                  </h4>
                  <img
                    className="u-align-center u-image u-image-circle u-preserve-proportions u-image-1"
                    alt="Dr M Puttegowda"
                    data-image-width="853"
                    data-image-height="1280"
                    data-animation-name="customAnimationIn"
                    data-animation-duration="1000"
                    data-animation-delay="750"
                    src="/images/WhatsAppImage2024-12-28at18.53.02_dd362707.jpg"
                    data-animation-direction=""
                  />
                  <Link
                    to="/leadership"
                    className="u-active-none u-align-center-md u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-xl u-border-2 u-border-active-grey-70 u-border-custom-color-4 u-border-hover-grey-60 u-border-no-left u-border-no-right u-border-no-top u-btn u-button-style u-custom-font u-font-pt-sans u-hover-none u-none u-text-active-grey-70 u-text-custom-color-4 u-text-hover-grey-70 u-btn-1"
                  >
                    read more
                  </Link>
                </div>
              </div>

              {/* Leader 2 */}
              <div
                className="u-align-center-sm u-align-center-xs u-container-style u-list-item u-radius-32 u-repeater-item u-shape-round u-white u-list-item-2"
                data-animation-direction="Up"
                data-animation-name="customAnimationIn"
                data-animation-duration="1500"
                data-animation-delay="500"
              >
                <div className="u-container-layout u-similar-container u-valign-bottom-lg u-valign-bottom-xl u-container-layout-2">
                  <h4 className="u-align-center-lg u-align-center-md u-align-center-xl u-text u-text-default u-text-3">
                    {' '}Mr B V Kumar
                  </h4>
                  <img
                    className="u-align-center u-image u-image-circle u-preserve-proportions u-image-2"
                    alt="Mr B V Kumar"
                    data-image-width="3936"
                    data-image-height="2624"
                    data-animation-name="customAnimationIn"
                    data-animation-duration="1000"
                    data-animation-delay="750"
                    src="/images/PERSON951.jpg"
                    data-animation-direction=""
                  />
                  <Link
                    to="/leadership"
                    className="u-active-none u-align-center-md u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-xl u-border-2 u-border-active-grey-70 u-border-custom-color-4 u-border-hover-grey-60 u-border-no-left u-border-no-right u-border-no-top u-btn u-button-style u-custom-font u-font-pt-sans u-hover-none u-none u-text-active-grey-70 u-text-custom-color-4 u-text-hover-grey-70 u-btn-2"
                  >
                    read more
                  </Link>
                </div>
              </div>

              {/* Leader 3 */}
              <div
                className="u-container-style u-list-item u-radius-32 u-repeater-item u-shape-round u-white u-list-item-3"
                data-animation-direction="Up"
                data-animation-name="customAnimationIn"
                data-animation-duration="1500"
                data-animation-delay="500"
              >
                <div className="u-container-layout u-similar-container u-valign-bottom-lg u-valign-bottom-xl u-container-layout-3">
                  <h4 className="u-align-center-lg u-align-center-md u-align-center-xl u-text u-text-default u-text-4">
                    {' '}Dr Dhananjaya K&nbsp;B
                  </h4>
                  <img
                    className="u-align-center u-image u-image-circle u-preserve-proportions u-image-3"
                    alt="Dr Dhananjaya K B"
                    data-image-width="1080"
                    data-image-height="1080"
                    data-animation-name="customAnimationIn"
                    data-animation-duration="1000"
                    data-animation-delay="750"
                    src="/images/3.png"
                    data-animation-direction=""
                  />
                  <Link
                    to="/leadership"
                    className="u-active-none u-align-center-md u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-xl u-border-2 u-border-active-grey-70 u-border-custom-color-4 u-border-hover-grey-60 u-border-no-left u-border-no-right u-border-no-top u-btn u-button-style u-custom-font u-font-pt-sans u-hover-none u-none u-text-active-grey-70 u-text-custom-color-4 u-text-hover-grey-70 u-btn-3"
                  >
                    read more
                  </Link>
                </div>
              </div>

              {/* Leader 4 */}
              <div
                className="u-container-style u-list-item u-radius-32 u-repeater-item u-shape-round u-white u-list-item-4"
                data-animation-direction="Up"
                data-animation-name="customAnimationIn"
                data-animation-duration="1500"
                data-animation-delay="500"
              >
                <div className="u-container-layout u-similar-container u-valign-bottom-lg u-valign-bottom-xl u-container-layout-4">
                  <h4 className="u-align-center-lg u-align-center-md u-align-center-xl u-text u-text-default u-text-5">
                    {' '}Mr Manjuram P
                  </h4>
                  <img
                    className="u-align-center u-image u-image-circle u-preserve-proportions u-image-4"
                    alt="Mr Manjuram P"
                    data-image-width="1080"
                    data-image-height="1080"
                    data-animation-name="customAnimationIn"
                    data-animation-duration="1000"
                    data-animation-delay="750"
                    src="/images/4.png"
                    data-animation-direction=""
                  />
                  <Link
                    to="/leadership"
                    className="u-active-none u-align-center-md u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-xl u-border-2 u-border-active-grey-70 u-border-custom-color-4 u-border-hover-grey-60 u-border-no-left u-border-no-right u-border-no-top u-btn u-button-style u-custom-font u-font-pt-sans u-hover-none u-none u-text-active-grey-70 u-text-custom-color-4 u-text-hover-grey-70 u-btn-4"
                  >
                    read more
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══ Contact Strip Section ══ */}
      <section className="u-clearfix u-grey-10 u-section-7" id="carousel_0252">
        <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-xl u-valign-middle-xs u-sheet-1">
          <div className="data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-align-center-md u-container-align-center-sm u-container-align-center-xs u-container-style u-layout-cell u-size-40-lg u-size-43-xl u-size-60-md u-size-60-sm u-size-60-xs u-white u-layout-cell-1">
                  <div className="u-container-layout u-valign-middle u-container-layout-1">
                    <h2
                      className="u-align-center-md u-align-center-sm u-align-center-xs u-text u-text-custom-color-5 u-text-default u-text-1"
                      data-animation-name="bounceIn"
                      data-animation-duration="1000"
                      data-animation-delay="0"
                      data-animation-direction=""
                    >
                      <span className="u-icon">
                        <svg className="u-svg-content" viewBox="0 0 405.333 405.333" x="0px" y="0px">
                          <path d="M373.333,266.88c-25.003,0-49.493-3.904-72.704-11.563c-11.328-3.904-24.192-0.896-31.637,6.699l-46.016,34.752c-52.8-28.181-86.592-61.952-114.389-114.368l33.813-44.928c8.512-8.512,11.563-20.971,7.915-32.64C142.592,81.472,138.667,56.96,138.667,32c0-17.643-14.357-32-32-32H32C14.357,0,0,14.357,0,32c0,205.845,167.488,373.333,373.333,373.333c17.643,0,32-14.357,32-32V298.88C405.333,281.237,390.976,266.88,373.333,266.88z"></path>
                        </svg>
                      </span>{' '}
                      &nbsp;+91&nbsp;9980656888
                    </h2>
                    <p className="u-align-center-md u-align-center-sm u-align-center-xs u-custom-font u-heading-font u-large-text u-text u-text-variant u-text-2">
                      {' '}Stay Connected with Parivarthana
                    </p>
                  </div>
                </div>
                <div
                  className="u-align-center u-container-align-center u-container-align-center-lg u-container-align-center-md u-container-align-center-sm u-container-align-center-xl u-container-style u-layout-cell u-size-17-xl u-size-20-lg u-size-60-md u-size-60-sm u-size-60-xs u-white u-layout-cell-2"
                  data-href="/contact"
                >
                  <div className="u-container-layout u-valign-middle u-container-layout-2">
                    <Link
                      to="/contact"
                      className="u-active-palette-1-light-3 u-border-none u-btn u-button-style u-custom-color-4 u-custom-font u-heading-font u-hover-custom-color-5 u-btn-1"
                    >
                      {' '}Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Admission Enquiry Modal ══ */}
      {showModal && <AdmissionModal onClose={() => setShowModal(false)} />}
    </>
  )
}
