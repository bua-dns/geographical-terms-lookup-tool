## Hinweise zur Verwendung

Diese Anwendung erlaubt die gezielte Suche nach Ortsnamen und die Anzeige zugehöriger GeoNames-IDs.

Die Abfrage erfolgt über zwei Schritte:

* **Vorschläge** werden über die [Wikidata Search API](https://www.wikidata.org/w/api.php) (wbsearchentities) geladen.
* Für die **Anreicherung** (z. B. mit GeoNames-ID – P1566) wird eine **SPARQL-Anfrage** an den Wikidata-Endpunkt gesendet.

Es handelt sich um eine **live-basierte Lösung**: Es wird keine statische Datensammlung verwendet. Die Daten werden in Echtzeit aus Wikidata abgerufen.
