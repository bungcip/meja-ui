import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tag from '../Tag.vue'

describe('Tag', () => {
  it('renders correctly', () => {
    const wrapper = mount(Tag, {
      props: {
        label: 'New',
      },
    })
    expect(wrapper.text()).toBe('New')
  })

  it('applies the gray color class by default', () => {
    const wrapper = mount(Tag, {
      props: {
        label: 'New',
      },
    })
    expect(wrapper.classes()).toContain('bg-gray-100')
    expect(wrapper.classes()).toContain('text-gray-800')
  })

  it('applies the blue color class', () => {
    const wrapper = mount(Tag, {
      props: {
        label: 'New',
        color: 'blue',
      },
    })
    expect(wrapper.classes()).toContain('bg-blue-100')
    expect(wrapper.classes()).toContain('text-blue-800')
  })
})
