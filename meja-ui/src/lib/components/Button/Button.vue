<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  label: string
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-2 py-1 text-sm'
    case 'lg':
      return 'px-4 py-2 text-lg'
    case 'md':
    default:
      return 'px-3 py-2 text-base'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-gray-500 hover:bg-gray-600 text-white'
    case 'danger':
      return 'bg-red-500 hover:bg-red-600 text-white'
    case 'primary':
    default:
      return 'bg-blue-500 hover:bg-blue-600 text-white'
  }
})

const classes = computed(() => {
  return `font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${sizeClasses.value} ${variantClasses.value}`
})
</script>

<template>
  <button :class="classes">
    {{ label }}
  </button>
</template>
