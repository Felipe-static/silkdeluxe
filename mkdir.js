const fs = require('fs');
const dirs = [
    'public/products',
    'public/products/chocolate-caliente-starsex',
    'public/products/lubricante-retardante-masculino-starsex',
    'public/products/choco-lub-starsex',
    'public/products/fruti-lub-starsex',
    'public/products/kit-suave-sumision-starsex-rojo',
    'public/products/plug-metalico-kitty-s',
    'public/products/feromona-enamor-starsex-masculina-30ml',
    'public/products/set-anillos-pene-donuts-starsex',
    'public/products/bolas-chinas-vibradoras-inalambricas-starsex',
    'public/products/kit-de-sade-starsex'
];
for (let d of dirs) {
    if (!fs.existsSync(d)) {
        fs.mkdirSync(d, { recursive: true });
    }
}
console.log('Folders created successfully');
