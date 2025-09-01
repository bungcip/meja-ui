import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import DatePicker from './DatePicker.vue'

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  render: (args) => ({
    components: { DatePicker },
    setup() {
      const date = ref(new Date())
      return { date }
    },
    template: '<DatePicker v-model="date" />',
  }),
}
