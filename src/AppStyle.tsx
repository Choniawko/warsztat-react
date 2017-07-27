import { style, keyframes } from 'typestyle';

export type Direction = 'normal' | 'reverse' | 'alternate';

const logoSpin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' }
}); 

export const appLogo = (direction: Direction) => style({
  height: '80px',
  animationName: logoSpin,
  animationDuration: '20s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  animationDirection: direction,
});