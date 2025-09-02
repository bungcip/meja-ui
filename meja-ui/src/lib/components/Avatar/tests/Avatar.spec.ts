import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Avatar from '../Avatar.vue'

describe('Avatar', () => {
  it('renders with a label', () => {
    const wrapper = mount(Avatar, {
      props: {
        label: 'P',
      },
    })
    expect(wrapper.text()).toContain('P')
  })

  it('renders with an icon', () => {
    const wrapper = mount(Avatar, {
      props: {
        icon: 'fas fa-user',
      },
    })
    expect(wrapper.find('.fa-user').exists()).toBe(true)
  })

  it('renders with an image', () => {
    const wrapper = mount(Avatar, {
      props: {
        image: 'https://i.pravatar.cc/300',
      },
    })
    expect(wrapper.find('img').attributes('src')).toBe('https://i.pravatar.cc/300')
  })
})
