import { css } from 'styled-system/css'

import { TextReveal } from '@/ui/text-reveal'

export default function TextRevealDemo() {
  return (
    <TextReveal
      class={css({
        textStyle: '3xl',
        md: { textStyle: '5xl' },
        fontWeight: 'bold',
      })}
      text="Imagine magical components for SolidJS"
    />
  )
}
