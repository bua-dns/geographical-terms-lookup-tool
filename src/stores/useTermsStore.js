// stores/useTermsStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTermsStore = defineStore('terms', () => {
  const terms = ref([])
  const selectedTerms = ref([])

  function setSelectedTerms(newTerms) {
    selectedTerms.value = newTerms
  }

  const selectedTerm = ref(null)

  function setSelectedTerm(newTerm) {
    selectedTerm.value = newTerm
  }


  return {
    terms,
    selectedTerms,
    selectedTerm,
    setSelectedTerms,
    setSelectedTerm,
  }
})
