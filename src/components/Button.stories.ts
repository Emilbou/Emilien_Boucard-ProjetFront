import type { Meta, StoryObj } from '@storybook/vue3'

import Button from '../components/MyButton.vue'

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    variant: {
      controls: { type: 'select', options: ['primary', 'outline', 'disabled'] },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `<Button v-bind="args">${args.default}</Button>`,
  }),
  args: {
    default: 'bouton',
  },
}
