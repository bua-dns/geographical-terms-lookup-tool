import { useFetchGeonamesDetails } from './useFetchGeonamesDetails.js'
import { fetchWikidataStatements } from './useFetchWikidataStatements.js'

function getLocationDescription(entry) {
  if (!entry || !entry.geonamesData) return ''

  const data = entry.geonamesData
  const name = data.name || data.toponymName || ''
  const country = data.countryName || ''
  const admin1 = data.adminName1 || ''
  const fcode = data.fcode || ''
  const fcodeLabel = data.fcodeName || ''

  let description = `${name}`

  if (fcode === 'ADM3') {
    description += ', city'
  } else if (fcodeLabel && !fcodeLabel.toLowerCase().includes('country')) {
    description += `, ${fcodeLabel.toLowerCase()}`
  }

  if (admin1 && admin1 !== name) {
    description += ` in the ${admin1}`
  }

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

      const item = {
        geonameId: id,
        geonamesData,
        locationDescription,
        infoLabel:
          term.label_en === term.label_de || !term.label_de
            ? term.label_en
            : `${term.label_en} (${term.label_de})`,
        wikidataData: {
          id: term.id,
          label: term.label,
          label_en: term.label_en || '',
          label_de: term.label_de || '',
          description: term.description || '',
        },
      }

      // 🔍 Enrich with Wikidata statements
      const qid = term.id
      const props = ['P227', 'P1036', 'P6265']

      if (qid) {
        try {
          const results = await fetchWikidataStatements([qid], props)
          const enriched = results[0]

          if (enriched) {
            item.wikidataData.gndId = enriched.P227?.[0] || null
            item.wikidataData.deweyId = enriched.P1036?.[0] || null
            item.wikidataData.mindatLocationId = enriched.P6265?.[0] || null
          }
        } catch (err) {
          console.warn(`Failed to fetch Wikidata enrichment for ${qid}:`, err)
        }
      }

      return item
    })
  )

  return items
}
