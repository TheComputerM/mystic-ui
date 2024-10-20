import { getStory } from '@/lib/storybook'
import { TextReveal } from '@/ui/text-reveal'
import type { Meta, StoryObj } from 'storybook-solidjs'

const meta: Meta<typeof TextReveal> = {
  title: 'Text/Text Reveal',
  component: TextReveal,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = getStory('text-reveal', 'default')
