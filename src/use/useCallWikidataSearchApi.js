// /use/useCallWikidataSearchApi.js
import { fetchWikidataStatements } from './useFetchWikidataStatements.js';

const P_GEONAMES = 'P1566';

function buildWikidataSearchUrl(query, config = {}) {
  const defaultParams = {
    action: "wbsearchentities",
    search: query,
    language: "en",
    limit: 100,
    format: "json",
    origin: "*",
  };

  const params = new URLSearchParams({ ...defaultParams, ...config });
  return `https://www.wikidata.org/w/api.php?${params.toString()}`;
}

export async function fetchWikidataSearchResults(query = "berlin", config = {}) {
  const url = buildWikidataSearchUrl(query, config);

  try {
    // Step 1: Search base entities
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const baseResults = data.search.map(item => ({
      id: item.id,
      label: item.label,
      description: item.description || '',
    }));

    const qids = baseResults.map(r => r.id);

    // Step 2: Fetch geonamesId(s) from SPARQL
    const enrichedData = await fetchWikidataStatements(qids, [P_GEONAMES]);
    const enrichedMap = Object.fromEntries(enrichedData.map(e => [e.id, e]));

    // Step 3: Merge and filter
    const finalResults = baseResults
      .map(result => ({
        ...result,
        geonamesId: enrichedMap[result.id]?.[P_GEONAMES] || [],
      }))
      .filter(result => result.geonamesId.length > 0); // 🚨 Only include those with GeoNames ID(s)

    return finalResults;
  } catch (error) {
    console.error("Wikidata API error:", error);
    return [];
  }
}
