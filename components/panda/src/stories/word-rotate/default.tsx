import { css } from 'styled-system/css'

import { WordRotate } from '@/ui/word-rotate'

export default function WordRotateDemo() {
  return (
    <div class={css({ overflow: 'hidden', paddingTop: '2', paddingBottom: '2' })}>
      <WordRotate
        class={css({
          fontSize: '4xl',
          lineHeight: '4xl',
          md: { fontSize: '6xl' },
          fontWeight: 'bold',
        })}
        words={['Word', 'Rotate']}
      />
    </div>
  )
}
