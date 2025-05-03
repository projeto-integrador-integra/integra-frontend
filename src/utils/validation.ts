export function isValidUrl(url: string) {
  try {
    new URL(url)
    return true
  } catch (e) {
    console.error('Invalid URL:', e)
    return false
  }
}
