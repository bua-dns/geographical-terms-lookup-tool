export async function useMapTerm(term) {
    if (!term.geonamesId || !term.geonamesId.length) {
        return term;
    }
    let items = term.geonamesId.map((id) => {
        return {
            geonameId: id,
            wikidataData: { 
                label: term.label,
                label_en: term.label_en || '',
                label_de: term.label_de || '',
                description: term.description || '',
            }
        };
    });
    return items
}