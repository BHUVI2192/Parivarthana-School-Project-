export type AdmissionFormData = {
  name: string
  email: string
  phone: string
  course: string
  message?: string
}

// Google Apps Script Web App — writes directly to the Google Sheet
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMmzDmZlmo3tfhvd6CgmEHEN2Hed216e1Oixaqdf2_QQRDtmEB0BpseiD_B6D36aX5Vw/exec"

export async function submitFormToGoogleSheets(data: AdmissionFormData) {
  const params = new URLSearchParams()
  params.append("name", data.name)
  params.append("email", data.email)
  params.append("phone", data.phone)
  params.append("course", data.course)
  params.append("message", data.message || '')

  // Submit via hidden iframe so it bypasses CORS/no-cors opaque response issues
  const iframeName = 'gform_' + Math.random().toString(36).substring(2, 8)
  const iframe = document.createElement('iframe')
  iframe.name = iframeName
  iframe.style.display = 'none'
  document.body.appendChild(iframe)

  const form = document.createElement('form')
  form.action = APPS_SCRIPT_URL
  form.method = 'POST'
  form.target = iframeName

  params.forEach((val, key) => {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = key
    input.value = val
    form.appendChild(input)
  })

  document.body.appendChild(form)
  form.submit()

  setTimeout(() => {
    form.remove()
    iframe.remove()
  }, 5000)
}
