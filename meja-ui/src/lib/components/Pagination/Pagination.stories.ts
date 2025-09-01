import type { Meta, StoryObj } from '@storybook/vue3'
import Pagination from './Pagination.vue'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
}
