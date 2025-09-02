import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from './Avatar.vue'

const meta = {
  title: 'Component/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['normal', 'large', 'xlarge'],
    },
    shape: {
      control: 'select',
      options: ['square', 'circle'],
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Label: Story = {
  args: {
    label: 'P',
    size: 'large',
    shape: 'circle',
  },
}

export const Icon: Story = {
  args: {
    icon: 'fas fa-user',
    size: 'large',
    shape: 'circle',
  },
}

export const Image: Story = {
  args: {
    image: 'https://i.pravatar.cc/300',
    size: 'large',
    shape: 'circle',
  },
}
