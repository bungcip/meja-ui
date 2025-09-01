<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  progress: number
}

const props = defineProps<Props>()

const normalizedProgress = computed(() => {
  if (props.progress < 0) {
    return 0
  }
  if (props.progress > 100) {
    return 100
  }
  return props.progress
})
</script>

<template>
  <div class="w-full bg-gray-200 rounded-full h-2.5">
    <div class="bg-blue-600 h-2.5 rounded-full" :style="{ width: `${normalizedProgress}%` }"></div>
  </div>
</template>
