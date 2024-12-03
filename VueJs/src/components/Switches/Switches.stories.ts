import type { Meta, StoryObj } from '@storybook/vue3'
import Switch from './SwitchesToggle.vue'
import { ref } from 'vue'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'The current state of the switch',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Whether to show error state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline'],
      description: 'The visual style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    small: {
      control: 'boolean',
      description: 'Whether to use small size variant',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof Switch>

// Story de base
export const Default: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const isChecked = ref(false)
      return { isChecked }
    },
    template: '<Switch v-model="isChecked" />',
  }),
}

// Outline variant
export const Outline: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const isChecked = ref(false)
      return { isChecked }
    },
    template: '<Switch v-model="isChecked" variant="outline" />',
  }),
}

// Disabled
export const Disabled: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const isChecked = ref(false)
      return { isChecked }
    },
    template: `
      <div style="display: flex; gap: 1rem;">
        <Switch v-model="isChecked" disabled />
        <Switch v-model="isChecked" disabled variant="outline" />
      </div>
    `,
  }),
}

// Error state
export const Error: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const isChecked = ref(false)
      return { isChecked }
    },
    template: `
      <div style="display: flex; gap: 1rem;">
        <Switch v-model="isChecked" error />
        <Switch v-model="isChecked" error variant="outline" />
      </div>
    `,
  }),
}

// Small size
export const Small: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const isChecked = ref(false)
      return { isChecked }
    },
    template: `
      <div style="display: flex; gap: 1rem;">
        <Switch v-model="isChecked" small />
        <Switch v-model="isChecked" small variant="outline" />
      </div>
    `,
  }),
}

// Tous les états
export const AllStates: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const isChecked = ref(true)
      return { isChecked }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <h3>Default:</h3>
          <Switch v-model="isChecked" />
          <Switch v-model="isChecked" variant="outline" />
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <h3>Small:</h3>
          <Switch v-model="isChecked" small />
          <Switch v-model="isChecked" small variant="outline" />
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <h3>Disabled:</h3>
          <Switch v-model="isChecked" disabled />
          <Switch v-model="isChecked" disabled variant="outline" />
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <h3>Error:</h3>
          <Switch v-model="isChecked" error />
          <Switch v-model="isChecked" error variant="outline" />
        </div>
      </div>
    `,
  }),
}
