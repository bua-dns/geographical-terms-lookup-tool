export function useMapForCsvDownload(item) {
    const data = {
        place: item.infoLabel || '',
        placeDescription: item.locationDescription || '',
        gndId: item.gndId || '',
        gndLink: item.gndId ? `https://d-nb.info/gnd/${item.gndId}` : '',
        geonameId: item.geonameId || '',
        geonameLink: item.geonameId ? `https://www.geonames.org/${item.geonameId}` : '',
        wikidataId: item.wikidataData?.id || '',
        wikidataLink: item.wikidataData?.id ? `https://www.wikidata.org/wiki/${item.wikidataData.id}` : '',
        mindatId: item.mindatId || '',
        mindatLink: item.mindatId ? `https://www.mindat.org/loc-${item.mindatId}.html` : '',
        deweyId: item.deweyId || '',
        deweyLink: item.deweyId ? `https://dewey.info/class/${item.deweyId}/` : '',
        latitude: item.geonamesData?.lat || '',
        longitude: item.geonamesData?.lng || '',
        country: item.geonamesData?.countryCode || '',
    };
    return data;
}
