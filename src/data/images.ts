// Authentic curated image assets for Bigogwe Cultural Heritage & Tourism
// Supporting both local public/images and exact Pinterest URLs provided by user

export const IMAGES = {
  // Primary images requested
  cattle1: "/images/cattle1.jpg",
  cattle2: "/images/cattle2.jpg",
  cattle3: "/images/cattle3.jpg",
  cattleCalf: "/images/cattle_calf.jpg",
  milk: "/images/milk.jpg",
  tourism: "/images/tourism.jpg",
  landscape: "/images/landscape.jpg",
  pasture: "/images/pasture.jpg",
  dairyCow: "/images/dairy_cow.jpg",
  modernDairy: "/images/modern_dairy.jpg",
  dairyNursing: "/images/dairy_nursing.jpg",
  culture: "/images/culture.jpg",
  clothing: "/images/clothing.jpg",
  traditionalClothing: "/images/clothing.jpg",
  culturalDance: "/images/culture.jpg",
  heroCattle: "/images/cattle1.jpg",
  landscapeHills: "/images/landscape.jpg",
  milkTools: "/images/milk.jpg",

  // Direct user-provided Pinterest URLs
  urls: {
    pin1: "https://i.pinimg.com/736x/02/d4/dd/02d4dda0bd66a5d8562ad302305307d0.jpg",
    pin2: "https://i.pinimg.com/736x/27/71/02/277102d8eeb5dc19e363b71ec052ce61.jpg",
    pin3: "https://i.pinimg.com/1200x/93/bb/c6/93bbc6b457848fb7a4823558b928ffeb.jpg",
    pin4: "https://i.pinimg.com/736x/da/d1/3b/dad13b8a5a00e8b1366b3c1ca82508d4.jpg",
    pin5: "https://i.pinimg.com/1200x/bb/51/80/bb518009e0a7cb6930ed0ef878a4f6e1.jpg",
    pin6: "https://i.pinimg.com/1200x/0a/ed/62/0aed624f304a0e7cbdec45b62062dbb5.jpg",
    pin7: "https://i.pinimg.com/1200x/0d/6d/1c/0d6d1c77722b1ffd5c662238141f96a9.jpg",
    pin8: "https://i.pinimg.com/736x/a7/6e/26/a76e2618dab387534e04b51a91b0158b.jpg",
    pin9: "https://i.pinimg.com/736x/68/98/bb/6898bbda4220872049fef45969cfd35c.jpg",
    pin10: "https://i.pinimg.com/736x/d8/c3/26/d8c32657d8bb1b57c096e2382d6f76db.jpg",
    pin11: "https://i.pinimg.com/736x/83/04/e3/8304e355b27b63e6e61af9883d336400.jpg",
  },
};

export interface SlideItem {
  id: string;
  image: string;
  fallbackImage: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  link: string;
}

export const HERO_SLIDES: SlideItem[] = [
  {
    id: "slide-cattle1",
    image: IMAGES.cattle1,
    fallbackImage: IMAGES.urls.pin1,
    title: "The Regal Ankole Cattle of Bigogwe",
    subtitle: "Majestic Long Horns & Centuries of Pastoral Traditions",
    description: "Witness the iconic Inyambo herds grazing on misty highland pastures at over 2,300 meters above sea level.",
    tag: "Sacred Cattle Heritage",
    link: "/cattle",
  },
  {
    id: "slide-cattle2",
    image: IMAGES.cattle2,
    fallbackImage: IMAGES.urls.pin2,
    title: "The Royal Herd on the Ancient Trails",
    subtitle: "Generations of Pastoral Devotion in Nyabihu",
    description: "A procession of majestic long-horned cattle traversing the rolling green countryside of Bigogwe.",
    tag: "Royal Cattle Procession",
    link: "/cattle",
  },
  {
    id: "slide-milk-tourism",
    image: IMAGES.milk,
    fallbackImage: IMAGES.urls.pin5,
    title: "Traditional Milk Culture & Calabashes",
    subtitle: "Experience Authentic Gourd Churning & Pastoral Life",
    description: "Meet local cattle keepers, hold the sacred Igisabo calabash, and discover the living art of Rwandan milk hospitality.",
    tag: "Living Milk Traditions",
    link: "/milk-culture",
  },
  {
    id: "slide-heart-horn",
    image: IMAGES.cattle3,
    fallbackImage: IMAGES.urls.pin3,
    title: "Symbol of Rwandan Peace & Beauty",
    subtitle: "Graceful Horns That Celebrate Nature's Artistry",
    description: "Bigogwe's Ankole cattle are famous worldwide for their gentle disposition and iconic heart-shaped lyre horn silhouettes.",
    tag: "Iconic Inyambo",
    link: "/cattle",
  },
  {
    id: "slide-tourism-visitor",
    image: IMAGES.tourism,
    fallbackImage: IMAGES.urls.pin6,
    title: "Walk With Herds on Rolling Green Hills",
    subtitle: "Unforgettable Moments in Rwanda's Highland Heartland",
    description: "Step into the green pastures, hold the herder's staff, and experience genuine community-rooted eco-tourism.",
    tag: "Cultural Tourism",
    link: "/tourism",
  },
  {
    id: "slide-landscape",
    image: IMAGES.landscape,
    fallbackImage: IMAGES.urls.pin7,
    title: "Rwanda's Rolling Emerald Haven",
    subtitle: "Undulating Pastures Beneath the Virunga Volcanoes",
    description: "Bigogwe's verdant hills offer sweeping panoramic trails, cool mountain breezes, and timeless countryside serenity.",
    tag: "Highland Landscapes",
    link: "/tourism",
  },
];
