import type { Meta, StoryObj } from '@storybook/vue3'
import Badge from './Badge.vue'

const meta = {
  title: 'Component/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'info', 'warn', 'error'],
    },
    size: {
      control: 'select',
      options: ['normal', 'large', 'xlarge'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    value: '5',
    severity: 'info',
  },
}

export const Success: Story = {
  args: {
    value: '10',
    severity: 'success',
  },
}

export const Warn: Story = {
  args: {
    value: '15',
    severity: 'warn',
  },
}

export const Error: Story = {
  args: {
    value: '20',
    severity: 'error',
  },
}

export const Large: Story = {
    args: {
      value: '25',
      severity: 'info',
      size: 'large',
    },
  }

  export const XLarge: Story = {
    args: {
      value: '30',
      severity: 'info',
      size: 'xlarge',
    },
  }
