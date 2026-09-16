import { useEffect } from 'react'
import '../styles/virtual-tour.css'

const TOUR_URL = '/360virtualtour/index.html'

export default function VirtualTourPage() {
  const tourUrl = `${TOUR_URL}${window.location.hash}`

  useEffect(() => {
    document.title = '360° Virtual Tour | Parivarthana Residential School and PU College'
  }, [])

  return (
    <main className="virtual-tour-page" aria-label="Parivarthana 360 degree virtual tour">
      <iframe
        className="virtual-tour-frame"
        src={tourUrl}
        title="Parivarthana School 360° Virtual Tour"
        allow="fullscreen; autoplay; xr-spatial-tracking"
        allowFullScreen
      />
    </main>
  )
}
