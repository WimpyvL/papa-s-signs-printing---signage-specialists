
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="hero" 
      className="relative bg-brand-dark pt-20 overflow-hidden min-h-[95vh] flex items-center group/hero"
    >
      {/* Background Layer with Ken Burns effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80" 
          alt="Printing Workshop" 
          className="w-full h-full object-cover opacity-20 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-brand-dark/95 to-transparent"></div>
        
        {/* Animated Scanning Beam */}
        <div className="absolute left-0 w-full h-[2px] bg-brand-cyan shadow-[0_0_15px_rgba(0,174,239,0.8)] opacity-0 animate-scan z-10"></div>
      </div>

      {/* Interactive CMYK Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cyan Orb */}
        <div 
          className="absolute top-1/4 left-1/2 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] transition-transform duration-700 ease-out"
          style={{ transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)` }}
        ></div>
        {/* Magenta Orb */}
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-magenta/10 rounded-full blur-[100px] transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)` }}
        ></div>
        {/* Yellow Orb */}
        <div 
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-brand-yellow/10 rounded-full blur-[60px] transition-transform duration-500 ease-out"
          style={{ transform: `translate(${mousePos.x * 80}px, ${mousePos.y * 20}px)` }}
        ></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="md:w-2/3 lg:w-3/5">
          {/* Animated Color Bars */}
          <div className="flex gap-2 mb-8 h-1.5 max-w-[200px]">
            <div className="h-full bg-brand-cyan rounded-full animate-wipe" style={{ animationDelay: '0s' }}></div>
            <div className="h-full bg-brand-magenta rounded-full animate-wipe" style={{ animationDelay: '0.1s' }}></div>
            <div className="h-full bg-brand-yellow rounded-full animate-wipe" style={{ animationDelay: '0.2s' }}></div>
            <div className="h-full bg-white/20 rounded-full animate-wipe" style={{ animationDelay: '0.3s' }}></div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter opacity-0 animate-fade-in">
              PRINTING <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-magenta">EXPERTISE</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-xl font-light leading-relaxed opacity-0 animate-fade-in delay-1">
              Kuruman's premier signage manufacturing hub. Specialized for the <span className="text-white font-semibold">Mining & Construction</span> sectors with national compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4 opacity-0 animate-fade-in delay-2">
              <button 
                onClick={() => navigate('/quote')}
                className="relative overflow-hidden bg-brand-cyan text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,174,239,0.4)] transition-all flex items-center justify-center gap-3 group/btn"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                <Sparkles className="w-5 h-5 text-brand-yellow" />
                Smart Quote Assistant
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </button>
              
              <button 
                onClick={() => navigate('/services')}
                className="px-10 py-5 rounded-2xl font-bold text-lg text-white border-2 border-white/20 hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm"
              >
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Floating Dots */}
      <div className="absolute bottom-20 right-20 hidden lg:flex flex-col gap-8 opacity-0 animate-fade-in delay-3">
        <div className="flex items-center gap-4 group/stat">
          <div className="w-12 h-12 rounded-2xl bg-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan animate-float">
             <span className="font-black">01</span>
          </div>
          <div className="text-left">
            <div className="text-white font-bold leading-none">Mine Compliance</div>
            <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">SABS Standards</div>
          </div>
        </div>

        <div className="flex items-center gap-4 group/stat">
          <div className="w-12 h-12 rounded-2xl bg-brand-magenta/20 border border-brand-magenta/30 flex items-center justify-center text-brand-magenta animate-float" style={{ animationDelay: '1s' }}>
             <span className="font-black">02</span>
          </div>
          <div className="text-left">
            <div className="text-white font-bold leading-none">Fast Delivery</div>
            <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">Northern Cape Wide</div>
          </div>
        </div>

        <div className="flex items-center gap-4 group/stat">
          <div className="w-12 h-12 rounded-2xl bg-brand-yellow/20 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow animate-float" style={{ animationDelay: '2s' }}>
             <span className="font-black">03</span>
          </div>
          <div className="text-left">
            <div className="text-white font-bold leading-none">Scale Experts</div>
            <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">Large Format Specialist</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
