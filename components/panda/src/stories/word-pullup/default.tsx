import { css } from 'styled-system/css'

import { WordPullup } from '@/ui/word-pullup'

export default function LetterPullupDemo() {
  return (
    <WordPullup
      class={css({
        fontWeight: 'bold',
        textStyle: '4xl',
        letterSpacing: 'tight',
        marginY: '20',
      })}
      text="Staggered Word Pull Up"
    />
  )
}
