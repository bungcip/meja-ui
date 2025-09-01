<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  currentPage: number
  totalPages: number
}

const props = defineProps<Props>()

const emit = defineEmits(['page-changed'])

const pages = computed(() => {
  const pages = []
  for (let i = 1; i <= props.totalPages; i++) {
    pages.push(i)
  }
  return pages
})

function onPageChange(page: number) {
  if (page < 1 || page > props.totalPages) {
    return
  }
  emit('page-changed', page)
}
</script>

<template>
  <nav>
    <ul class="inline-flex -space-x-px">
      <li>
        <button @click="onPageChange(currentPage - 1)" :disabled="currentPage === 1" class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">Previous</button>
      </li>
      <li v-for="page in pages" :key="page">
        <button @click="onPageChange(page)" :class="{'z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700': page === currentPage, 'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700': page !== currentPage}">
          {{ page }}
        </button>
      </li>
      <li>
        <button @click="onPageChange(currentPage + 1)" :disabled="currentPage === totalPages" class="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">Next</button>
      </li>
    </ul>
  </nav>
</template>
