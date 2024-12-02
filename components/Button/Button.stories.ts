import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './MyButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The style variant of the button',
      control: { type: 'select' },
      options: ['primary', 'outline'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      description: 'Whether the button is disabled',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    default: {
      description: 'Slot content for the button',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    // More on args: https://storybook.js.org/docs/vue/writing-stories/args
    variant: 'primary',
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

const storyOptions: Omit<Story, 'args'> = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `<Button v-bind="args">${args.default}</Button>`,
  }),
}

// Primary Variants
export const Primary: Story = {
  ...storyOptions,
  args: {
    default: 'Primary Button',
    variant: 'primary',
  },
}

export const DisabledPrimary: Story = {
  ...storyOptions,
  args: {
    default: 'Disabled Primary',
    variant: 'primary',
    disabled: true,
  },
}

// Outline Variants
export const Outline: Story = {
  ...storyOptions,
  args: {
    default: 'Outline Button',
    variant: 'outline',
  },
}

export const OutlineDisabled: Story = {
  ...storyOptions,
  args: {
    default: 'Disabled Outline',
    variant: 'outline',
    disabled: true,
  },
}

// Small Variants
const smallStoryOptions: Omit<Story, 'args'> = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `<Button v-bind="args" class="-small">${args.default}</Button>`,
  }),
}

export const SmallPrimary: Story = {
  ...smallStoryOptions,
  args: {
    default: 'Small Primary',
    variant: 'primary',
  },
}

export const SmallOutline: Story = {
  ...smallStoryOptions,
  args: {
    default: 'Small Outline',
    variant: 'outline',
  },
}

export const SmallDisabledPrimary: Story = {
  ...smallStoryOptions,
  args: {
    default: 'Small Disabled Primary',
    variant: 'primary',
    disabled: true,
  },
}

export const SmallOutlineDisabled: Story = {
  ...smallStoryOptions,
  args: {
    default: 'Small Disabled Outline',
    variant: 'outline',
    disabled: true,
  },
}
