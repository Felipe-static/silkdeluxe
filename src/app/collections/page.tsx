"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { collections } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#050505]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl mb-6"
          >
            Colecciones
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-light max-w-2xl mx-auto text-lg"
          >
            Descubre nuestras series exclusivas. Cada colección cuenta una historia de placer, diseño y sofisticación.
          </motion.p>
        </div>

        {/* Collections List */}
        <div className="space-y-32">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h2 className="font-serif text-4xl md:text-5xl mb-6">{collection.name}</h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-12 max-w-lg">
                  {collection.description}
                </p>
                
                <Link
                  href={`/products?collection=${collection.id}`}
                  className="inline-flex items-center gap-3 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-medium tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-all duration-500 group w-fit"
                >
                  Ver Colección
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
