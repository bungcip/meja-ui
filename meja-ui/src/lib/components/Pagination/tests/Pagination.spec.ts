import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Pagination from '../Pagination.vue'

describe('Pagination', () => {
  it('renders the correct number of page buttons', () => {
    const wrapper = mount(Pagination, {
      props: {
        currentPage: 1,
        totalPages: 5,
      },
    })
    // 5 pages + prev + next
    expect(wrapper.findAll('button').length).toBe(7)
  })

  it('emits page-changed event when a page button is clicked', async () => {
    const wrapper = mount(Pagination, {
      props: {
        currentPage: 1,
        totalPages: 5,
      },
    })
    await wrapper.findAll('button')[2].trigger('click')
    expect(wrapper.emitted('page-changed')[0]).toEqual([2])
  })

  it('disables the Previous button on the first page', () => {
    const wrapper = mount(Pagination, {
      props: {
        currentPage: 1,
        totalPages: 5,
      },
    })
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })

  it('disables the Next button on the last page', () => {
    const wrapper = mount(Pagination, {
      props: {
        currentPage: 5,
        totalPages: 5,
      },
    })
    expect(wrapper.findAll('button').at(-1).attributes('disabled')).toBeDefined()
  })
})
