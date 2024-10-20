import { getStory } from '@/lib/storybook'
import { AnimatedShinyText } from '@/ui/animated-shiny-text'
import type { Meta, StoryObj } from 'storybook-solidjs'

const meta: Meta<typeof AnimatedShinyText> = {
  title: 'Text/Animated Shiny Text',
  component: AnimatedShinyText,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = getStory('animated-shiny-text', 'default')
