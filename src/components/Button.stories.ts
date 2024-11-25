import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '../components/MyButton.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outline', 'disabled'],
      description: 'Style variant of the button',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    default: {
      control: 'text',
      description: 'Button content',
      table: {
        type: { summary: 'string' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// Primary button
export const Primary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
  args: {
    variant: 'primary',
    default: 'Primary Button',
  },
}

// Outline button
export const Outline: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
  args: {
    variant: 'outline',
    default: 'Outline Button',
  },
}

// Disabled button
export const Disabled: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
  args: {
    variant: 'disabled',
    default: 'Disabled Button',
  },
}

// Small Primary button
export const SmallPrimary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args" class="-small">{{ args.default }}</Button>',
  }),
  args: {
    variant: 'primary',
    default: 'Small Primary Button',
  },
}

// Small Outline button
export const SmallOutline: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args" class="-small">{{ args.default }}</Button>',
  }),
  args: {
    variant: 'outline',
    default: 'Small Outline Button',
  },
}
