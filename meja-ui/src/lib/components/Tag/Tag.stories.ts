import type { Meta, StoryObj } from '@storybook/vue3'

import Tag from './Tag.vue'

const meta: Meta<typeof Tag> = {
  component: Tag,
}

export default meta
type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: {
    label: 'Tag',
  },
}

export const Blue: Story = {
  args: {
    ...Default.args,
    color: 'blue',
  },
}
