export const responsiveCarousels = {
  responsive1: {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  },

  responsive2: {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2570 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 2570, min: 1629 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1629, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  },
};
