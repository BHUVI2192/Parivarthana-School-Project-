import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function Header() {
  const location = useLocation()

  // Re-initialize Nicepage menu behavior after navigation
  useEffect(() => {
    // Nicepage's menu JS relies on DOM ready; trigger it after route changes
    if (typeof window !== 'undefined' && (window as any).nicepage) {
      try {
        (window as any).nicepage.init?.()
      } catch (_) { /* ignore */ }
    }
  }, [location])

  return (
    <header
      className="u-clearfix u-custom-color-13 u-header u-sticky u-sticky-3949 u-header"
      id="sec-67d5"
      data-animation-name=""
      data-animation-duration="0"
      data-animation-delay="0"
      data-animation-direction=""
    >
      <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-sheet-1">
        <nav className="u-align-left u-dropdown-icon u-menu u-menu-dropdown u-offcanvas u-menu-1">
          {/* Hamburger */}
          <div className="menu-collapse" style={{ fontSize: '1rem', letterSpacing: '0px', fontWeight: 700 }}>
            <a
              className="u-button-style u-custom-active-border-color u-custom-active-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-border-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-decoration u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-hamburger-link u-nav-link u-text-custom-color-7 u-hamburger-link-1"
              href="#"
            >
              <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 302 302">
                <use xlinkHref="#svg-5c50"></use>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="svg-5c50"
                x="0px"
                y="0px"
                viewBox="0 0 302 302"
                style={{ enableBackground: 'new 0 0 302 302' } as React.CSSProperties}
                xmlSpace="preserve"
                className="u-svg-content"
              >
                <g>
                  <rect y="36" width="302" height="30"></rect>
                  <rect y="236" width="302" height="30"></rect>
                  <rect y="136" width="302" height="30"></rect>
                </g>
              </svg>
            </a>
          </div>

          {/* Desktop nav */}
          <div className="u-custom-menu u-nav-container">
            <ul className="u-custom-font u-heading-font u-nav u-spacing-0 u-unstyled u-nav-1">
              <li className="u-nav-item">
                <Link
                  className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-grey-30 u-border-hover-custom-color-5 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-hover-custom-color-5 u-nav-link u-text-active-white u-text-hover-custom-color-7 u-text-palette-5-light-3"
                  to="/"
                  style={{ padding: '0px 20px' }}
                >
                  Home
                </Link>
              </li>
              <li className="u-nav-item">
                <a
                  className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-grey-30 u-border-hover-custom-color-5 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-hover-custom-color-5 u-nav-link u-text-active-white u-text-hover-custom-color-7 u-text-palette-5-light-3"
                  href="#"
                  rel="nofollow"
                  style={{ padding: '0px 20px' }}
                >
                  About
                </a>
                <div className="u-nav-popup">
                  <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-2">
                    <li className="u-nav-item">
                      <Link
                        className="u-active-custom-color-5 u-button-style u-custom-color-13 u-hover-white u-nav-link u-text-active-white u-text-hover-custom-color-3 u-text-white"
                        to="/about-osnt"
                      >
                        About OSNT
                      </Link>
                    </li>
                    <li className="u-nav-item">
                      <Link
                        className="u-active-custom-color-5 u-button-style u-custom-color-13 u-hover-white u-nav-link u-text-active-white u-text-hover-custom-color-3 u-text-white"
                        to="/about-parivarthana"
                      >
                        About Parivarthana
                      </Link>
                    </li>
                    <li className="u-nav-item">
                      <Link
                        className="u-active-custom-color-5 u-button-style u-custom-color-13 u-hover-white u-nav-link u-text-active-white u-text-hover-custom-color-3 u-text-white"
                        to="/leadership"
                      >
                        Leadership
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="u-nav-item">
                <a
                  className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-grey-30 u-border-hover-custom-color-5 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-hover-custom-color-5 u-nav-link u-text-active-white u-text-hover-custom-color-7 u-text-palette-5-light-3"
                  rel="nofollow"
                  style={{ padding: '0px 20px' }}
                >
                  Academics
                </a>
                <div className="u-nav-popup">
                  <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-3">
                    <li className="u-nav-item">
                      <Link
                        className="u-active-custom-color-5 u-button-style u-custom-color-13 u-hover-white u-nav-link u-text-active-white u-text-hover-custom-color-3 u-text-white"
                        to="/school"
                      >
                        School
                      </Link>
                    </li>
                    <li className="u-nav-item">
                      <Link
                        className="u-active-custom-color-5 u-button-style u-custom-color-13 u-hover-white u-nav-link u-text-active-white u-text-hover-custom-color-3 u-text-white"
                        to="/puc"
                      >
                        PUC
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="u-nav-item">
                <a
                  className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-grey-30 u-border-hover-custom-color-5 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-hover-custom-color-5 u-nav-link u-text-active-white u-text-hover-custom-color-7 u-text-palette-5-light-3"
                  style={{ padding: '0px 20px' }}
                >
                  Student Corner
                </a>
                <div className="u-nav-popup">
                  <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-4">
                    <li className="u-nav-item">
                      <Link
                        className="u-active-custom-color-5 u-button-style u-custom-color-13 u-hover-white u-nav-link u-text-active-white u-text-hover-custom-color-3 u-text-white"
                        to="/campus-life"
                      >
                        Life at Parivarthana
                      </Link>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-active-custom-color-5 u-button-style u-custom-color-13 u-hover-white u-nav-link u-text-active-white u-text-hover-custom-color-3 u-text-white"
                        href="/360virtualtour/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        360° Virtual Tour
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <Link
                        className="u-active-custom-color-5 u-button-style u-custom-color-13 u-hover-white u-nav-link u-text-active-white u-text-hover-custom-color-3 u-text-white"
                        to="/gallery"
                      >
                        Gallery
                      </Link>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-active-custom-color-5 u-button-style u-custom-color-13 u-hover-white u-nav-link u-text-active-white u-text-hover-custom-color-3 u-text-white"
                        href="https://parivarthanaschool.com/Gibbon/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Login Portal
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="u-nav-item">
                <a
                  className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-grey-30 u-border-hover-custom-color-5 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-hover-custom-color-5 u-nav-link u-text-active-white u-text-hover-custom-color-7 u-text-palette-5-light-3"
                  href="https://parivarthanaschool.com/post/"
                  style={{ padding: '0px 20px' }}
                >
                  News &amp; Events
                </a>
              </li>
              <li className="u-nav-item">
                <Link
                  className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-grey-30 u-border-hover-custom-color-5 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-hover-custom-color-5 u-nav-link u-text-active-white u-text-hover-custom-color-7 u-text-palette-5-light-3"
                  to="/contact"
                  style={{ padding: '0px 20px' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile sidenav */}
          <div className="u-custom-menu u-nav-container-collapse">
            <div className="u-align-center u-black u-container-align-center u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav u-sidenav-1">
              <div className="u-inner-container-layout u-sidenav-overflow" style={{ padding: '0px' }}>
                <div className="u-menu-close"></div>
                <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-5">
                  <li className="u-nav-item">
                    <Link className="u-button-style u-nav-link" to="/">Home</Link>
                  </li>
                  <li className="u-nav-item">
                    <a className="u-button-style u-nav-link" href="#" rel="nofollow">About</a>
                    <div className="u-nav-popup">
                      <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-6">
                        <li className="u-nav-item">
                          <Link className="u-button-style u-custom-color-13 u-nav-link" to="/about-osnt">About OSNT</Link>
                        </li>
                        <li className="u-nav-item">
                          <Link className="u-button-style u-custom-color-13 u-nav-link" to="/about-parivarthana">About Parivarthana</Link>
                        </li>
                        <li className="u-nav-item">
                          <Link className="u-button-style u-custom-color-13 u-nav-link" to="/leadership">Leadership</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="u-nav-item">
                    <a className="u-button-style u-nav-link" rel="nofollow">Academics</a>
                    <div className="u-nav-popup">
                      <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-7">
                        <li className="u-nav-item">
                          <Link className="u-button-style u-custom-color-13 u-nav-link" to="/school">School</Link>
                        </li>
                        <li className="u-nav-item">
                          <Link className="u-button-style u-custom-color-13 u-nav-link" to="/puc">PUC</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="u-nav-item">
                    <a className="u-button-style u-nav-link">Student Corner</a>
                    <div className="u-nav-popup">
                      <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-8">
                        <li className="u-nav-item">
                          <Link className="u-button-style u-custom-color-13 u-nav-link" to="/campus-life">Life at Parivarthana</Link>
                        </li>
                        <li className="u-nav-item">
                          <a className="u-button-style u-custom-color-13 u-nav-link" href="/360virtualtour/index.html" target="_blank" rel="noopener noreferrer">360° Virtual Tour</a>
                        </li>
                        <li className="u-nav-item">
                          <Link className="u-button-style u-custom-color-13 u-nav-link" to="/gallery">Gallery</Link>
                        </li>
                        <li className="u-nav-item">
                          <a className="u-button-style u-custom-color-13 u-nav-link" href="https://parivarthanaschool.com/Gibbon/" target="_blank" rel="noopener noreferrer">Login Portal</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="u-nav-item">
                    <a className="u-button-style u-nav-link" href="https://parivarthanaschool.com/post/">News &amp; Events</a>
                  </li>
                  <li className="u-nav-item">
                    <Link className="u-button-style u-nav-link" to="/contact">Contact</Link>
                  </li>
                </ul>
                <Link
                  to="/admissions"
                  className="u-btn u-btn-round u-button-style u-custom-color-3 u-hover-custom-color-5 u-radius u-btn-1"
                >
                  &nbsp;Admissions Enquiry
                </Link>
              </div>
            </div>
            <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
          </div>
        </nav>

        <img
          className="u-image u-image-contain u-image-default u-preserve-proportions u-image-1"
          src="/images/pixelcut-export.png"
          alt="Parivarthana School Logo"
          data-image-width="595"
          data-image-height="595"
        />
        <Link
          to="/admissions"
          className="u-btn u-btn-round u-button-style u-custom-color-5 u-hidden-md u-hidden-sm u-hidden-xs u-hover-custom-color-3 u-radius u-btn-2"
        >
          admission Enquiry
        </Link>
      </div>
    </header>
  )
}
