<script setup>
import { ref, watch } from 'vue'
import { useTermsStore } from '../stores/useTermsStore.js'
import { fetchWikidataSearchResults } from '../use/useCallWikidataSearchApi.js'

const termsStore = useTermsStore()

const searchTerm = ref('')
const suggestions = ref([])
const showSuggestions = ref(false)
const isLoading = ref(false)

watch(searchTerm, async (newTerm) => {
  if (newTerm.length < 2) {
    suggestions.value = []
    return
  }

  isLoading.value = true
  const results = await fetchWikidataSearchResults(newTerm)
  suggestions.value = results
  isLoading.value = false
  showSuggestions.value = true
})

function selectSuggestion(term) {
  termsStore.setSelectedTerm(term)
  resetSearch()
}

function resetSearch() {
  searchTerm.value = ''
  suggestions.value = []
  showSuggestions.value = false
}

</script>

<template>
  <div class="search-box">
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Search Wikidata..."
      @focus="showSuggestions = true"
      @blur="handleBlur"
    />

    <ul v-if="showSuggestions && suggestions.length > 0" class="suggestions">
      <li
        v-for="item in suggestions"
        :key="item.id"
        class="suggestion"
        @click="selectSuggestion(item)"
      >
        <div class="suggestion-label"><strong>{{ item.label }}</strong></div>
        <div class="suggestion-desc" v-if="item.description">{{ item.description }}</div>
        <div class="suggestion-id" v-if="item.geonamesId?.length">
          🌍 GeoNames: {{ item.geonamesId.join(', ') }}
        </div>
      </li>
    </ul>

    <div v-if="isLoading" class="loading">Searching...</div>
  </div>
</template>

<style scoped>
.search-box {
  position: relative;
  max-width: 22rem;
}
.suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  background: white;
  border: 1px solid #ccc;
  width: 100%;
  padding: 0;
  margin: 0.5rem 0 0;
  list-style: none;
  max-height: 15rem;
  overflow-y: auto;
}
.suggestion {
  padding: 0.5rem;
  cursor: pointer;
}
.suggestion:hover {
  background-color: #f0f0f0;
}
.suggestion-label {
  font-weight: bold;
}
.suggestion-desc {
  font-size: 0.875rem;
  color: #666;
}
.suggestion-id {
  font-size: 0.75rem;
  color: #007bff;
}
.loading {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #999;
}
</style>
