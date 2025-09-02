import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Badge from '../Badge.vue'

describe('Badge', () => {
  it('renders with a value', () => {
    const wrapper = mount(Badge, {
      props: {
        value: '5',
      },
    })
    expect(wrapper.text()).toContain('5')
  })

  it('renders with a severity', () => {
    const wrapper = mount(Badge, {
      props: {
        value: '5',
        severity: 'success',
      },
    })
    expect(wrapper.classes()).toContain('bg-green-500')
  })

  it('renders with a size', () => {
    const wrapper = mount(Badge, {
      props: {
        value: '5',
        size: 'large',
      },
    })
    expect(wrapper.classes()).toContain('text-lg')
  })
})
