import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tabs from '../Tabs.vue'
import Tab from '../Tab.vue'

describe('Tabs', () => {
  it('renders the tabs and the content of the active tab', async () => {
    const wrapper = mount({
      components: { Tabs, Tab },
      template: `
        <Tabs>
          <Tab title="Tab 1">Content 1</Tab>
          <Tab title="Tab 2">Content 2</Tab>
        </Tabs>
      `,
    })

    expect(wrapper.text()).toContain('Tab 1')
    expect(wrapper.text()).toContain('Tab 2')
    expect(wrapper.text()).toContain('Content 1')
    expect(wrapper.text()).not.toContain('Content 2')

    await wrapper.find('li:nth-child(2)').trigger('click')

    expect(wrapper.text()).not.toContain('Content 1')
    expect(wrapper.text()).toContain('Content 2')
  })
})
