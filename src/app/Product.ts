export interface Product {
  id: number;
  name: string;
  currentPrice: number;
  oldPrice: number;
  sale: number;
  desc: string;
  img: string;
}
export class Category {
  categoryId: number;
  categoryName: string;
  categoryImg: string;
}
export class Slide {
  slideId: number;
  slideImage: string;
}
