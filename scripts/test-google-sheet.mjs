import * as XLSX from 'xlsx';

const sheetUrl = 'https://docs.google.com/spreadsheets/d/1mSPNj3eX8ZH6XOAbTtbXfkss9LtAph2X-p_V6EGLfI4/export?format=csv';

async function testFetch() {
  try {
    console.log('Fetching Google Sheet from:', sheetUrl);
    const res = await fetch(sheetUrl);
    console.log('Response status:', res.status, res.statusText);
    const text = await res.text();
    console.log('--- Raw CSV Output (first 500 chars) ---');
    console.log(text.slice(0, 500));
    console.log('--- End Raw Output ---');

    const workbook = XLSX.read(text, { type: 'string' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(worksheet, { defval: null });

    console.log('Parsed Rows Count:', rows.length);
    console.log('First 3 Rows:');
    console.log(JSON.stringify(rows.slice(0, 3), null, 2));
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

testFetch();
