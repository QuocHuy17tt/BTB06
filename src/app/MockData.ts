import { Product, Slide, Category, Menu, User } from './Product';
export const listProduct: Product[] = [
  {
    id: 1,
    name: 'Item 1',
    currentPrice: 350,
    oldPrice: 550,
    sale: 20,
    desc: 'Thơm ngon mời bạn ăn nhe',
    img: 'https://picsum.photos/235/235',
  },
  {
    id: 2,
    name: 'Item 2',
    currentPrice: 350,
    oldPrice: 550,
    sale: 10,
    desc: 'Tôi đây không chờ bạn nữa',
    img: 'https://picsum.photos/235/235',
  },
  {
    id: 3,
    name: 'Item 3',
    currentPrice: 350,
    oldPrice: 550,
    sale: 5,
    desc: 'Giờ tôi ăn liền',
    img: 'https://picsum.photos/235/235',
  },
  {
    id: 4,
    name: 'Item 4',
    currentPrice: 350,
    oldPrice: 550,
    sale: 30,
    desc: 'Những thằng khác',
    img: 'https://picsum.photos/235/235',
  },
  {
    id: 5,
    name: 'Item 5',
    currentPrice: 350,
    oldPrice: 550,
    sale: 20,
    desc: 'Ngại tán em',
    img: 'https://picsum.photos/235/235',
  },
  {
    id: 6,
    name: 'Item 6',
    currentPrice: 350,
    oldPrice: 550,
    sale: 20,
    desc: 'Tại ngán anh',
    img: 'https://picsum.photos/235/235',
  },
];
export const Categories: Category[] = [
  {
    categoryId: 1,
    categoryName: 'Cơm',
    categoryImg: 'https://picsum.photos/235/235',
  },
  {
    categoryId: 2,
    categoryName: 'Bún, Phở',
    categoryImg: 'https://picsum.photos/235/235',
  },
  {
    categoryId: 3,
    categoryName: 'Bánh mì',
    categoryImg: 'https://picsum.photos/235/235',
  },
];
export const listSlide: Slide[] = [
  {
    slideId: 1,
    slideImage: 'https://picsum.photos/1905/700',
    slideText: 'Món ngon cho mùa hè',
    slideTextImg: 'Giảm giá 30% cho các loại đồ uống',
    buttonText: 'ĐẶT NGAY !',
  },
  //   {
  //     slideId: 2,
  //     slideImage: 'https://picsum.photos/1905/700',
  //   },
  //   {
  //     slideId: 3,
  //     slideImage: 'https://picsum.photos/1905/700',
  //   },
];

export const listMenu: Menu[] = [
  {
    menuId: 1,
    menuName: 'Thực đơn',
  },
  {
    menuId: 2,
    menuName: 'Liên hệ',
  },
  {
    menuId: 1,
    menuName: 'About',
  },
];

export const listUser: User[] = [
  {
    userId: 1,
    userName: '',
    userPhoneNumber: +84,
    userEmail: '',
  }
]
