<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div class="w-64 bg-white shadow-md">
      <div class="p-4">
        <h1 class="text-2xl font-bold">Meja UI</h1>
      </div>
      <nav class="mt-4">
        <router-link to="/" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Home</router-link>
        <router-link to="/button" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Button</router-link>
        <router-link to="/card" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Card</router-link>
        <router-link to="/datatable" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">DataTable</router-link>
      </nav>
    </div>

    <!-- Content -->
    <div class="flex-1 p-8 overflow-y-auto">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
/* It's better to move these styles to a global css file, but for simplicity I'll leave them here for now */
body {
  margin: 0;
}
</style>
