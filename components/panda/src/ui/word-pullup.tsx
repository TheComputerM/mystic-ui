import { css, cx } from 'styled-system/css'

import { Motion } from 'solid-motionone'
import { type Component, For, mergeProps } from 'solid-js'

export interface WordPullupProps {
  text: string
  class?: string
  delay?: number
}

export const WordPullup: Component<WordPullupProps> = (props) => {
  const localProps = mergeProps({ delay: 0.2 }, props)

  return (
    <div class={cx(css({ display: 'flex' }), localProps.class)}>
      <For each={localProps.text.split(' ')}>
        {(letter, i) => (
          <Motion.div
            initial={{ y: 20, opacity: 0 }}
            inView={{ y: 0, opacity: 1 }}
            inViewOptions={{ once: true }}
            transition={{
              delay: localProps.delay * i(),
            }}
          >
            {letter}&nbsp;
          </Motion.div>
        )}
      </For>
    </div>
  )
}
