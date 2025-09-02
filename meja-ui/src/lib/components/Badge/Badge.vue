<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  value?: string | number
  severity?: 'success' | 'info' | 'warn' | 'error'
  size?: 'normal' | 'large' | 'xlarge'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'normal',
  severity: 'info',
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'large':
      return 'text-lg px-3 py-1'
    case 'xlarge':
      return 'text-xl px-4 py-2'
    default:
      return 'text-sm px-2 py-0.5'
  }
})

const severityClasses = computed(() => {
  switch (props.severity) {
    case 'success':
      return 'bg-green-500 text-white'
    case 'info':
      return 'bg-blue-500 text-white'
    case 'warn':
      return 'bg-yellow-500 text-white'
    case 'error':
      return 'bg-red-500 text-white'
    default:
      return 'bg-blue-500 text-white'
  }
})
</script>

<template>
  <span :class="['font-bold rounded-full', sizeClasses, severityClasses]">
    {{ value }}
  </span>
</template>
