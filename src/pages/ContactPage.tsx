import { useEffect } from 'react'
import '../styles/Contact.css'

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact | Parivarthana Residential School and PU College"
  }, [])

  return (
    <main className="contact-page">
      <section className="u-align-center u-clearfix u-container-align-center u-image u-shading u-section-1" id="carousel_c500" style={{ backgroundImage: 'url("/images/img3.jpg")' }}>
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="custom-expanded u-align-center u-container-style u-group u-radius-30 u-shape-round u-white u-group-1">
            <div className="u-container-layout u-valign-middle-xs u-container-layout-1">
              <div className="u-clearfix u-custom-html u-expanded-width u-custom-html-1">
                <div className="container" style={{ padding: '20px' }}>
                  <div className="form-container" style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
                    <div className="form-header" style={{ textAlign: 'center', marginBottom: '20px' }}>
                      <h2>Contact Us</h2>
                    </div>
                    <form action="https://docs.google.com/forms/d/e/1FAIpQLSda68tqS-sV_rdvLOhlVpOMQrTkf919KnDhUTy-jB9Fx4MUfg/formResponse" id="contactForm" method="POST" target="_blank">
                      <div className="mb-3" style={{ marginBottom: '15px' }}>
                        <label htmlFor="name" className="form-label" style={{ display: 'block', fontWeight: 'bold' }}>Name</label>
                        <input type="text" className="form-control" id="name" name="entry.108985619" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                      </div>
                      <div className="mb-3" style={{ marginBottom: '15px' }}>
                        <label htmlFor="email" className="form-label" style={{ display: 'block', fontWeight: 'bold' }}>Email ID</label>
                        <input type="email" className="form-control" id="email" name="entry.869648706" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                      </div>
                      <div className="mb-3" style={{ marginBottom: '15px' }}>
                        <label htmlFor="contact" className="form-label" style={{ display: 'block', fontWeight: 'bold' }}>Contact Number</label>
                        <input type="tel" className="form-control" id="contact" name="entry.102576281" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                      </div>
                      <div className="mb-3" style={{ marginBottom: '15px' }}>
                        <label htmlFor="message" className="form-label" style={{ display: 'block', fontWeight: 'bold' }}>Message</label>
                        <textarea className="form-control" id="message" name="entry.1311145212" rows={4} required style={{ width: '100%', padding: '8px', marginTop: '5px' }}></textarea>
                      </div>
                      <input type="hidden" name="fvv" value="1" />
                      <input type="hidden" name="fbzx" value="-8282677147789612039" />
                      <input type="hidden" name="pageHistory" value="0" />
                      <button type="submit" className="u-btn u-button-style u-custom-color-5" style={{ width: '100%', padding: '10px', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="u-align-center u-clearfix u-container-align-center u-custom-color-3 u-section-2" id="sec-707e">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="data-layout-selected u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-align-center u-container-style u-layout-cell u-radius u-right-cell u-shape-round u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-white u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <img className="u-expanded-width u-image u-image-round u-radius u-image-1" src="/images/DSC063161.jpg" alt="Careers" />
                  </div>
                </div>
                <div className="u-align-left u-container-align-left u-container-align-left-lg u-container-align-left-md u-container-align-left-sm u-container-align-left-xl u-container-style u-layout-cell u-left-cell u-radius u-shape-round u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-white u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-2">
                    <h2 className="u-align-left u-text u-text-default u-text-1"> Careers &amp; Human Resources<br /></h2>
                    <p className="u-align-left u-text u-text-2"> Our dedicated human resources team is committed to recruiting and supporting top-tier educators and educational support staff to create an exceptional learning environment. Their goal is to ensure that every student benefits from high-quality instruction and has an outstanding school experience.<br />
                      <br />If you are committed to making a positive impact in the field of education and believe you would be a great addition to our team, we encourage you to submit your resume or reach out to our Human Resources department. Join us in shaping the future and fostering a vibrant, supportive learning community.<br />
                      <br />Our department is open from 9 a.m. to 5 p.m. each weekday throughout the year, with the exception of government holidays and school holidays.<br />
                    </p>
                    <a href="https://www.naukri.com/parivarthana-residential-school-pu-college-jobs-careers-124630738?src=jddesktop" className="u-active-custom-color-2 u-align-center u-btn u-btn-round u-button-style u-custom-color-5 u-hover-custom-color-3 u-radius u-btn-1" target="_blank" rel="noreferrer">Look for openings</a>
                    <a href="mailto:career@parivarthanaschool.com" className="u-active-custom-color-2 u-align-center u-btn u-btn-round u-button-style u-custom-color-5 u-hover-custom-color-3 u-radius u-btn-2">Write to us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="u-clearfix u-section-3" id="sec-1543">
        <div className="u-absolute-hcenter u-expanded u-grey-light-2 u-map">
          <div className="embed-responsive" style={{ width: '100%', height: '450px' }}>
            <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.4942776163693!2d76.6814268!3d12.4167526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf771b52ccebd7%3A0x4ce0c7b1507fd22f!2sParivarthana%20School%20%26%20College!5e0!3m2!1sen!2sin!4v1734246748474!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}
