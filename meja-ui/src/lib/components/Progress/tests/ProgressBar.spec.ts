import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProgressBar from '../ProgressBar.vue'

describe('ProgressBar', () => {
  it('renders the progress bar with the correct width', () => {
    const wrapper = mount(ProgressBar, {
      props: {
        progress: 50,
      },
    })
    const progressBar = wrapper.find('.bg-blue-600')
    expect(progressBar.attributes('style')).toContain('width: 50%')
  })

  it('handles progress values less than 0', () => {
    const wrapper = mount(ProgressBar, {
      props: {
        progress: -10,
      },
    })
    const progressBar = wrapper.find('.bg-blue-600')
    expect(progressBar.attributes('style')).toContain('width: 0%')
  })

  it('handles progress values greater than 100', () => {
    const wrapper = mount(ProgressBar, {
      props: {
        progress: 110,
      },
    })
    const progressBar = wrapper.find('.bg-blue-600')
    expect(progressBar.attributes('style')).toContain('width: 100%')
  })
})
