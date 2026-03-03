import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-brand-cyan font-bold tracking-wider uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl font-extrabold text-brand-black">Comprehensive Printing Solutions</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From safety compliance on mine sites to vibrant retail shopfronts, Papa's Signs handles it all in the Northern Cape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesData.map((service, idx) => (
            <div 
              key={service.id} 
              className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.03] active:scale-95 transition-all duration-500 border border-gray-100 flex flex-col cursor-pointer opacity-0 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/0 transition-colors duration-500 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-4 right-4 bg-brand-cyan p-4 rounded-2xl shadow-xl z-20 group-hover:bg-brand-magenta group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-500 flex items-center justify-center">
                  {React.isValidElement(service.icon) && React.cloneElement(service.icon as React.ReactElement<any>, { 
                    className: "w-6 h-6 text-white transform group-hover:rotate-[360deg] transition-transform duration-1000" 
                  })}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow bg-white">
                <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-cyan transition-colors duration-300">{service.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">{service.description}</p>
                <div className="flex items-center text-brand-black font-bold text-xs uppercase tracking-[0.2em] group-hover:text-brand-magenta transition-colors duration-300">
                  View Options <ArrowRight className="ml-2 w-4 h-4 group-hover:animate-bounce-x" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;