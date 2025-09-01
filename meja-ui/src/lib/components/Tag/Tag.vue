<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  label: string
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'gray'
}

const props = withDefaults(defineProps<Props>(), {
  color: 'gray',
})

const colorClasses = computed(() => {
  switch (props.color) {
    case 'blue':
      return 'bg-blue-100 text-blue-800'
    case 'green':
      return 'bg-green-100 text-green-800'
    case 'red':
      return 'bg-red-100 text-red-800'
    case 'yellow':
      return 'bg-yellow-100 text-yellow-800'
    case 'purple':
      return 'bg-purple-100 text-purple-800'
    case 'gray':
    default:
      return 'bg-gray-100 text-gray-800'
  }
})

const classes = computed(() => {
  return `text-xs font-semibold inline-block py-1 px-2 rounded-full ${colorClasses.value}`
})
</script>

<template>
  <span :class="classes">
    {{ label }}
  </span>
</template>
