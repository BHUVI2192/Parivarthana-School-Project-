export type AdmissionFormData = {
  name: string
  email: string
  phone: string
  course: string
  message?: string
}

// Your Google Apps Script Web App URL
const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzGI-JwKSzUWWOB5QNpJ6ADPux9I4scp9nEjnjgEXQwrzrZV352bt8b_LeZdN4lL6C1YA/exec'

/**
 * Submits form data to the Google Apps Script Web App which writes a row
 * into the connected Google Sheet.
 *
 * Uses application/x-www-form-urlencoded with no-cors:
 *  - "Simple" content-type → no CORS preflight needed
 *  - Request IS delivered to Apps Script (we just can't read the response)
 *  - Works from localhost AND production
 */
export async function submitFormToGoogleSheets(
  data: AdmissionFormData
): Promise<void> {
  const params = new URLSearchParams({
    name: data.name,
    email: data.email,
    phone: data.phone,
    course: data.course,
    message: data.message ?? '',
  })

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // opaque response — but request IS sent & received
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    })
  } catch (err) {
    // Network error (e.g. offline). Re-throw so callers can handle it.
    throw err
  }
}
