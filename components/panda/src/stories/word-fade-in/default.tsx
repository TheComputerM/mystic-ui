import { css } from 'styled-system/css'

import { WordFadeIn } from '@/ui/word-fade-in'

export default function WordFadeInDemo() {
  return (
    <WordFadeIn
      class={css({
        fontSize: '4xl',
        lineHeight: '4xl',
        md: { fontSize: '6xl' },
        letterSpacing: 'tight',
        fontWeight: 'bold',
      })}
      text="Word Fade In"
    />
  )
}
