// stores/useTermsStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useMapTerm } from '@/use/useMapTerm'


export const useTermsStore = defineStore('terms', () => {
  const terms = ref([])
  const selectedTerm = ref(null)

  async function setSelectedTerm(newTerm) {
    if (!newTerm) {
      selectedTerm.value = null
      return
    }
    selectedTerm.value = await useMapTerm(newTerm)
  }

  return {
    terms,
    selectedTerm,
    setSelectedTerm,
  }
})
