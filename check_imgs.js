const { dummyProducts } = require('./src/lib/data.ts');
// Actually data.ts has export const dummyProducts so require will fail unless I transpile.
// I can just read the file.
const fs = require('fs');
const content = fs.readFileSync('src/lib/data.ts', 'utf8');
const lines = content.split('\n');
const bdsmInds = lines.map((l, i) => l.includes('"BDSM y Roles"') ? i : -1).filter(i => i !== -1);
console.log(bdsmInds);
