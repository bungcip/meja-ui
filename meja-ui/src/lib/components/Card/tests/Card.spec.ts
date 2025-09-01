import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '../Card.vue'

describe('Card', () => {
  it('renders the default slot content', () => {
    const wrapper = mount(Card, {
      slots: {
        default: 'This is the card content',
      },
    })
    expect(wrapper.text()).toContain('This is the card content')
  })

  it('renders the header slot content', () => {
    const wrapper = mount(Card, {
      slots: {
        header: '<h2>This is the header</h2>',
      },
    })
    expect(wrapper.html()).toContain('<h2>This is the header</h2>')
  })

  it('renders the footer slot content', () => {
    const wrapper = mount(Card, {
      slots: {
        footer: '<p>This is the footer</p>',
      },
    })
    expect(wrapper.html()).toContain('<p>This is the footer</p>')
  })
})
