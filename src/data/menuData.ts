export type MenuItemType = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  isVeg: boolean;
};

export const menuData: MenuItemType[] = [
  { id: 'c1', name: 'Cappuccino', price: 220, description: 'Classic espresso with creamy microfoam.', category: 'Coffee', isVeg: true },
  { id: 'c2', name: 'Flat White', price: 240, description: 'Rich espresso with velvety steamed milk.', category: 'Coffee', isVeg: true },
  { id: 'c3', name: 'Spanish Latte', price: 260, description: 'Sweetened condensed milk espresso.', category: 'Coffee', isVeg: true },
  { id: 'c4', name: 'Mocha', price: 280, description: 'Espresso with rich chocolate and steamed milk.', category: 'Coffee', isVeg: true },
  
  { id: 'b1', name: 'Cold Brew', price: 250, description: 'Slow-steeped for 18 hours, served over ice.', category: 'Brews', isVeg: true },
  { id: 'b2', name: 'V60 Pour Over', price: 280, description: 'Clean, bright, and nuanced filter coffee.', category: 'Brews', isVeg: true },
  { id: 'b3', name: 'Aeropress', price: 260, description: 'Smooth, full-bodied immersion brew.', category: 'Brews', isVeg: true },
  
  { id: 'm1', name: 'Virgin Mojito', price: 200, description: 'Refreshing mint and lime cooler.', category: 'Mocktails', isVeg: true },
  { id: 'm2', name: 'Passionfruit Cooler', price: 240, description: 'Tropical passionfruit with sparkling water.', category: 'Mocktails', isVeg: true },
  
  { id: 'f1', name: 'Avocado Toast', price: 320, description: 'Smashed avocado on sourdough with chili flakes.', category: 'Food', isVeg: true },
  { id: 'f2', name: 'Chicken Sandwich', price: 350, description: 'Grilled chicken, pesto, and fresh greens.', category: 'Food', isVeg: false },
  { id: 'f3', name: 'Veg Pizza', price: 380, description: 'Wood-fired pizza with fresh seasonal veggies.', category: 'Food', isVeg: true },
  
  { id: 'd1', name: 'Tiramisu', price: 300, description: 'Classic Italian coffee-flavored dessert.', category: 'Desserts', isVeg: false },
  { id: 'd2', name: 'Cheesecake', price: 320, description: 'New York style baked cheesecake.', category: 'Desserts', isVeg: false },
];

export const categories = ['Coffee', 'Brews', 'Mocktails', 'Food', 'Desserts'];
