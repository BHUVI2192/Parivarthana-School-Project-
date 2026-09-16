import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="u-align-center u-clearfix u-section-1" style={{ padding: '120px 20px' }}>
      <div className="u-sheet">
        <p className="u-text u-text-custom-color-4" style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}>Page not found</p>
        <h1 className="u-text" style={{ margin: '12px 0 20px' }}>We could not find that page.</h1>
        <p className="u-text" style={{ maxWidth: '560px', margin: '0 auto 28px' }}>
          The page may have moved, but the rest of the Parivarthana website is still available.
        </p>
        <Link to="/" className="u-btn u-btn-round u-button-style u-custom-color-5 u-radius">
          Return home
        </Link>
      </div>
    </section>
  )
}
