export type AdmissionFormData = {
  name: string
  email: string
  phone: string
  course: string
  message?: string
}

export async function submitFormToGoogleSheets(data: AdmissionFormData) {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeb5i_j1Hh0qoVmqJOoDcfKBVJVvrYZ5h6hlqPhpKT4PIkTWA/formResponse"

  const fullCourseNote = data.course + (data.message ? ` | Note: ${data.message}` : '')

  // 1. Submit via hidden iframe form POST (Native browser submission with application/x-www-form-urlencoded)
  try {
    const iframeName = 'hidden_gform_iframe_' + Math.random().toString(36).substring(2, 9)
    const iframe = document.createElement('iframe')
    iframe.name = iframeName
    iframe.style.display = 'none'
    document.body.appendChild(iframe)

    const form = document.createElement('form')
    form.action = GOOGLE_FORM_URL
    form.method = 'POST'
    form.target = iframeName

    const fields: Record<string, string> = {
      'entry.1374393062': data.name,
      'entry.1240529660': data.email,
      'entry.954636670': data.phone,
      'entry.1687841758': fullCourseNote,
    }

    for (const [key, val] of Object.entries(fields)) {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = val
      form.appendChild(input)
    }

    document.body.appendChild(form)
    form.submit()

    setTimeout(() => {
      form.remove()
      iframe.remove()
    }, 3000)
  } catch (err) {
    console.warn("Iframe submit error:", err)
  }

  // 2. Secondary fetch request with x-www-form-urlencoded URLSearchParams
  try {
    const params = new URLSearchParams()
    params.append("entry.1374393062", data.name)
    params.append("entry.1240529660", data.email)
    params.append("entry.954636670", data.phone)
    params.append("entry.1687841758", fullCourseNote)

    await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    })
  } catch (err) {
    console.warn("Fetch submit error:", err)
  }
}
