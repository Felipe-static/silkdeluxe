export type Product = {
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

export const dummyProducts: Product[] = [
  {
    "id": "p1",
    "slug": "gel-excitante-vulcano-intt-15ml",
    "name": "Gel Excitante Vulcano INTT 15ml",
    "description": "Gel Excitante Vulcano INTT 15ml",
    "price": 19990,
    "images": [
      "https://http2.mlstatic.com/D_Q_NP_2X_816595-MLB89055572879_072025-P.webp"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Gel Excitante Vulcano INTT 15ml",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p2",
    "slug": "aceite-del-amor-22ml-frutilla",
    "name": "Aceite del Amor 22ml Frutilla",
    "description": "Aceite del Amor 22ml Frutilla",
    "price": 15990,
    "images": [
      "https://www.sexshoptouchme.cl/cdn/shop/files/1080-2023-09-09T123425.942.webp?v=1694273693&width=1024"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Aceite del Amor 22ml Frutilla",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p3",
    "slug": "bolita-vaginal-fun-factory-smartball-uno",
    "name": "Bolita Vaginal Fun Factory SMARTBALL UNO",
    "description": "Bolita Vaginal Fun Factory SMARTBALL UNO",
    "price": 20990,
    "images": [
      "https://statics.promofarma.com/static/promofarma/prod/product_images/mr/3K3JR415_es_ES_0.jpeg"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Bolita Vaginal Fun Factory SMARTBALL UNO",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p4",
    "slug": "anillo-vibrador-devol",
    "name": "Anillo Vibrador Devol",
    "description": "Anillo Vibrador Devol",
    "price": 16990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_842628-MLA99466338772_112025-O.webp"
    ],
    "category": "Juguetes de Pareja",
    "collection": "Juguetes de Pareja",
    "features": [],
    "details": "Anillo Vibrador Devol",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p5",
    "slug": "vibrador-satisfyer-top-secret-con-app",
    "name": "Vibrador Satisfyer Top Secret + con APP",
    "description": "Vibrador Satisfyer Top Secret + con APP",
    "price": 69990,
    "images": [
      "https://sexyshop.cl/cdn/shop/products/top3.jpg?v=1693322807"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Vibrador Satisfyer Top Secret + con APP",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p6",
    "slug": "anillo-vibrador-lingus",
    "name": "Anillo Vibrador Lingus",
    "description": "Anillo Vibrador Lingus",
    "price": 16990,
    "images": [
      "https://belove-ecommerce.s3.us-east-2.amazonaws.com/imagenes/productos/2711.png"
    ],
    "category": "Juguetes de Pareja",
    "collection": "Juguetes de Pareja",
    "features": [],
    "details": "Anillo Vibrador Lingus",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p7",
    "slug": "jardin-secreto",
    "name": "Jardin Secreto",
    "description": "Jardin Secreto",
    "price": 29990,
    "images": [
      "https://cdnx.jumpseller.com/eroshopmayorista/image/15986605/thumb/540/540?1657655672"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Jardin Secreto",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p8",
    "slug": "dados-love-dice",
    "name": "Dados Love Dice",
    "description": "Dados Love Dice",
    "price": 4990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_637661-CBT86984677533_062025-O.webp"
    ],
    "category": "Juegos y Novedades",
    "collection": "Juegos y Novedades",
    "features": [],
    "details": "Dados Love Dice",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p9",
    "slug": "creative-kisses-juego-de-cartas",
    "name": "Creative Kisses - Juego de Cartas",
    "description": "Creative Kisses - Juego de Cartas",
    "price": 14990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_846487-MLU79026776486_092024-O.webp"
    ],
    "category": "Juegos y Novedades",
    "collection": "Juegos y Novedades",
    "features": [],
    "details": "Creative Kisses - Juego de Cartas",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p10",
    "slug": "gel-comestible-erotic-coco-starsex-30ml",
    "name": "Gel Comestible Erotic Coco Starsex 30ml",
    "description": "Gel Comestible Erotic Coco Starsex 30ml",
    "price": 10990,
    "images": [
      "https://i5.walmartimages.cl/asr/a68f3760-1aee-44f8-b06e-a4a7c0d04d1b.99b5e06ed2f8126b91302ceadc271126.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Gel Comestible Erotic Coco Starsex 30ml",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p11",
    "slug": "gel-comestible-erotic-uva-starsex-30ml",
    "name": "Gel Comestible Erotic Uva Starsex 30ml",
    "description": "Gel Comestible Erotic Uva Starsex 30ml",
    "price": 10990,
    "images": [
      "https://www.starsex.cl/cdn/shop/products/starsex-cosmetica-gel-comestible-erotic-30-ml-30134840787133.jpg?v=1630339740"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Gel Comestible Erotic Uva Starsex 30ml",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p12",
    "slug": "gel-comestible-erotic-caramelo-starsex-30ml",
    "name": "Gel Comestible Erotic Caramelo Starsex 30ml",
    "description": "Gel Comestible Erotic Caramelo Starsex 30ml",
    "price": 10990,
    "images": [
      "https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/3840x0/filters:quality(75)/prd-cl/product-medias/8a8eafa2-da74-44fd-9b40-cad5db7c4a20/MKEYS90IPR/MKEYS90IPR-1/1732673906354-MKEYS90IPR-1-2.png"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Gel Comestible Erotic Caramelo Starsex 30ml",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p13",
    "slug": "gel-comestible-erotic-frutilla-chocolate-starsex-30ml",
    "name": "Gel Comestible Erotic Frutilla Chocolate Starsex 30ml",
    "description": "Gel Comestible Erotic Frutilla Chocolate Starsex 30ml",
    "price": 10990,
    "images": [
      "https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/3840x0/filters:quality(75)/prd-cl/product-medias/8a8eafa2-da74-44fd-9b40-cad5db7c4a20/MKWTUKTEB2/MKWTUKTEB2-1/1732839147628-MKWTUKTEB2-1-1.jpg"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Gel Comestible Erotic Frutilla Chocolate Starsex 30ml",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p14",
    "slug": "gel-comestible-erotic-chocolate-starsex-30ml",
    "name": "Gel Comestible Erotic Chocolate Starsex 30ml",
    "description": "Gel Comestible Erotic Chocolate Starsex 30ml",
    "price": 10990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_635667-MLA92298081406_092025-O.webp"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Gel Comestible Erotic Chocolate Starsex 30ml",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p15",
    "slug": "gel-comestible-erotic-frutilla-starsex-30ml",
    "name": "Gel Comestible Erotic Frutilla Starsex 30ml",
    "description": "Gel Comestible Erotic Frutilla Starsex 30ml",
    "price": 10990,
    "images": [
      "https://i5.walmartimages.cl/asr/3ceb0d57-c64f-400e-97ce-30f1b5875efd.aaf00b881befd4f04463bce9e14ad18d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Gel Comestible Erotic Frutilla Starsex 30ml",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p16",
    "slug": "preservativos-sensor-plus-colored",
    "name": "Preservativos Sensor Plus - Colored",
    "description": "Preservativos Sensor Plus - Colored",
    "price": 2500,
    "images": [
      "https://farmaciaelquimico.cl/cdn/shop/products/unnamed_11.jpg?v=1631042727"
    ],
    "category": "Salud e Higiene",
    "collection": "Salud e Higiene",
    "features": [],
    "details": "Preservativos Sensor Plus - Colored",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p17",
    "slug": "lubricante-intimo-intt-ice-black-a-base-de-agua-sabor-menta",
    "name": "Lubricante Intimo INTT ICE Black a Base de Agua Sabor Menta",
    "description": "Lubricante Intimo INTT ICE Black a Base de Agua Sabor Menta",
    "price": 15990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_778384-MLC103024447247_122025-O.webp"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Lubricante Intimo INTT ICE Black a Base de Agua Sabor Menta",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p18",
    "slug": "preservativos-sensor-plus-anatomic",
    "name": "Preservativos Sensor Plus - Anatomic",
    "description": "Preservativos Sensor Plus - Anatomic",
    "price": 2500,
    "images": [
      "https://www.starsex.cl/cdn/shop/files/esan-accesorios-anatomic-sensor-plus-anatomic-40880094642409.jpg?v=1684170300"
    ],
    "category": "Salud e Higiene",
    "collection": "Salud e Higiene",
    "features": [],
    "details": "Preservativos Sensor Plus - Anatomic",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p19",
    "slug": "liquid-virgin-rejuvenecedor-vaginal-30ml",
    "name": "Liquid Virgin Rejuvenecedor Vaginal 30ml",
    "description": "Liquid Virgin Rejuvenecedor Vaginal 30ml",
    "price": 24990,
    "images": [
      "https://cdnx.jumpseller.com/orgasmic/image/5636245/555221.jpg?1623078765"
    ],
    "category": "Salud e Higiene",
    "collection": "Salud e Higiene",
    "features": [],
    "details": "Liquid Virgin Rejuvenecedor Vaginal 30ml",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p20",
    "slug": "conjunto-blossom-red-m",
    "name": "Conjunto Blossom Red M",
    "description": "Conjunto Blossom Red M",
    "price": 15990,
    "images": [
      "https://cdnx.jumpseller.com/sexshop-mayorista/image/73327196/thumb/760/760?1771117895"
    ],
    "category": "Lencería",
    "collection": "Lencería",
    "features": [],
    "details": "Conjunto Blossom Red M",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p21",
    "slug": "colaless-bordado-y-tiras-rojo",
    "name": "Colaless Bordado y Tiras Rojo",
    "description": "Colaless Bordado y Tiras Rojo",
    "price": 5990,
    "images": [
      "https://cdnx.jumpseller.com/sexshop-mayorista/image/46251906/thumb/760/760?1709922992"
    ],
    "category": "Lencería",
    "collection": "Lencería",
    "features": [],
    "details": "Colaless Bordado y Tiras Rojo",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p22",
    "slug": "liguero-de-encaje-floral-negro-con-colaless-m",
    "name": "Liguero De Encaje Floral Negro con Colaless M",
    "description": "Liguero De Encaje Floral Negro con Colaless M",
    "price": 7990,
    "images": [
      "https://cdnx.jumpseller.com/sexshop-mayorista/image/73327183/thumb/760/760?1771117847"
    ],
    "category": "Lencería",
    "collection": "Lencería",
    "features": [],
    "details": "Liguero De Encaje Floral Negro con Colaless M",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p23",
    "slug": "bralette-carlota",
    "name": "Bralette Carlota",
    "description": "Bralette Carlota",
    "price": 6990,
    "images": [
      "https://cdnx.jumpseller.com/sexshop-mayorista/image/53285710/thumb/760/760?1726256566"
    ],
    "category": "Lencería",
    "collection": "Lencería",
    "features": [],
    "details": "Bralette Carlota",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p24",
    "slug": "conjunto-lenceria-strappynek-encaje-transparente-negro",
    "name": "Conjunto Lenceria Strappynek Encaje Transparente Negro",
    "description": "Conjunto Lenceria Strappynek Encaje Transparente Negro",
    "price": 15990,
    "images": [
      "https://cdnx.jumpseller.com/sexshop-mayorista/image/46317187/thumb/760/760?1710190111"
    ],
    "category": "Lencería",
    "collection": "Lencería",
    "features": [],
    "details": "Conjunto Lenceria Strappynek Encaje Transparente Negro",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p25",
    "slug": "conjunto-blossom-red-l",
    "name": "Conjunto Blossom Red L",
    "description": "Conjunto Blossom Red L",
    "price": 15990,
    "images": [
      "https://cdnx.jumpseller.com/sexshop-mayorista/image/73327196/thumb/760/760?1771117895"
    ],
    "category": "Lencería",
    "collection": "Lencería",
    "features": [],
    "details": "Conjunto Blossom Red L",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p26",
    "slug": "funda-de-pene-estimulante",
    "name": "Funda de Pene estimulante",
    "description": "Funda de Pene estimulante",
    "price": 7990,
    "images": [
      "https://cdnx.jumpseller.com/secretos-de-amor-cl/image/32852816/thumb/1079/1079?1678131254"
    ],
    "category": "Juguetes de Pareja",
    "collection": "Juguetes de Pareja",
    "features": [],
    "details": "Funda de Pene estimulante",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p27",
    "slug": "funda-peneana-matias",
    "name": "Funda Peneana Matias",
    "description": "Funda Peneana Matias",
    "price": 5990,
    "images": [
      "https://sexyshop.cl/cdn/shop/files/Disenosintitulo-2023-08-26T211231.163.png?v=1693188773"
    ],
    "category": "Juguetes de Pareja",
    "collection": "Juguetes de Pareja",
    "features": [],
    "details": "Funda Peneana Matias",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p28",
    "slug": "gel-blanqueador-anal-sachet",
    "name": "Gel Blanqueador Anal Sachet",
    "description": "Gel Blanqueador Anal Sachet",
    "price": 7990,
    "images": [
      "https://cdnx.jumpseller.com/eroshopmayorista/image/6027234/thumb/540/540?1656966450"
    ],
    "category": "Anal",
    "collection": "Anal",
    "features": [],
    "details": "Gel Blanqueador Anal Sachet",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p29",
    "slug": "gel-vaginal-abrazame",
    "name": "Gel Vaginal Abrazame",
    "description": "Gel Vaginal Abrazame",
    "price": 29990,
    "images": [
      "https://cdnx.jumpseller.com/secretos-de-amor-cl/image/4162102/resize/1200/630?1631565954"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Gel Vaginal Abrazame",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p30",
    "slug": "sex-ruleta-romance",
    "name": "Sex Ruleta Romance",
    "description": "Sex Ruleta Romance",
    "price": 10990,
    "images": [
      "https://atrevetemuco.cl/wp-content/uploads/2024/01/marriege-o.png"
    ],
    "category": "Juegos y Novedades",
    "collection": "Juegos y Novedades",
    "features": [],
    "details": "Sex Ruleta Romance",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p31",
    "slug": "gel-besable-fruit-sexy-intt-frutillas-al-champagne",
    "name": "Gel Besable Fruit Sexy Intt Frutillas al Champagne",
    "description": "Gel Besable Fruit Sexy Intt Frutillas al Champagne",
    "price": 10990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_948676-MLC102535046520_122025-O.webp"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Gel Besable Fruit Sexy Intt Frutillas al Champagne",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p32",
    "slug": "polvo-de-miel-besable-kama-sutra-28grs-coco-pi-a",
    "name": "Polvo de Miel Besable Kama Sutra 28grs coco/piña",
    "description": "Polvo de Miel Besable Kama Sutra 28grs coco/piña",
    "price": 15990,
    "images": [
      "https://cdnx.jumpseller.com/eroshopmayorista/image/22359750/resize/540/540?1766775262"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Polvo de Miel Besable Kama Sutra 28grs coco/piña",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p33",
    "slug": "coraz-n-preludio-sensual",
    "name": "Corazón Preludio Sensual",
    "description": "Corazón Preludio Sensual",
    "price": 10990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_952092-MLC78649203079_082024-O.webp"
    ],
    "category": "Juegos y Novedades",
    "collection": "Juegos y Novedades",
    "features": [],
    "details": "Corazón Preludio Sensual",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p34",
    "slug": "anillo-vibrador-reutilizable-starsex",
    "name": "Anillo vibrador reutilizable Starsex",
    "description": "Anillo vibrador reutilizable Starsex",
    "price": 9990,
    "images": [
      "https://cdnx.jumpseller.com/sexshop-mayorista/image/47333379/thumb/760/760?1712251727"
    ],
    "category": "Juguetes de Pareja",
    "collection": "Juguetes de Pareja",
    "features": [],
    "details": "Anillo vibrador reutilizable Starsex",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p35",
    "slug": "gel-anal-pocao-vo-da-ku-intt",
    "name": "Gel Anal Pocao Vo-Da-Ku INTT",
    "description": "Gel Anal Pocao Vo-Da-Ku INTT",
    "price": 8990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_902989-MLU73692047411_122023-O.webp"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Gel Anal Pocao Vo-Da-Ku INTT",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p36",
    "slug": "gel-astringente-pocao-da-virgem-intt",
    "name": "Gel Astringente Pocao Da Virgem INTT",
    "description": "Gel Astringente Pocao Da Virgem INTT",
    "price": 8990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_808208-MLC54894145521_042023-O.webp"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Gel Astringente Pocao Da Virgem INTT",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p37",
    "slug": "lubricante-hybrid-sensuva-frutilla-sachet",
    "name": "Lubricante Hybrid Sensuva Frutilla (Sachet)",
    "description": "Lubricante Hybrid Sensuva Frutilla (Sachet)",
    "price": 2500,
    "images": [
      "https://images.rappi.cl/products/1718482942419_1718482939180_1718482938502.jpg"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Lubricante Hybrid Sensuva Frutilla (Sachet)",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p38",
    "slug": "preservativos-sensor-plus-ultra-sensible",
    "name": "Preservativos Sensor Plus - Ultra Sensible",
    "description": "Preservativos Sensor Plus - Ultra Sensible",
    "price": 2500,
    "images": [
      "/placeholder.svg"
    ],
    "category": "Salud e Higiene",
    "collection": "Salud e Higiene",
    "features": [],
    "details": "Preservativos Sensor Plus - Ultra Sensible",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p39",
    "slug": "preservativos-sensor-plus-three-feels-3-en-1",
    "name": "Preservativos Sensor Plus - THREE FEELS 3 en 1",
    "description": "Preservativos Sensor Plus - THREE FEELS 3 en 1",
    "price": 2500,
    "images": [
      "https://http2.mlstatic.com/D_Q_NP_2X_632699-MLA96767222586_112025-P.webp"
    ],
    "category": "Salud e Higiene",
    "collection": "Salud e Higiene",
    "features": [],
    "details": "Preservativos Sensor Plus - THREE FEELS 3 en 1",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p40",
    "slug": "preservativos-sensor-plus-super-long-xl",
    "name": "Preservativos Sensor Plus - Super Long XL",
    "description": "Preservativos Sensor Plus - Super Long XL",
    "price": 2500,
    "images": [
      "https://http2.mlstatic.com/D_Q_NP_2X_839157-MLA99852634463_112025-P.webp"
    ],
    "category": "Salud e Higiene",
    "collection": "Salud e Higiene",
    "features": [],
    "details": "Preservativos Sensor Plus - Super Long XL",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p41",
    "slug": "preservativos-sensor-plus-tres-sabores",
    "name": "Preservativos Sensor Plus - Tres Sabores",
    "description": "Preservativos Sensor Plus - Tres Sabores",
    "price": 2500,
    "images": [
      "https://www.ecofarmacias.cl/wp-content/uploads/2019/06/Preservativo-Sensor-Sabores-x-3-unidades.jpg"
    ],
    "category": "Salud e Higiene",
    "collection": "Salud e Higiene",
    "features": [],
    "details": "Preservativos Sensor Plus - Tres Sabores",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p42",
    "slug": "preservativos-sensor-plus-fluorescente-caja-3-unid",
    "name": "Preservativos Sensor Plus - Fluorescente caja 3 unid.",
    "description": "Preservativos Sensor Plus - Fluorescente caja 3 unid.",
    "price": 2500,
    "images": [
      "https://www.ecofarmacias.cl/wp-content/uploads/2020/07/sensorplus-magic.jpg"
    ],
    "category": "Salud e Higiene",
    "collection": "Salud e Higiene",
    "features": [],
    "details": "Preservativos Sensor Plus - Fluorescente caja 3 unid.",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p43",
    "slug": "preservativos-sensor-plus-long-love-retardante",
    "name": "Preservativos Sensor Plus - Long Love Retardante",
    "description": "Preservativos Sensor Plus - Long Love Retardante",
    "price": 2500,
    "images": [
      "https://www.ecofarmacias.cl/wp-content/uploads/2019/06/sensorplus-long-love.jpg"
    ],
    "category": "Salud e Higiene",
    "collection": "Salud e Higiene",
    "features": [],
    "details": "Preservativos Sensor Plus - Long Love Retardante",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p44",
    "slug": "preservativos-sensor-plus-extra-resistente-con-nonoxinol-9",
    "name": "Preservativos Sensor Plus - Extra Resistente con Nonoxinol-9",
    "description": "Preservativos Sensor Plus - Extra Resistente con Nonoxinol-9",
    "price": 2500,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_799480-MLA97225055171_112025-O.webp"
    ],
    "category": "Salud e Higiene",
    "collection": "Salud e Higiene",
    "features": [],
    "details": "Preservativos Sensor Plus - Extra Resistente con Nonoxinol-9",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p45",
    "slug": "preservativos-sensor-plus-dotted",
    "name": "Preservativos Sensor Plus - Dotted",
    "description": "Preservativos Sensor Plus - Dotted",
    "price": 2500,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_845171-MLA99903524041_112025-O.webp"
    ],
    "category": "Salud e Higiene",
    "collection": "Salud e Higiene",
    "features": [],
    "details": "Preservativos Sensor Plus - Dotted",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p46",
    "slug": "vela-de-masaje-shunga-chocolate",
    "name": "Vela de Masaje Shunga Chocolate",
    "description": "Vela de Masaje Shunga Chocolate",
    "price": 19990,
    "images": [
      "https://cdnx.jumpseller.com/eroshopmayorista/image/14696694/thumb/540/540?1700361462"
    ],
    "category": "Cuidado Corporal",
    "collection": "Cuidado Corporal",
    "features": [],
    "details": "Vela de Masaje Shunga Chocolate",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p47",
    "slug": "vela-comestible-intt-frutilla",
    "name": "Vela Comestible INTT Frutilla",
    "description": "Vela Comestible INTT Frutilla",
    "price": 15990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_974028-MLU79300149553_092024-O.webp"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Vela Comestible INTT Frutilla",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p48",
    "slug": "point-g-gel-excitante-unisex-intt",
    "name": "POINT G Gel Excitante Unisex INTT",
    "description": "POINT G Gel Excitante Unisex INTT",
    "price": 8990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_765062-MLC83525360145_042025-O.webp"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "POINT G Gel Excitante Unisex INTT",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p49",
    "slug": "peta-zeta-rock-candy-sand-a",
    "name": "Peta Zeta Rock Candy - Sandía",
    "description": "Peta Zeta Rock Candy - Sandía",
    "price": 4000,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_945050-MLC92703073581_092025-O.webp"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Peta Zeta Rock Candy - Sandía",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p50",
    "slug": "peta-zeta-rock-candy-pi-a",
    "name": "Peta Zeta Rock Candy - Piña",
    "description": "Peta Zeta Rock Candy - Piña",
    "price": 4000,
    "images": [
      "https://i5.walmartimages.cl/asr/36136f16-6bec-4ce3-995c-b0b13e84e78b.7817aeb25fc436e45b6fadae887c061c.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Peta Zeta Rock Candy - Piña",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p51",
    "slug": "peta-zeta-rock-candy-mango",
    "name": "Peta Zeta Rock Candy - Mango",
    "description": "Peta Zeta Rock Candy - Mango",
    "price": 4000,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_942292-MLC74548730364_022024-O.webp"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Peta Zeta Rock Candy - Mango",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p52",
    "slug": "peta-zeta-rock-candy-uva",
    "name": "Peta Zeta Rock Candy - Uva",
    "description": "Peta Zeta Rock Candy - Uva",
    "price": 4000,
    "images": [
      "https://cdnx.jumpseller.com/astrogrowshop/image/70609212/imagen_1_28885.webp?1765566497"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Peta Zeta Rock Candy - Uva",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p53",
    "slug": "peta-zeta-rock-candy-frutilla",
    "name": "Peta Zeta Rock Candy - Frutilla",
    "description": "Peta Zeta Rock Candy - Frutilla",
    "price": 4000,
    "images": [
      "https://i5.walmartimages.cl/asr/84bdb473-0e62-43cf-9b3a-1343c86008f0.33f2e07ac33a66c53b07856b55e8e8a1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Peta Zeta Rock Candy - Frutilla",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p54",
    "slug": "lubricante-sensuva-ultra-espeso-frutilla-sachet",
    "name": "Lubricante Sensuva Ultra Espeso Frutilla (Sachet)",
    "description": "Lubricante Sensuva Ultra Espeso Frutilla (Sachet)",
    "price": 2500,
    "images": [
      "https://www.tiendaerotica.cl/wp-content/uploads/2026/02/SE-LUD-S6-Lubricante-ultra-espeso-base-de-agua-sabor-frutilla-sachet-6ml-Sensuva-Fg-01.jpg"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Lubricante Sensuva Ultra Espeso Frutilla (Sachet)",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p55",
    "slug": "liquid-virgin-rejuvenecedor-2ml",
    "name": "Liquid Virgin Rejuvenecedor 2ml",
    "description": "Liquid Virgin Rejuvenecedor 2ml",
    "price": 4990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_653574-MLC83234428490_042025-O.webp"
    ],
    "category": "Salud e Higiene",
    "collection": "Salud e Higiene",
    "features": [],
    "details": "Liquid Virgin Rejuvenecedor 2ml",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p56",
    "slug": "gel-potenciador-pirocao-m-gico-intt",
    "name": "Gel Potenciador Pirocao Mágico INTT",
    "description": "Gel Potenciador Pirocao Mágico INTT",
    "price": 8990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_888035-MLB50946122410_072022-O.webp"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Gel Potenciador Pirocao Mágico INTT",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p57",
    "slug": "gel-retardante-pocao-do-tempo-intt",
    "name": "Gel Retardante Pocao do Tempo INTT",
    "description": "Gel Retardante Pocao do Tempo INTT",
    "price": 8990,
    "images": [
      "https://http2.mlstatic.com/D_Q_NP_629594-MLB74220120149_012024-O.webp"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Gel Retardante Pocao do Tempo INTT",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p58",
    "slug": "gel-garganta-profunda-menta",
    "name": "Gel Garganta Profunda Menta",
    "description": "Gel Garganta Profunda Menta",
    "price": 10990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_661039-MLC90485677239_082025-O.webp"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Gel Garganta Profunda Menta",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p59",
    "slug": "gel-garganta-profunda-frutilla",
    "name": "Gel Garganta Profunda Frutilla",
    "description": "Gel Garganta Profunda Frutilla",
    "price": 10990,
    "images": [
      "https://http2.mlstatic.com/D_Q_NP_2X_681918-MLA99341494732_112025-P.webp"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Gel Garganta Profunda Frutilla",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p60",
    "slug": "gel-excitante-s-per-macho-intt",
    "name": "Gel Excitante Súper Macho INTT",
    "description": "Gel Excitante Súper Macho INTT",
    "price": 10990,
    "images": [
      "https://www.starsex.cl/cdn/shop/products/intt-cosmetica-gel-excitante-super-macho-19346884558998.jpg?v=1635438769"
    ],
    "category": "Masculinos",
    "collection": "Masculinos",
    "features": [],
    "details": "Gel Excitante Súper Macho INTT",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p61",
    "slug": "feromona-masculino-puresex-maderoso-15ml",
    "name": "Feromona Masculino PureSex Maderoso 15ml",
    "description": "Feromona Masculino PureSex Maderoso 15ml",
    "price": 15990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_979443-MLC94283050413_102025-O.webp"
    ],
    "category": "Perfumería",
    "collection": "Perfumería",
    "features": [],
    "details": "Feromona Masculino PureSex Maderoso 15ml",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p62",
    "slug": "feromona-pure-sex-masculina-30ml",
    "name": "Feromona Pure Sex Masculina 30ml",
    "description": "Feromona Pure Sex Masculina 30ml",
    "price": 19990,
    "images": [
      "https://www.starsex.cl/cdn/shop/products/starsex-cosmetica-pure-sex-masculina-29874715230397.jpg?v=1724097586"
    ],
    "category": "Perfumería",
    "collection": "Perfumería",
    "features": [],
    "details": "Feromona Pure Sex Masculina 30ml",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p63",
    "slug": "feromona-pure-sex-femenina-30ml",
    "name": "Feromona Pure Sex Femenina 30ml",
    "description": "Feromona Pure Sex Femenina 30ml",
    "price": 19990,
    "images": [
      "https://www.starsex.cl/cdn/shop/products/starsex-cosmetica-pure-sex-femenina-18728634646678.jpg?v=1724097513"
    ],
    "category": "Perfumería",
    "collection": "Perfumería",
    "features": [],
    "details": "Feromona Pure Sex Femenina 30ml",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p64",
    "slug": "feromona-femenino-puresex-dulce-15ml",
    "name": "Feromona Femenino PureSex Dulce 15ml",
    "description": "Feromona Femenino PureSex Dulce 15ml",
    "price": 15990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_686558-MLA103864370277_012026-O.webp"
    ],
    "category": "Perfumería",
    "collection": "Perfumería",
    "features": [],
    "details": "Feromona Femenino PureSex Dulce 15ml",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p65",
    "slug": "gel-besable-chocolate-intt",
    "name": "Gel besable Chocolate INTT",
    "description": "Gel besable Chocolate INTT",
    "price": 10990,
    "images": [
      "https://http2.mlstatic.com/D_Q_NP_627810-MLC47892596470_102021-O.webp"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Gel besable Chocolate INTT",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p66",
    "slug": "gel-besable-frutilla-intt",
    "name": "Gel besable Frutilla INTT",
    "description": "Gel besable Frutilla INTT",
    "price": 10990,
    "images": [
      "https://i5.walmartimages.cl/asr/741b6d88-1b9f-4495-81da-49dd1a832942.f079e9a0b80ef0c1c6cda49d354136c9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Gel besable Frutilla INTT",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p67",
    "slug": "conjunto-vintage-negro-l",
    "name": "Conjunto vintage Negro L",
    "description": "Conjunto vintage Negro L",
    "price": 15990,
    "images": [
      "https://cdnx.jumpseller.com/sexshop-mayorista/image/46246437/thumb/760/760?1709911033"
    ],
    "category": "Lencería",
    "collection": "Lencería",
    "features": [],
    "details": "Conjunto vintage Negro L",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p68",
    "slug": "liguero-vintage",
    "name": "Liguero Vintage",
    "description": "Liguero Vintage",
    "price": 8990,
    "images": [
      "https://cdnx.jumpseller.com/sexshop-mayorista/image/46246437/thumb/760/760?1709911033"
    ],
    "category": "Lencería",
    "collection": "Lencería",
    "features": [],
    "details": "Liguero Vintage",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p69",
    "slug": "sex-el-juego-para-parejas",
    "name": "Sex!!! El juego para parejas",
    "description": "Sex!!! El juego para parejas",
    "price": 15990,
    "images": [
      "https://coquetasexshop.cl/wp-content/uploads/2022/03/Juego-parejas-trios-cuartetos.png"
    ],
    "category": "Juegos y Novedades",
    "collection": "Juegos y Novedades",
    "features": [],
    "details": "Sex!!! El juego para parejas",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p70",
    "slug": "mi-primer-kit-anal-3-en-1",
    "name": "Mi Primer Kit Anal (3 en 1)",
    "description": "Mi Primer Kit Anal (3 en 1)",
    "price": 19990,
    "images": [
      "https://cdnx.jumpseller.com/shoppingplusvalia/image/31145102/thumb/1000/1000?1674576730"
    ],
    "category": "Anal",
    "collection": "Anal",
    "features": [],
    "details": "Mi Primer Kit Anal (3 en 1)",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p71",
    "slug": "doble-penetracion-jelly",
    "name": "Doble penetracion Jelly",
    "description": "Doble penetracion Jelly",
    "price": 15990,
    "images": [
      "https://cdnx.jumpseller.com/sexshop-mayorista/image/40550807/thumb/760/760?1712678081"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Doble penetracion Jelly",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p72",
    "slug": "dedal-vibrador",
    "name": "Dedal Vibrador",
    "description": "Dedal Vibrador",
    "price": 19990,
    "images": [
      "https://cdnx.jumpseller.com/sexshop-mayorista/image/51286820/thumb/760/760?1722438705"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Dedal Vibrador",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p73",
    "slug": "kit-bdsm-10-piezas-starsex-rojo",
    "name": "Kit BDSM 10 Piezas Starsex Rojo",
    "description": "Kit BDSM 10 Piezas Starsex Rojo",
    "price": 24990,
    "images": [
      "https://cdnx.jumpseller.com/sexshop-mayorista/image/64889524/thumb/760/760?1750887816"
    ],
    "category": "BDSM y Roles",
    "collection": "BDSM y Roles",
    "features": [],
    "details": "Kit BDSM 10 Piezas Starsex Rojo",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p74",
    "slug": "kit-bdsm-10-piezas-starsex-negro",
    "name": "Kit BDSM 10 Piezas Starsex Negro",
    "description": "Kit BDSM 10 Piezas Starsex Negro",
    "price": 24990,
    "images": [
      "https://cdnx.jumpseller.com/sexshop-mayorista/image/64889491/thumb/760/760?1750887704"
    ],
    "category": "BDSM y Roles",
    "collection": "BDSM y Roles",
    "features": [],
    "details": "Kit BDSM 10 Piezas Starsex Negro",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p75",
    "slug": "kit-de-sade-starsex",
    "name": "Kit de Sade Starsex",
    "description": "Kit de Sade Starsex",
    "price": 9990,
    "images": [
      "https://cdnx.jumpseller.com/sexshop-mayorista/image/40554767/thumb/760/760?1715178039"
    ],
    "category": "BDSM y Roles",
    "collection": "BDSM y Roles",
    "features": [],
    "details": "Kit de Sade Starsex",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p76",
    "slug": "bolis-starsex-vibradoras-e-inal-mbricas",
    "name": "Bolis starsex Vibradoras e Inalámbricas",
    "description": "Bolis starsex Vibradoras e Inalámbricas",
    "price": 31990,
    "images": [
      "https://www.starsex.cl/cdn/shop/products/starsex-juguetes-bolas-chinas-inalambricas-bolis-29869048496317.jpg?v=1684170949"
    ],
    "category": "Salud y Suelo Pelvico",
    "collection": "Salud y Suelo Pelvico",
    "features": [],
    "details": "Bolis starsex Vibradoras e Inalámbricas",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p77",
    "slug": "set-de-anillos-para-pene-donuts",
    "name": "Set de anillos para pene Donuts",
    "description": "Set de anillos para pene Donuts",
    "price": 7990,
    "images": [
      "https://www.starsex.cl/cdn/shop/products/starsex-juguetes-anillos-erector-donuts-starsex-29869871366333.jpg?v=1628345354"
    ],
    "category": "Juguetes de Pareja",
    "collection": "Juguetes de Pareja",
    "features": [],
    "details": "Set de anillos para pene Donuts",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p78",
    "slug": "feromona-enamor-starsex-masculina-30-ml",
    "name": "Feromona Enamor Starsex Masculina 30 ml",
    "description": "Feromona Enamor Starsex Masculina 30 ml",
    "price": 15990,
    "images": [
      "https://www.starsex.cl/cdn/shop/products/starsex-cosmetica-feromonas-masculinas-enamor-29873006411965.jpg?v=1724098000"
    ],
    "category": "Perfumería",
    "collection": "Perfumería",
    "features": [],
    "details": "Feromona Enamor Starsex Masculina 30 ml",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p79",
    "slug": "plug-met-lico-hello-kitty-s",
    "name": "Plug Metálico Hello Kitty S",
    "description": "Plug Metálico Hello Kitty S",
    "price": 15990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_943753-MLC77283585228_072024-O.webp"
    ],
    "category": "Anal",
    "collection": "Anal",
    "features": [],
    "details": "Plug Metálico Hello Kitty S",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p80",
    "slug": "kit-suave-sumisi-n-starsex",
    "name": "Kit Suave Sumisión Starsex",
    "description": "Kit Suave Sumisión Starsex",
    "price": 9990,
    "images": [
      "https://cdnx.jumpseller.com/sexshop-mayorista/image/40554456/thumb/760/760?1715202940"
    ],
    "category": "BDSM y Roles",
    "collection": "BDSM y Roles",
    "features": [],
    "details": "Kit Suave Sumisión Starsex",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p81",
    "slug": "fruti-lub-starsex-sachet",
    "name": "Fruti Lub Starsex (Sachet)",
    "description": "Fruti Lub Starsex (Sachet)",
    "price": 2000,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_756360-MLC82863570596_032025-O.webp"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Fruti Lub Starsex (Sachet)",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p82",
    "slug": "choco-lub-starsex-sachet",
    "name": "Choco Lub Starsex (Sachet)",
    "description": "Choco Lub Starsex (Sachet)",
    "price": 2000,
    "images": [
      "https://http2.mlstatic.com/D_Q_NP_981890-MLA83820996841_042025-O.webp"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Choco Lub Starsex (Sachet)",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p83",
    "slug": "lubricante-retardante-starsex-sachet",
    "name": "Lubricante Retardante Starsex (Sachet)",
    "description": "Lubricante Retardante Starsex (Sachet)",
    "price": 2500,
    "images": [
      "https://www.starsex.cl/cdn/shop/products/starsex-cosmetica-lubricante-starsex-efecto-prolongado-18634772676758.jpg?v=1742489871"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Lubricante Retardante Starsex (Sachet)",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p84",
    "slug": "chocolate-caliente-starsex-sachet",
    "name": "Chocolate Caliente Starsex (Sachet)",
    "description": "Chocolate Caliente Starsex (Sachet)",
    "price": 2000,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_988776-MLA92724719623_092025-O.webp"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Chocolate Caliente Starsex (Sachet)",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p85",
    "slug": "bala-vibradora-conejin",
    "name": "Bala Vibradora Conejin",
    "description": "Bala Vibradora Conejin",
    "price": 15990,
    "images": [
      "https://cdnx.jumpseller.com/secretos-de-amor-cl/image/6624751/thumb/1079/1079?1644112423"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Bala Vibradora Conejin",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p86",
    "slug": "polvo-de-miel-besable-kama-sutra-28grs-frambuesa",
    "name": "Polvo de Miel Besable Kama Sutra 28grs Frambuesa",
    "description": "Polvo de Miel Besable Kama Sutra 28grs Frambuesa",
    "price": 15990,
    "images": [
      "https://cdnx.jumpseller.com/eroshopmayorista/image/45090974/HD_1oz_Raspberry_Kiss__89930.jpg?1766775262"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Polvo de Miel Besable Kama Sutra 28grs Frambuesa",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p87",
    "slug": "lubricante-neutro-sda",
    "name": "Lubricante Neutro SDA",
    "description": "Lubricante Neutro SDA",
    "price": 15990,
    "images": [
      "https://i5.walmartimages.cl/asr/72e375ac-7a9e-47ce-8a70-6c4ca7ef6a92.ace3a53f9244550f47633a2408b8b267.png?odnHeight=2000&odnWidth=2000&odnBg=ffffff"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Lubricante Neutro SDA",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p88",
    "slug": "gel-estimulante-femenino-amazing",
    "name": "Gel Estimulante Femenino Amazing",
    "description": "Gel Estimulante Femenino Amazing",
    "price": 24990,
    "images": [
      "https://japijane.cl/cdn/shop/products/LUB1010A-7648795033440-Secretos-de-Amor-Amazing-01-Japi-Jane.jpg?v=1629396132"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Gel Estimulante Femenino Amazing",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p89",
    "slug": "gel-anal-estimulante-sensuva",
    "name": "Gel Anal Estimulante sensuva",
    "description": "Gel Anal Estimulante sensuva",
    "price": 15990,
    "images": [
      "https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/792x1068/prd-cl/product-medias/41c35278-0706-4a41-9849-296e924593d0/MKWFXUBZFM/MKWFXUBZFM-1/1751425572655-MKWFXUBZFM-1-0.jpg"
    ],
    "category": "Anal",
    "collection": "Anal",
    "features": [],
    "details": "Gel Anal Estimulante sensuva",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p90",
    "slug": "crema-anal-confort-sensuva",
    "name": "Crema Anal Confort sensuva",
    "description": "Crema Anal Confort sensuva",
    "price": 15990,
    "images": [
      "https://cdnx.jumpseller.com/secretos-de-amor-cl/image/13145287/resize/1200/630?1610905247"
    ],
    "category": "Anal",
    "collection": "Anal",
    "features": [],
    "details": "Crema Anal Confort sensuva",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p91",
    "slug": "pintura-corporal-chocolate-shunga",
    "name": "Pintura Corporal Chocolate Shunga",
    "description": "Pintura Corporal Chocolate Shunga",
    "price": 19990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_983847-MLC45526312105_042021-O.webp"
    ],
    "category": "Juegos y Novedades",
    "collection": "Juegos y Novedades",
    "features": [],
    "details": "Pintura Corporal Chocolate Shunga",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p92",
    "slug": "nipple-b-lsamo-explosi-n-sour",
    "name": "Nipple Bálsamo Explosión Sour",
    "description": "Nipple Bálsamo Explosión Sour",
    "price": 9990,
    "images": [
      "https://bmsenterprises.com/cdn/shop/products/CB902731-Nipple-Nibblers_1200x.jpg?v=1642778982"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Nipple Bálsamo Explosión Sour",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p93",
    "slug": "nipple-b-lsamo-refrescante",
    "name": "Nipple Bálsamo Refrescante",
    "description": "Nipple Bálsamo Refrescante",
    "price": 9990,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsTlo4diU5SjizxSBFfJWb7ym8a1J5qZ4r8Q&s"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Nipple Bálsamo Refrescante",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p94",
    "slug": "kit-5-aceites-de-masaje-kama-sutra",
    "name": "Kit 5 Aceites de Masaje Kama Sutra",
    "description": "Kit 5 Aceites de Masaje Kama Sutra",
    "price": 35990,
    "images": [
      "https://cdnx.jumpseller.com/secretos-de-amor-cl/image/15179176/thumb/1079/1079?1658348911"
    ],
    "category": "Kits y Regalos",
    "collection": "Kits y Regalos",
    "features": [],
    "details": "Kit 5 Aceites de Masaje Kama Sutra",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p95",
    "slug": "lubricante-hot-sabor-frutilla-intt",
    "name": "Lubricante Hot sabor Frutilla Intt",
    "description": "Lubricante Hot sabor Frutilla Intt",
    "price": 15990,
    "images": [
      "https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/3840x0/filters:quality(75)/prd-cl/product-medias/1ce4e111-a194-4e3f-8953-1b2325a7ab50/MKEXOBUQUO/MKEXOBUQUO-0/1698938655290-MKEXOBUQUO-0-2.png"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Lubricante Hot sabor Frutilla Intt",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p96",
    "slug": "lubricante-efecto-fr-o-ice-black-intt",
    "name": "Lubricante Efecto Frío Ice Black Intt",
    "description": "Lubricante Efecto Frío Ice Black Intt",
    "price": 15990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_778384-MLC103024447247_122025-O.webp"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Lubricante Efecto Frío Ice Black Intt",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p97",
    "slug": "lubricante-base-agua-c-lido-heat-wave",
    "name": "Lubricante Base Agua Cálido Heat Wave",
    "description": "Lubricante Base Agua Cálido Heat Wave",
    "price": 15990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_701844-MLC101309482670_122025-O.webp"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Lubricante Base Agua Cálido Heat Wave",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p98",
    "slug": "lubricantes-aroma-toko-cherry",
    "name": "Lubricantes Aroma Toko Cherry",
    "description": "Lubricantes Aroma Toko Cherry",
    "price": 25990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_881285-MLA91258658569_082025-O.webp"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Lubricantes Aroma Toko Cherry",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p99",
    "slug": "gel-besable-fruit-sexy-intt-energ-tico",
    "name": "Gel Besable Fruit Sexy Intt Energético",
    "description": "Gel Besable Fruit Sexy Intt Energético",
    "price": 10990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_670434-MLC103043329785_122025-O.webp"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Gel Besable Fruit Sexy Intt Energético",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p100",
    "slug": "gel-besable-fruit-sexy-intt-algod-n-dulce",
    "name": "Gel Besable Fruit Sexy Intt Algodón Dulce",
    "description": "Gel Besable Fruit Sexy Intt Algodón Dulce",
    "price": 10990,
    "images": [
      "https://cdnx.jumpseller.com/eroshopmayorista/image/67630317/Fruit_20Algod_C3_A3o_20Doce.png?1758903555"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Gel Besable Fruit Sexy Intt Algodón Dulce",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p101",
    "slug": "gel-besable-fruit-sexy-intt-frambuesa",
    "name": "Gel Besable Fruit Sexy Intt Frambuesa",
    "description": "Gel Besable Fruit Sexy Intt Frambuesa",
    "price": 10990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_740302-MLC103050635551_122025-O.webp"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Gel Besable Fruit Sexy Intt Frambuesa",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p102",
    "slug": "gel-besable-fruit-sexy-intt-maracuy",
    "name": "Gel Besable Fruit Sexy Intt Maracuyá",
    "description": "Gel Besable Fruit Sexy Intt Maracuyá",
    "price": 10990,
    "images": [
      "https://i5.walmartimages.cl/asr/ec552044-3ea4-4d4c-9020-5cb9c515775b.2516e890583efca7eecc518ac0c0145c.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Gel Besable Fruit Sexy Intt Maracuyá",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p103",
    "slug": "gel-estimulante-anal-beso-griego-intt",
    "name": "Gel Estimulante Anal Beso Griego Intt",
    "description": "Gel Estimulante Anal Beso Griego Intt",
    "price": 19990,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqN_hkiN8Ud63daTRMczzhSpT51m_UeHklQ&s"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Gel Estimulante Anal Beso Griego Intt",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p104",
    "slug": "vibrador-plug-anal-c-control-prettylove",
    "name": "Vibrador Plug Anal c/ Control PRETTYLOVE",
    "description": "Vibrador Plug Anal c/ Control PRETTYLOVE",
    "price": 24990,
    "images": [
      "https://cdnx.jumpseller.com/secretos-de-amor-cl/image/5566463/thumb/1079/1079?1727293292"
    ],
    "category": "Anal",
    "collection": "Anal",
    "features": [],
    "details": "Vibrador Plug Anal c/ Control PRETTYLOVE",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p105",
    "slug": "fusta-con-pluma-negro",
    "name": "Fusta con Pluma Negro",
    "description": "Fusta con Pluma Negro",
    "price": 6990,
    "images": [
      "https://m.media-amazon.com/images/I/51ZuAEEA49L._AC_UF1000,1000_QL80_.jpg"
    ],
    "category": "BDSM y Roles",
    "collection": "BDSM y Roles",
    "features": [],
    "details": "Fusta con Pluma Negro",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p106",
    "slug": "pluma-traviesa",
    "name": "Pluma Traviesa",
    "description": "Pluma Traviesa",
    "price": 5990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_812406-MLC77932467543_072024-O.webp"
    ],
    "category": "BDSM y Roles",
    "collection": "BDSM y Roles",
    "features": [],
    "details": "Pluma Traviesa",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p107",
    "slug": "kit-kama-sutra-trustme",
    "name": "Kit Kama Sutra TrustMe",
    "description": "Kit Kama Sutra TrustMe",
    "price": 33990,
    "images": [
      "https://i5.walmartimages.cl/asr/6fcd42db-49dc-4559-9939-3aed7c50f8ae.9ee4cbf597c3020bf1c9c3149bdd1727.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    ],
    "category": "Kits y Regalos",
    "collection": "Kits y Regalos",
    "features": [],
    "details": "Kit Kama Sutra TrustMe",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p108",
    "slug": "nuevo-weekender-kit-frambuesa",
    "name": "Nuevo Weekender Kit Frambuesa",
    "description": "Nuevo Weekender Kit Frambuesa",
    "price": 25990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_940395-MLC76015327041_042024-O.webp"
    ],
    "category": "Kits y Regalos",
    "collection": "Kits y Regalos",
    "features": [],
    "details": "Nuevo Weekender Kit Frambuesa",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p109",
    "slug": "vibrador-conejo-discretion-lux",
    "name": "Vibrador Conejo Discretion LUX",
    "description": "Vibrador Conejo Discretion LUX",
    "price": 100990,
    "images": [
      "https://cdnx.jumpseller.com/eroshopmayorista/image/41965629/thumb/540/540?1699636708"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Vibrador Conejo Discretion LUX",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p110",
    "slug": "plug-anal-chrystalino-classic",
    "name": "Plug Anal Chrystalino Classic",
    "description": "Plug Anal Chrystalino Classic",
    "price": 25990,
    "images": [
      "https://cdnx.jumpseller.com/eroshopmayorista/image/41962439/resize/540/540?1699630509"
    ],
    "category": "Anal",
    "collection": "Anal",
    "features": [],
    "details": "Plug Anal Chrystalino Classic",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p111",
    "slug": "ducha-anal-fantasy",
    "name": "Ducha Anal Fantasy",
    "description": "Ducha Anal Fantasy",
    "price": 29990,
    "images": [
      "https://cdnx.jumpseller.com/secretos-de-amor-cl/image/63932760/ZZZ.jpg?1748552908"
    ],
    "category": "Salud e Higiene",
    "collection": "Salud e Higiene",
    "features": [],
    "details": "Ducha Anal Fantasy",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p112",
    "slug": "vibrador-anal-satisfyer-lolli-plug-2-verde",
    "name": "Vibrador Anal Satisfyer Lolli Plug 2 Verde",
    "description": "Vibrador Anal Satisfyer Lolli Plug 2 Verde",
    "price": 65990,
    "images": [
      "https://cdnx.jumpseller.com/eroshopmayorista/image/45345545/satisfyer-vibrador-anal-lolli-plug-2-verde-oscuro-1-64660.jpeg?1712331245"
    ],
    "category": "Anal",
    "collection": "Anal",
    "features": [],
    "details": "Vibrador Anal Satisfyer Lolli Plug 2 Verde",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p113",
    "slug": "satisfyer-dildo-doble-cristal",
    "name": "Satisfyer Dildo Doble Cristal",
    "description": "Satisfyer Dildo Doble Cristal",
    "price": 60990,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVKJr39c8uJSu2uH6yunA_LVdpo_daUD6zaA&s"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Satisfyer Dildo Doble Cristal",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p114",
    "slug": "satisfyer-layons-sweet-brown-helado",
    "name": "Satisfyer Layons Sweet Brown (Helado)",
    "description": "Satisfyer Layons Sweet Brown (Helado)",
    "price": 50990,
    "images": [
      "https://www.tiendaerotica.cl/wp-content/uploads/2021/05/Captura-de-pantalla-2021-05-20-a-las-16.48.55.png"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Satisfyer Layons Sweet Brown (Helado)",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p115",
    "slug": "dildo-original-real-stico-bicefalo-piel-s-38-cms",
    "name": "Dildo Original Realístico Bicefalo Piel S (38 cms.)",
    "description": "Dildo Original Realístico Bicefalo Piel S (38 cms.)",
    "price": 35990,
    "images": [
      "/placeholder.svg"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Dildo Original Realístico Bicefalo Piel S (38 cms.)",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p116",
    "slug": "dados-er-ticos-wooomy-ooo",
    "name": "Dados Eróticos Wooomy Ooo",
    "description": "Dados Eróticos Wooomy Ooo",
    "price": 10990,
    "images": [
      "https://cdnx.jumpseller.com/secretos-de-amor-cl/image/69516876/IMG-20251110-WA0001.jpg?1762785487"
    ],
    "category": "Juegos y Novedades",
    "collection": "Juegos y Novedades",
    "features": [],
    "details": "Dados Eróticos Wooomy Ooo",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p117",
    "slug": "esponja-ba-o-vibratoria-amarilla",
    "name": "Esponja Baño Vibratoria Amarilla",
    "description": "Esponja Baño Vibratoria Amarilla",
    "price": 6990,
    "images": [
      "https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/3840x0/filters:quality(75)/prd-cl/product-medias/41c35278-0706-4a41-9849-296e924593d0/MKZ4ED6PB7/MKZ4ED6PB7-1/1758915498567-MKZ4ED6PB7-1-2.jpg"
    ],
    "category": "Cuidado Corporal",
    "collection": "Cuidado Corporal",
    "features": [],
    "details": "Esponja Baño Vibratoria Amarilla",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p118",
    "slug": "funda-c-arnes-vibrador",
    "name": "Funda c/ Arnes vibrador",
    "description": "Funda c/ Arnes vibrador",
    "price": 25990,
    "images": [
      "https://cdnx.jumpseller.com/eroshopmayorista/image/2043003/resize/540/540?1755275699"
    ],
    "category": "BDSM y Roles",
    "collection": "BDSM y Roles",
    "features": [],
    "details": "Funda c/ Arnes vibrador",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p119",
    "slug": "copita-satisfyer-feel-secure",
    "name": "Copita Satisfyer Feel Secure",
    "description": "Copita Satisfyer Feel Secure",
    "price": 10990,
    "images": [
      "https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/792x1068/prd-cl/product-medias/df8c9140-5832-4d4c-b65c-b134fa165b7e/MKA873C5KF/MKA873C5KF-1/1704221168945-MKA873C5KF-1-1.png"
    ],
    "category": "Salud e Higiene",
    "collection": "Salud e Higiene",
    "features": [],
    "details": "Copita Satisfyer Feel Secure",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p120",
    "slug": "satisfyer-pro-2-modern-blossom",
    "name": "Satisfyer Pro 2 Modern Blossom",
    "description": "Satisfyer Pro 2 Modern Blossom",
    "price": 50990,
    "images": [
      "https://i5.walmartimages.cl/asr/68d61019-0ba5-43a5-8685-a74052c82f2b.897b1d496071a9eb5dd6e89b649b2222.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Satisfyer Pro 2 Modern Blossom",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p121",
    "slug": "satisfyer-men-heat-vibration",
    "name": "Satisfyer Men Heat Vibration",
    "description": "Satisfyer Men Heat Vibration",
    "price": 69990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_607067-MLA99385378910_112025-O.webp"
    ],
    "category": "Masculinos",
    "collection": "Masculinos",
    "features": [],
    "details": "Satisfyer Men Heat Vibration",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p122",
    "slug": "satisfyer-pro-2-gen-3-con-app",
    "name": "Satisfyer Pro 2 Gen 3 con APP",
    "description": "Satisfyer Pro 2 Gen 3 con APP",
    "price": 85990,
    "images": [
      "https://www.fersex.cl/wp-content/uploads/2023/12/SKU-06-%E7%BA%A2%E8%89%B2APP.jpg"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Satisfyer Pro 2 Gen 3 con APP",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p123",
    "slug": "satisfyer-yoni-power-2-bolas-kegel",
    "name": "Satisfyer Yoni Power 2 (Bolas Kegel)",
    "description": "Satisfyer Yoni Power 2 (Bolas Kegel)",
    "price": 31990,
    "images": [
      "https://us-satisfyer.imb-images.com/cdn-cgi/image/onerror=redirect%2Cformat=auto/media/image/50/8f/7b/Satisfyer-Yoni-Power-2-lightblue-package_600x600@2x.png"
    ],
    "category": "Salud y Suelo Pelvico",
    "collection": "Salud y Suelo Pelvico",
    "features": [],
    "details": "Satisfyer Yoni Power 2 (Bolas Kegel)",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p124",
    "slug": "cable-satisfyer-para-carga-usb-magn-tico",
    "name": "Cable Satisfyer para carga USB Magnético",
    "description": "Cable Satisfyer para carga USB Magnético",
    "price": 10990,
    "images": [
      "https://m.media-amazon.com/images/I/51Qx9NxLWDL.jpg"
    ],
    "category": "Accesorios",
    "collection": "Accesorios",
    "features": [],
    "details": "Cable Satisfyer para carga USB Magnético",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p125",
    "slug": "huevo-masturbador-satisfyer-modelos-surtido",
    "name": "Huevo Masturbador Satisfyer Modelos surtido",
    "description": "Huevo Masturbador Satisfyer Modelos surtido",
    "price": 10990,
    "images": [
      "https://cdnx.jumpseller.com/secretos-de-amor-cl/image/34858319/1080.webp?1683320341"
    ],
    "category": "Masculinos",
    "collection": "Masculinos",
    "features": [],
    "details": "Huevo Masturbador Satisfyer Modelos surtido",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p126",
    "slug": "satisfyer-power-ring-2",
    "name": "Satisfyer Power Ring 2",
    "description": "Satisfyer Power Ring 2",
    "price": 30990,
    "images": [
      "https://www.sexshoptouchme.cl/cdn/shop/files/D_NQ_NP_2X_954205-MLU70623884840_072023-F.webp?v=1757709921"
    ],
    "category": "Juguetes de Pareja",
    "collection": "Juguetes de Pareja",
    "features": [],
    "details": "Satisfyer Power Ring 2",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p127",
    "slug": "satisfyer-pro-penguin",
    "name": "Satisfyer Pro Penguin",
    "description": "Satisfyer Pro Penguin",
    "price": 59990,
    "images": [
      "https://cdnx.jumpseller.com/secretos-de-amor-cl/image/74883865/ASSET_MP_136328950.jfif?1773953500"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Satisfyer Pro Penguin",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p128",
    "slug": "vibrador-aimi-rabbit",
    "name": "Vibrador Aimi Rabbit",
    "description": "Vibrador Aimi Rabbit",
    "price": 70990,
    "images": [
      "https://cdnx.jumpseller.com/eroshopmayorista/image/41962591/resize/540/540?1699630927"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Vibrador Aimi Rabbit",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p129",
    "slug": "vibrador-satisfyer-master",
    "name": "Vibrador Satisfyer Master",
    "description": "Vibrador Satisfyer Master",
    "price": 85990,
    "images": [
      "https://i5.walmartimages.cl/asr/0a8993b6-7bd4-4be5-b943-0813b109d11d.5b2ce8dd7017dc87a07d53399f8f631f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Vibrador Satisfyer Master",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p130",
    "slug": "anillo-vibrador-chester-prettylove",
    "name": "Anillo Vibrador Chester PRETTYLOVE",
    "description": "Anillo Vibrador Chester PRETTYLOVE",
    "price": 15990,
    "images": [
      "https://cdnx.jumpseller.com/lorena-corrotea-sexshop/image/7670057/anillo-vibrador-chester.jpg?1581351822"
    ],
    "category": "Juguetes de Pareja",
    "collection": "Juguetes de Pareja",
    "features": [],
    "details": "Anillo Vibrador Chester PRETTYLOVE",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p131",
    "slug": "anillo-vibrador-desechable",
    "name": "Anillo Vibrador Desechable",
    "description": "Anillo Vibrador Desechable",
    "price": 6990,
    "images": [
      "https://japijane.cl/cdn/shop/products/JJ0037-Anillo-Atrevete-01-Japi-Jane.jpg?v=1722981219&width=1000"
    ],
    "category": "Juguetes de Pareja",
    "collection": "Juguetes de Pareja",
    "features": [],
    "details": "Anillo Vibrador Desechable",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p132",
    "slug": "kit-secretos-de-la-geisha-frutilla",
    "name": "Kit Secretos de la Geisha Frutilla",
    "description": "Kit Secretos de la Geisha Frutilla",
    "price": 35990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_890974-MLC93600738372_102025-O.webp"
    ],
    "category": "Kits y Regalos",
    "collection": "Kits y Regalos",
    "features": [],
    "details": "Kit Secretos de la Geisha Frutilla",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p133",
    "slug": "vibrador-conejo-empuje-y-perlas-vibratorias-giratorias-prettylove",
    "name": "Vibrador Conejo Empuje y Perlas Vibratorias Giratorias PRETTYLOVE",
    "description": "Vibrador Conejo Empuje y Perlas Vibratorias Giratorias PRETTYLOVE",
    "price": 59990,
    "images": [
      "https://cdnx.jumpseller.com/eroshopmayorista/image/58857278/BW-500013-2_12.jpg?1736190799"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Vibrador Conejo Empuje y Perlas Vibratorias Giratorias PRETTYLOVE",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p134",
    "slug": "satisfyer-pro-2-generaci-n-2",
    "name": "Satisfyer Pro 2 Generación 2",
    "description": "Satisfyer Pro 2 Generación 2",
    "price": 60990,
    "images": [
      "https://cdnx.jumpseller.com/secretos-de-amor-cl/image/47721861/MKQ864L5MC-0000-001.webp?1767573350"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Satisfyer Pro 2 Generación 2",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p135",
    "slug": "satisfyer-c-pulso-de-aire-curvy-1-red",
    "name": "Satisfyer c/pulso de aire Curvy 1+ Red",
    "description": "Satisfyer c/pulso de aire Curvy 1+ Red",
    "price": 55990,
    "images": [
      "https://m.media-amazon.com/images/I/51yHsdgb2IL._AC_UF1000,1000_QL80_.jpg"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Satisfyer c/pulso de aire Curvy 1+ Red",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p136",
    "slug": "aceite-de-masaje-kama-sutra-con-feromonas-sex-magnet",
    "name": "Aceite de Masaje Kama Sutra con Feromonas SEX MAGNET",
    "description": "Aceite de Masaje Kama Sutra con Feromonas SEX MAGNET",
    "price": 17990,
    "images": [
      "https://cdnx.jumpseller.com/secretos-de-amor-cl/image/49719503/sexmagnet2ozmassageoil.webp?1718302144"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Aceite de Masaje Kama Sutra con Feromonas SEX MAGNET",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p137",
    "slug": "lubricante-base-agua-fresco-arctic-chill",
    "name": "Lubricante Base Agua Fresco Arctic Chill",
    "description": "Lubricante Base Agua Fresco Arctic Chill",
    "price": 15990,
    "images": [
      "https://i5.walmartimages.cl/asr/f3a896cd-d24c-479e-9cf6-ede309200c58.a05a45e8352bc53afaf1d5565241293e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Lubricante Base Agua Fresco Arctic Chill",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p138",
    "slug": "crema-drag-n-shunga",
    "name": "Crema Dragón Shunga",
    "description": "Crema Dragón Shunga",
    "price": 34990,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19T33uwo68YxxxiWs3dDHCkpHKkVAPTp31A&s"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Crema Dragón Shunga",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p139",
    "slug": "vibrador-c-pulso-de-aire-satisfyer-curvy-2",
    "name": "Vibrador c/ pulso de aire Satisfyer Curvy 2 +",
    "description": "Vibrador c/ pulso de aire Satisfyer Curvy 2 +",
    "price": 65990,
    "images": [
      "https://cdnx.jumpseller.com/secretos-de-amor-cl/image/74667000/resize/306/306?1773855762"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Vibrador c/ pulso de aire Satisfyer Curvy 2 +",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p140",
    "slug": "satisfyer-pro-2-generaci-n-2-violeta",
    "name": "Satisfyer Pro 2 Generación 2 Violeta",
    "description": "Satisfyer Pro 2 Generación 2 Violeta",
    "price": 60990,
    "images": [
      "https://cdnx.jumpseller.com/eroshopmayorista/image/59533847/thumb/540/540?1737984864"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Satisfyer Pro 2 Generación 2 Violeta",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p141",
    "slug": "vibrador-satisfyer-sexy-secret-panty-con-app",
    "name": "Vibrador Satisfyer Sexy Secret Panty con App",
    "description": "Vibrador Satisfyer Sexy Secret Panty con App",
    "price": 79990,
    "images": [
      "https://m.media-amazon.com/images/I/51DB1dYvyyL._AC_UF1000,1000_QL80_.jpg"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Vibrador Satisfyer Sexy Secret Panty con App",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p142",
    "slug": "bj-blast-dulce-burbujeante-petazeta-sabor-frutilla",
    "name": "BJ Blast Dulce Burbujeante petazeta (sabor: frutilla)",
    "description": "BJ Blast Dulce Burbujeante petazeta (sabor: frutilla)",
    "price": 4500,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oqDw3IbopN3lIc0l2pLlyQM0XlBj4pqbFQ&s"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "BJ Blast Dulce Burbujeante petazeta (sabor: frutilla)",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p143",
    "slug": "bj-blast-dulce-burbujeante-petazeta-sabor-manzana",
    "name": "BJ Blast Dulce Burbujeante petazeta (sabor: manzana)",
    "description": "BJ Blast Dulce Burbujeante petazeta (sabor: manzana)",
    "price": 4500,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_846111-MLC86695211352_062025-O.webp"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "BJ Blast Dulce Burbujeante petazeta (sabor: manzana)",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p144",
    "slug": "potenciador-masculino-oh",
    "name": "Potenciador Masculino OH",
    "description": "Potenciador Masculino OH",
    "price": 18990,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_665042-MLC92252506631_092025-O.webp"
    ],
    "category": "Cosmética Erótica",
    "collection": "Cosmética Erótica",
    "features": [],
    "details": "Potenciador Masculino OH",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p145",
    "slug": "pezoneras-de-dulce-candy",
    "name": "Pezoneras de Dulce Candy",
    "description": "Pezoneras de Dulce Candy",
    "price": 15990,
    "images": [
      "https://cdnx.jumpseller.com/secretos-de-amor-cl/image/10843107/thumb/1079/1079?1613128739"
    ],
    "category": "Juegos y Novedades",
    "collection": "Juegos y Novedades",
    "features": [],
    "details": "Pezoneras de Dulce Candy",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p146",
    "slug": "lubricante-amor-liquido-cl-sico-neutro-100ml",
    "name": "Lubricante Amor Liquido - Clásico Neutro 100ml",
    "description": "Lubricante Amor Liquido - Clásico Neutro 100ml",
    "price": 18990,
    "images": [
      "https://cdnx.jumpseller.com/secretos-de-amor-cl/image/40814458/10210.jpeg?1764191940"
    ],
    "category": "Bienestar y Lubricantes",
    "collection": "Bienestar y Lubricantes",
    "features": [],
    "details": "Lubricante Amor Liquido - Clásico Neutro 100ml",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p147",
    "slug": "vibrador-de-pulso-de-aire-fun-factory-desire",
    "name": "Vibrador de Pulso de Aire Fun Factory DESIRE",
    "description": "Vibrador de Pulso de Aire Fun Factory DESIRE",
    "price": 39990,
    "images": [
      "https://cdnx.jumpseller.com/eroshopmayorista/image/74487037/thumb/540/540?1773170321"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Vibrador de Pulso de Aire Fun Factory DESIRE",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p148",
    "slug": "vibrador-succionador-satisfyer-pro-punto-g",
    "name": "Vibrador / Succionador Satisfyer Pro+ Punto G",
    "description": "Vibrador / Succionador Satisfyer Pro+ Punto G",
    "price": 59990,
    "images": [
      "https://cdnx.jumpseller.com/eroshopmayorista/image/71660303/thumb/540/540?1767988797"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Vibrador / Succionador Satisfyer Pro+ Punto G",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  },
  {
    "id": "p149",
    "slug": "vibrador-pulso-de-aire-fun-factory-belle",
    "name": "Vibrador Pulso de Aire Fun Factory BELLE",
    "description": "Vibrador Pulso de Aire Fun Factory BELLE",
    "price": 39990,
    "images": [
      "https://cdnx.jumpseller.com/eroshopmayorista/image/74517981/thumb/540/540?1773254496"
    ],
    "category": "Bienestar Sexual",
    "collection": "Bienestar Sexual",
    "features": [],
    "details": "Vibrador Pulso de Aire Fun Factory BELLE",
    "shipping": "Envío discreto en 24/48h. Empaque sin logos ni referencias al contenido.",
    "warranty": "Garantía de calidad Silk Deluxe."
  }
];
