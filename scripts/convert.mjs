import fs from 'fs';

const csvPath = '/Users/felipefuentes/Downloads/silkdeluxe/PRODUCTOS silk.csv';
const csvContent = fs.readFileSync(csvPath, 'utf-8');

const lines = csvContent.split('\n').map(l => l.trim()).filter(l => l);

function toSlug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const products = [];
let headers = [];

let inQuotes = false;

for (let r = 0; r < lines.length; r++) {
  const line = lines[r];
  let fields = [];
  let currentVal = '';
  let inQ = false;
  
  for(let i = 0; i < line.length; i++) {
     let c = line[i];
     if(c === '"') {
        inQ = !inQ;
     } else if (c === ',' && !inQ) {
        fields.push(currentVal);
        currentVal = '';
     } else {
        currentVal += c;
     }
  }
  fields.push(currentVal);

  if (r === 0) {
    headers = fields;
  } else {
    // fields order: PRODUCTO,Categoria,Precio ,enlace imagen
    const name = fields[0]?.trim() || '';
    const category = fields[1]?.trim() || '';
    let priceStr = fields[2]?.replace(/\$/g, '').replace(/\./g, '').trim() || '0';
    let price = parseInt(priceStr, 10);
    if (isNaN(price)) price = 0;
    
    let img = fields[3]?.trim() || '';
    
    if (img.startsWith('"')) img = img.substring(1);
    if (img.endsWith('"')) img = img.slice(0, -1);
    img = img.trim();
    
    if (!img.startsWith('http')) {
       img = '/placeholder.svg';
    }

    const slug = toSlug(name);
    if (!slug) continue;

    products.push({
      id: `p${r}`,
      slug,
      name,
      description: name,
      price,
      images: [img],
      category,
      collection: category,
      features: [],
      details: name,
      shipping: "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
      warranty: "Garantía de calidad Silk Deluxe."
    });
  }
}

const tsContent = `export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  collection: string;
  features: string[];
  details: string;
  shipping: string;
  warranty: string;
};

export const dummyProducts: Product[] = ${JSON.stringify(products, null, 2)};
`;

fs.writeFileSync('/Users/felipefuentes/Downloads/silkdeluxe/src/lib/data.ts', tsContent);
