import { Vehicle } from '@/types';

export const fleetData: Vehicle[] = [
  {
    id: 'toyota-innova-crysta',
    name: 'Toyota Innova Crysta (Automatic / Manual)',
    category: 'suv',
    image:
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    seatingCapacity: '6 - 7 Passengers + 1 Driver',
    luggageCapacity: '4 Large Bags + 2 Small Bags',
    airConditioned: true,
    features: [
      'Reclining Captain Seats with Armrests',
      'Individual Rear AC Vents with Climate Control',
      'Phone Charging Ports at Every Row',
      'Smooth Western Ghats Hill Driving Capability',
      'Experienced Verified Chauffeur',
    ],
    bestFor: 'Family trips, Hill Station drives (Munnar, Ooty, Kodai), and Corporate Travel',
    startingPricePerKm: 21,
    packageStartingDay: 3800,
  },
  {
    id: 'maruti-dzire-etios',
    name: 'Maruti Suzuki Dzire / Toyota Etios',
    category: 'sedan',
    image:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    seatingCapacity: '4 Passengers + 1 Driver',
    luggageCapacity: '2 Large Bags + 2 Handbags',
    airConditioned: true,
    features: [
      'Comfortable plush sedan seating',
      'Crisp Air Conditioning & Clean Interiors',
      'Bluetooth Music Connectivity',
      'Fuel Efficient & Economical for Couples',
      'Punctual Professional Chauffeur',
    ],
    bestFor: 'Couples, Solo Travelers, Airport Pickups, and 2-3 Passenger Tours',
    startingPricePerKm: 15,
    packageStartingDay: 2600,
  },
  {
    id: 'force-tempo-traveller',
    name: 'Force Tempo Traveller (12 to 17 Seater)',
    category: 'tempo-traveller',
    image:
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
    seatingCapacity: '12 - 17 Passengers + Chauffeur',
    luggageCapacity: 'Dedicated Rear Luggage Boot (15+ Bags)',
    airConditioned: true,
    features: [
      'High-Roof Pushback Recliner Seats',
      'Powerful Dual-Blower AC System',
      'Onboard Entertainment LED Screen & Sound System',
      'Curtains & Reading Lights',
      'First-Aid Kit & Mountain Route Trained Driver',
    ],
    bestFor: 'Joint Families, College Reunions, Group Pilgrimages, and Corporate Outings',
    startingPricePerKm: 28,
    packageStartingDay: 5500,
  },
  {
    id: 'force-urbania-luxury',
    name: 'Force Urbania Ultra Luxury Van',
    category: 'luxury-coach',
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    seatingCapacity: '10 - 13 VIP Passengers',
    luggageCapacity: 'Extra Spacious Dedicated Boot',
    airConditioned: true,
    features: [
      'European Monocoque Design with Superior Ride Comfort',
      'Panoramic Sealed Glass Windows for Scenic Mountain Views',
      'Ultra Quiet Cabin & Air Suspension Dynamics',
      'Individual Reading Lights & USB Type-C Fast Chargers',
      'Uniformed English & Malayalam Speaking Chauffeur',
    ],
    bestFor: 'VIP Delegations, Luxury Family Tours, and High-End NRI Travel',
    startingPricePerKm: 38,
    packageStartingDay: 7500,
  },
];
