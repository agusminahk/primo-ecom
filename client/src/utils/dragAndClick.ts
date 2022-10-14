import React from 'react';
export const mouseDownCoords = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  // @ts-ignore
  window.checkForDrag = e.clientX;
};
type ClickOrDrag = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setClick: React.Dispatch<React.SetStateAction<boolean>>,
) => void;
export const clickOrDrag: ClickOrDrag = (e, setClick) => {
  const mouseUp = e.clientX;
  // @ts-ignore
  if (mouseUp < window.checkForDrag + 6 && mouseUp > window.checkForDrag - 6) {
    setClick(true);
  }
};
