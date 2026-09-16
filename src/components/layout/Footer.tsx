import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      className="u-clearfix u-custom-color-5 u-footer u-footer"
      id="sec-3539"
      data-animation-name=""
      data-animation-duration="0"
      data-animation-delay="0"
      data-animation-direction=""
    >
      <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
        <div className="custom-expanded data-layout-selected u-clearfix u-expanded-width-lg u-expanded-width-xl u-gutter-30 u-layout-wrap u-layout-wrap-1">
          <div className="u-gutter-0 u-layout">
            <div className="u-layout-row">
              {/* Logo column */}
              <div className="u-align-left u-container-align-left u-container-align-left-lg u-container-align-left-xl u-container-style u-layout-cell u-shape-rectangle u-size-8 u-layout-cell-1">
                <div className="u-container-layout u-valign-top-lg u-valign-top-xl u-container-layout-1">
                  <Link to="/" className="u-image u-logo u-image-1" data-image-width="595" data-image-height="595">
                    <img src="/images/pixelcut-export.png" className="u-logo-image u-logo-image-1" alt="Parivarthana Logo" />
                  </Link>
                </div>
              </div>

              {/* Contact column */}
              <div className="u-align-left u-container-align-left u-container-style u-layout-cell u-shape-rectangle u-size-22 u-layout-cell-2">
                <div className="u-container-layout u-container-layout-2">
                  <a
                    className="u-active-none u-align-left u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-custom-color-10 u-text-hover-custom-color-3 u-btn-1"
                    href="https://maps.app.goo.gl/HguLH9ZTeiCYmQt29"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <b>Address:</b><br />
                    Near check post, Bengaluru -Mysuru Highway,&nbsp;<br />
                    Srirangapatna, Karnataka&nbsp;- 571438
                  </a>
                  <p className="u-align-left u-text u-text-1">
                    <br />
                    <span style={{ fontWeight: 700 }}>Contact No. :</span><br />
                    +91{' '}
                    <a
                      href="tel:9980656888"
                      className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-text-hover-custom-color-3 u-btn-2"
                    >
                      9980656888
                    </a>
                  </p>
                  <p className="u-align-left u-text u-text-2">
                    <a
                      className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-text-hover-custom-color-3 u-btn-4"
                      href="mailto:info@parivarthanaschool.com"
                    >
                      Write to us:<br />info@parivarthanaschool.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Quick links column */}
              <div className="u-align-left u-container-align-left u-container-style u-layout-cell u-shape-rectangle u-size-15 u-layout-cell-3">
                <div className="u-container-layout u-container-layout-3">
                  <p className="u-small-text u-text u-text-variant u-text-3">Quick Links</p>
                  <p className="u-text u-text-4">
                    <Link className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-text-hover-custom-color-3 u-btn-5" to="/admissions">
                      Admission
                    </Link>
                  </p>
                  <p className="u-text u-text-5">
                    <a className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-text-hover-custom-color-3 u-btn-6" href="https://parivarthanaschool.com/Gibbon/" target="_blank" rel="noopener noreferrer">
                      Student Portal
                    </a>
                  </p>
                  <p className="u-text u-text-6">
                    <a className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-text-hover-custom-color-3 u-btn-7" href="https://parivarthanaschool.com/post/" target="_blank" rel="noopener noreferrer">
                      News and Events
                    </a>
                  </p>
                  <p className="u-text u-text-7">
                    <Link className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-text-hover-custom-color-3 u-btn-8" to="/gallery">
                      Gallery
                    </Link>
                  </p>
                  <p className="u-text u-text-8">
                    <Link className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-text-hover-custom-color-3 u-btn-9" to="/contact">
                      Careers
                    </Link>
                  </p>
                  <p className="u-text u-text-9">
                    <Link className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-text-hover-custom-color-3 u-btn-10" to="/analytics">
                      Analytics
                    </Link>
                  </p>
                </div>
              </div>

              {/* Social icons column */}
              <div className="u-align-left u-container-align-left u-container-align-left-lg u-container-align-left-md u-container-align-left-sm u-container-align-left-xl u-container-style u-hidden-md u-hidden-sm u-layout-cell u-shape-rectangle u-size-15 u-layout-cell-4">
                <div className="u-container-layout u-container-layout-4">
                  <div className="u-social-icons u-spacing-10 u-social-icons-1">
                    {/* WhatsApp */}
                    <a className="u-social-url" title="whatsapp" target="_blank" rel="noopener noreferrer" href="https://wa.me/917899729937">
                      <span className="u-icon u-social-icon u-social-whatsapp u-icon-1">
                        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112">
                          <use xlinkHref="#svg-footer-wa"></use>
                        </svg>
                        <svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-footer-wa">
                          <circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle>
                          <path fill="#FFFFFF" d="M83.8,28.3C77.2,21.7,68.4,18,59,18c-19.3,0-35.1,15.7-35.1,35.1c0,6.2,1.6,12.2,4.7,17.5l-5,18.2L42.2,84c5.1,2.8,10.9,4.3,16.8,4.3h0l0,0c19.3,0,35.1-15.7,35.1-35.1C94.1,43.8,90.5,35,83.8,28.3 M59,82.3L59,82.3c-5.2,0-10.4-1.4-14.9-4.1l-1.1-0.6l-11,2.9L35,69.8l-0.7-1.1c-2.9-4.6-4.5-10-4.5-15.5C29.8,37,42.9,24,59,24c7.8,0,15.1,3,20.6,8.6c5.5,5.5,8.5,12.8,8.5,20.6C88.2,69.2,75.1,82.3,59,82.3 M75,60.5c-0.9-0.4-5.2-2.6-6-2.9c-0.8-0.3-1.4-0.4-2,0.4s-2.3,2.9-2.8,3.4c-0.5,0.6-1,0.7-1.9,0.2c-0.9-0.4-3.7-1.4-7.1-4.4c-2.6-2.3-4.4-5.2-4.9-6.1c-0.5-0.9-0.1-1.4,0.4-1.8c0.4-0.4,0.9-1,1.3-1.5c0.4-0.5,0.6-0.9,0.9-1.5c0.3-0.6,0.1-1.1-0.1-1.5c-0.2-0.4-2-4.8-2.7-6.5c-0.7-1.7-1.4-1.5-2-1.5c-0.5,0-1.1,0-1.7,0c-0.6,0-1.5,0.2-2.3,1.1c-0.8,0.9-3.1,3-3.1,7.3c0,4.3,3.1,8.5,3.6,9.1c0.4,0.6,6.2,9.4,15,13.2c2.1,0.9,3.7,1.4,5,1.8c2.1,0.7,4,0.6,5.5,0.3c1.7-0.3,5.2-2.1,5.9-4.2c0.7-2,0.7-3.8,0.5-4.2C76.5,61.1,75.9,60.9,75,60.5"></path>
                        </svg>
                      </span>
                    </a>
                    {/* Instagram */}
                    <a className="u-social-url" title="instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/parivarthanaschoolandpuclg?igsh=MXB6a284NGE3dHl3aQ==">
                      <span className="u-icon u-social-icon u-social-instagram u-icon-2">
                        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112">
                          <use xlinkHref="#svg-footer-ig"></use>
                        </svg>
                        <svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-footer-ig">
                          <circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle>
                          <path fill="#FFFFFF" d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"></path>
                          <path fill="#FFFFFF" d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"></path>
                          <path fill="#FFFFFF" d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5c5.5,0,9.9,4.5,9.9,9.9V73.3z"></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
