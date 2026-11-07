import { IMAGES } from "./images";

export interface ToolItem {
  id: string;
  name: string;
  kinyarwandaName: string;
  category: "vessel" | "churning" | "filtering" | "household" | "herding";
  description: string;
  usage: string;
  culturalSignificance: string;
  material: string;
  image: string;
}

export interface ClothingItem {
  id: string;
  name: string;
  kinyarwandaName: string;
  gender: "Women" | "Men" | "Unisex";
  occasion: string;
  description: string;
  accessories: string[];
  image: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "All Ages";
  description: string;
  highlights: string[];
  included: string[];
  bestTime: string;
  image: string;
}

export interface AccommodationItem {
  id: string;
  name: string;
  type: "Community Camp & Lodge" | "Eco-Lodge" | "Highland Guesthouse" | "Country Hotel";
  location: string;
  distanceFromBigogwe: string;
  description: string;
  amenities: string[];
  priceRange: string;
  status: "Verified Local Partner" | "Regional Accommodation Hub";
  contact: string;
  image: string;
}

export interface GuideItem {
  id: string;
  name: string;
  role: string;
  origin: string;
  bio: string;
  specialties: string[];
  languages: string[];
  yearsExperience: number;
  highlightTour: string;
}

export interface GalleryMediaItem {
  id: string;
  title: string;
  category: "Cattle" | "Milk Processing" | "Clothing" | "Cultural Dances" | "Landscapes" | "Tourism";
  description: string;
  location: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

/* ---------------- CATTLE DATA ---------------- */
export const CATTLE_FACTS = [
  {
    title: "The Sacred Inyambo",
    description: "Revered historically as the royal cattle of Rwanda, known for magnificent lyre-shaped horns extending up to 2 meters in span.",
    badge: "Royal Lineage",
  },
  {
    title: "Highland Pastures",
    description: "Bigogwe's unique microclimate at 2,300m elevation yields perpetually lush kikuyu grass, nourishing cattle naturally year-round.",
    badge: "Microclimate",
  },
  {
    title: "Gentle Pastoral Bond",
    description: "Herds respond to distinct whistling melodies and affectionate name calls passed down through pastoralist generations.",
    badge: "Living Bond",
  },
  {
    title: "Social Harmony",
    description: "Cows symbolize peace and fellowship. Kugabira (gifting a cow) remains the highest expression of lasting friendship in Rwanda.",
    badge: "Culture of Giving",
  },
];

/* ---------------- TRADITIONAL TOOLS ---------------- */
export const TRADITIONAL_TOOLS: ToolItem[] = [
  {
    id: "tool-icyanzi",
    name: "Traditional Wooden Milk Pot",
    kinyarwandaName: "Icyanzi (pl. Ibyanzi)",
    category: "vessel",
    description: "Hand-carved from dense indigenous wood (such as Umwungo or Umusave), adorned with scorched geometric diamond and chevron motifs, and crowned with a tightly woven conical straw cover called Umunega.",
    usage: "Used for milking directly from the cow, keeping fresh milk cool, and serving prized milk to esteemed guests.",
    culturalSignificance: "An Icyanzi is an heirloom passed down through families. It is cleansed with boiling water and infused with herbal smoke (Gukurungira) daily.",
    material: "Carved hardwood with woven sweetgrass cover",
    image: IMAGES.milk,
  },
  {
    id: "tool-igisabo",
    name: "Milk Churning Calabash",
    kinyarwandaName: "Igisabo",
    category: "churning",
    description: "A large, cured natural bottle gourd bound in handwoven vegetable fiber nets or treated leather straps for protection and hanging.",
    usage: "Milk is left to gently ferment in the gourd, then rocked rhythmically back and forth on a padded ring (Urweso) to churn traditional butter (Amavuta y'inka).",
    culturalSignificance: "Churning butter in an Igisabo is accompanied by melodious songs and represents abundance, nurture, and feminine wisdom in pastoral homes.",
    material: "Natural cured gourd, plant fiber netting, leather cord",
    image: IMAGES.milk,
  },
  {
    id: "tool-inkongoro",
    name: "Traditional Milking Vessel / Cup",
    kinyarwandaName: "Inkongoro",
    category: "vessel",
    description: "A smaller wooden vessel with an ergonomic handle, sculpted meticulously by master woodcarvers from a single piece of wood.",
    usage: "Used by milkers to collect the initial streams of milk during morning milking and for sharing fresh warm milk (Amata mashyushyu) with children.",
    culturalSignificance: "Symbolizes first nourishment and respectful handling of dairy.",
    material: "Polished single-block wood",
    image: IMAGES.milk,
  },
  {
    id: "tool-inshunzi",
    name: "Handwoven Milk Strainer",
    kinyarwandaName: "Inshunzi",
    category: "filtering",
    description: "A delicate conical sieve woven from fine wild reeds and river grass fibers that creates an ultra-fine natural filter.",
    usage: "Placed over the mouth of the Icyanzi when pouring freshly milked milk to filter any pasture dust or grass blades.",
    culturalSignificance: "Reflects the exacting standards of purity, hygiene, and reverence applied to sacred dairy in Rwandan tradition.",
    material: "Wild dried reeds & natural plant raffia",
    image: IMAGES.milk,
  },
  {
    id: "tool-inkoni",
    name: "Pastoral Herding Staff",
    kinyarwandaName: "Inkoni y'Umwungeri",
    category: "herding",
    description: "A smooth, slender hardwood rod burnished with oil, carried by shepherds across the rolling green knolls of Bigogwe.",
    usage: "Used to gently direct cattle paths, support the herder on steep highland slopes, and rhythmically tap the ground during cattle chants.",
    culturalSignificance: "An emblem of dignity, guardianship, and pastoral authority. It is never used to strike cows harshly.",
    material: "Oil-treated indigenous olive or ironwood",
    image: IMAGES.tourism,
  },
  {
    id: "tool-agaseke",
    name: "Traditional Peace Basket",
    kinyarwandaName: "Agaseke",
    category: "household",
    description: "World-renowned conical woven basket featuring geometric zigzag patterns symbolizing Rwandan unity, peace, and mutual support.",
    usage: "Used to present gifts of dried dairy treats, medicinal herbs, and cherished treasures during cultural ceremonies.",
    culturalSignificance: "Featured on national emblems, representing the collaborative resilience and intricate artistry of Rwandan women.",
    material: "Sisal fiber, sweetgrass, and natural mineral dyes",
    image: IMAGES.clothing,
  },
];

/* ---------------- TRADITIONAL CLOTHING ---------------- */
export const TRADITIONAL_CLOTHING: ClothingItem[] = [
  {
    id: "clothing-umushanana",
    name: "Umushanana Ceremonial Attire",
    kinyarwandaName: "Umushanana",
    gender: "Women",
    occasion: "Weddings (Gusaba), state ceremonies, cultural celebrations, and church feasts",
    description: "The quintessential national dress for Rwandan women. Composed of a gracefully gathered, floor-length skirt (Ikitengeso), a fitted bustier bodice, and a luminous sash draped diagonally across one shoulder.",
    accessories: ["Beaded necklaces (Inyonga)", "Elaborate earrings", "Braided headbands (Uruti)", "Golden or bronze cuffs"],
    image: IMAGES.clothing,
  },
  {
    id: "clothing-intore-attire",
    name: "Intore Warrior & Hero Regalia",
    kinyarwandaName: "Umwambaro w'Intore",
    gender: "Men",
    occasion: "Traditional victory dances, cultural welcomes, national commemorations",
    description: "A striking ensemble featuring a flowered lion-mane headdress made of sisal fiber (Umugara), crossed beaded shoulder sashes, an ankle-rattler band (Inzogera), and a ceremonial small shield (Ingabo) and spear (Icumu).",
    accessories: ["Umugara (mane headdress)", "Ingabo (ceremonial shield)", "Icumu (spear)", "Inzogera (ankle bells)"],
    image: IMAGES.culture,
  },
  {
    id: "clothing-inshabure",
    name: "Historical Pastoral Cowhide & Barkcloth Wrap",
    kinyarwandaName: "Inshabure / Impuzu",
    gender: "Unisex",
    occasion: "Historical pastoral ceremonies, ancient court rites, elder heritage assemblies",
    description: "Softened cowhide or pounded barkcloth (Impuzu) from the Ficus tree, traditionally worn by pastoral herdsmen and elders before modern woven textiles.",
    accessories: ["Smooth cattle horn pendants", "Carved pastoral walking stick", "Woven tobacco pouch"],
    image: IMAGES.clothing,
  },
];

/* ---------------- TOURIST ACTIVITIES ---------------- */
export const TOURIST_ACTIVITIES: ActivityItem[] = [
  {
    id: "act-cattle-experience",
    title: "Authentic Inyambo Cattle Cultural Experience",
    tagline: "Walk with the Herders & Learn Pastoral Melodies",
    duration: "3 to 4 Hours",
    difficulty: "Easy",
    description: "Step into the mist of Bigogwe's emerald hills at sunrise. Join seasoned pastoralists, learn the rhythmic whistles used to call each cow, try your hand at gentle traditional milking, and hear heroic cattle poems.",
    highlights: [
      "Guided morning walk among majestic Ankole cows",
      "Hands-on traditional milking tutorial (Gukama)",
      "Learn soothing pastoral whistling and cattle call chants",
      "Opportunity to pose for breathtaking photos with long-horned cattle",
    ],
    included: ["Local pastoral guide", "Traditional herding staff loan", "Fresh milk or tea tasting", "Community conservation fee"],
    bestTime: "Morning (07:00 – 10:30) or Golden Hour (15:30 – 18:30)",
    image: IMAGES.cattle1,
  },
  {
    id: "act-milk-processing",
    title: "Traditional Milk Churning & Calabash Workshop",
    tagline: "Discover the Art of Igisabo & Fresh Fermented Ikivuguto",
    duration: "2 Hours",
    difficulty: "All Ages",
    description: "Learn how Rwandan ancestors preserved dairy without refrigeration. Participate in the fragrant ritual of Gukurungira (smoking the wooden pots with wild herbs), churn traditional butter in an Igisabo gourd, and taste chilled fermented buttermilk.",
    highlights: [
      "Hold the genuine cured Igisabo milk calabash",
      "Traditional butter churning using cured gourds",
      "Tasting flight of fresh milk (Amata mashyushyu) and rich Ikivuguto",
      "Insight into the cultural gift of Kugabira Amata",
    ],
    included: ["Workshop instructor", "All tasting portions", "Traditional snack pairing", "Storytelling session"],
    bestTime: "11:00 or 14:00 daily",
    image: IMAGES.milk,
  },
  {
    id: "act-hill-hiking",
    title: "Bigogwe Highland Ridge Hike & Volcano Vista",
    tagline: "Panoramic Treks Across Rwanda's Greenest Hills",
    duration: "2 to 3 Hours",
    difficulty: "Moderate",
    description: "Traverse gentle ridgelines rising to 2,400m altitude. Breathe crisp alpine air with panoramic vantage points overlooking the Virunga volcanic chain—Mount Karisimbi, Mikeno, and Bisoke. Visit panoramic rock formations and pastoral homesteads.",
    highlights: [
      "Scenic ridge walking along cattle grazing trails",
      "Spectacular Virunga volcanic panorama viewpoints",
      "Visit the iconic Bigogwe Rock formations",
      "Birdwatching and cool mountain breeze stops",
    ],
    included: ["Certified local trail guide", "Spring water", "Walking stick", "Trail access fee"],
    bestTime: "Early Morning (Clear skies) or Late Afternoon",
    image: IMAGES.landscape,
  },
  {
    id: "act-cultural-performance",
    title: "Intore Warriors & Amaraba Cattle Dance Performance",
    tagline: "Dynamic Drumming & Graceful Horn Imitation Dances",
    duration: "1.5 Hours",
    difficulty: "All Ages",
    description: "Experience the vibrant living arts of Rwanda. A local youth troupe performs the high-energy Intore dance with flying lion-manes and spears, followed by the soft, flowing Amaraba dance where female dancers mirror the horn movements of Inyambo cows.",
    highlights: [
      "Live acoustic drumming on traditional Ingoma drums",
      "High-jump and warrior choreography of Intore",
      "Graceful Amaraba dance mirroring cow elegance",
      "Interactive dance lesson where visitors can join the rhythm",
    ],
    included: ["Troupe performance", "Traditional welcome drink", "Dance tutorial", "Troupe gratuity fund"],
    bestTime: "Afternoon (16:00 – 17:30)",
    image: IMAGES.culture,
  },
  {
    id: "act-photography-tour",
    title: "Bigogwe Cow Horns & Pastoral Photography Tour",
    tagline: "Capture Rwanda's Most Iconic Cattle Silhouettes",
    duration: "3 Hours",
    difficulty: "Easy",
    description: "Designed for passionate photographers and content creators. We take you to secret ridgeline lookouts where warm sunset light illuminates the giant heart-shaped horns of Ankole cattle against emerald slopes and rolling mist.",
    highlights: [
      "Pose between the massive horns of friendly Inyambo cows",
      "Authentic portraits with local elders and herders in regalia",
      "Silhouettes of heart-shaped horns against sunset skies",
      "Guided by a local photographer guide who knows the best angles",
    ],
    included: ["Specialized photography guide", "Scenic viewpoint permits", "Access to pastoral family herds"],
    bestTime: "15:30 – 18:30 (Sunset)",
    image: IMAGES.cattle3,
  },
  {
    id: "act-community-visit",
    title: "Pastoral Community Homestay & Dairy Farm Visit",
    tagline: "Connect Deeply with Bigogwe Families & Modern Dairy",
    duration: "Half-Day (4 Hours)",
    difficulty: "Easy",
    description: "Spend time in an authentic Bigogwe pastoral homestead. Learn how families balance age-old cattle rearing with modern education, see women weaving Agaseke baskets, visit modern dairy collection centers, and share a warm home-cooked meal.",
    highlights: [
      "Warm welcome into a traditional family home compound",
      "Weaving demonstration of Agaseke and milk container covers",
      "Visit to the local dairy cooperative and modern milk center",
      "Share a wholesome home-cooked lunch featuring farm-fresh food",
    ],
    included: ["Community host guide", "Home-cooked lunch", "Craft demonstration", "Direct contribution to host family"],
    bestTime: "10:00 – 14:00",
    image: IMAGES.tourism,
  },
];

/* ---------------- ACCOMMODATIONS ---------------- */
export const ACCOMMODATIONS: AccommodationItem[] = [
  {
    id: "acc-bigogwe-community-camp",
    name: "Bigogwe Community Camp & Guesthouse",
    type: "Community Camp & Lodge",
    location: "Bigogwe Centre, Nyabihu District",
    distanceFromBigogwe: "Located right on the hills (0 km)",
    description: "A grassroots, community-run tourism campsite and cozy guesthouse overlooking the rolling pastures. Offers safari tents with comfortable beds, authentic farm meals, campfire storytelling, and direct departure for morning cattle walks.",
    amenities: ["Campfire lounge", "Traditional dairy breakfast", "Solar hot showers", "Pasture view deck", "Free Wi-Fi in lounge"],
    priceRange: "$25 – $65 / night",
    status: "Verified Local Partner",
    contact: "+250 788 123 456 (Bigogwe Tourism Desk)",
    image: IMAGES.tourism,
  },
  {
    id: "acc-nyabihu-eco-lodge",
    name: "Nyabihu Highland Eco-Lodge",
    type: "Eco-Lodge",
    location: "Kabaya / Mukamira, Nyabihu",
    distanceFromBigogwe: "8 km (approx. 12 mins drive)",
    description: "Charming stone cottages with fireplace heating nestled in the tea and dairy belt of Nyabihu. Perfect for travelers seeking tranquil countryside comfort with organic garden dining.",
    amenities: ["Stone fireplace rooms", "Organic farm-to-table dining", "Mountain bike rentals", "Panoramic tea garden views"],
    priceRange: "$80 – $140 / night",
    status: "Verified Local Partner",
    contact: "reservations@nyabihuecolodge.rw",
    image: IMAGES.landscape,
  },
  {
    id: "acc-musanze-volcano-hotels",
    name: "Musanze Regional Lodges & Hotels",
    type: "Country Hotel",
    location: "Musanze (Ruhengeri) Town",
    distanceFromBigogwe: "25 km (approx. 30 mins drive via RN4)",
    description: "Musanze offers a full spectrum of luxury lodges, mid-range hotels, and boutique guesthouses used by gorilla trekking visitors. An easy 30-minute paved drive to Bigogwe makes it ideal for day trips.",
    amenities: ["Full concierge service", "International restaurants", "Swimming pools", "Conference facilities"],
    priceRange: "$50 – $300 / night",
    status: "Regional Accommodation Hub",
    contact: "Inquire via Bigogwe Tourism Desk for recommendations",
    image: IMAGES.cattle2,
  },
  {
    id: "acc-rubavu-lake-resorts",
    name: "Rubavu / Lake Kivu Waterfront Hotels",
    type: "Country Hotel",
    location: "Gisenyi, Lake Kivu",
    distanceFromBigogwe: "32 km (approx. 40 mins drive west via RN4)",
    description: "Combine Bigogwe's rolling green cattle hills with the sandy beaches of Lake Kivu. Relax at lakeside resorts in Rubavu with boat cruises and sunset dining after spending your day exploring Bigogwe.",
    amenities: ["Lakeside beach access", "Water sports", "Sunset terrace dining", "Spa and wellness"],
    priceRange: "$70 – $250 / night",
    status: "Regional Accommodation Hub",
    contact: "Inquire via Bigogwe Tourism Desk",
    image: IMAGES.pasture,
  },
];

/* ---------------- LOCAL GUIDES ---------------- */
export const LOCAL_GUIDES: GuideItem[] = [
  {
    id: "guide-ngabo",
    name: "Ngabo Jean d'Amour",
    role: "Lead Cultural Tourism Guide & Storyteller",
    origin: "Born & raised in Bigogwe, Nyabihu",
    bio: "Pioneer of community tourism in Bigogwe. Passionate pastoral historian who has guided hundreds of international travelers, dignitaries, and photographers through the hidden pastures and oral traditions of the Inyambo cattle.",
    specialties: ["Ankole Cattle Traditions", "Highland Trail Navigation", "Oral Poetry (Ibyivugo)", "Photography Scouting"],
    languages: ["English", "French", "Kinyarwanda"],
    yearsExperience: 8,
    highlightTour: "Inyambo Sunrise Walk & Pastoral Heritage Immersion",
  },
  {
    id: "guide-uwera",
    name: "Uwera Clarisse",
    role: "Cultural Artisan & Milk Heritage Specialist",
    origin: "Nyabihu District",
    bio: "Master artisan who learned the delicate art of Agaseke weaving and traditional milk pot curing from her grandmother. Clarisse leads our hands-on workshops with warmth, patience, and contagious enthusiasm.",
    specialties: ["Traditional Milk Curing (Gukurungira)", "Butter Churning", "Agaseke Basketry", "Women's Pastoral Heritage"],
    languages: ["English", "Kinyarwanda"],
    yearsExperience: 6,
    highlightTour: "Traditional Milk Churning & Herbal Smoking Workshop",
  },
  {
    id: "guide-manzi",
    name: "Manzi Eric",
    role: "Highland Trekking & Landscape Guide",
    origin: "Bigogwe Hills",
    bio: "An energetic hiker and local nature enthusiast. Eric knows every winding trail across the Bigogwe volcanic ridgelines, the best sunrise viewpoints, and local folklore regarding the surrounding sacred hills.",
    specialties: ["Volcano Ridge Trekking", "Rock Formations Exploration", "Youth Cultural Dance", "Eco-Hiking"],
    languages: ["English", "Kinyarwanda", "Conversational Swahili"],
    yearsExperience: 5,
    highlightTour: "Bigogwe Highland Ridge Hike & Volcano Vista",
  },
];

/* ---------------- GALLERY ITEMS ---------------- */
export const GALLERY_ITEMS: GalleryMediaItem[] = [
  {
    id: "gal-1",
    title: "Majestic Ankole Cattle Grazing on Bigogwe Slopes",
    category: "Cattle",
    description: "Long-horned Inyambo cattle grazing peacefully on the lush emerald green pastures of Bigogwe.",
    location: "Bigogwe Highland Pastures",
    image: IMAGES.cattle1,
  },
  {
    id: "gal-2",
    title: "Royal Inyambo Herd Procession",
    category: "Cattle",
    description: "Grand procession of long-horned Ankole cattle walking down a country road lined with rich green foliage.",
    location: "Bigogwe Rural Trail",
    image: IMAGES.cattle2,
  },
  {
    id: "gal-3",
    title: "The Iconic Heart-Shaped Horn Silhouette",
    category: "Cattle",
    description: "A breathtaking Inyambo cow whose immense curved horns form a natural, perfect heart shape.",
    location: "Bigogwe Sunrise Knoll",
    image: IMAGES.cattle3,
  },
  {
    id: "gal-4",
    title: "Mother Ankole Cow & Spotted Calf",
    category: "Cattle",
    description: "A protective mother Inyambo cow with wide curved ivory horns standing with her newborn calf.",
    location: "Nyabihu Meadow",
    image: IMAGES.cattleCalf,
  },
  {
    id: "gal-5",
    title: "Living Milk Culture with Igisabo Calabash",
    category: "Milk Processing",
    description: "Delighted visitor in Bigogwe holding a traditional milk churning gourd alongside a gentle Inyambo cow.",
    location: "Bigogwe Cultural Homestead",
    image: IMAGES.milk,
  },
  {
    id: "gal-6",
    title: "Highland Tourism & Herding Staff Experience",
    category: "Tourism",
    description: "A traveler framed gracefully between the majestic horns of an Ankole cow on the lush green hills.",
    location: "Bigogwe Viewpoint Ridge",
    image: IMAGES.tourism,
  },
  {
    id: "gal-7",
    title: "Expansive Emerald Pastures & Blue Sky",
    category: "Landscapes",
    description: "Sweeping panoramic green pastures under a brilliant blue sky with dairy cows grazing peacefully.",
    location: "Nyabihu Scenic Basin",
    image: IMAGES.landscape,
  },
  {
    id: "gal-8",
    title: "Highland Dairy Herd in Lush Pastures",
    category: "Landscapes",
    description: "Healthy dairy cattle grazing on the fertile volcanic soils and lush kikuyu grass of Bigogwe.",
    location: "Bigogwe Dairy Belt",
    image: IMAGES.pasture,
  },
  {
    id: "gal-9",
    title: "Peaceful Grazing on the Rolling Knolls",
    category: "Cattle",
    description: "A cow grazing contentedly on the vibrant green hills that make Bigogwe famous as Rwanda's dairy capital.",
    location: "Bigogwe Green Hills",
    image: IMAGES.dairyCow,
  },
  {
    id: "gal-10",
    title: "Modern Dairy Excellence in Nyabihu",
    category: "Tourism",
    description: "Healthy dairy cow in open pasture, supporting Rwanda's celebrated Girinka (One Cow Per Poor Family) program.",
    location: "Nyabihu Dairy Hub",
    image: IMAGES.modernDairy,
  },
  {
    id: "gal-11",
    title: "Nurturing Dairy Cow & Calf",
    category: "Milk Processing",
    description: "Mother dairy cow nursing her calf in the clover and grass meadow, symbolizing abundance and care.",
    location: "Bigogwe Family Pasture",
    image: IMAGES.dairyNursing,
  },
  {
    id: "gal-12",
    title: "Joyful Intore Cultural Dancers",
    category: "Cultural Dances",
    description: "Performers executing the traditional warrior dance with lion-mane headdresses and rhythmic drumming.",
    location: "Cultural Amphitheatre",
    image: IMAGES.culture,
  },
  {
    id: "gal-13",
    title: "Traditional Umushanana Elegance",
    category: "Clothing",
    description: "Rwandan elders and women adorned in the graceful draped Umushanana ceremonial attire.",
    location: "Highland Countryside",
    image: IMAGES.clothing,
  },
];

/* ---------------- FREQUENTLY ASKED QUESTIONS ---------------- */
export const FAQS: FAQItem[] = [
  {
    question: "Where is Bigogwe located in Rwanda?",
    answer: "Bigogwe is located in Nyabihu District, Western Province of Rwanda, perched at around 2,300 meters above sea level. It sits directly on the well-paved RN4 highway between Musanze (home of Volcanoes National Park) and Rubavu (Lake Kivu), making it an easy and convenient stop on any Rwandan travel circuit.",
  },
  {
    question: "How long does it take to reach Bigogwe from Kigali?",
    answer: "The scenic drive from Kigali to Bigogwe takes approximately 2.5 to 3 hours along well-maintained paved highways. You can travel via private car, organized tour vehicle, or regular public express buses operating between Kigali and Rubavu.",
  },
  {
    question: "What is the best time of year to visit Bigogwe?",
    answer: "Bigogwe is green and picturesque throughout the year due to its highland rainfall and fertile volcanic soils. The dry seasons from June to September and December to February offer crisp skies with magnificent views of the Virunga volcanoes. Mornings and late afternoons are the most magical times of day for cattle walks.",
  },
  {
    question: "What should I wear for a visit to the cattle hills?",
    answer: "We recommend comfortable walking shoes or light hiking boots (grass can be dewy in the morning), long comfortable trousers, a light fleece jacket or cardigan (highland mornings and evenings can be brisk), sunglasses, and a sunhat.",
  },
  {
    question: "Can children and families participate in cattle activities?",
    answer: "Yes! Inyambo cattle are famously gentle and accustomed to people. Children and families thoroughly enjoy visiting the cows, watching the calves, and participating in butter churning workshops.",
  },
  {
    question: "Do I need to book activities in advance?",
    answer: "While drop-in visits are possible, advance booking (at least 24 hours prior) ensures that local guides, pastoral families, and cultural dance performers are prepared to offer you the most authentic and immersive experience.",
  },
];
