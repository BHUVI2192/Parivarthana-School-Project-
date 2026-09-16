import { useEffect } from 'react'
import '../styles/Admission_Page.css'
import '../styles/AdmissionsPage-extra.css'

export default function AdmissionsPage() {
  useEffect(() => {
    document.title = "Admissions | Parivarthana Residential School and PU College"
  }, [])

  return (
    <main className="admissions-page">
      <section className="u-align-center u-clearfix u-container-align-center u-section-1" id="block-1">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="data-layout-selected u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-align-left u-container-align-left u-container-style u-image u-layout-cell u-left-cell u-size-30 u-size-xs-60 u-image-1" style={{ backgroundImage: 'url("/images/DSC_0129-scaled.jpg")' }}>
                  <div className="u-container-layout u-valign-middle u-container-layout-1"></div>
                </div>
                <div className="u-align-left u-container-align-left u-container-style u-custom-color-5 u-layout-cell u-right-cell u-size-30 u-size-xs-60 u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-2">
                    <div className="u-clearfix u-custom-html u-expanded-width u-custom-html-1">
                      <div className="container" style={{ padding: '20px' }}>
                        <div className="form-container" style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
                          <div className="form-header" style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <h2>Admission Enquiry Form</h2>
                          </div>
                          <form action="https://docs.google.com/forms/d/e/1FAIpQLSeb5i_j1Hh0qoVmqJOoDcfKBVJVvrYZ5h6hlqPhpKT4PIkTWA/formResponse" id="admissionForm" method="POST" target="_blank">
                            <div className="mb-3" style={{ marginBottom: '15px' }}>
                              <label htmlFor="name" className="form-label" style={{ display: 'block', fontWeight: 'bold' }}>Name</label>
                              <input type="text" className="form-control" id="name" name="entry.1374393062" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                            </div>
                            <div className="mb-3" style={{ marginBottom: '15px' }}>
                              <label htmlFor="email" className="form-label" style={{ display: 'block', fontWeight: 'bold' }}>Email Id</label>
                              <input type="email" className="form-control" id="email" name="entry.1240529660" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                            </div>
                            <div className="mb-3" style={{ marginBottom: '15px' }}>
                              <label htmlFor="contact" className="form-label" style={{ display: 'block', fontWeight: 'bold' }}>Contact Number</label>
                              <input type="tel" className="form-control" id="contact" name="entry.954636670" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                            </div>
                            <div className="mb-3" style={{ marginBottom: '15px' }}>
                              <label htmlFor="course" className="form-label" style={{ display: 'block', fontWeight: 'bold' }}>Course</label>
                              <select className="form-select" id="course" name="entry.1687841758" required style={{ width: '100%', padding: '8px', marginTop: '5px' }}>
                                <option value="">Select a course</option>
                                <option value="Primary School">Primary School</option>
                                <option value="Middle School">Middle School</option>
                                <option value="High School">High School</option>
                                <option value="PUC">PUC</option>
                              </select>
                            </div>
                            <input type="hidden" name="fvv" value="1" />
                            <input type="hidden" name="fbzx" value="6705197028303110673" />
                            <input type="hidden" name="pageHistory" value="0" />
                            <button type="submit" className="u-btn u-button-style u-custom-color-3" style={{ width: '100%', padding: '10px', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
                          </form>
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

      <section className="u-align-center u-clearfix u-container-align-center u-custom-color-3 u-section-2" id="sec-1a6b">
        <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-xl u-sheet-1">
          <h2 className="u-text u-text-1">How to apply? </h2>
          <p className="u-text u-text-2"> Our application process is simple and streamlined, allowing students to easily submit their details and track their progress through a secure online portal.<br />
          </p>
          <div className="data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-size-11-lg u-size-11-xl u-size-14-md u-size-14-sm u-size-14-xs u-layout-cell-1">
                  <div className="u-container-layout u-valign-top u-container-layout-1">
                    <h5 className="u-align-center u-text u-text-3">step 1</h5>
                    <p className="u-align-center u-text u-text-4">
                      <span style={{ fontWeight: 700 }}>Enter your email:</span>&nbsp;<br />Begin by entering your email address on the application portal to start the process.
                    </p>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-size-12-lg u-size-12-xl u-size-16-md u-size-16-sm u-size-16-xs u-layout-cell-3">
                  <div className="u-container-layout u-valign-top u-container-layout-3">
                    <h5 className="u-align-center u-text u-text-5">step 2</h5>
                    <p className="u-align-center u-text u-text-6">
                      <span style={{ fontWeight: 700 }}> Verify your details:</span>&nbsp;<br />Check your email for a verification link to confirm your email address and continue with the application.
                    </p>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-size-13-lg u-size-13-xl u-size-16-md u-size-16-sm u-size-16-xs u-layout-cell-5">
                  <div className="u-container-layout u-valign-top u-container-layout-5">
                    <h5 className="u-align-center u-text u-text-7">step 3</h5>
                    <p className="u-align-center u-text u-text-8">
                      <span style={{ fontWeight: 700 }}> Fill out the application form</span>: Complete the form with personal, educational, and parent/guardian details, and upload required documents like school reports and photos.
                    </p>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-size-12-lg u-size-12-xl u-size-14-md u-size-14-sm u-size-14-xs u-layout-cell-7">
                  <div className="u-container-layout u-valign-top u-container-layout-7">
                    <h5 className="u-align-center u-text u-text-9">step 4</h5>
                    <p className="u-align-center u-text u-text-10">
                      <span style={{ fontWeight: 700 }}> Submit your application:</span>&nbsp;<br />Review your information, submit the form, and track your application status for updates and further instructions.
                    </p>
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
