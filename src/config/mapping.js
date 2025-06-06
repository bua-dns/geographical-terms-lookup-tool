/* mapping for items
each field needs to have the following properties:
- type: "metadatum" or "image-info"
- position: number, determines the order of the fields in the detail view
- field: the name of the field in the data
- label: the label to be displayed in the detail view
- ignore: boolean, if true the field will not be displayed in the detail view
- useForSearch: boolean, if true the field will be used for the search

fieldMapping holds the functions that can be used to manipulate the value of a specific
field before it is displayed in the detail view
*/

export const mapping = {
  id: {
    type: "metadatum",
    position: 1000,
    field: "id",
    label: "label",
    ignore: true,
    useForSearch: false,
  },
  generisch: {
    type: "metadatum",
    position: 1000,
    field: "generisch",
    label: "label",
    ignore: true,
    useForSearch: false,
  },
  objekt: {
    type: "metadatum",
    position: 10,
    field: "object",
    label: "Objekt",
    ignore: false,
    useForSearch: true,
  },
  inventarnummer: {
    type: "metadatum",
    position: 20,
    field: "inventory_number",
    label: "Inventarnummer",
    ignore: false,
    useForSearch: true,
  },
  "ak-number": {
    type: "metadatum",
    position: 30,
    field: "ak_number",
    label: "AK-Nummer",
    ignore: false,
    useForSearch: true,
  },
  identifikationsnummer: {
    type: "metadatum",
    position: 1000,
    field: "id_numner",
    label: "Identifikationsnummer",
    ignore: false,
    useForSearch: true,
  },
  herkunft: {
    type: "metadatum",
    position: 40,
    field: "origin",
    label: "Herkunft",
    ignore: false,
    useForSearch: false,
  },
  datierung: {
    type: "metadatum",
    position: 50,
    field: "date",
    label: "Datierung",
    ignore: false,
    useForSearch: false,
  },
  "foto-anzahl": {
    type: "image-info",
    position: 1000,
    field: "number_of_pictures",
    ignore: true,
    useForSearch: false,
  },
  masse: {
    type: "metadatum",
    position: 60,
    field: "dimensions",
    label: "Abmessungen",
    ignore: false,
    useForSearch: false,
  },
  fundort: {
    type: "metadatum",
    position: 70,
    field: "site",
    label: "Fundort",
    ignore: false,
    useForSearch: true,
  },
  "fundort-wikidata": {
    type: "metadatum",
    position: 80,
    field: "site_wikidata_id",
    label: "Fundort Wikidata",
    ignore: false,
    useForSearch: false,
  },
  versicherungswert: {
    type: "metadatum",
    position: 1000,
    field: "insurance_value",
    label: "Versicherungswert",
    ignore: false,
    useForSearch: false,
  },
  provenienz: {
    type: "metadatum",
    position: 90,
    field: "provenance",
    label: "Provenienz",
    ignore: false,
    useForSearch: false,
  },
  beschreibung: {
    type: "metadatum",
    position: 100,
    field: "description",
    label: "Beschreibung",
    ignore: false,
    useForSearch: false,
  },
  restaurierung: {
    type: "metadatum",
    position: 110,
    field: "restauration_note",
    label: "label",
    ignore: false,
    useForSearch: false,
  },
  bearbeitung: {
    type: "metadatum",
    position: 200,
    field: "edited_by",
    label: "Bearbeitung durch",
    ignore: false,
    useForSearch: false,
  },
  stand: {
    type: "metadatum",
    position: 210,
    field: "editing_status",
    label: "Stand der Bearbeitung",
    ignore: false,
    useForSearch: false,
  },
  standort: {
    type: "metadatum",
    position: 120,
    field: "location",
    label: "Standort",
    ignore: false,
    useForSearch: false,
  },
  "publiziert-in": {
    type: "metadatum",
    position: 130,
    field: "published_in",
    label: "Publiziert in",
    ignore: false,
    useForSearch: false,
  },
  "abbildung-1": {
    type: "image-info",
    position: 1000,
    field: "illustration-1",
    ignore: false,
    useForSearch: false,
  },
  "abbildung-2": {
    type: "image-info",
    position: 1000,
    field: "illustration-2",
    ignore: false,
    useForSearch: false,
  },
  "abbildung-3": {
    type: "image-info",
    position: 1000,
    field: "illustration-3",
    ignore: false,
    useForSearch: false,
  },
  "abbildung-4": {
    type: "image-info",
    position: 1000,
    field: "illustration-4",
    ignore: false,
    useForSearch: false,
  },
  "abbildung-5": {
    type: "image-info",
    position: 1000,
    field: "illustration-5",
    ignore: false,
    useForSearch: false,
  },
  "abbildung-6": {
    type: "image-info",
    position: 1000,
    field: "illustration-6",
    ignore: false,
    useForSearch: false,
  },
  "abbildung-7": {
    type: "image-info",
    position: 1000,
    field: "illustration-7",
    ignore: false,
    useForSearch: false,
  },
  "abbildung-8": {
    type: "image-info",
    position: 1000,
    field: "illustration-8",
    ignore: false,
    useForSearch: false,
  },
  "abbildung-9": {
    type: "image-info",
    position: 1000,
    field: "illustration-9",
    ignore: false,
    useForSearch: false,
  },
  "abbildung-10": {
    type: "image-info",
    position: 1000,
    field: "illustration-10",
    ignore: false,
    useForSearch: false,
  },
  "abbildung-11": {
    type: "image-info",
    position: 1000,
    field: "illustration-11",
    ignore: false,
    useForSearch: false,
  },
  "abbildung-12": {
    type: "image-info",
    position: 1000,
    field: "illustration-12",
    ignore: false,
    useForSearch: false,
  },
  published_at: {
    type: "metadatum",
    position: 1000,
    field: "published_at",
    ignore: true,
    useForSearch: false,
  },
  created_at: {
    type: "metadatum",
    position: 1000,
    field: "created_at",
    ignore: true,
    useForSearch: false,
  },
  updated_at: {
    type: "metadatum",
    position: 1000,
    field: "updated_at",
    ignore: true,
    useForSearch: false,
  },
}


export const fieldMapping = {
  'publiziert-in': (value) => {
    return value.replace(/\//gm, '')
  },
}