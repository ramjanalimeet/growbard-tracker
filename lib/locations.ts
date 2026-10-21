export type Location = {
  slug: string;
  name: string;
  // Older or alternative spelling people still search with, e.g. "Chittagong".
  alt?: string;
  division: string;
  // One line about the local economy, used to make each page specific.
  note: string;
};

export const DIVISIONS = [
  "Dhaka",
  "Chattogram",
  "Sylhet",
  "Khulna",
  "Rajshahi",
  "Rangpur",
  "Mymensingh",
  "Barishal",
] as const;

export const LOCATIONS: Location[] = [
  // Dhaka division
  { slug: "dhaka", name: "Dhaka", division: "Dhaka", note: "As the capital and the country's largest market, Dhaka is where competition for the top spots on Google is toughest." },
  { slug: "gazipur", name: "Gazipur", division: "Dhaka", note: "Gazipur is one of the country's biggest industrial hubs, home to hundreds of factories and a fast-growing population next to Dhaka." },
  { slug: "narayanganj", name: "Narayanganj", division: "Dhaka", note: "Narayanganj is a river port and industrial city known for its knitwear and textile businesses." },
  { slug: "tangail", name: "Tangail", division: "Dhaka", note: "Tangail is famous for its handwoven Tangail saree and has a busy local trade along the Dhaka–north highway." },
  { slug: "faridpur", name: "Faridpur", division: "Dhaka", note: "Faridpur is a major jute-growing district and a growing commercial centre, now closer to Dhaka thanks to the Padma Bridge." },
  { slug: "narsingdi", name: "Narsingdi", division: "Dhaka", note: "Narsingdi is a long-established textile and weaving hub just east of Dhaka." },
  { slug: "madaripur", name: "Madaripur", division: "Dhaka", note: "Madaripur sits on the Padma Bridge route, opening local businesses up to customers from Dhaka." },
  { slug: "gopalganj", name: "Gopalganj", division: "Dhaka", note: "Gopalganj is a south-central district whose businesses are now a short drive from Dhaka via the Padma Bridge." },
  { slug: "munshiganj", name: "Munshiganj", division: "Dhaka", note: "Munshiganj, known for its potato farming and the Mawa ghat, is one of the closest districts to Dhaka." },
  { slug: "shariatpur", name: "Shariatpur", division: "Dhaka", note: "Shariatpur lies on the southern end of the Padma Bridge, with fast-improving links to the capital." },
  { slug: "kishoreganj", name: "Kishoreganj", division: "Dhaka", note: "Kishoreganj is a gateway to the haor wetlands, with growing interest from visitors and investors." },

  // Chattogram division
  { slug: "chattogram", name: "Chattogram", alt: "Chittagong", division: "Chattogram", note: "Chattogram is the country's main port city and its biggest trade and commercial hub after Dhaka." },
  { slug: "cumilla", name: "Cumilla", alt: "Comilla", division: "Chattogram", note: "Cumilla is a major commercial city on the Dhaka–Chattogram highway with a large and growing customer base." },
  { slug: "coxs-bazar", name: "Cox's Bazar", division: "Chattogram", note: "Cox's Bazar is the country's top beach destination, where hotels, resorts and tour operators compete for every booking." },
  { slug: "brahmanbaria", name: "Brahmanbaria", division: "Chattogram", note: "Brahmanbaria is a growing commercial district on the Dhaka–Sylhet route with major gas fields nearby." },
  { slug: "feni", name: "Feni", division: "Chattogram", note: "Feni is a busy trading town on the Dhaka–Chattogram highway with a strong remittance-driven economy." },
  { slug: "noakhali", name: "Noakhali", division: "Chattogram", note: "Noakhali has a large community of families with relatives abroad, driving demand for property, education and consumer services." },
  { slug: "chandpur", name: "Chandpur", division: "Chattogram", note: "Chandpur is a river port where the Padma and Meghna meet, famous for its hilsa trade." },
  { slug: "lakshmipur", name: "Lakshmipur", division: "Chattogram", note: "Lakshmipur is a coastal district known for soybean and coconut farming and a growing local market." },

  // Sylhet division
  { slug: "sylhet", name: "Sylhet", division: "Sylhet", note: "Sylhet is known for its tea gardens and its large UK diaspora, which drives strong demand for property, education and lifestyle services." },
  { slug: "moulvibazar", name: "Moulvibazar", division: "Sylhet", note: "Moulvibazar, home to Sreemangal's tea gardens, attracts visitors year-round, making online visibility vital for hospitality businesses." },
  { slug: "habiganj", name: "Habiganj", division: "Sylhet", note: "Habiganj combines tea estates, gas fields and new industrial parks, bringing fresh businesses to the area." },
  { slug: "sunamganj", name: "Sunamganj", division: "Sylhet", note: "Sunamganj is famous for its haor wetlands such as Tanguar Haor, a growing destination for travellers." },

  // Khulna division
  { slug: "khulna", name: "Khulna", division: "Khulna", note: "Khulna is the industrial and commercial centre of the southwest and the gateway to the Sundarbans." },
  { slug: "jashore", name: "Jashore", alt: "Jessore", division: "Khulna", note: "Jashore is a trade hub near the Benapole land port and the centre of the country's flower trade." },
  { slug: "kushtia", name: "Kushtia", division: "Khulna", note: "Kushtia is a cultural centre, home to Lalon's shrine, and a busy trading town in the west." },
  { slug: "jhenaidah", name: "Jhenaidah", division: "Khulna", note: "Jhenaidah is an agricultural trading district with a growing number of local shops and service businesses." },
  { slug: "satkhira", name: "Satkhira", division: "Khulna", note: "Satkhira is a shrimp-farming district and a gateway to the Sundarbans." },
  { slug: "bagerhat", name: "Bagerhat", division: "Khulna", note: "Bagerhat is home to the UNESCO-listed Sixty Dome Mosque and a large shrimp industry." },

  // Rajshahi division
  { slug: "rajshahi", name: "Rajshahi", division: "Rajshahi", note: "Rajshahi is an education city known for its silk and mangoes, with a growing number of students and young professionals." },
  { slug: "bogura", name: "Bogura", alt: "Bogra", division: "Rajshahi", note: "Bogura is the commercial hub of the north, famous for its doi and its busy wholesale markets." },
  { slug: "pabna", name: "Pabna", division: "Rajshahi", note: "Pabna has a long manufacturing heritage, including pharmaceuticals and textiles." },
  { slug: "sirajganj", name: "Sirajganj", division: "Rajshahi", note: "Sirajganj is a handloom weaving centre at the western end of the bridge over the Jamuna river." },
  { slug: "chapainawabganj", name: "Chapainawabganj", division: "Rajshahi", note: "Chapainawabganj is known as the mango capital of Bangladesh, with a thriving seasonal online trade." },
  { slug: "joypurhat", name: "Joypurhat", division: "Rajshahi", note: "Joypurhat is an agricultural district known for potatoes and its sugar mill." },
  { slug: "naogaon", name: "Naogaon", division: "Rajshahi", note: "Naogaon is a major rice-producing district and home to the historic Paharpur Buddhist monastery." },

  // Rangpur division
  { slug: "rangpur", name: "Rangpur", division: "Rangpur", note: "Rangpur is the divisional headquarters and main commercial centre of the northwest." },
  { slug: "dinajpur", name: "Dinajpur", division: "Rangpur", note: "Dinajpur is known for its rice and litchis and for the Kantajew temple." },
  { slug: "thakurgaon", name: "Thakurgaon", division: "Rangpur", note: "Thakurgaon is a northern agricultural district with a growing small-business community." },
  { slug: "lalmonirhat", name: "Lalmonirhat", division: "Rangpur", note: "Lalmonirhat is home to the Burimari land port, a key route for cross-border trade." },
  { slug: "nilphamari", name: "Nilphamari", division: "Rangpur", note: "Nilphamari hosts the Uttara EPZ and Saidpur airport, bringing industry and travellers to the area." },
  { slug: "panchagarh", name: "Panchagarh", division: "Rangpur", note: "Panchagarh, the country's northernmost district, is known for its tea gardens and Tetulia's views of Kanchenjunga." },
  { slug: "kurigram", name: "Kurigram", division: "Rangpur", note: "Kurigram is a riverine district along the Brahmaputra with a close-knit local market." },

  // Mymensingh division
  { slug: "mymensingh", name: "Mymensingh", division: "Mymensingh", note: "Mymensingh is a divisional headquarters and education hub, home to Bangladesh Agricultural University." },
  { slug: "jamalpur", name: "Jamalpur", division: "Mymensingh", note: "Jamalpur is known for its nakshi kantha embroidery and local crafts." },
  { slug: "sherpur", name: "Sherpur", division: "Mymensingh", note: "Sherpur sits at the foot of the Garo Hills, with growing eco-tourism and agriculture." },
  { slug: "netrokona", name: "Netrokona", division: "Mymensingh", note: "Netrokona is a haor district whose Birishiri area draws a steady stream of visitors." },

  // Barishal division
  { slug: "barishal", name: "Barishal", alt: "Barisal", division: "Barishal", note: "Barishal is the river-port capital of the south, now much closer to Dhaka by road via the Padma Bridge." },
  { slug: "patuakhali", name: "Patuakhali", division: "Barishal", note: "Patuakhali is home to Kuakata beach and Payra port, with a fast-growing tourism and logistics sector." },
  { slug: "bhola", name: "Bhola", division: "Barishal", note: "Bhola is the country's largest island, with gas fields and a growing local economy." },
];

export function getLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function locationLabel(l: Location) {
  return l.alt ? `${l.name} (${l.alt})` : l.name;
}

export function nearbyLocations(l: Location, count = 6) {
  return LOCATIONS.filter((o) => o.division === l.division && o.slug !== l.slug).slice(0, count);
}
