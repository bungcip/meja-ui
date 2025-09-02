<template>
  <div>
    <h1 class="text-3xl font-bold">DataTable</h1>
    <p class="mt-4 text-gray-700">Here is an example of the DataTable component.</p>

    <div class="mt-8">
      <DataTable :columns="columns" :data="data" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DataTable from '../lib/components/DataTable/DataTable.vue';

const columns = ref([
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
]);

const data = ref([
  {
    id: 1,
    name: 'Jules',
    email: 'jules@example.com',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
  },
  {
    id: 3,
    name: 'John Smith',
    email: 'john.smith@example.com',
  },
]);
</script>
