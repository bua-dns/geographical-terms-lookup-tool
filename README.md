# Anatomical Term Lookup Tool

This web-based tool allows users to search for anatomical terms using a type-ahead input box that suggests results based on a pre-aggregated dataset. Upon selecting a term, users are presented with reference data identifiers, each of which can be copied to the clipboard with a single click.

> This project is part of the **Data Management Lab** of the  
> [Digitales Netzwerk Sammlungen](https://berlin-university-collections.de/)

The tool uses a prebuilt taxonomy file from the [Berlin University Collections public data repository](https://public-files.berlin-university-collections.de/Taxonomies/anatomical-terms.json).

💻 A demo version is available at:  
> [https://bua-dns.github.io/anatomy-terms-lookup-tool/](https://bua-dns.github.io/anatomy-terms-lookup-tool/)

## ✨ Features

- 🔎 **Live search with autosuggestions** based on anatomical terms
- 📋 **Display of reference IDs** (UBERON, TA2, Wikidata)
- ✅ **Clipboard buttons** to copy each reference ID easily

## 📦 Installation

```bash
pnpm install
pnpm run dev
```

## 📁 Project Structure

- `App.vue`: Root component that handles loading the JSON and displaying the main layout
- `components/SearchBox.vue`: Input field with autosuggest and selection handling

## 📄 Data Source

The anatomical term suggestions are pulled from the following static JSON file:

> [`anatomical-terms.json`](https://public-files.berlin-university-collections.de/Taxonomies/anatomical-terms.json)

This file contains curated anatomical terms with associated identifiers used for matching and display.

## 📋 Example Use

1. Start typing an anatomical term (e.g., `heart`)
2. Select a suggestion from the list
3. View the associated UBERON, TA2, and Wikidata identifiers
4. Click the copy button to copy any ID

## 🛠 Technologies Used

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [highlight.js](https://highlightjs.org/) for code highlighting in Markdown
- [Markdown-it](https://github.com/markdown-it/markdown-it) for Markdown rendering

## 📜 License

This project is licensed under the [MIT License](LICENSE).
