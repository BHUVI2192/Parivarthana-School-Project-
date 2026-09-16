import { useState, useRef } from 'react'

const PV_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyX-loHU8HlYvHH_PiRHGdClInw-KijyrZIBmRgr9LgqBKp_HAm1BzQZOTjYIP3nZwf/exec'

interface FieldState {
  name: string
  email: string
  contact: string
  course: string
}

interface ErrorState {
  name: boolean
  email: boolean
  contact: boolean
  course: boolean
}

interface StepState {
  name: 'active' | 'done' | ''
  email: 'active' | 'done' | ''
  contact: 'active' | 'done' | ''
  course: 'active' | 'done' | ''
}

interface AdmissionModalProps {
  onClose: () => void
}

export default function AdmissionModal({ onClose }: AdmissionModalProps) {
  const [fields, setFields] = useState<FieldState>({ name: '', email: '', contact: '', course: '' })
  const [errors, setErrors] = useState<ErrorState>({ name: false, email: false, contact: false, course: false })
  const [steps, setSteps] = useState<StepState>({ name: 'active', email: '', contact: '', course: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formError, setFormError] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^[0-9+\s\-]{7,15}$/

  function updateSteps(updated: FieldState) {
    const checks = {
      name: updated.name.trim() !== '',
      email: emailRegex.test(updated.email.trim()),
      contact: phoneRegex.test(updated.contact.trim()),
      course: updated.course !== '',
    }
    const keys = ['name', 'email', 'contact', 'course'] as const
    let firstIncomplete = true
    const newSteps = { name: '' as StepState['name'], email: '' as StepState['email'], contact: '' as StepState['contact'], course: '' as StepState['course'] }
    for (const k of keys) {
      if (checks[k]) {
        newSteps[k] = 'done'
      } else if (firstIncomplete) {
        newSteps[k] = 'active'
        firstIncomplete = false
      }
    }
    setSteps(newSteps)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    const updated = { ...fields, [name]: value }
    setFields(updated)
    updateSteps(updated)
  }

  function validate(): boolean {
    const nOk = fields.name.trim() !== ''
    const eOk = emailRegex.test(fields.email.trim())
    const cOk = phoneRegex.test(fields.contact.trim())
    const sOk = fields.course !== ''
    setErrors({ name: !nOk, email: !eOk, contact: !cOk, course: !sOk })
    return nOk && eOk && cOk && sOk
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormError('')
    if (!validate()) return
    setSubmitting(true)
    const payload = {
      Name: fields.name.trim(),
      Email: fields.email.trim(),
      Contact: fields.contact.trim(),
      Course: fields.course,
    }
    const formBody = new URLSearchParams(payload).toString()
    try {
      await fetch(PV_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody,
      })
      setSuccess(true)
    } catch {
      setFormError('Something went wrong. Please try again or call +91 9980656888.')
      setSubmitting(false)
    }
  }

  function stepClass(k: keyof StepState) {
    return `pv-step${steps[k] ? ' ' + steps[k] : ''}`
  }

  return (
    <section
      className="u-align-center u-black u-clearfix u-container-align-center u-container-style u-dialog-block u-opacity u-opacity-70 u-valign-middle u-dialog-section-13"
      id="sec-0a4a"
    >
      <div className="u-align-center u-container-align-center u-container-style u-dialog u-radius-13 u-shape-round u-white u-dialog-1">
        <div className="u-container-layout u-container-layout-1">
          <div className="pv-form-wrap">
            {/* Card Header */}
            <div className="pv-card-header">
              <div className="pv-school-badge">
                <div className="pv-badge-dot"></div>
                <span className="pv-school-name">Parivarthana Residential School &amp; PU College</span>
              </div>
              <h2>Admission <em>Enquiry</em></h2>
              <p>Academic Year 2026–2027 &nbsp;·&nbsp; Applications now open</p>
            </div>

            {/* Card Body */}
            <div className="pv-card-body">
              <div className="pv-steps">
                <div className={stepClass('name')} id="pvS1"></div>
                <div className={stepClass('email')} id="pvS2"></div>
                <div className={stepClass('contact')} id="pvS3"></div>
                <div className={stepClass('course')} id="pvS4"></div>
              </div>

              {formError && (
                <div className="pv-form-error" style={{ display: 'block' }}>
                  {formError}
                </div>
              )}

              {!success ? (
                <form ref={formRef} onSubmit={handleSubmit} noValidate>
                  <div className="pv-form-row">
                    <label htmlFor="pvName">Full Name</label>
                    <input
                      type="text"
                      id="pvName"
                      name="name"
                      placeholder="e.g. Ravi Kumar"
                      required
                      autoComplete="name"
                      value={fields.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="pv-field-error" style={{ display: 'block' }}>Please enter your full name.</div>}
                  </div>
                  <div className="pv-form-row">
                    <label htmlFor="pvEmail">Email Address</label>
                    <input
                      type="email"
                      id="pvEmail"
                      name="email"
                      placeholder="you@example.com"
                      required
                      autoComplete="email"
                      value={fields.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="pv-field-error" style={{ display: 'block' }}>Please enter a valid email address.</div>}
                  </div>
                  <div className="pv-form-row">
                    <label htmlFor="pvContact">Contact Number</label>
                    <input
                      type="tel"
                      id="pvContact"
                      name="contact"
                      placeholder="+91 98765 43210"
                      required
                      autoComplete="tel"
                      pattern="[0-9+\s\-]{7,15}"
                      value={fields.contact}
                      onChange={handleChange}
                    />
                    {errors.contact && <div className="pv-field-error" style={{ display: 'block' }}>Please enter a valid contact number.</div>}
                  </div>
                  <div className="pv-form-row">
                    <label htmlFor="pvCourse">Programme</label>
                    <div className="pv-select-wrap">
                      <select
                        id="pvCourse"
                        name="course"
                        required
                        value={fields.course}
                        onChange={handleChange}
                      >
                        <option value="">Select a programme…</option>
                        <option value="Primary School">Primary School (Class 1–5)</option>
                        <option value="Middle School">Middle School (Class 6–8)</option>
                        <option value="High School">High School (Class 9–10)</option>
                        <option value="PUC">PU College (Class 11–12)</option>
                      </select>
                    </div>
                    {errors.course && <div className="pv-field-error" style={{ display: 'block' }}>Please select a programme.</div>}
                  </div>
                  <button type="submit" className="pv-btn-submit" id="pvSubmitBtn" disabled={submitting}>
                    <span className="pv-spinner" id="pvSpinner" style={{ display: submitting ? 'inline-block' : 'none' }}></span>
                    <span id="pvBtnText">{submitting ? 'Submitting…' : 'Submit Enquiry'}</span>
                  </button>
                </form>
              ) : (
                <div className="pv-success" style={{ display: 'block' }}>
                  <div className="pv-success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3>Enquiry Received!</h3>
                  <p>Thank you. Our admissions team will reach out within <strong>1–2 working days</strong>.</p>
                </div>
              )}

              <p className="pv-form-note">Your information is kept private and used only to process your enquiry.</p>
            </div>
          </div>
        </div>
        <button className="u-dialog-close-button u-icon u-icon-1" onClick={onClose} aria-label="Close admission enquiry form">
          <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 329.26933 329">
            <use xlinkHref="#svg-modal-close"></use>
          </svg>
          <svg className="u-svg-content" viewBox="0 0 329.26933 329" id="svg-modal-close">
            <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"></path>
          </svg>
        </button>
      </div>
    </section>
  )
}
