import React, { useState, useEffect } from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
  title: string;
  category: string;
  isFeatured?: boolean;
}

const LazyImage: React.FC<GalleryImageProps> = ({ src, alt, title, category, isFeatured }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={`relative group overflow-hidden rounded-xl bg-gray-100 transition-all duration-500 ${
        isFeatured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Placeholder/Loading Shimmer */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-brand-cyan/20 border-t-brand-cyan rounded-full animate-spin"></div>
        </div>
      )}
      
      <img 
        src={src} 
        alt={alt} 
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-brand-cyan text-sm font-bold tracking-wider uppercase">{category}</span>
        <span className="text-white text-lg font-bold">{title}</span>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');

  // Extended image list to demonstrate scaling
  const images = [
    { src: 'https://picsum.photos/800/600?random=10', title: 'Shopfront Signage', category: 'Retail', featured: true },
    { src: 'https://picsum.photos/600/800?random=11', title: 'Roll-up Banners', category: 'Digital Print' },
    { src: 'https://picsum.photos/600/400?random=12', title: 'Mine Safety Signs', category: 'Mining & Safety' },
    { src: 'https://picsum.photos/600/600?random=13', title: '3D Illuminated Letters', category: 'Branding' },
    { src: 'https://picsum.photos/800/600?random=14', title: 'Construction Warning', category: 'Mining & Safety' },
    { src: 'https://picsum.photos/600/800?random=15', title: 'Corporate Uniforms', category: 'Clothing' },
    { src: 'https://picsum.photos/600/400?random=16', title: 'Fleet Branding', category: 'Branding' },
    { src: 'https://picsum.photos/600/400?random=17', title: 'Reflective Road Signs', category: 'Mining & Safety' },
    { src: 'https://picsum.photos/600/400?random=18', title: 'Window Graphics', category: 'Branding' },
    { src: 'https://picsum.photos/600/400?random=19', title: 'Laser Cut Letters', category: 'Retail' },
    { src: 'https://picsum.photos/600/400?random=20', title: 'Directional Boards', category: 'Mining & Safety' },
    { src: 'https://picsum.photos/600/400?random=21', title: 'Promotional Shirts', category: 'Clothing' },
  ];

  const categories = ['All', 'Mining & Safety', 'Branding', 'Retail', 'Digital Print', 'Clothing'];

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
             <h2 className="text-brand-cyan font-bold tracking-wider uppercase mb-3">Our Work</h2>
             <h3 className="text-4xl font-extrabold text-brand-black mb-4">Precision Print & Installation</h3>
             <p className="text-gray-500 text-lg leading-relaxed">
               Showcasing our commitment to quality across Kuruman and the Northern Cape. From heavy-duty mining safety to high-street retail branding.
             </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                filter === cat 
                  ? 'bg-brand-cyan text-white shadow-lg shadow-brand-cyan/30 scale-105' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          {filteredImages.map((img, idx) => (
            <LazyImage 
              key={`${img.src}-${idx}`}
              src={img.src}
              alt={img.title}
              title={img.title}
              category={img.category}
              isFeatured={img.featured}
            />
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-400 text-lg italic">No projects found in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;