type MenuItem = {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  category: string;
};

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: "Cheeseburger Wendy's Burger",
    price: 5.15,
    rating: 4.8,
    image: '🍔',
    description: 'Juicy beef patty with melted cheese, fresh lettuce, tomatoes, and our special sauce',
    category: 'Main Dish',
  },
  {
    id: '2',
    name: "Hamburger Wendy's Burger",
    price: 4.45,
    rating: 4.6,
    image: '🍔',
    description: 'Classic burger with premium beef patty and fresh toppings',
    category: 'Main Dish',
  },
  {
    id: '3',
    name: "Hamburger Combo Burger",
    price: 6.45,
    rating: 4.5,
    image: '🍔',
    description: 'Complete meal with burger, fries, and drink',
    category: 'Main Dish',
  },
  {
    id: '4',
    name: "Cheeseburger Italian Burger",
    price: 6.45,
    rating: 4.7,
    image: '🍔',
    description: 'Italian style burger with special herbs and mozzarella',
    category: 'Main Dish',
  },
];
