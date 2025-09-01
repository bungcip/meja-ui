import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import DataTable from './DataTable.vue'
import { createColumnHelper } from '@tanstack/vue-table'

const meta: Meta<typeof DataTable> = {
  component: DataTable,
}

export default meta
type Story = StoryObj<typeof DataTable>

type Person = {
  firstName: string
  lastName: string
  age: number
}

const defaultData: Person[] = [
  { firstName: 'tanner', lastName: 'linsley', age: 24 },
  { firstName: 'tandy', lastName: 'miller', age: 40 },
  { firstName: 'joe', lastName: 'dirte', age: 45 },
]

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('firstName', {
    cell: info => info.getValue(),
    header: () => h('span', 'First Name'),
  }),
  columnHelper.accessor(row => row.lastName, {
    id: 'lastName',
    cell: info => h('i', info.getValue()),
    header: () => h('span', 'Last Name'),
  }),
  columnHelper.accessor('age', {
    header: () => 'Age',
    cell: info => info.renderValue(),
  }),
]

export const Default: Story = {
  args: {
    data: defaultData,
    columns: columns,
  },
}
