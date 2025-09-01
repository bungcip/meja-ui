import type { Meta, StoryObj } from '@storybook/vue3'

import Card from './Card.vue'

const meta: Meta<typeof Card> = {
  component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: (args) => ({
    components: { Card },
    template: '<Card>This is the card content</Card>',
  }),
}

export const WithHeaderAndFooter: Story = {
  render: (args) => ({
    components: { Card },
    template: `
      <Card>
        <template #header>
          <h2>This is the header</h2>
        </template>
        This is the card content
        <template #footer>
          <p>This is the footer</p>
        </template>
      </Card>
    `,
  }),
}
