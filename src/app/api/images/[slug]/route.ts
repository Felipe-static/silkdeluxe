import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> } // In Next 15+ route params are a promise
) {
    try {
        const resolvedParams = await params;
        const slug = resolvedParams.slug;

        // Ruta base public/products
        const baseProductsDir = path.join(process.cwd(), 'public', 'products');
        if (!fs.existsSync(baseProductsDir)) {
            fs.mkdirSync(baseProductsDir, { recursive: true });
        }

        // Ruta a la carpeta de imágenes del producto
        const imagesDirectory = path.join(process.cwd(), 'public', 'products', slug);

        // Si la carpeta no existe, la creamos y devolvemos un array vacío
        if (!fs.existsSync(imagesDirectory)) {
            fs.mkdirSync(imagesDirectory, { recursive: true });
            return NextResponse.json({ images: [] });
        }

        // Leemos los archivos de la carpeta
        const fileNames = fs.readdirSync(imagesDirectory);

        // Filtramos solo archivos de imagen comunes
        const imageFiles = fileNames.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
        });

        // Construimos la ruta pública para cada imagen
        const publicImagePaths = imageFiles.map(file => `/products/${slug}/${file}`);

        return NextResponse.json({ images: publicImagePaths });
    } catch (error) {
        console.error("Error reading product images:", error);
        return NextResponse.json({ images: [] }, { status: 500 });
    }
}
