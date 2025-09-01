<script setup lang="ts">
import { ref, provide, useSlots } from 'vue'

const slots = useSlots()
const tabTitles = ref(slots.default?.().map((tab) => tab.props?.title) || [])
const selectedTitle = ref(tabTitles.value[0])

provide('selectedTitle', selectedTitle)
</script>

<template>
  <div class="tabs">
    <ul class="flex border-b">
      <li
        v-for="title in tabTitles"
        :key="title"
        @click="selectedTitle = title"
        class="px-4 py-2 cursor-pointer"
        :class="{ 'border-b-2 border-blue-500 text-blue-500': selectedTitle === title }"
      >
        {{ title }}
      </li>
    </ul>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>
