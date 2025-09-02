import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Alert from '../Alert.vue'

describe('Alert', () => {
  it('renders properly', () => {
    const wrapper = mount(Alert, {
      props: {
        severity: 'success',
      },
      slots: {
        header: 'Success',
        default: 'This is a success message.',
      },
    })
    expect(wrapper.text()).toContain('Success')
    expect(wrapper.text()).toContain('This is a success message.')
  })

  it('closes when the close button is clicked', async () => {
    const wrapper = mount(Alert, {
      props: {
        closable: true,
      },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toBe('<!--v-if-->')
  })

  it('does not render the close button when not closable', () => {
    const wrapper = mount(Alert, {
      props: {
        closable: false,
      },
    })
    expect(wrapper.find('button').exists()).toBe(false)
  })
})
