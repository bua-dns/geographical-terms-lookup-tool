export async function useFetchGeonamesDetails(geonameId) {
  // const baseUrl = 'https://berlin-university-collections.de/'
  const baseUrl = 'http://localhost:3000'
  const url = `${baseUrl}/api/geonamesbyid?geonameId=${encodeURIComponent(geonameId)}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (err) {
    console.error('Failed to fetch GeoNames details:', err)
    return null
  }
}