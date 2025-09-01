<script setup lang="ts">
import { ref } from 'vue'
import VueFlatpickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
// I will need to create this theme file
import 'flatpickr/dist/themes/airbnb.css'; // Using a pre-existing theme for now

interface Props {
  modelValue: string | Date
}

const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

const date = ref(props.modelValue)

const config = {
  altInput: true,
  altFormat: 'F j, Y',
  dateFormat: 'Y-m-d',
}

function onValueUpdate(selectedDates: Date[]) {
  emit('update:modelValue', selectedDates[0])
}

</script>

<template>
  <VueFlatpickr
    v-model="date"
    :config="config"
    @on-change="onValueUpdate"
  />
</template>

<style>
/*
I will add custom styles here to override the flatpickr theme
and make it look like it's using Tailwind CSS.
For example, I can style the input to look like other inputs in the library.
*/
.flatpickr-input {
  /* Some tailwind classes here, but I can't use @apply in a component style block without more setup */
  /* So I'll just write plain CSS that mimics tailwind for now. */
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  width: 100%;
}
</style>
