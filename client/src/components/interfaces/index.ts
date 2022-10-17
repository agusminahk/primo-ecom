export interface ProductProps {
  _id: string;
  name: string;
  price: number;
  colors: string[];
  description: string;
  sizes: string[];
  image: ProductImage[];
  promotion: number;
  details: ProductDetails;
  ranking: number;
  reviews: ProductReviews[];
  category: { categoryName: string };
  subCategory: { subCategoryName: string }[];
}

export interface ProductImage {
  url: string;
  color: string;
}

//Types Details
export interface ProductDetails {
  material?: string;
  charasteristic?: string;
  composition?: ProductComposition[];
  care?: ProductCare[];
}
export interface ProductCare {
  wash?: string;
  bleach?: string;
  iron?: string;
}
export interface ProductComposition {
  cotton?: string;
  polyester?: string;
  elastane?: string;
}

//Products Reviews
export interface ProductReviews {
  user: ProductUser;
  content: string;
  ranking: number;
}
export interface ProductUser {
  firstName: string;
}

//Product Props
export interface CardProps {
  product: ProductProps;
}
