<script setup>
import { computed, ref, watch } from 'vue'
import { useTermsStore } from '../stores/useTermsStore.js'

const termsStore = useTermsStore()

const props = defineProps({
  terms: {
    type: Array,
    required: true,
  },
  labelKey: {
    type: String,
    default: 'info_label',
  },
  filterKey: {
    type: String,
    default: 'look_up',
  }
})

const inputThreshold = 2
const searchTerm = ref("")
const selectedTerms = ref([])
const selectedTerm = ref(null)

const suggestions = computed(() => {
  if (searchTerm.value.length < inputThreshold) return []
  return props.terms.filter(term =>
    term[props.filterKey]?.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})

function toggleSelectedSuggestion(term) {
  termsStore.setSelectedTerm(term)
  searchTerm.value = ""
}

</script>


<template>
  <div class="search-box">
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Suchbegriff"
      @focus="handleInputFocus"
    />
    
    <!-- Suggestions -->
    <div class="suggestions" v-if="searchTerm.length >= inputThreshold">
      <template v-if="!suggestions.length">
        Keine passenden Einträge gefunden
      </template>
      <template v-else>
        <div
          class="suggestion clickable"
          v-for="(entry, entryIndex) in suggestions"
          :key="`suggestion-${entryIndex}`"
        >
          <div class="suggestion-list-item">
            <div
              class="label"
              @click="toggleSelectedSuggestion(entry)"
            >
              {{ entry.info_label }}
            </div>
          </div>
        </div>
      </template>
    </div>

    <!-- Selected Terms -->
     <pre v-if="false">selectd term component{{ selectedTerm }}</pre>
     <pre v-if="false">selectd term store{{ termsStore.selectedTerm }}</pre>
    <div v-if="selectedTerms.length" class="selected-terms">
      <div class="term-tag" v-for="term in selectedTerms" :key="term.family">
        {{ term.info_label }}
      </div>
    </div>
    
    <pre v-if="false">{{ terms.length }}</pre>
  </div>
</template>


<style scoped lang="scss">
.search-box {
  position: relative;
  z-index: 1000;
  display: flex;
  gap: 0.5rem;
  overflow: visible;

  input[type="text"] {
    flex: 1;
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    &:focus {
      border-color: #999;
    }
  }

  .suggestions {
  position: fixed;
  left: 3.0rem;
  top: 11.5rem;
  margin-top: 0.5rem;
  width: 22rem; // or adjust accordingly
  max-height: 80vh;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 9999;

    .suggestion {
      padding: 0.5rem;
      border-bottom: 1px solid #efefef;

      &:last-child {
        border-bottom: none;
      }

      .suggestion-list-item {
        display: flex;
        align-items: center;
        cursor: pointer;

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

  .selected-terms {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    .term-tag {
      display: flex;
      align-items: center;
      background-color: #eef2f7;
      color: #333;
      padding: 0.35rem 0.75rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

      .remove {
        margin-left: 0.5rem;
        cursor: pointer;
        font-weight: bold;
        color: #888;
        transition: color 0.2s ease;

        &:hover {
          color: #e00;
        }
      }
    }
  }
}
</style>

