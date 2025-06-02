<script setup>
import { ref, onMounted } from "vue"
import SearchBox from './components/SearchBox.vue'
import { useTermsStore } from './stores/useTermsStore.js'
import MarkdownRenderer from './components/MarkdownRenderer.vue'
import markdownRaw from './content/tool-info.md?raw'

const toolInfo = markdownRaw

const termsStore = useTermsStore()

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Copied:', text)
  }).catch(err => {
    console.error('Failed to copy:', err)
  })
}

function clearSelectedTerm() {
  termsStore.setSelectedTerm(null)
}
</script>

<template>
  <header>
    <h1>Referenzdaten-Lookup: Ortsnamen</h1>
  </header>

  <div class="content-container">
    <aside>
      <SearchBox/>
      <div class="info-box">
        <MarkdownRenderer :content="toolInfo" />
      </div>
    </aside>

    <main>
      <div class="hint" v-if="!termsStore.selectedTerm">
        Ortsnamen auswählen, um Details anzuzeigen.
      </div>
      <pre v-if="false">Debug selectedTerm: {{ termsStore.selectedTerm }}</pre>
      <div class="selected-term" v-if="termsStore.selectedTerm">
        <pre>{{ termsStore.selectedTerm }}</pre>
      </div>

      <div class="controls">
        <button
          v-if="termsStore.selectedTerm"
          @click="clearSelectedTerm"
          class="clear-button"
        >
          <img src="./assets/icons/x-circle.svg" alt="Clear Selection" />
          Zurücksetzen
        </button>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
@use './assets/styles/base.scss' as *;
@use './assets/styles/main.scss' as *;

main, aside {
  min-height: calc(100vh - 8rem);
}
main, aside, header {
  background-color: hsla(0, 0%, 100%, .9);
  padding: 1.25rem;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
header {
  margin-bottom: 1.0rem;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    @media screen and (max-width: 768px) {
      font-size: 1.125rem;
    }
  }
}
.content-container {
  position: relative;
  display: flex;
  gap: 2rem;
  flex-direction: row;

  aside {
    flex: 0 0 24rem;
    overflow-y: auto;

    .info-box {
      margin-top: 1rem;
    }
  }

  main {
    flex: 1;

    .hint {
      font-size: .85rem;
      opacity: 0.5;
      margin-bottom: 1rem;
    }
  }
}

.controls {
  margin-top: 1rem;
}

.term-id {
  max-width: 20rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  font-size: 1rem;
  margin-top: .5rem;

  .label {
    font-weight: 500;
  }

  .id-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: nowrap;
  }

  .id-link {
    color: #0056b3;
    text-decoration: none;
    font-family: monospace;

    &:hover {
      text-decoration: underline;
    }
  }
}

.items {
  .item {
    margin-bottom: 1rem;
  }
}

.search {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  max-width: 20rem;

  .search-box {
    position: relative;
    z-index: 1000;

    input[type="text"] {
      width: 12rem;
      padding: 0.5rem;
      border: 1px solid #efefef;
      border-radius: 4px;
      font-size: 1rem;
    }

    .suggestions {
      position: absolute;
      top: 100%;
      margin-top: 1rem;
      padding: 0.51rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      background-color: #f9f9f9;
      width: 20rem;

      .suggestion {
        display: flex;
        align-items: center;
        padding: 0.25rem;
        border-bottom: 1px solid #efefef;

        &:last-child {
          border-bottom: none;
        }

        .suggestion-list-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;

          input[type="checkbox"] {
            cursor: pointer;
          }

          .label {
            font-size: 1rem;
            color: #333;
            transition: color 0.2s ease-in-out;

            &:hover {
              color: #007bff;
            }
          }
        }
      }
    }
  }
}

// responsive styles
@media (max-width: 768px) {
  .content-container {
    flex-direction: column;
    gap: 1rem;

    main,
    aside {
      min-height: unset;
      width: 100%;
    }

    aside {
      flex: none;

      .info-box {
        display: none;
      }
    }

    .term-id {
      max-width: 100%;
    }
  }
}
</style>
