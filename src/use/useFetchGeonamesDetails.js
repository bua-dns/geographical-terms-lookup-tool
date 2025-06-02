export async function useFetchGeonamesDetails(geonameId) {
  const url = `http://localhost:3000/api/geonamesbyid?geonameId=${encodeURIComponent(geonameId)}`

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