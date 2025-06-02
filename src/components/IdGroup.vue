<script setup>

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  }
})

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Copied:', text)
  }).catch(err => {
    console.error('Failed to copy:', err)
  })
}
</script>

<template>
  <div class="id-group">
    <div class="id-label">{{ label }}</div>
    <template v-if="!link">
      <span class="id-value">{{ id }}</span>
    </template>
    <template v-else>
        <a
        :href="link"
        target="_blank"
        class="id-link"
        >
        {{ id }}
        </a>
    </template>
    <button
      @click="copyToClipboard(id)"
      class="copy-button"
      title="Copy Wikidata ID"
    >
      <img src="../assets/icons/copy.svg" alt="Copy ID" />
    </button>
  </div>
</template>

<style scoped>
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
}

.id-link:hover {
  text-decoration: underline;
}

.copy-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
}
</style>
