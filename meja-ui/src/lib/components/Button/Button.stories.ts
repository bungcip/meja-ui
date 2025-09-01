import type { Meta, StoryObj } from '@storybook/vue3'

import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
  },
}

export const Large: Story = {
  args: {
    ...Primary.args,
    size: 'lg',
  },
}
