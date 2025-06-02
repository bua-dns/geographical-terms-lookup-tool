// stores/useTermsStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useMapTerm } from '@/use/useMapTerm'

export const useTermsStore = defineStore('terms', () => {
  const terms = ref([])
  const selectedTerms = ref([])
  const selectedTerm = ref(null)

  function setSelectedTerms(newTerms) {
    selectedTerms.value = newTerms
  }

  function setSelectedTerm(newTerm) {
    if (!newTerm) {
      selectedTerm.value = null
      return
    }
    selectedTerm.value = useMapTerm(newTerm)
  }

  return {
    terms,
    selectedTerms,
    selectedTerm,
    setSelectedTerms,
    setSelectedTerm,
  }
})
