import type { Meta, StoryObj } from '@storybook/vue3'
import Radio from './RadioButton.vue'
import { ref } from 'vue'

const meta = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The selected value (v-model)',
    },
    value: {
      control: 'text',
      description: 'The value of the radio button',
    },
    name: {
      control: 'text',
      description: 'The name attribute of the radio button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio button is disabled',
    },
  },
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof Radio>

// Un seul radio
export const Default: Story = {
  args: {
    value: 'option1',
    name: 'radioGroup',
  },
}

// Radio désactivé
export const Disabled: Story = {
  args: {
    value: 'option2',
    name: 'radioGroup',
    disabled: true,
  },
}

// Groupe de radio buttons
export const RadioGroup: Story = {
  render: () => ({
    components: { Radio },
    setup() {
      const selectedValue = ref('option1')
      return { selectedValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; align-items: center;">
          <Radio
            v-model="selectedValue"
            name="groupDemo"
            value="option1"
          />
          <label>Option 1</label>
        </div>
        <div style="display: flex; align-items: center;">
          <Radio
            v-model="selectedValue"
            name="groupDemo"
            value="option2"
          />
          <label>Option 2</label>
        </div>
        <div style="display: flex; align-items: center;">
          <Radio
            v-model="selectedValue"
            name="groupDemo"
            value="option3"
            disabled
          />
          <label>Option 3 (Disabled)</label>
        </div>
        <p>Selected value: {{ selectedValue }}</p>
      </div>
    `,
  }),
}

// États différents
export const States: Story = {
  render: () => ({
    components: { Radio },
    template: `
      <div style="display: flex; gap: 2rem;">
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <h3>Default</h3>
            <Radio name="states" value="default" />
          </div>
          <div>
            <h3>Checked</h3>
            <Radio name="states" value="checked" modelValue="checked" />
          </div>
          <div>
            <h3>Disabled</h3>
            <Radio name="states" value="disabled" disabled />
          </div>
          <div>
            <h3>Disabled & Checked</h3>
            <Radio name="states" value="disabledChecked" disabled modelValue="disabledChecked" />
          </div>
        </div>
      </div>
    `,
  }),
}
