import type { Meta, StoryObj } from '@storybook/vue3'
import MyInput from './MyInput.vue'

const meta = {
  title: 'Components/MyInput',
  component: MyInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The value of the input field',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outline'],
      description: 'The visual style variant of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether to show error state',
    },
    small: {
      control: 'boolean',
      description: 'Whether to use small size variant',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
} satisfies Meta<typeof MyInput>

export default meta
type Story = StoryObj<typeof MyInput>

// Primary
export const Primary: Story = {
  args: {
    variant: 'primary',
    placeholder: 'Primary Input',
  },
}

// Outline
export const Outline: Story = {
  args: {
    variant: 'outline',
    placeholder: 'Outline Input',
  },
}

// Disabled
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled Input',
  },
}

// Error
export const Error: Story = {
  args: {
    error: true,
    placeholder: 'Error Input',
  },
}

// Small
export const Small: Story = {
  args: {
    small: true,
    placeholder: 'Small Input',
  },
}

// All States
export const AllStates: Story = {
  render: () => ({
    components: { MyInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 1rem;">
          <MyInput placeholder="Primary" />
          <MyInput variant="outline" placeholder="Outline" />
        </div>
        <div style="display: flex; gap: 1rem;">
          <MyInput disabled placeholder="Disabled" />
          <MyInput variant="outline" disabled placeholder="Disabled Outline" />
        </div>
        <div style="display: flex; gap: 1rem;">
          <MyInput error placeholder="Error" />
          <MyInput variant="outline" error placeholder="Error Outline" />
        </div>
        <div style="display: flex; gap: 1rem;">
          <MyInput small placeholder="Small" />
          <MyInput variant="outline" small placeholder="Small Outline" />
        </div>
      </div>
    `,
  }),
}
