<template>
  <div>
    <h1 class="text-3xl font-bold">Card</h1>
    <p class="mt-4 text-gray-700">Here is an example of the Card component.</p>

    <div class="mt-8">
      <Card>
        <template #title>
          Card Title
        </template>
        <template #content>
          <p>This is the content of the card. You can put any content here.</p>
        </template>
        <template #footer>
          <Button variant="primary">Go somewhere</Button>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '../lib/components/Card/Card.vue';
import Button from '../lib/components/Button/Button.vue';
</script>
