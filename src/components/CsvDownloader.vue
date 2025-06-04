<script setup>
import { ref } from 'vue'
const props = defineProps({
  itemsList: {
    type: Object,
    required: true,
  },
  filename: {
    type: String,
    default: 'reference-data.csv',
  }
})

function convertToCSV(data) {
  if (!Array.isArray(data) || data.length === 0) return ''

  const headers = Object.keys(data[0])
  const csvRows = [
    headers.join(','), // header row
    ...data.map(row =>
      headers.map(field => {
        const val = row[field] ?? ''
        const escaped = String(val).replace(/"/g, '""')
        return `"${escaped}"`
      }).join(',')
    )
  ]
  return csvRows.join('\r\n')
}

const csvString = convertToCSV(props.itemsList)

function downloadCSV() {
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = props.filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // optional: revoke object URL to free memory
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="download-list">
    <button @click="downloadCSV()" title="Download List">
      <div class="icon">
        <img src="../assets/icons/download.svg" alt="download csv" />
      </div>
      
      <span>Liste herunterladen</span>
    </button>

  </div>
</template>

<style lang="scss">
.download-list {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  button {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem 0 0.5rem 0;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;

      border-radius: 4px;
      transition: background-color 0.3s ease-in-out;
      &:hover {
        background-color: #7892ae;
      }
    }
    img {
      width: 1.25rem;
      height: 1.25rem;
    }
    span {
      font-size: 1rem;
      color: var(--color-text);
      font-weight: 500;
    }
  }

}

</style>
