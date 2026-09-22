export type AdmissionFormData = {
  name: string
  email: string
  phone: string
  course: string
  message?: string
}

export async function submitFormToGoogleSheets(data: AdmissionFormData) {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeb5i_j1Hh0qoVmqJOoDcfKBVJVvrYZ5h6hlqPhpKT4PIkTWA/formResponse"

  const formData = new FormData()
  formData.append("entry.1374393062", data.name)
  formData.append("entry.1240529660", data.email)
  formData.append("entry.954636670", data.phone)
  formData.append("entry.1687841758", data.course + (data.message ? ` | Note: ${data.message}` : ''))

  try {
    await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
  } catch (err) {
    console.warn("Google form submission error:", err)
  }
}
