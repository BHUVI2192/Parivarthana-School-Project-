import { useEffect } from 'react'
import '../styles/Gallery.css'

export default function GalleryPage() {
  useEffect(() => {
    document.title = "Gallery | Parivarthana Residential School and PU College"
  }, [])

  const images = [
    "/images/WhatsAppImage2024-07-22at8.40.08PM.jpeg",
    "/images/DSCN0712-1.jpg",
    "/images/WhatsAppImage2024-07-22at8.40.08PM.jpeg",
    "/images/IMG_20220707_122745.jpg",
    "/images/IMG_9650.JPG",
    "/images/IMG_9723.JPG",
    "/images/DSCN9887.JPG",
    "/images/DSCN9610.JPG",
    "/images/DSCN9633.JPG",
    "/images/IMG_3657-Copy.jpg",
    "/images/IMG_3790.jpg",
    "/images/DSCN0069.JPG",
    "/images/DSCN0058.JPG",
    "/images/DSCN0164.JPG",
    "/images/DSCN9499.JPG",
    "/images/DSCN9575.JPG",
    "/images/DSCN1157.JPG",
    "/images/DSCN9210.JPG",
    "/images/DSCN1194.JPG"
  ]

  return (
    <main className="gallery-page">
      <section className="skrollable skrollable-between u-align-center u-clearfix u-container-align-center u-image u-parallax u-shading u-section-1" id="sec-b4ad" style={{ backgroundImage: 'url("/images/img3.jpg")' }}>
        <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-xl u-sheet-1">
          <h1 className="u-align-center u-custom-font u-heading-font u-text u-text-default u-text-1"> Gallery</h1>
        </div>
      </section>

      <section className="u-clearfix u-custom-color-7 u-section-2" id="carousel_3d1a">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-expanded-width u-gallery u-layout-grid u-lightbox u-show-text-on-hover u-gallery-1">
            <div className="u-gallery-inner u-gallery-inner-1">
              {images.map((src, idx) => (
                <div key={idx} className="u-effect-hover-zoom u-gallery-item">
                  <div className="u-back-slide">
                    <img className="u-back-image u-expanded" src={src} alt={`Gallery item ${idx + 1}`} />
                  </div>
                  <div className="u-over-slide u-shading"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
