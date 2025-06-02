import { useFetchGeonamesDetails } from './useFetchGeonamesDetails.js'

// DEV: Modularize later!
function getLocationDescription(entry) {
  if (!entry || !entry.geonamesData) return ''

  const data = entry.geonamesData
  const name = data.name || data.toponymName || ''
  const country = data.countryName || ''
  const admin1 = data.adminName1 || ''
  const fcode = data.fcode || ''
  const fcodeLabel = data.fcodeName || ''

  let description = `${name}`

  // Add feature description (e.g., "city", "municipality") if available
  if (fcode === 'ADM3') {
    description += ', city'
  } else if (fcodeLabel && !fcodeLabel.toLowerCase().includes('country')) {
    description += `, ${fcodeLabel.toLowerCase()}`
  }

  // Add admin1 (e.g., state)
  if (admin1 && admin1 !== name) {
    description += ` in the ${admin1}`
  }

  // Add country (avoid repetition)
  if (country && country !== name && country !== admin1) {
    description += `, in ${country}`
  }

  return description
}
export async function useMapTerm(term) {
  if (!term.geonamesId || !term.geonamesId.length) {
    return term
  }

  const items = await Promise.all(
    term.geonamesId.map(async (id) => {
      const geonamesData = await useFetchGeonamesDetails(id)
      const locationDescription = getLocationDescription({ geonamesData })

      return {
        geonameId: id,
        geonamesData,
        locationDescription,
        infoLabel:
          term.label_en === term.label_de || !term.label_de
            ? term.label_en
            : `${term.label_en} (${term.label_de})`,
        wikidataData: {
          label: term.label,
          label_en: term.label_en || '',
          label_de: term.label_de || '',
          description: term.description || '',
        },
      }
    }),
  )

  return items
}
