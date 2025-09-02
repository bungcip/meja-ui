<template>
  <div>
    <h1 class="text-3xl font-bold">Button</h1>
    <p class="mt-4 text-gray-700">Here are some examples of the Button component.</p>

    <div class="mt-8">
      <h2 class="text-2xl font-bold">Variants</h2>
      <div class="flex space-x-4 mt-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="text-2xl font-bold">Sizes</h2>
      <div class="flex space-x-4 mt-4 items-center">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../lib/components/Button/Button.vue';
</script>
