import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Search-Page-Template.css'

export default function SearchPage() {
  const [query, setQuery] = useState('')

  useEffect(() => {
    document.title = "Search Results | Parivarthana Residential School and PU College"
  }, [])

  const sampleResults = [
    { title: "About OSNT Trust", desc: "Learn about Oom Shreenikethana Trust established in 1983...", link: "/about-osnt" },
    { title: "Parivarthana School & PU College", desc: "Explore our academic offerings from Primary to Pre-University...", link: "/school" },
    { title: "Admissions Process", desc: "Find details about admission enquiries, eligibility, and procedures...", link: "/admissions" },
    { title: "Campus Life & Hostels", desc: "Discover our 5-acre campus, dormitories, dining, and sports facilities...", link: "/campus-life" }
  ]

  const filtered = query.trim()
    ? sampleResults.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.desc.toLowerCase().includes(query.toLowerCase()))
    : sampleResults

  return (
    <main className="search-page">
      <section className="u-clearfix u-section-1" id="sec-search" style={{ minHeight: '600px', padding: '40px 0' }}>
        <div className="u-clearfix u-sheet u-sheet-1">
          <h2 className="u-text u-text-default u-text-1">Search Our Website</h2>
          
          <div className="u-search u-search-1" style={{ margin: '20px auto', maxWidth: '600px' }}>
            <input
              type="search"
              className="u-search-input"
              placeholder="Type to search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ width: '100%', padding: '12px 15px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }}
            />
          </div>

          <div className="u-blog u-expanded-width u-blog-1" style={{ marginTop: '30px' }}>
            <div className="u-repeater u-repeater-1" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {filtered.map((item, idx) => (
                <div key={idx} className="u-blog-post u-repeater-item" style={{ padding: '20px', background: '#fff', borderRadius: '8px', border: '1px solid #eee' }}>
                  <h3 className="u-text u-text-2" style={{ margin: '0 0 10px' }}>
                    <Link to={item.link} style={{ color: '#007bff', textDecoration: 'none' }}>{item.title}</Link>
                  </h3>
                  <p className="u-text u-text-3" style={{ margin: 0, color: '#555' }}>{item.desc}</p>
                </div>
              ))}
              {filtered.length === 0 && (
                <p style={{ textAlign: 'center', color: '#888', marginTop: '20px' }}>No results found for "{query}".</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
