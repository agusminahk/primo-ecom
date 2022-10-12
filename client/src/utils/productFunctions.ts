import { ProductImage } from '../common/interfaces';

export const promotionPrice = (promotion: number, price: number) => {
  if (promotion > 0) {
    const promotionPrice = price - (price / 100) * promotion;
    return promotionPrice;
  } else {
    return false;
  }
};

type ImageFunction = (params: { image: ProductImage; size: string; setColor?: any }) => string[];

export const imagesFunction: ImageFunction = ({ image, size, setColor }) => {
  if (!!image) {
    const [base, rest] = image?.url?.split('____1');
    setColor && setColor(image.color.toUpperCase());
    let images: string[] | [] = [];
    if (size === 'small') images = [...new Array(5)].map((_, i) => `${base}____${i + 1}__210x260.jpg`);
    else if (size === 'medium') images = [...new Array(5)].map((_, i) => `${base}____${i + 1}__516x640.jpg`);
    else if (size === 'large') images = [...new Array(5)].map((_, i) => `${base}____${i + 1}__967x1200.jpg`);
    return images;
  }
  return [];
};
