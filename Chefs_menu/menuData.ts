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
        name: "Wendy's Cheeseburger",
        price: 5.15,
        rating: 4.8,
        image: '🍔',
        description: "A juicy beef patty topped with melted cheddar, crisp lettuce, ripe tomato, and our tangy house sauce. Comfort in every bite.",
        category: 'Main Dish',
    },
    {
        id: '2',
        name: "Wendy's Classic Hamburger",
        price: 4.45,
        rating: 4.6,
        image: '🍔',
        description: "Simple and satisfying: a seasoned beef patty with fresh onions, pickles, and a soft toasted bun.",
        category: 'Main Dish',
    },
    {
        id: '3',
        name: "Burger Combo (Fries & Drink)",
        price: 6.45,
        rating: 4.5,
        image: '🍔🥤🍟',
        description: "Everything you need for lunch: a tasty burger served with crispy fries and a cold drink.",
        category: 'Combo',
    },
    {
        id: '4',
        name: "Italian-Style Cheeseburger",
        price: 6.45,
        rating: 4.7,
        image: '🍔',
        description: "An Italian twist on the classic: melted mozzarella, a blend of herbs, and a hint of balsamic for extra flavor.",
        category: 'Main Dish',
    },
];
