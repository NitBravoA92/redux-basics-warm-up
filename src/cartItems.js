import { v4 as uuidv4 } from 'uuid';

const cartItems = [
  {
    id: uuidv4(),
    title: 'Samsung Galaxy S8',
    price: '190.99',
    img: 'https://images2.imgbox.com/c2/14/zedmXgs6_o.png',
    amount: 1,
  },
  {
    id: uuidv4(),
    title: 'google pixel',
    price: '550.99',
    img: 'https://images2.imgbox.com/fb/3d/O4TPmhlt_o.png',
    amount: 1,
  },
  {
    id: uuidv4(),
    title: 'Xiaomi Redmi Note 2',
    price: '650.99',
    img: 'https://images2.imgbox.com/4f/3d/WN3GvciF_o.png',
    amount: 1,
  },
  {
    id: uuidv4(),
    title: 'Samsung Galaxy S7',
    price: '700.00 ',
    img: 'https://images2.imgbox.com/2e/7c/yFsJ4Zkb_o.png',
    amount: 1,
  },
];

export default cartItems;
