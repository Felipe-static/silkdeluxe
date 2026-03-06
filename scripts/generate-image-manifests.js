const fs = require('fs');
const path = require('path');

const publicProductsDir = path.join(process.cwd(), 'public', 'products');

if (!fs.existsSync(publicProductsDir)) {
  console.log('No products directory found at', publicProductsDir);
  process.exit(0);
}

const entries = fs.readdirSync(publicProductsDir, { withFileTypes: true });

for (const dirent of entries) {
  if (!dirent.isDirectory()) continue;
  const slug = dirent.name;
  const imagesDir = path.join(publicProductsDir, slug);
  let files = [];
  try {
    files = fs.readdirSync(imagesDir);
  } catch (err) {
    files = [];
  }

  const imageFiles = files.filter((f) => /\.(jpe?g|png|webp|gif|svg)$/i.test(f));
  const images = imageFiles.map((f) => `/products/${slug}/${f}`);

  const manifestPath = path.join(imagesDir, 'images.json');
  fs.writeFileSync(manifestPath, JSON.stringify({ images }, null, 2), 'utf8');
  console.log(`Wrote manifest for ${slug}: ${manifestPath}`);
}
