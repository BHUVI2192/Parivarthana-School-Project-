import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/School.css'

export default function SchoolPage() {
  useEffect(() => {
    document.title = "School | Parivarthana Residential School and PU College"
  }, [])

  return (
    <main className="school-page">
      <section className="skrollable skrollable-between u-align-center u-clearfix u-container-align-center u-image u-parallax u-shading u-section-1" id="sec-b4ad" style={{ backgroundImage: 'url("/images/DSC_0129-scaled.jpg")' }}>
        <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-xl u-sheet-1">
          <h1 className="u-align-center u-custom-font u-heading-font u-text u-text-default u-text-1"> School</h1>
        </div>
        <div className="custom-expanded u-list u-list-1">
          <div className="u-repeater u-repeater-1">
            <div className="u-container-align-left u-container-style u-list-item u-radius u-repeater-item u-shape-round u-white u-list-item-1">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
                <span className="u-align-left u-file-icon u-icon u-text-custom-color-3 u-icon-1"><img src="/images/12963329-5009a729.png" alt="" /></span>
                <h4 className="u-align-left u-text u-text-custom-color-3 u-text-2">Primary School</h4>
                <p className="u-align-left u-text u-text-custom-color-3 u-text-3"> A foundation for lifelong learning with a focus on curiosity, creativity, and early skill development.</p>
              </div>
            </div>
            <div className="u-container-align-left u-container-style u-list-item u-radius u-repeater-item u-shape-round u-video-cover u-white u-list-item-2">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                <span className="u-align-left u-file-icon u-icon u-text-custom-color-3 u-icon-2"><img src="/images/3564414-192b3a65.png" alt="" /></span>
                <h4 className="u-align-left u-text u-text-custom-color-3 u-text-4">Middle School</h4>
                <p className="u-align-left u-text u-text-custom-color-3 u-text-5"> Encourages hands-on learning, critical thinking, and a balanced approach to academics and extracurriculars.</p>
              </div>
            </div>
            <div className="u-container-align-left u-container-style u-list-item u-radius u-repeater-item u-shape-round u-video-cover u-white u-list-item-3">
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-4">
                <span className="u-align-left u-file-icon u-icon u-text-custom-color-3 u-icon-3"><img src="/images/2103291-dc23da05.png" alt="" /></span>
                <h4 className="u-align-left u-text u-text-custom-color-3 u-text-6">High School</h4>
                <p className="u-align-left u-text u-text-custom-color-3 u-text-7"> Prepares students for board exams and competitive challenges with academic rigor and life skill training.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="u-clearfix u-palette-1-base u-valign-middle u-section-2" id="sec-dd5c">
        <div className="data-layout-selected u-clearfix u-expanded-width u-gutter-0 u-layout-spacing-all u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div className="u-container-style u-custom-color-5 u-layout-cell u-size-31-lg u-size-31-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-1">
                <div className="u-container-layout u-valign-top u-container-layout-1">
                  <h2 className="u-align-left u-text u-text-default u-text-1">Class 1 to 8 </h2>
                  <p className="u-align-left u-text u-text-default u-text-2"> At Parivarthana, we lay a <span style={{ fontWeight: 700 }}>strong academic foundation</span> through the <span style={{ fontWeight: 700 }}>CBSE curriculum</span>, ensuring a well-rounded learning experience. Our <span style={{ fontWeight: 700 }}>interactive and experiential teaching methods</span> encourage curiosity, problem-solving, and independent thinking. With a focus on <span style={{ fontWeight: 700 }}>communication, critical reasoning, and analytical skills,</span> students develop the confidence to excel in their academic journey.<br />
                  </p>
                </div>
              </div>
              <div className="u-container-style u-custom-color-6 u-layout-cell u-shape-rectangle u-size-29-lg u-size-29-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-2">
                <div className="u-container-layout u-container-layout-2">
                  <h2 className="u-align-left u-text u-text-3">Class 9 &amp; 10 </h2>
                  <p className="u-align-left u-text u-text-4"> We offer both <span style={{ fontWeight: 700 }}>CBSE and Karnataka State Syllabus </span>for high school students, allowing them to choose the curriculum that best aligns with their academic goals. Our <span style={{ fontWeight: 700 }}>CBSE program </span>focuses on <span style={{ fontWeight: 700 }}>comprehensive subject knowledge and skill-based learning,</span> equipping students with a strong foundation for higher education and competitive exams. The <span style={{ fontWeight: 700 }}>State Syllabus (Karnataka)</span> follows a <span style={{ fontWeight: 700 }}>structured, exam-oriented approach,</span> ensuring students are well-prepared for state board assessments. With a perfect blend of <span style={{ fontWeight: 700 }}>rigorous academics, conceptual clarity, and real-world applications,</span> students develop the confidence and skills needed to excel in their board exams and future academic pursuits.<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="u-clearfix u-section-3" id="sec-9402">
        <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-sheet-1">
          <div className="data-layout-selected u-clearfix u-expanded-width u-gutter-20 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-col">
                <div className="u-size-30">
                  <div className="u-layout-row">
                    <div className="u-container-align-center-sm u-container-style u-layout-cell u-size-20 u-layout-cell-1">
                      <div className="u-container-layout u-valign-bottom-lg u-valign-bottom-md u-valign-bottom-sm u-valign-bottom-xl u-container-layout-1">
                        <h2 className="u-text u-text-default u-text-1"> Facilities &amp; Infrastructure</h2>
                        <Link to="/campus-life" className="u-align-center-sm u-align-center-xs u-btn u-button-style u-custom-color-3 u-hover-custom-color-5 u-btn-1">Read More</Link>
                      </div>
                    </div>
                    <div className="u-container-align-left u-container-style u-layout-cell u-palette-1-light-3 u-size-20 u-layout-cell-2">
                      <div className="u-container-layout u-container-layout-2">
                        <span className="u-align-left u-file-icon u-icon u-icon-1"><img src="/images/1033285.png" alt="" /></span>
                        <h5 className="u-align-left u-text u-text-default u-text-2">Academic Infrastructure</h5>
                        <ul className="u-align-left u-custom-list u-spacing-10 u-text u-text-default u-text-3">
                          <li style={{ paddingLeft: '10px' }}>State of Art Classrooms</li>
                          <li style={{ paddingLeft: '10px' }}>Library and Reading Program</li>
                          <li style={{ paddingLeft: '10px' }}>Language Labs</li>
                        </ul>
                      </div>
                    </div>
                    <div className="u-container-align-left u-container-style u-layout-cell u-palette-3-light-3 u-size-20 u-layout-cell-3">
                      <div className="u-container-layout u-container-layout-3">
                        <span className="u-align-left u-file-icon u-icon u-icon-2"><img src="/images/6747050.png" alt="" /></span>
                        <h5 className="u-align-left u-text u-text-default u-text-4">State-of-Art Laboratories </h5>
                        <ul className="u-align-left u-custom-list u-spacing-10 u-text u-text-default u-text-5">
                          <li style={{ paddingLeft: '10px' }}>Computer Lab</li>
                          <li style={{ paddingLeft: '10px' }}>Physics Lab</li>
                          <li style={{ paddingLeft: '10px' }}>Chemistry Lab</li>
                        </ul>
                      </div>
                    </div>
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
