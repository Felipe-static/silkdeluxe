import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> } // In Next 15+ route params are a promise
) {
    try {
        const resolvedParams = await params;
        const slug = resolvedParams.slug;

        // Try to fetch a pre-generated manifest from the public folder
        const origin = new URL(request.url).origin;
        const manifestUrl = `${origin}/products/${slug}/images.json`;

        const res = await fetch(manifestUrl);
        if (!res.ok) {
            return NextResponse.json({ images: [] });
        }

        const data = await res.json();
        return NextResponse.json({ images: data.images || [] });
    } catch (error) {
        console.error("Error reading product images:", error);
        return NextResponse.json({ images: [] }, { status: 500 });
    }
}
