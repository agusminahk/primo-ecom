export const mouseDownCoords = (e: any) => {
  window.checkForDrag = e.clientX;
};

export const clickOrDrag = (e: any, click: any, setClick: any) => {
  const mouseUp = e.clientX;
  if (mouseUp < window.checkForDrag + 6 && mouseUp > window.checkForDrag - 6) {
    setClick(true);
  }
};
