import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Click me',
      },
    })
    expect(wrapper.text()).toBe('Click me')
  })

  it('applies the primary variant class by default', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Click me',
      },
    })
    expect(wrapper.classes()).toContain('bg-blue-500')
  })

  it('applies the secondary variant class', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Click me',
        variant: 'secondary',
      },
    })
    expect(wrapper.classes()).toContain('bg-gray-500')
  })

  it('applies the large size class', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Click me',
        size: 'lg',
      },
    })
    expect(wrapper.classes()).toContain('px-4')
    expect(wrapper.classes()).toContain('py-2')
    expect(wrapper.classes()).toContain('text-lg')
  })
})
