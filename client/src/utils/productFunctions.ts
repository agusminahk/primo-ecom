import { ProductCare, ProductImage } from '../components/interfaces';

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
    setColor ? setColor(image.color.toUpperCase()) : undefined;

    const arrayImages = [...new Array(5)].map((_, i) => {
      const imageSize = size == 'small' ? '210x260.jpg' : size == 'medium' ? '516x640.jpg' : '967x1200.jpg';
      return `${base}____${i + 1}__${imageSize}`;
    });
    return arrayImages;
  }
  return [];
};
