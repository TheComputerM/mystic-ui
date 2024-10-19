import { css, cx } from 'styled-system/css'
import { type Component, For, type JSX, mergeProps, splitProps } from 'solid-js'
import { Motion, type VariantDefinition } from 'solid-motionone'

export interface WordFadeInProps extends JSX.HTMLAttributes<HTMLDivElement> {
  text: string
  delay?: number
  duration?: number
  states?: {
    initial: VariantDefinition
    animate: VariantDefinition
  }
}

export const WordFadeIn: Component<WordFadeInProps> = (props) => {
  const [_localProps, forwardProps] = splitProps(props, ['text', 'delay', 'duration', 'class'])
  const localProps = mergeProps(
    {
      delay: 0.15,
      duration: 1,
      states: {
        initial: { opacity: 0, filter: 'blur(8px)' },
        animate: { opacity: 1, filter: 'blur(0px)' },
      },
    },
    _localProps,
  )

  return (
    <div class={cx(css({ display: 'flex' }), localProps.class)} {...forwardProps}>
      <For each={localProps.text.split(' ')}>
        {(word, i) => (
          <Motion.div
            initial={localProps.states.initial}
            inView={localProps.states.animate}
            transition={{
              delay: localProps.delay + i() * localProps.delay,
              duration: localProps.duration,
            }}
          >
            {word}&nbsp;
          </Motion.div>
        )}
      </For>
    </div>
  )
}
