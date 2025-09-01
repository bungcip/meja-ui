<script setup lang="ts">
import { inject } from 'vue'

defineProps<{
  title: string
}>()

const selectedTitle = inject('selectedTitle')
</script>

<template>
  <div v-if="title === selectedTitle">
    <slot />
  </div>
</template>
