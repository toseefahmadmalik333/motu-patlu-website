export interface MenuItem {
  id: string;
  name: string;
  category: string;
  subCategory?: 'burgers' | 'sandwiches' | 'pizza' | 'shawarma' | 'sides';
  description: string;
  priceDisplay: string;
  image: string;
  isAuthenticImage?: boolean;
  tag?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export const RESTAURANT_DATA = {
  name: "Motu Patlu",
  fullName: "Motu Patlu Food Point & Family Hall",
  city: "Kasur",
  address: "Dhor Kot Road, Main Bazar, Kasur, Punjab 55050, Pakistan",
  phone: "+92 305 4000033",
  phoneDisplay: "0305-4000033",
  whatsappUrl: "https://wa.me/923054000033",
  googleRating: "4.2",
  reviewCount: "251+",
  hours: "3:00 PM – 2:00 AM",
  operatingNote: "Open 7 Days a Week • Late-Night Dining",
};

export const BEST_DELIVERED_ITEMS: MenuItem[] = [
  {
    id: "kulhad-pizza",
    name: "Kasuri Famous Kulhad Pizza",
    category: "Signature Clay Pot",
    description: "Baked inside an authentic rustic terracotta clay pot with layered pizza dough, spiced chicken tikka boti cubes, sweet corn, and rich molten mozzarella pull.",
    priceDisplay: "Rs. 300/-",
    image: "/images/kulhad_pizza.png",
    isAuthenticImage: true,
    tag: "Viral Kasur Specialty",
  },
  {
    id: "flame-burger",
    name: "The Royal Kasuri Flame Burger",
    category: "Flame-Grilled Hero",
    description: "Artisan toasted brioche crown, double flame-grilled seasoned patty, double molten cheddar, caramelized sweet onions, and house special smoky relish.",
    priceDisplay: "Rs. 450/-",
    image: "/images/food/flame-burger.jpg",
    isAuthenticImage: false,
    tag: "Bestseller",
  },
  {
    id: "club-sandwich",
    name: "Special Triple-Decker Club Sandwich",
    category: "Artisan Sandwiches",
    description: "Three layers of golden toasted milk bread loaded with shredded spiced chicken, cheese slice, sunny-side fried egg, crisp lettuce, cucumber, and herb garlic spread.",
    priceDisplay: "Rs. 420/-",
    image: "/images/food/club-sandwich.jpg",
    isAuthenticImage: false,
    tag: "Must Try",
  },
  {
    id: "shawarma-platter",
    name: "Kasur Special Shawarma Platter",
    category: "Spit-Roasted Meat",
    description: "Finely shaved spiced chicken prepared over a vertical spit, served on warm freshly baked pita with authentic garlic toum, pickled veggies, and golden fries.",
    priceDisplay: "Rs. 450/-",
    image: "/images/food/shawarma-platter.jpg",
    isAuthenticImage: false,
    tag: "Chef Special",
  }
];

export const MENU_GRID_ITEMS: MenuItem[] = [
  {
    id: "royal-flame-burger",
    name: "Royal Flame Burger",
    category: "Burgers & Sandwiches",
    subCategory: "burgers",
    description: "Char-grilled seasoned beef/chicken patty, molten yellow cheddar, caramelized onions, and house barbecue glaze.",
    priceDisplay: "Rs. 450/-",
    image: "/images/food/flame-burger.jpg",
    tag: "🔥 Fire-Grilled",
  },
  {
    id: "zinger-master",
    name: "Zinger Crunch Burger",
    category: "Burgers & Sandwiches",
    subCategory: "burgers",
    description: "Signature battered crisp fried whole chicken fillet, spicy dynamite sauce, and crunchy iceberg on toasted brioche.",
    priceDisplay: "Rs. 480/-",
    image: "/images/food/zinger-master.jpg",
    tag: "⚡ Ultra Crispy",
  },
  {
    id: "club-supreme",
    name: "Kasuri Classic Club Sandwich",
    category: "Burgers & Sandwiches",
    subCategory: "sandwiches",
    description: "Golden toasted triangular club sandwich packed with chicken mayo, fried egg, cheddar slice, and crisp greens.",
    priceDisplay: "Rs. 420/-",
    image: "/images/food/club-sandwich.jpg",
    tag: "🥪 Fan Favorite",
  },
  {
    id: "grilled-panini",
    name: "Grilled Chicken Fajita Panini",
    category: "Burgers & Sandwiches",
    subCategory: "sandwiches",
    description: "Pressed toasted panini with spiced fajita chicken strips, sweet roasted bell peppers, and gooey mozzarella cheese.",
    priceDisplay: "Rs. 390/-",
    image: "/images/food/grilled-panini.jpg",
    tag: "🧀 Cheesy Melt",
  },
  {
    id: "kulhad-pizza-grid",
    name: "Terracotta Kulhad Pizza",
    category: "Pizzas & Kulhad",
    subCategory: "pizza",
    description: "Clay-pot baked mozzarella sensation with layered sauce, chicken tikka cubes, oregano herbs, and melted cheese stretch.",
    priceDisplay: "Rs. 300/-",
    image: "/images/kulhad_pizza.png",
    isAuthenticImage: true,
    tag: "🌟 Famous Specialty",
  },
  {
    id: "supreme-pizza",
    name: "Kasuri Supreme Stone Pizza",
    category: "Pizzas & Kulhad",
    subCategory: "pizza",
    description: "Loaded with chicken tikka chunks, smoked sausages, mushrooms, black olives, onions, and rich mozzarella.",
    priceDisplay: "Rs. 1,150/-",
    image: "/images/food/supreme-pizza.jpg",
    tag: "🍕 Stone-Baked",
  },
  {
    id: "classic-shawarma",
    name: "Spit-Fire Chicken Shawarma",
    category: "Shawarma & Rolls",
    subCategory: "shawarma",
    description: "Tender rotisserie-carved marinated chicken wrapped in soft pita with homemade garlic toum and crunchy pickles.",
    priceDisplay: "Rs. 250/-",
    image: "/images/food/shawarma-platter.jpg",
    tag: "🌯 Pure Tradition",
  },
  {
    id: "paratha-roll",
    name: "Jumbo BBQ Paratha Roll",
    category: "Shawarma & Rolls",
    subCategory: "shawarma",
    description: "Crispy pan-fried paratha wrapped around smoky charcoal chicken boti, sliced red onions, and tangy mint chutney.",
    priceDisplay: "Rs. 320/-",
    image: "/images/food/paratha-roll.jpg",
    tag: "🔥 Charcoal BBQ",
  },
  {
    id: "loaded-fries",
    name: "Loaded Cheesy Lava Fries",
    category: "Sides & Shakes",
    subCategory: "sides",
    description: "Crisp potato crinkle fries drenched in warm cheddar cheese sauce, chicken tikka bits, and jalapeño slices.",
    priceDisplay: "Rs. 320/-",
    image: "/images/food/loaded-fries.jpg",
    tag: "🍟 Cheesy Crunch",
  },
  {
    id: "chocolate-shake",
    name: "Thick Belgian Chocolate Shake",
    category: "Sides & Shakes",
    subCategory: "sides",
    description: "Whole milk blended with premium dark chocolate syrup, chocolate chips, and a scoop of creamy gelato.",
    priceDisplay: "Rs. 350/-",
    image: "/images/food/chocolate-shake.jpg",
    tag: "🥤 Chilled Indulgence",
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Muhammad Rizwan",
    rating: 5,
    comment: "Best fast food point in Kasur! Their zinger burgers, club sandwiches, and kulhad pizza are unmatched. The family hall upstairs is peaceful, cool, and comfortable for families.",
    avatar: "/images/avatars/avatar-1.jpg",
  },
  {
    id: "rev-2",
    name: "Usman Ali",
    rating: 4,
    comment: "Great taste, super fast delivery, and very convenient late-night timing till 2:00 AM. The grilled flame burger and sandwiches are top tier for late cravings.",
    avatar: "/images/avatars/avatar-2.jpg",
  },
  {
    id: "rev-3",
    name: "Tariq Mehmood",
    rating: 5,
    comment: "Family hall arrangements are very respectful and properly air conditioned. We enjoyed the stone pizza, club sandwiches, and clay-pot kulhad pizza. Highly recommended in Kasur!",
    avatar: "/images/avatars/avatar-3.jpg",
  },
];
