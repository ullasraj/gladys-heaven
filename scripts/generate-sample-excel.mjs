import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

const sampleDestinations = [
  {
    name: 'Munnar',
    slug: 'munnar',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1000&q=80',
    description: 'A breathtaking hill station known for expansive tea plantations, misty hills, and scenic waterfalls.',
    tags: 'Hills, Tea Gardens, Waterfalls',
    state: 'Kerala',
    idealDuration: '3 - 4 Days',
    bestTimeToVisit: 'September to May',
    topAttractions: 'Tea Museum & Lockhart Estate; Eravikulam National Park; Mattupetty Dam & Echo Point; Top Station',
    featured: 'Yes',
  },
  {
    name: 'Kodaikanal',
    slug: 'kodaikanal',
    image: 'https://images.unsplash.com/photo-1628108426027-3806e30eb120?auto=format&fit=crop&w=1000&q=80',
    description: 'A charming hill station with scenic lakes, dense forests, and refreshing waterfalls.',
    tags: 'Hills, Lake, Forest',
    state: 'Tamil Nadu',
    idealDuration: '2 - 3 Days',
    bestTimeToVisit: 'October to May',
    topAttractions: 'Star Lake & Cycling Loop; Coakers Walk; Pillar Rocks; Bryant Park & Pine Forest',
    featured: 'Yes',
  },
  {
    name: 'Ooty',
    slug: 'ooty',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80',
    description: 'Queen of Hill Stations, famous for tea gardens, colonial charm, and scenic lakes.',
    tags: 'Hills, Toy Train, Heritage',
    state: 'Tamil Nadu',
    idealDuration: '2 - 3 Days',
    bestTimeToVisit: 'October to June',
    topAttractions: 'UNESCO Nilgiri Toy Train; Botanical Gardens; Doddabetta Peak; Ooty Lake',
    featured: 'Yes',
  },
  {
    name: 'Alleppey (Alappuzha)',
    slug: 'alleppey',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
    description: 'Drift along emerald canals, palm-fringed lagoons, and serene backwaters in a luxury houseboat.',
    tags: 'Backwaters, Houseboat, Canals',
    state: 'Kerala',
    idealDuration: '1 - 2 Days',
    bestTimeToVisit: 'September to March',
    topAttractions: 'Vembanad Lake; Marari Beach; Alappuzha Lighthouse',
    featured: 'No',
  },
  {
    name: 'Wayanad',
    slug: '', // Test empty slug (will be auto-generated from name)
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
    description: 'Ancient petroglyphs at Edakkal Caves, pristine waterfalls, and spice plantations in the rainforest.',
    tags: 'Spices, Caves, Trekking',
    state: 'Kerala',
    idealDuration: '3 Days',
    bestTimeToVisit: 'October to May',
    topAttractions: 'Edakkal Caves; Banasura Sagar Dam; Chembra Peak',
    featured: 'No',
  },
  {
    name: 'Kedarnath Dham',
    slug: 'kedarnath',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1000&q=80',
    description: 'One of the twelve sacred Jyotirlingas of Lord Shiva nestled dramatically in the Garhwal Himalayas.',
    tags: 'Sacred Path, Jyotirlinga, Himalayas',
    state: 'Uttarakhand',
    idealDuration: '5 - 7 Days',
    bestTimeToVisit: 'May to June & September to October',
    topAttractions: 'Kedarnath Temple Aarti; Bhairavnath Temple; Rudraprayag Sangam',
    featured: 'No',
  },
  {
    name: 'Goa Coastal Serenity',
    slug: 'goa',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
    description: null, // Test NULL description (will gracefully hide description)
    tags: null,        // Test NULL tags (will gracefully hide tags)
    state: 'Goa',
    idealDuration: '3 - 4 Days',
    bestTimeToVisit: 'November to April',
    topAttractions: null, // Test NULL attractions
    featured: 'No',
  },
];

// Create workbook
const workbook = XLSX.utils.book_new();

// Convert JSON to Worksheet
const worksheet = XLSX.utils.json_to_sheet(sampleDestinations, {
  header: [
    'name',
    'slug',
    'image',
    'description',
    'tags',
    'state',
    'idealDuration',
    'bestTimeToVisit',
    'topAttractions',
    'featured',
  ],
});

// Set auto column widths for great readability in Excel
worksheet['!cols'] = [
  { wch: 22 }, // name
  { wch: 15 }, // slug
  { wch: 45 }, // image
  { wch: 45 }, // description
  { wch: 25 }, // tags
  { wch: 15 }, // state
  { wch: 15 }, // idealDuration
  { wch: 25 }, // bestTimeToVisit
  { wch: 45 }, // topAttractions
  { wch: 10 }, // featured
];

// Append worksheet to workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Destinations');

// Ensure public directory exists
const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write to files (.xlsx and .csv in both root and public for easy download)
const xlsxRootPath = path.resolve('destinations_sample.xlsx');
const xlsxPublicPath = path.resolve('public', 'destinations_sample.xlsx');
const csvPublicPath = path.resolve('public', 'destinations_sample.csv');

XLSX.writeFile(workbook, xlsxRootPath);
XLSX.writeFile(workbook, xlsxPublicPath);

// Also generate CSV format
const csvOutput = XLSX.utils.sheet_to_csv(worksheet);
fs.writeFileSync(csvPublicPath, csvOutput, 'utf-8');

console.log('Successfully created sample Excel and CSV files:');
console.log('1. Root Excel: ' + xlsxRootPath);
console.log('2. Public Downloadable Excel: ' + xlsxPublicPath);
console.log('3. Public CSV: ' + csvPublicPath);
