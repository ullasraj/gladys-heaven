import { TourPackage } from '@/types';

export const packagesData: TourPackage[] = [
  {
    id: 'south-india-paradise',
    title: 'South India Paradise: Munnar, Ooty & Kodaikanal',
    subtitle: 'The Triple Hill Station Crown of South India',
    category: 'hill-station',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    pricePerPerson: 18500,
    originalPrice: 22000,
    featured: true,
    rating: 4.9,
    reviewCount: 142,
    image:
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1000&q=80',
    destinations: ['Munnar', 'Ooty', 'Kodaikanal'],
    overview:
      'Experience the pinnacle of South Indian hill country with our signature Dayoff Journeys circuit. Traverse Munnar’s endless tea estates, journey across the blue Nilgiris in Ooty with its colonial charm, and relax by Kodaikanal’s star-shaped misty lake.',
    highlights: [
      'Sightseeing at Mattupetty Dam, Echo Point & Top Station in Munnar',
      'Nilgiri Mountain Railway (Toy Train) experience in Ooty',
      'Strolls through Ooty Botanical Garden & Doddabetta Peak',
      'Boating in Kodaikanal Lake and scenic walks along Coakers Walk',
      'Dedicated private AC vehicle with seasoned mountain chauffeur',
      'Comfortable stays in handpicked 3-star and 4-star mountain resorts',
    ],
    inclusions: [
      '5 Nights accommodation in double-sharing deluxe rooms',
      'Daily breakfast at all hotels and resorts',
      'Exclusive air-conditioned private vehicle for transfers and sightseeing',
      'Driver allowances, toll taxes, parking fees, and fuel charges',
      'Dedicated 24/7 travel concierge on call',
    ],
    exclusions: [
      'Airfare or train tickets to/from Kochi/Coimbatore',
      'Entry tickets to monuments, national parks, and boating fees',
      'Lunch and dinner not specified in itinerary',
      'Personal expenses (tips, laundry, phone calls, camera fees)',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kochi & Scenic Drive to Munnar',
        description:
          'Warm reception by your Dayoff Journeys chauffeur at Cochin International Airport or Aluva Railway Station. Enjoy a picturesque drive ascending the Western Ghats with photo stops at Cheeyappara and Valara Waterfalls. Check in to your resort and unwind amidst cool mountain breezes.',
        activities: [
          'Airport/Station meet & greet',
          'Cheeyappara & Valara waterfall viewpoints',
          'Evening leisure stroll through spice plantation trails',
        ],
        stayLocation: 'Munnar Resort',
      },
      {
        day: 2,
        title: 'Munnar Full Day Tea Gardens & Wildlife Exploration',
        description:
          'Embark on an immersive tour of Munnar. Visit Eravikulam National Park, home to the endangered Nilgiri Tahr. Explore the Tea Museum, learn the history of tea making, and proceed to Mattupetty Dam, Echo Point, and Kundala Lake for relaxing boat rides.',
        activities: [
          'Eravikulam National Park morning safari',
          'Lockhart Tea Museum tour & tea tasting',
          'Mattupetty Dam and Echo Point photography',
          'Boating at Kundala Lake',
        ],
        stayLocation: 'Munnar Resort',
      },
      {
        day: 3,
        title: 'Scenic Transfer to Ooty - The Queen of Hill Stations',
        description:
          'After breakfast, embark on a scenic trans-state drive through the Nilgiri hills to Ooty. Pass through aromatic eucalyptus groves and tea plantations. In the evening, visit Ooty Lake for paddle boating and stroll around Charring Cross local markets.',
        activities: [
          'Scenic Western Ghats mountain drive',
          'Ooty Lake evening boating',
          'Local chocolate & homemade tea shopping',
        ],
        stayLocation: 'Ooty Heritage Hotel',
      },
      {
        day: 4,
        title: 'Ooty Sights & Nilgiri Mountain Railway',
        description:
          'Explore Ooty’s iconic sights: the Government Botanical Garden with hundreds of exotic species, Rose Garden, and Doddabetta Peak—the highest vantage point in the Nilgiri mountains. Board the UNESCO heritage Nilgiri Toy Train for an unforgettable nostalgic ride.',
        activities: [
          'UNESCO Nilgiri Toy Train ride',
          'Government Botanical Gardens visit',
          'Panoramic views from Doddabetta Peak',
          'Tea factory visit with fresh brew tasting',
        ],
        stayLocation: 'Ooty Heritage Hotel',
      },
      {
        day: 5,
        title: 'Journey to Kodaikanal - The Princess of Hills',
        description:
          'Drive through winding ghat roads to Kodaikanal. Arrive by afternoon and check into your lakeview hotel. In the evening, take a leisurely stroll or tandem cycle ride around the star-shaped Kodai Lake and enjoy the misty vistas from Coakers Walk.',
        activities: [
          'Scenic drive across Palani Hills',
          'Evening stroll along Coakers Walk',
          'Cycling or boating at Kodaikanal Lake',
        ],
        stayLocation: 'Kodaikanal Lake Resort',
      },
      {
        day: 6,
        title: 'Kodaikanal Sightseeing & Departure',
        description:
          'Visit Pillar Rocks, Pine Forest, and Silver Cascade Waterfalls before heading toward Coimbatore or Madurai Airport/Railway Station for your onward journey, carrying cherished memories of South India’s finest hills.',
        activities: [
          'Pillar Rocks viewpoint and Pine Forest walk',
          'Silver Cascade waterfall stop',
          'Drop-off at Madurai or Coimbatore for departure',
        ],
      },
    ],
  },
  {
    id: 'kerala-serenity-backwaters',
    title: 'Kerala Serenity: Munnar, Thekkady & Alleppey Houseboat',
    subtitle: 'Misty Mountains, Periyar Spices & Backwater Bliss',
    category: 'backwater',
    duration: '4 Nights / 5 Days',
    nights: 4,
    days: 5,
    pricePerPerson: 16200,
    originalPrice: 19500,
    featured: true,
    rating: 4.95,
    reviewCount: 188,
    image:
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
    destinations: ['Munnar', 'Thekkady', 'Alleppey'],
    overview:
      'The quintessential God’s Own Country tour. From the cool tea-scented hills of Munnar, through spice scented sanctuaries of Thekkady, culminating in a magical overnight cruise in an authentic Kerala houseboat through Alleppey canals.',
    highlights: [
      '2 Nights in Munnar with private visits to tea estates and Eravikulam',
      '1 Night in Thekkady with Periyar Lake boat safari and Kathakali show',
      '1 Night in a private traditional air-conditioned Alleppey houseboat',
      'All meals freshly prepared by your onboard private houseboat chef',
      'Ayurvedic spice plantation guided walk',
    ],
    inclusions: [
      '4 Nights total accommodation (3 Nights resort + 1 Night houseboat)',
      'Daily breakfast at resorts; All meals (lunch, dinner, breakfast) on houseboat',
      'Private air-conditioned sedan or SUV throughout the itinerary',
      'Driver charges, toll, and state vehicle taxes',
      'Spice garden entry and guided explanation',
    ],
    exclusions: [
      'Airfare/train tickets',
      'Periyar boat safari ticket and Kathakali/Kalaripayattu ticket',
      'Personal expenses and room service',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kochi Arrival & Transfer to Munnar',
        description:
          'Pickup from Kochi Airport/Railway Station and scenic transfer to Munnar with photo stops at Valara & Cheeyappara waterfalls.',
        activities: ['Scenic drive', 'Waterfall viewpoints', 'Resort check-in'],
        stayLocation: 'Munnar Resort',
      },
      {
        day: 2,
        title: 'Munnar Hill Station Discovery',
        description:
          'Full day exploring Tea Museum, Eravikulam National Park, Mattupetty Dam, and Echo Point.',
        activities: ['Wildlife spotting', 'Tea tasting', 'Dam & boat ride'],
        stayLocation: 'Munnar Resort',
      },
      {
        day: 3,
        title: 'Munnar to Thekkady (Periyar Wildlife Sanctuary)',
        description:
          'Scenic drive through Cardamom hills to Thekkady. Boat safari on Periyar Lake and evening Kathakali cultural dance performance.',
        activities: ['Periyar boat safari', 'Spice plantation tour', 'Kathakali show'],
        stayLocation: 'Thekkady Spice Resort',
      },
      {
        day: 4,
        title: 'Thekkady to Alleppey Luxury Houseboat Cruise',
        description:
          'Descend to the tranquil backwaters of Alleppey. Check in to your private traditional Kettuvallam at 12:00 PM. Cruise through palm-fringed lagoons while your personal chef prepares hot Kerala meals.',
        activities: ['Private backwater cruise', 'Village canal exploration', 'Fresh Karimeen fish dinner'],
        stayLocation: 'Private Deluxe Houseboat',
      },
      {
        day: 5,
        title: 'Alleppey to Kochi Departure',
        description:
          'Enjoy morning village views and breakfast on board. Disembark at 9:00 AM and transfer to Kochi Airport for departure.',
        activities: ['Morning cruise', 'Kochi Fort Kochi quick heritage visit', 'Airport drop-off'],
      },
    ],
  },
  {
    id: 'sacred-paths-chardham-kedarnath',
    title: 'Sacred Paths: Kedarnath & Badrinath Yatra',
    subtitle: 'Divine Pilgrimage Across the Garhwal Himalayas',
    category: 'sacred-path',
    duration: '6 Nights / 7 Days',
    nights: 6,
    days: 7,
    pricePerPerson: 24500,
    originalPrice: 28000,
    featured: true,
    rating: 4.98,
    reviewCount: 96,
    image:
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1000&q=80',
    destinations: ['Kedarnath', 'Badrinath', 'Rishikesh', 'Haridwar'],
    overview:
      'Part of Dayoff Journeys’ celebrated "India’s Sacred Paths" portfolio. Undertake a soul-enriching spiritual journey to the holy abode of Lord Shiva at Kedarnath and Lord Vishnu at Badrinath with meticulously coordinated logistics, mountain-trained drivers, and priority temple darshan guidance.',
    highlights: [
      'Darshan and evening Aarti at sacred Kedarnath Jyotirlinga',
      'Darshan at Badrinath Temple, Mana Village (India’s first village)',
      'Holy dip at Rudraprayag, Devprayag, and Karnaprayag sangams',
      'Ganga Aarti at Har Ki Pauri in Haridwar & Triveni Ghat in Rishikesh',
      'Helicopter ticket assistance or pony/palki coordination',
      'Experienced Himalayan yatra coordinators and pure vegetarian meals',
    ],
    inclusions: [
      '6 Nights accommodation in vetted yatra hotels and guest houses',
      'Daily pure vegetarian breakfast and dinner',
      'All transfers and mountain drives in private SUV/Tempo Traveller',
      'Yatra registration and biometric assistance',
      'Dedicated local yatra guide support',
    ],
    exclusions: [
      'Helicopter tickets (can be booked on request at actuals)',
      'Pony, doli, or porter charges',
      'Special VIP Darshan receipts',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Haridwar / Rishikesh to Guptkashi',
        description:
          'Morning pickup from Haridwar/Dehradun. Drive along the sacred Mandakini river via Devprayag and Rudraprayag sangams.',
        activities: ['Devprayag sangam viewing', 'Mandakini river route', 'Guptkashi hotel check-in'],
        stayLocation: 'Guptkashi / Phata',
      },
      {
        day: 2,
        title: 'Guptkashi to Kedarnath Ji',
        description:
          'Early departure to Sonprayag/Gaurikund. Trek or take helicopter to Kedarnath Temple. Attend the evening Maha Aarti in the shadow of snow-clad Himalayan peaks.',
        activities: ['Ascent to Kedarnath', 'Kedarnath Temple evening Aarti', 'Night stay in holy shrine vicinity'],
        stayLocation: 'Kedarnath Camp / GMVN',
      },
      {
        day: 3,
        title: 'Kedarnath Darshan & Return to Guptkashi',
        description:
          'Attend early morning Abhishek and darshan at Kedarnath. Descend back to Gaurikund and transfer to Guptkashi for rest.',
        activities: ['Morning holy darshan', 'Descent to Gaurikund', 'Relaxation in Guptkashi'],
        stayLocation: 'Guptkashi',
      },
      {
        day: 4,
        title: 'Guptkashi to Badrinath Ji via Joshimath',
        description:
          'Drive along the Alaknanda river to the holy shrine of Badrinath. Check in and visit Tapt Kund for holy bath before entering temple for Aarti.',
        activities: ['Scenic Joshimath drive', 'Tapt Kund holy dip', 'Badrinath evening darshan'],
        stayLocation: 'Badrinath Hotel',
      },
      {
        day: 5,
        title: 'Badrinath Sightseeing & Mana Village to Rudraprayag',
        description:
          'Morning darshan followed by a visit to Mana Village, Vyas Gufa, Ganesh Gufa, and Bhim Pul. Afternoon scenic drive to Rudraprayag.',
        activities: ['Mana Village border tour', 'Vyas Gufa visit', 'Rudraprayag hotel stay'],
        stayLocation: 'Rudraprayag',
      },
      {
        day: 6,
        title: 'Rudraprayag to Rishikesh & Haridwar',
        description:
          'Drive down the Shivalik foothills to Rishikesh. Visit Ram Jhula, Laxman Jhula, and attend sunset Ganga Aarti at Triveni Ghat.',
        activities: ['Ram Jhula visit', 'Sunset Ganga Aarti', 'Haridwar check-in'],
        stayLocation: 'Haridwar Hotel',
      },
      {
        day: 7,
        title: 'Haridwar Morning Aarti & Departure',
        description:
          'Early morning dip at Har Ki Pauri and transfer to Dehradun Airport or Haridwar Railway Station for departure.',
        activities: ['Har Ki Pauri visit', 'Station/Airport drop-off'],
      },
    ],
  },
  {
    id: 'spiritual-south-madurai-rameswaram',
    title: 'Sacred Paths: Madurai, Rameswaram & Kanyakumari',
    subtitle: 'Grand Temple Architecture & The Confluence of Three Oceans',
    category: 'sacred-path',
    duration: '4 Nights / 5 Days',
    nights: 4,
    days: 5,
    pricePerPerson: 15400,
    originalPrice: 18000,
    featured: false,
    rating: 4.88,
    reviewCount: 110,
    image:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    destinations: ['Madurai', 'Rameswaram', 'Dhanushkodi', 'Kanyakumari'],
    overview:
      'A deeply revered South Indian temple pilgrimage. Stand before the towering gopurams of Madurai Meenakshi Temple, bathe in the 22 holy kunds of Ramanathaswamy Temple in Rameswaram, explore ghost town Dhanushkodi, and witness sunrise at Triveni Sangam in Kanyakumari.',
    highlights: [
      'Madurai Meenakshi Amman Temple architectural tour and night ceremony',
      'Ramanathaswamy Temple Rameswaram with 22 holy theerthams',
      'Dramatic drive along Pamban Bridge and ghost town of Dhanushkodi',
      'Vivekananda Rock Memorial and Thiruvalluvar Statue at Kanyakumari',
      'Triveni Sangam confluence of Indian Ocean, Arabian Sea & Bay of Bengal',
    ],
    inclusions: [
      '4 Nights stay in comfortable temple town hotels',
      'Daily South Indian vegetarian breakfast',
      'AC private vehicle with experienced South India pilgrimage driver',
      'Toll, parking, and driver allowances',
    ],
    exclusions: ['Temple special darshan passes', 'Meals other than breakfast', 'Entry fees'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Madurai & Meenakshi Amman Temple',
        description:
          'Arrive in Madurai, the historic temple city. Visit Thirumalai Nayakkar Palace and attend the grand evening closing ceremony at Meenakshi Amman Temple.',
        activities: ['Palace tour', 'Meenakshi Amman temple darshan', 'Night procession viewing'],
        stayLocation: 'Madurai Hotel',
      },
      {
        day: 2,
        title: 'Madurai to Rameswaram via Pamban Bridge',
        description:
          'Drive across the engineering marvel Pamban Sea Bridge to the island of Rameswaram. Visit Ramanathaswamy Temple and bathe in the holy 22 theerthams.',
        activities: ['Pamban Bridge crossing', '22 Theertham snanam', 'Temple corridor walk'],
        stayLocation: 'Rameswaram Hotel',
      },
      {
        day: 3,
        title: 'Dhanushkodi Exploration to Kanyakumari',
        description:
          'Early morning trip to Dhanushkodi and Ram Setu viewpoint. Drive southward to Kanyakumari, India’s southern tip. Watch the mesmerizing sunset over the three oceans.',
        activities: ['Dhanushkodi ruins & Ram Setu', 'Drive to Kanyakumari', 'Sunset at Sunset Point'],
        stayLocation: 'Kanyakumari Hotel',
      },
      {
        day: 4,
        title: 'Kanyakumari Sights & Sunrise',
        description:
          'Witness spectacular sunrise at Triveni Sangam. Ferry to Vivekananda Rock Memorial, Bhagavathy Amman Temple, and Gandhi Memorial.',
        activities: ['Sunrise view', 'Vivekananda Rock ferry', 'Bhagavathy Temple darshan'],
        stayLocation: 'Kanyakumari Hotel',
      },
      {
        day: 5,
        title: 'Kanyakumari to Trivandrum Departure',
        description:
          'Visit Suchindram Thanumalayan Temple en route to Trivandrum. Drop-off at Trivandrum Airport/Railway Station.',
        activities: ['Suchindram temple stop', 'Trivandrum drop-off'],
      },
    ],
  },
  {
    id: 'wayanad-wilderness-trails',
    title: 'Wayanad Wilderness, Waterfalls & Spice Trails',
    subtitle: 'Pristine Eco-Resorts, Ancient Caves & Mist-Clad Peaks',
    category: 'wildlife',
    duration: '3 Nights / 4 Days',
    nights: 3,
    days: 4,
    pricePerPerson: 12500,
    originalPrice: 15000,
    featured: false,
    rating: 4.85,
    reviewCount: 78,
    image:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
    destinations: ['Wayanad', 'Calicut'],
    overview:
      'Escape into the green heart of northern Kerala. Stay at plantation eco-resorts surrounded by pepper and coffee vines, explore Stone Age petroglyphs at Edakkal Caves, and trek to heart-shaped lakes.',
    highlights: [
      'Edakkal Caves prehistoric rock art and panoramic valley views',
      'Banasura Sagar Dam – largest earthen dam in India',
      'Soochipara and Meenmutty cascading waterfalls',
      'Muthanga Wildlife Sanctuary jeep safari',
      'Organic spice, coffee, and honey plantation walk',
    ],
    inclusions: [
      '3 Nights accommodation in plantation resort',
      'Daily breakfast',
      'Dedicated AC vehicle from Calicut (Kozhikode)',
      'Tolls, parking, and driver allowances',
    ],
    exclusions: ['Safari tickets', 'Entry fees to caves and waterfalls', 'Personal expenses'],
    itinerary: [
      {
        day: 1,
        title: 'Calicut to Wayanad Ghat Scenic Ascent',
        description:
          'Pickup from Calicut. Drive up the 9 hairpin curves of Thamarassery Churam with viewpoint stops. Check into your rainforest resort.',
        activities: ['Lakkidi Viewpoint stop', 'Chain Tree legend', 'Resort check-in'],
        stayLocation: 'Wayanad Nature Resort',
      },
      {
        day: 2,
        title: 'Prehistoric Caves & Banasura Dam',
        description:
          'Morning climb to Edakkal Caves. Afternoon visit to Banasura Sagar Dam with speedboating options in the island reservoir.',
        activities: ['Edakkal Caves trek', 'Banasura Dam speedboat', 'Karlad Lake ziplining'],
        stayLocation: 'Wayanad Nature Resort',
      },
      {
        day: 3,
        title: 'Waterfalls & Wildlife Safari',
        description:
          'Walk down to Soochipara Waterfalls for a refreshing nature bath. Afternoon open jeep safari in Muthanga Wildlife Sanctuary.',
        activities: ['Soochipara waterfalls', 'Muthanga elephant & deer safari', 'Campfire evening'],
        stayLocation: 'Wayanad Nature Resort',
      },
      {
        day: 4,
        title: 'Spice Shopping & Calicut Drop-off',
        description:
          'Visit Pookode freshwater lake and local organic spice markets before descending back to Calicut for departure.',
        activities: ['Pookode lake pedal boat', 'Spice shopping', 'Calicut airport/station drop'],
      },
    ],
  },
  {
    id: 'kashi-ayodhya-divine-yatra',
    title: 'Sacred Paths: Eternal Kashi, Ayodhya & Prayagraj',
    subtitle: 'The Holiest Spiritual Triangle of Northern India',
    category: 'sacred-path',
    duration: '4 Nights / 5 Days',
    nights: 4,
    days: 5,
    pricePerPerson: 16800,
    originalPrice: 19800,
    featured: false,
    rating: 4.96,
    reviewCount: 125,
    image:
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80',
    destinations: ['Varanasi', 'Ayodhya', 'Prayagraj'],
    overview:
      'Immerse your spirit in India’s most revered sacred geography. Experience the newly inaugurated Shri Ram Janmabhoomi Mandir in Ayodhya, the Triveni Sangam in Prayagraj, and the timeless Ganga Aarti along Kashi Vishwanath corridor.',
    highlights: [
      'Darshan at Shri Ram Janmabhoomi Mandir & Hanumangarhi in Ayodhya',
      'Kashi Vishwanath Corridor & Kal Bhairav darshan in Varanasi',
      'Private boat cruise on the Ganga for evening Maha Aarti',
      'Holy snanam at Triveni Sangam in Prayagraj (Allahabad)',
      'Sarnath Buddhist pilgrimage and Ashoka Pillar visit',
    ],
    inclusions: [
      '4 Nights accommodation in 3-star and 4-star hotels',
      'Daily vegetarian breakfast',
      'Private AC vehicle throughout the entire circuit',
      'Private boat ride at Varanasi Ganga Ghats',
    ],
    exclusions: ['Airfare/train tickets', 'Special VIP pass fees', 'Personal donations and tips'],
    itinerary: [
      {
        day: 1,
        title: 'Varanasi Arrival & Evening Ganga Aarti',
        description:
          'Arrive in Varanasi. Evening private boat ride along Dashashwamedh Ghat to witness the mesmerizing world-renowned Ganga Aarti.',
        activities: ['Airport pickup', 'Evening private boat', 'Maha Ganga Aarti'],
        stayLocation: 'Varanasi Hotel',
      },
      {
        day: 2,
        title: 'Kashi Vishwanath Darshan & Sarnath',
        description:
          'Early morning darshan at Kashi Vishwanath Golden Temple and Annapurna Temple. Afternoon excursion to Sarnath deer park.',
        activities: ['Kashi Vishwanath Corridor', 'Sarnath museum & stupa', 'Banarasi silk market'],
        stayLocation: 'Varanasi Hotel',
      },
      {
        day: 3,
        title: 'Varanasi to Prayagraj Triveni Sangam to Ayodhya',
        description:
          'Drive to Prayagraj. Take a boat to the Triveni Sangam for holy snanam. Visit Anand Bhavan, then continue onward to Ayodhya.',
        activities: ['Triveni Sangam holy bath', 'Alopi Devi temple', 'Evening arrival in Ayodhya'],
        stayLocation: 'Ayodhya Hotel',
      },
      {
        day: 4,
        title: 'Shri Ram Mandir Darshan & Ayodhya Sights',
        description:
          'Full day in the holy city of Ayodhya. Darshan at Ram Lalla in the grand Ram Mandir, visit Hanumangarhi, Kanak Bhavan, and Saryu Aarti.',
        activities: ['Ram Janmabhoomi Darshan', 'Hanumangarhi temple', 'Saryu River evening aarti'],
        stayLocation: 'Ayodhya Hotel',
      },
      {
        day: 5,
        title: 'Ayodhya or Varanasi Departure',
        description:
          'Morning prayers and transfer to Ayodhya (AYJ) or Varanasi (VNS) airport for departure.',
        activities: ['Morning prayers', 'Airport transfer'],
      },
    ],
  },
  {
    id: 'coastal-goa-heritage-retreat',
    title: 'Goa Coastal Serenity & Heritage Escapes',
    subtitle: 'Golden Sands, Portuguese Palaces & Backwater Cruising',
    category: 'coastal',
    duration: '3 Nights / 4 Days',
    nights: 3,
    days: 4,
    pricePerPerson: 13900,
    originalPrice: 16500,
    featured: false,
    rating: 4.82,
    reviewCount: 64,
    image:
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
    destinations: ['North Goa', 'South Goa', 'Old Goa'],
    overview:
      'A relaxed and curated Goa experience focusing on peaceful beaches, UNESCO World Heritage cathedrals, spice plantations, and private sunset cruises away from the crowds.',
    highlights: [
      'UNESCO Basilica of Bom Jesus & Se Cathedral in Old Goa',
      'Scenic sunset cruise on the Mandovi River with Goan folk music',
      'Heritage walk through Fontainhas Latin Quarter',
      'Organic spice farm guided tour with authentic Goan lunch',
      'Relaxation at pristine South Goa beaches (Palolem / Benaulim)',
    ],
    inclusions: [
      '3 Nights luxury boutique resort stay with pool',
      'Daily breakfast at resort',
      'Exclusive AC chauffeur-driven car for all 4 days',
      'Mandovi River cruise ticket',
      'Spice plantation tour with lunch buffet',
    ],
    exclusions: ['Airfare', 'Water sports at beaches', 'Alcoholic beverages'],
    itinerary: [
      {
        day: 1,
        title: 'Goa Arrival & Sunset Beach Stroll',
        description:
          'Warm welcome at Goa Airport (Mopa or Dabolim). Transfer to your boutique resort and spend a relaxing afternoon on the golden beach.',
        activities: ['Airport pickup', 'Resort check-in', 'Sunset beach cocktail/mocktail'],
        stayLocation: 'South Goa Boutique Resort',
      },
      {
        day: 2,
        title: 'Heritage Old Goa & Latin Quarter Walk',
        description:
          'Discover 450 years of Portuguese architecture. Visit Basilica of Bom Jesus, Se Cathedral, and walk through colourful Fontainhas.',
        activities: ['Old Goa churches', 'Fontainhas photo walk', 'Mandovi sunset river cruise'],
        stayLocation: 'South Goa Boutique Resort',
      },
      {
        day: 3,
        title: 'Spice Plantation & South Goa Coastal Gems',
        description:
          'Visit Sahakari spice plantation with traditional elephant shower and Goan feast. Afternoon at peaceful Palolem and Agonda beaches.',
        activities: ['Spice plantation tour & lunch', 'Palolem beach walk', 'Seafood dinner'],
        stayLocation: 'South Goa Boutique Resort',
      },
      {
        day: 4,
        title: 'Souvenir Shopping & Departure',
        description:
          'Morning swim and cashew/feni/handicraft shopping before departure to the airport.',
        activities: ['Morning leisure', 'Local market stop', 'Airport drop-off'],
      },
    ],
  },
];
