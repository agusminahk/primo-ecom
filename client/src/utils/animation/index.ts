import { keyframes } from '@mui/material';

export const fabAnimation = keyframes`
0% {
  transform: rotate(0) scale(0.6)
}
100% {
  transform: rotate(360deg) scale(1)
}
`;

export const fabAnimationReverse = keyframes`
0% {
  transform: rotate(0) scale(1);
  opacity: 90%
}
100% {
  transform: rotate(0) scale(0.7); 
  opacity: 0%
}
`;

export const btnAnimation = keyframes`
0% {
  transform: scale(0.75);
  opacity: 0%
}
100% {
  transform: scale(0.9);
  opacity: 100%
}
`;

export const btnAnimationReverse = keyframes`
0% {
  transform: scale(0.9);
  opacity: 100%
}
100% {
  transform: scale(0.75);
  opacity: 0%
}
`;

export const CardAsDotsbtnAnimation = keyframes`
0% {
  transform: scale(1); opacity: 85%
}
100% {
  transform: scale(1.1); opacity: 100%
}
`;

export const CardAsDotsbtnAnimationBackward = keyframes`
0% {
  transform: scale(1.1); opacity: 100%
}
100% {
  transform: scale(1); opacity: 85%
}
`;
