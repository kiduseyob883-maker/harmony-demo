// ─────────────────────────────────────────────────────────────
//  Harmony Cafe — editable site content.
//  Change contact details, hours, menu items and reviews here.
// ─────────────────────────────────────────────────────────────

export const contact = {
  name: "Harmony Cafe",
  phone: "+251 91 038 5936",
  whatsapp: "251910385936",
  email: "hello@harmonycafe.et",
  address: "Harmony Cafe, Adama, Ethiopia",
  mapsUrl:
    "https://maps.google.com/maps?svid=CCYSESoPCg0vZy8xMWw3NXFiMDRsGAo&um=1&ie=UTF-8&fb=1&gl=et&sa=X&ftid=0x164b1f3a582ed057:0x1fe25f49369f4b29",
  mapsEmbed: "https://www.google.com/maps?q=Harmony+Cafe+Adama&output=embed",
  instagram: "https://www.instagram.com/harmony_cafe_adama/",
  facebook: "https://www.facebook.com/harmoney.cafe.adama/",
  tiktok: "https://www.tiktok.com/@harmony_cafe",
};

export const whatsappLink = (text = "Hello Harmony Cafe! I'd like to make a reservation.") =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const hours = [
  { day: "Monday – Friday", time: "6:30 AM – 10:00 PM" },
  { day: "Saturday", time: "7:00 AM – 11:00 PM" },
  { day: "Sunday", time: "7:00 AM – 10:00 PM" },
];

export type Category = "coffee" | "breakfast" | "pizza" | "burgers" | "mains" | "drinks" | "desserts";

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "coffee", label: "Coffee & Tea" },
  { id: "breakfast", label: "Breakfast" },
  { id: "pizza", label: "Pizza" },
  { id: "burgers", label: "Burgers & Sandwiches" },
  { id: "mains", label: "Mains" },
  { id: "drinks", label: "Juices & Mojitos" },
  { id: "desserts", label: "Salads & Sweets" },
];

export type MenuItem = { name: string; price: number; category: Category; note?: string; signature?: boolean };

// Prices in Ethiopian Birr (ETB), taken from the in-store menu.
export const menu: MenuItem[] = [
  // Coffee & tea
  { name: "Macchiato", price: 100, category: "coffee", note: "Bold espresso, velvet foam", signature: true },
  { name: "Ethiopian Coffee (Buna)", price: 80, category: "coffee", note: "Traditional ceremony pour" },
  { name: "Spresso / Iced Coffee", price: 80, category: "coffee" },
  { name: "Iced Latte", price: 260, category: "coffee" },
  { name: "Iced Caramel", price: 260, category: "coffee" },
  { name: "Iced Mocha", price: 280, category: "coffee" },
  { name: "Iced Cappuccino", price: 280, category: "coffee" },
  { name: "Hot Caramel", price: 260, category: "coffee" },
  { name: "Hot Chocolate", price: 260, category: "coffee" },
  { name: "Peanut Macchiato", price: 130, category: "coffee", note: "House favourite, nutty & creamy", signature: true },
  { name: "Oreo Shake", price: 290, category: "coffee" },
  { name: "Africa Tea", price: 50, category: "coffee" },
  { name: "Spiced Tea with Lemon", price: 60, category: "coffee" },
  { name: "Green Tea", price: 60, category: "coffee" },
  // Breakfast
  { name: "Special Fetira", price: 450, category: "breakfast", note: "Flaky layered pastry, honey & egg", signature: true },
  { name: "Fetira with Egg", price: 330, category: "breakfast" },
  { name: "Special Chechebsa", price: 350, category: "breakfast", note: "Torn flatbread, spiced butter" },
  { name: "Kurt Teff Chechebsa", price: 500, category: "breakfast" },
  { name: "Scrambled Eggs", price: 235, category: "breakfast" },
  { name: "Scrambled Eggs with Meat", price: 350, category: "breakfast" },
  { name: "Siga Firfer", price: 380, category: "breakfast" },
  { name: "Tibs Firfer", price: 380, category: "breakfast" },
  { name: "Enqulal with Avocado", price: 250, category: "breakfast" },
  { name: "Pancake", price: 300, category: "breakfast" },
  { name: "Omelet", price: 240, category: "breakfast" },
  // Pizza
  { name: "Harmony Pizza", price: 960, category: "pizza", note: "Our signature loaded pie", signature: true },
  { name: "Special Pizza", price: 840, category: "pizza" },
  { name: "Chicken Pizza", price: 870, category: "pizza" },
  { name: "Turkey Pizza", price: 870, category: "pizza" },
  { name: "Calzone Pizza", price: 850, category: "pizza" },
  { name: "Special Tuna Pizza", price: 750, category: "pizza" },
  { name: "Margherita Pizza", price: 700, category: "pizza" },
  { name: "Beef Pizza", price: 660, category: "pizza" },
  { name: "Fasting Veg Pizza", price: 350, category: "pizza" },
  // Burgers & sandwiches
  { name: "Harmony Burger", price: 700, category: "burgers", note: "Double beef, house sauce", signature: true },
  { name: "American Burger", price: 750, category: "burgers" },
  { name: "Double Special Burger", price: 700, category: "burgers" },
  { name: "Chicken Burger", price: 700, category: "burgers" },
  { name: "Cheese Burger", price: 600, category: "burgers" },
  { name: "Fasting Burger", price: 400, category: "burgers" },
  { name: "Harmony Club Sandwich", price: 680, category: "burgers" },
  { name: "Chicken Sandwich", price: 600, category: "burgers" },
  { name: "Beef Shawarma", price: 650, category: "burgers" },
  { name: "Chicken Shawarma", price: 700, category: "burgers" },
  { name: "Chips", price: 250, category: "burgers" },
  // Mains
  { name: "Harmony Combo", price: 980, category: "mains", note: "A feast of our best plates", signature: true },
  { name: "Special Tibs", price: 690, category: "mains" },
  { name: "Grilled Chicken", price: 780, category: "mains" },
  { name: "Chicken Cutlet", price: 780, category: "mains" },
  { name: "Fish Goulash", price: 600, category: "mains" },
  { name: "Fish Cutlet", price: 580, category: "mains" },
  { name: "Fasting Combo", price: 650, category: "mains" },
  { name: "Shiro with Tuna", price: 350, category: "mains" },
  { name: "Spaghetti with Meat", price: 380, category: "mains" },
  { name: "Penne with Cheese", price: 350, category: "mains" },
  { name: "Rice with Chicken", price: 465, category: "mains" },
  // Juices & mojitos
  { name: "Harmony Juice", price: 250, category: "drinks", note: "Layered seasonal fruits", signature: true },
  { name: "Avocado Juice", price: 230, category: "drinks" },
  { name: "Mango Juice", price: 230, category: "drinks" },
  { name: "Mango Shake", price: 280, category: "drinks" },
  { name: "Harmony Shake Mojito", price: 290, category: "drinks", signature: true },
  { name: "Strawberry Mojito", price: 280, category: "drinks" },
  { name: "Classic Mint Mojito", price: 280, category: "drinks" },
  { name: "Pineapple Mojito", price: 260, category: "drinks" },
  { name: "Ginger Mojito", price: 260, category: "drinks" },
  { name: "Watermelon Juice", price: 170, category: "drinks" },
  // Salads & sweets
  { name: "Fruit Salad", price: 430, category: "desserts", note: "Fresh-cut seasonal fruit", signature: true },
  { name: "Fruit Punch", price: 350, category: "desserts" },
  { name: "Chicken Salad", price: 560, category: "desserts" },
  { name: "Tuna Salad", price: 520, category: "desserts" },
  { name: "Mixed Salad", price: 450, category: "desserts" },
  { name: "Chocolate Cake Slice", price: 220, category: "desserts" },
  { name: "Butter Croissant", price: 150, category: "desserts" },
];

export const offers = [
  { tag: "Every morning", title: "Breakfast Ritual", text: "Any breakfast plate + macchiato before 10 AM.", price: "From 300 ETB" },
  { tag: "Mon – Thu", title: "Mojito Hour", text: "Second mojito at half price from 4 PM to 7 PM.", price: "50% off" },
  { tag: "Weekends", title: "Harmony Feast", text: "Harmony Pizza + Harmony Burger + 2 juices for sharing.", price: "1,990 ETB" },
];

export const testimonials = [
  { name: "Selam T.", text: "The peanut macchiato is unreal. Cosy seats, quick service and the staff remember your order.", rating: 5 },
  { name: "Daniel M.", text: "Best Harmony Pizza in the neighbourhood. Generous portions and fair prices — we come every Friday.", rating: 5 },
  { name: "Hanna G.", text: "A calm place to work with great Wi-Fi and fresh avocado juice. My new favourite spot.", rating: 5 },
  { name: "Yonas A.", text: "Special fetira for breakfast was perfect. Warm, flaky and served with a smile.", rating: 5 },
  { name: "Meron K.", text: "Lovely atmosphere for family lunch. The Harmony combo is enough for two!", rating: 4 },
  { name: "Abel B.", text: "Strawberry mojito and the club sandwich hit the spot. Clean, friendly and great value.", rating: 5 },
];
