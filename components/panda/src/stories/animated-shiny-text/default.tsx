import { css } from 'styled-system/css'

import { AnimatedShinyText } from '@/ui/animated-shiny-text'
import { TbChevronRight } from 'solid-icons/tb'

export default function AnimatedShinyTextDemo() {
  return (
    <div
      class={css({
        borderRadius: 'full',
        borderWidth: '1px',
        borderColor: 'black/5',
        backgroundColor: 'neutral.100',
        fontSize: 'base',
        lineHeight: 'base',
        color: 'white',
        transitionProperty: 'all',
        transitionTimingFunction: 'in',
        transitionDuration: 'all',
        _hover: { cursor: 'pointer', backgroundColor: 'neutral.200', _dark: { backgroundColor: 'neutral.800' } },
        _dark: { borderColor: 'white/5', backgroundColor: 'neutral.900' },
      })}
    >
      <AnimatedShinyText
        class={css({
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: '4',
          py: '1',
          transitionTimingFunction: 'out',
          transitionDuration: 'transition',
          _hover: { color: 'neutral.600', transitionDuration: '300' },
          _dark: { _hover: { color: 'neutral.400' } },
        })}
      >
        <span>✨ Introducing Mystic UI</span>
        <TbChevronRight
          class={css({
            marginLeft: '1',
            width: 'size.3',
            height: 'size.3',
            transitionProperty: 'transform',
            transitionTimingFunction: 'in.out',
            transitionDuration: '300',
            _groupHover: {
              
            },
          })}
        />
      </AnimatedShinyText>
    </div>
  )
}
