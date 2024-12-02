import type { Meta, StoryObj } from '@storybook/vue3'
import CheckBox from './CheckBox.vue'

const meta: Meta<typeof CheckBox> = {
  title: 'Components/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'The value of the checkbox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof CheckBox>

export const Template: Story = {
  render: (args) => ({
    components: { CheckBox },
    setup() {
      return { args }
    },
    template: '<CheckBox v-bind="args" />',
  }),
}

export const Default: Story = {
  args: {
    modelValue: false,
  },
}

export const Checked: Story = {
  args: {
    modelValue: true,
  },
}

export const States: Story = {
  render: () => ({
    components: { CheckBox },
    template: `
      <div style="display: flex; gap: 2rem;">
        <div>
          <p>Default</p>
          <CheckBox />
        </div>
        <div>
          <p>Checked</p>
          <CheckBox :model-value="true" />
        </div>
      </div>
    `,
  }),
}
