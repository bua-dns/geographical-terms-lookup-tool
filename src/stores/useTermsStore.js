// stores/useTermsStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useMapTerm } from '@/use/useMapTerm'

export const useTermsStore = defineStore('terms', () => {
  const terms = ref([])
  const selectedTerm = ref(null)

  function setSelectedTerm(newTerm) {
    if (!newTerm) {
      selectedTerm.value = null
      return
    }
    selectedTerm.value = useMapTerm(newTerm)
  }

  return {
    terms,
    selectedTerm,
    setSelectedTerm,
  }
})
