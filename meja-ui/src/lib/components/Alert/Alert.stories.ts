import type { Meta, StoryObj } from '@storybook/vue3'
import Alert from './Alert.vue'

const meta = {
  title: 'Component/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'info', 'warn', 'error'],
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    severity: 'info',
    closable: true,
  },
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args }
    },
    template: `
      <Alert v-bind="args">
        <template #header>Info</template>
        This is an info message.
      </Alert>
    `,
  }),
}

export const Success: Story = {
    args: {
      severity: 'success',
      closable: true,
    },
    render: (args) => ({
      components: { Alert },
      setup() {
        return { args }
      },
      template: `
        <Alert v-bind="args">
          <template #header>Success</template>
          This is a success message.
        </Alert>
      `,
    }),
  }

  export const Warn: Story = {
    args: {
      severity: 'warn',
      closable: true,
    },
    render: (args) => ({
      components: { Alert },
      setup() {
        return { args }
      },
      template: `
        <Alert v-bind="args">
          <template #header>Warning</template>
          This is a warning message.
        </Alert>
      `,
    }),
  }

  export const Error: Story = {
    args: {
      severity: 'error',
      closable: true,
    },
    render: (args) => ({
      components: { Alert },
      setup() {
        return { args }
      },
      template: `
        <Alert v-bind="args">
          <template #header>Error</template>
          This is an error message.
        </Alert>
      `,
    }),
  }
