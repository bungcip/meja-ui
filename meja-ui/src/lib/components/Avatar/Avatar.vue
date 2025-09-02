<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  label?: string
  icon?: string
  image?: string
  size?: 'normal' | 'large' | 'xlarge'
  shape?: 'square' | 'circle'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'normal',
  shape: 'square',
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'large':
      return 'w-16 h-16 text-2xl'
    case 'xlarge':
      return 'w-24 h-24 text-4xl'
    default:
      return 'w-12 h-12'
  }
})

const shapeClasses = computed(() => {
  return props.shape === 'circle' ? 'rounded-full' : 'rounded-md'
})
</script>

<template>
  <div :class="['inline-flex items-center justify-center bg-gray-300 text-gray-800', sizeClasses, shapeClasses]">
    <img v-if="image" :src="image" alt="Avatar" class="w-full h-full object-cover" :class="shapeClasses" />
    <i v-else-if="icon" :class="icon"></i>
    <span v-else-if="label">{{ label }}</span>
    <i v-else class="fas fa-user"></i>
  </div>
</template>
