import type { Meta, StoryObj } from '@storybook/vue3'
import ProgressBar from '@/components/ProgressBar/ProgressBar.vue'

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'progression entre 0 et 100%',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' },
      },
    },
  },
} satisfies Meta<typeof ProgressBar>

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
  args: {
    progress: 50,
  },
}

export const Empty: Story = {
  args: {
    progress: 0,
  },
}

export const Full: Story = {
  args: {
    progress: 100,
  },
}

// Différents états
export const States: Story = {
  render: () => ({
    components: { ProgressBar },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <p>Empty (0%)</p>
          <ProgressBar :progress="0" />
        </div>
        <div>
          <p>Half (50%)</p>
          <ProgressBar :progress="50" />
        </div>
        <div>
          <p>Full (100%)</p>
          <ProgressBar :progress="100" />
        </div>
      </div>
    `,
  }),
}
