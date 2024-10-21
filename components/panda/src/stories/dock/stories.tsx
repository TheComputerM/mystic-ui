import type { Meta, StoryObj } from 'storybook-solidjs'

import { getStory } from '@/lib/storybook'
import { Dock } from '@/ui/dock'

const meta: Meta<typeof Dock> = {
  title: 'Dock',
  component: Dock,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = getStory('dock', 'default')
