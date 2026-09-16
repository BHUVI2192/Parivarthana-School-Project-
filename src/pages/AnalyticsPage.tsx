import { useEffect } from 'react'
import '../styles/Analytics.css'

export default function AnalyticsPage() {
  useEffect(() => {
    document.title = "Analytics | Parivarthana Residential School and PU College"
  }, [])

  return (
    <main className="analytics-page">
      <section className="u-align-center u-clearfix u-container-align-center u-section-1" id="carousel_c500">
        <div className="u-clearfix u-sheet u-sheet-1" style={{ minHeight: '500px', padding: '40px 0' }}>
          <div className="container" style={{ maxWidth: '1000px', margin: 'auto', background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>Website Analytics Dashboard</h2>
            
            <div className="stats" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
              <div className="stat-box" style={{ flex: '1', minWidth: '250px', background: '#007bff', color: 'white', padding: '25px', borderRadius: '10px', textAlign: 'center', boxShadow: '0px 3px 8px rgba(0,0,0,0.2)' }}>
                <h3 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>12,450</h3>
                <p style={{ margin: 0, fontSize: '1rem' }}>Total Page Views</p>
              </div>
              <div className="stat-box" style={{ flex: '1', minWidth: '250px', background: '#28a745', color: 'white', padding: '25px', borderRadius: '10px', textAlign: 'center', boxShadow: '0px 3px 8px rgba(0,0,0,0.2)' }}>
                <h3 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>2m 45s</h3>
                <p style={{ margin: 0, fontSize: '1rem' }}>Avg. Time Spent</p>
              </div>
              <div className="stat-box" style={{ flex: '1', minWidth: '250px', background: '#fd7e14', color: 'white', padding: '25px', borderRadius: '10px', textAlign: 'center', boxShadow: '0px 3px 8px rgba(0,0,0,0.2)' }}>
                <h3 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>4,890</h3>
                <p style={{ margin: 0, fontSize: '1rem' }}>Link Clicks</p>
              </div>
            </div>

            <div className="chart-container" style={{ marginTop: '40px', padding: '20px', background: '#f8f9fa', borderRadius: '10px' }}>
              <h3 style={{ color: '#495057', marginBottom: '15px' }}>Visitors by Location</h3>
              <div style={{ padding: '20px', textAlign: 'center', color: '#6c757d' }}>
                <p>Bengaluru (45%) • Mysuru (30%) • Mandya (15%) • Others (10%)</p>
              </div>
            </div>

            <div className="chart-container" style={{ marginTop: '20px', padding: '20px', background: '#f8f9fa', borderRadius: '10px' }}>
              <h3 style={{ color: '#495057', marginBottom: '15px' }}>Top Traffic Sources</h3>
              <div style={{ padding: '20px', textAlign: 'center', color: '#6c757d' }}>
                <p>Direct (50%) • Search (35%) • Social Media (15%)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
