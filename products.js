// Shared product data for all pages
window.PRODUCTS = [
  {
    id: 1,
    title: "iPhone 14 - Midnight 128GB",
    brand: "Apple",
    category: "Smartphones",
    price: 799,
    oldPrice: 899,
    rating: 4,
    condition: "new",
    verified: true,
    orders: 321,
    shipping: "Free Shipping",
    img: "https://www.electrogas.pk/cdn/shop/files/Apple-iPhone-14-iPhone-14-Plus-purple_f54d85ea-3299-4802-a5e3-2e43efbe3097.jpg?v=1698178879", 
    images: [
      "https://www.electrogas.pk/cdn/shop/files/Apple-iPhone-14-iPhone-14-Plus-purple_f54d85ea-3299-4802-a5e3-2e43efbe3097.jpg?v=1698178879",
      "https://www.electrogas.pk/cdn/shop/files/Apple-iPhone-14-iPhone-14-Plus-purple_f54d85ea-3299-4802-a5e3-2e43efbe3097.jpg?v=1698178879",
      "https://www.electrogas.pk/cdn/shop/files/Apple-iPhone-14-iPhone-14-Plus-purple_f54d85ea-3299-4802-a5e3-2e43efbe3097.jpg?v=1698178879",
      "https://www.electrogas.pk/cdn/shop/files/Apple-iPhone-14-iPhone-14-Plus-purple_f54d85ea-3299-4802-a5e3-2e43efbe3097.jpg?v=1698178879"
    ],
    desc: "A15 Bionic. 6.1-inch display.",
    specs: { Model: "#IP14-128", Style: "Slim", Size: "146.7 x 71.5 x 7.8mm", Memory: "128GB" }
  },
  
  {
    id: 2,
    title: "Xiaomi Pad 5 - 6GB/128GB",
    brand: "Xiaomi",
    category: "Tablets",
    price: 399,
    oldPrice: 449,
    rating: 4,
    condition: "new",
    verified: true,
    orders: 215,
    shipping: "Free Shipping",
    img: "/images/tech/xiaomi-pad-5.jpg",
    desc: "The Xiaomi Pad 5 features an 11-inch 2.5K display, Snapdragon 860 processor, 6GB RAM, and 128GB storage. Perfect for productivity and entertainment.",
    specs: { Model: "#XM-PAD5-128", Style: "Slim bezel", Size: "254.7 x 166.3 x 6.9mm", Memory: "6GB RAM / 128GB Storage" }
  },
  
  {
    id: 3,
    title: "Xiaomi Mi 9 - 6GB/128GB",
    brand: "Xiaomi",
    category: "Smartphones",
    price: 299,
    oldPrice: 349,
    rating: 4,
    condition: "new",
    verified: true,
    orders: 420,
    shipping: "Free Shipping",
    img: "/images/tech/xiaomi-mi-9.jpg",
    desc: "The Xiaomi Mi 9 offers a Snapdragon 855 processor, 6.39-inch AMOLED display, 6GB RAM, and 128GB storage. Fast, sleek, and powerful.",
    specs: { Model: "#XM-MI9-128", Style: "Slim bezel", Size: "157.5 x 74.67 x 7.61mm", Memory: "6GB RAM / 128GB Storage" }
  },
  
  {
    id: 4,
    title: "Apple iPhone 12 - 128GB Blue",
    brand: "Apple",
    category: "Smartphones",
    price: 699,
    oldPrice: 749,
    rating: 5,
    condition: "new",
    verified: true,
    orders: 580,
    shipping: "Free Shipping",
    img: "/images/tech/iphone-12-blue.jpg",
    desc: "Apple iPhone 12 with A14 Bionic chip, 6.1-inch Super Retina XDR display, 128GB storage, and advanced dual-camera system.",
    specs: { Model: "#IP12-128BL", Style: "Glass & Aluminum", Size: "146.7 x 71.5 x 7.4mm", Memory: "128GB Storage" }
  },
  
  {
    id: 5,
    title: "Onikuma K8 Gaming Headset - Blue",
    brand: "Onikuma",
    category: "Headphones",
    price: 39,
    oldPrice: 49,
    rating: 4,
    condition: "new",
    verified: true,
    orders: 210,
    shipping: "Free Shipping",
    img: "/images/tech/gaming-headset-blue.jpg",
    desc: "The Onikuma K8 gaming headset delivers immersive 7.1 surround sound, noise-cancelling microphone, and ultra-soft earmuffs for long gaming sessions.",
    specs: { Model: "#ONK-K8BL", Style: "Over-Ear", Size: "Adjustable headband", Memory: "N/A" }
  },

  // Additional Products

  {
    id: 6,
    title: "Canon EOS 2000D DSLR Camera",
    brand: "Canon",
    category: "Cameras",
    price: 498,
    oldPrice: 549,
    rating: 5,
    condition: "new",
    verified: true,
    orders: 95,
    shipping: "Free Shipping",
    img: "/images/tech/canon-eos-2000d.jpg",
    desc: "The Canon EOS 2000D is a versatile DSLR featuring a 24.1MP sensor, DIGIC 4+ processor, and full HD video recording. Perfect for beginners and enthusiasts alike.",
    specs: { Model: "#EOS-2000D", Style: "DSLR", Size: "129.0 x 101.3 x 77.6 mm", Memory: "SD/SDHC/SDXC card" }
  },
  
  {
    id: 7,
    title: "Xiaomi Mi Notebook Pro 15",
    brand: "Xiaomi",
    category: "Laptops",
    price: 1099,
    oldPrice: 1249,
    rating: 4,
    condition: "new",
    verified: true,
    orders: 74,
    shipping: "Free Shipping",
    img: "/images/tech/xiaomi-mi-notebook-pro.jpg",
    desc: "The Xiaomi Mi Notebook Pro 15 features a 3.2K OLED display, Intel Core i7 processor, 16GB RAM, and 512GB SSD. Sleek design with premium build quality for productivity and entertainment.",
    specs: { Model: "#MI-NBPRO15", Style: "Slim Laptop", Size: "348.4 x 237.5 x 15.9 mm", Memory: "16GB RAM / 512GB SSD" }
  },
  
  {
    id: 8,
    title: "Amazfit GTS 2 Mini Smartwatch",
    brand: "Amazfit",
    category: "Wearables",
    price: 89,
    oldPrice: 119,
    rating: 4,
    condition: "new",
    verified: true,
    orders: 156,
    shipping: "Free Shipping",
    img: "/images/tech/amazfit-gts2-mini.jpg",
    desc: "The Amazfit GTS 2 Mini features a 1.55-inch AMOLED display, heart rate monitoring, SpO2 measurement, GPS tracking, and up to 14 days of battery life in a sleek lightweight design.",
    specs: { Model: "#GTS2-MINI", Style: "Smartwatch", Size: "40.5 x 35.8 x 8.95 mm", Memory: "—" }
  },
  
  {
    id: 9,
    title: "BlitzWolf BW-HP2 Wireless Headphones - White",
    brand: "BlitzWolf",
    category: "Audio",
    price: 59,
    oldPrice: 79,
    rating: 4,
    condition: "new",
    verified: true,
    orders: 142,
    shipping: "Free Shipping",
    img: "/images/tech/blitzwolf-bw-hp2.jpg",
    desc: "The BlitzWolf BW-HP2 wireless headphones offer immersive sound with 40mm drivers, Bluetooth 5.0, up to 20 hours of playback, and a comfortable over-ear design for all-day listening.",
    specs: { Model: "#BW-HP2", Style: "Over-Ear", Size: "—", Memory: "—" }
  },

  // Additional products (11 to 27)
  // Just copy and paste the same format for the other products in your list.
  // Each entry should contain: `id`, `title`, `brand`, `category`, `price`, `oldPrice`, `rating`, `condition`, `verified`, `orders`, `shipping`, `img`, `desc`, and `specs`.

  // Repeat this pattern for all your product entries (11 to 27).
];
