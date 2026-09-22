import { useState, useEffect } from 'react'
import { submitFormToGoogleSheets } from './utils/formSubmit'

export function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value
    const course = (form.elements.namedItem('course') as HTMLSelectElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || ''

    await submitFormToGoogleSheets({ name, email, phone, course, message })

    setLoading(false)
    setSubmitted(true)
    sessionStorage.setItem('parivarthana_popup_dismissed', 'true')

    setTimeout(() => {
      setIsOpen(false)
    }, 4000)
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close modal" onClick={handleClose}>
          ✕
        </button>
        {submitted ? (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <h3>Enquiry Submitted Successfully!</h3>
            <p>Thank you for reaching out to Parivarthana School & PU College. Our admissions team will get in touch with you shortly.</p>
            <button className="modal-submit" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <span className="eyebrow">ADMISSIONS OPEN 2025–26</span>
              <h2>Admission Enquiry</h2>
              <p>Give your child room to grow. Enquire today for admissions at Parivarthana Residential School & PU College.</p>
            </div>
            <form className="modal-form" onSubmit={handleSubmit}>
              <label>
                Student / Parent Name *
                <input name="name" type="text" placeholder="Enter full name" required />
              </label>
              <label>
                Email ID *
                <input name="email" type="email" placeholder="name@example.com" required />
              </label>
              <label>
                Contact Number *
                <input name="phone" type="tel" placeholder="10-digit mobile number" required />
              </label>
              <label>
                Grade / Course Seeking *
                <select name="course" required>
                  <option value="">Select a program</option>
                  <option value="Primary School (Class 1-5)">Primary School (Class 1 - 5)</option>
                  <option value="Middle School (Class 6-8)">Middle School (Class 6 - 8)</option>
                  <option value="High School (Class 9-10)">High School (Class 9 - 10)</option>
                  <option value="PUC Science (Integrated)">PUC Science (Integrated)</option>
                  <option value="PUC Commerce (Integrated)">PUC Commerce (Integrated)</option>
                </select>
              </label>
              <label>
                Message / Query (Optional)
                <textarea name="message" rows={3} placeholder="Any specific queries or details..." />
              </label>
              <button className="modal-submit" type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Admission Enquiry →'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
