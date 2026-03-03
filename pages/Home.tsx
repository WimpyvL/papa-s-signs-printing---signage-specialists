
import React from 'react';
import Hero from '../components/Hero';
import SchemaMarkup from '../components/SchemaMarkup';
import { 
  ShieldCheck, 
  MapPin, 
  BadgeCheck, 
  Clock, 
  ArrowRight, 
  Settings, 
  PenTool, 
  Truck, 
  Zap,
  HardHat,
  Building2,
  ShoppingBag,
  Maximize,
  Star,
  Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Papa's Signs",
        "description": "Kuruman's premier signage and printing specialists. Delivering excellence to the mining, construction, and retail sectors for over 15 years.",
        "image": "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80",
        "telephone": "+27 53 712 3954",
        "email": "sales@papassigns.co.za",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Corner Lantana & Lilac Street",
          "addressLocality": "Kuruman",
          "postalCode": "8460",
          "addressCountry": "ZA"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "17:00"
        },
        "url": window.location.origin,
        "priceRange": "$$"
      },
      {
        "@type": "WebSite",
        "url": window.location.origin,
        "name": "Papa's Signs",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${window.location.origin}/services?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  const testimonials = [
    {
      name: "Johan Steyn",
      role: "Safety Officer",
      company: "Northern Cape Mining Group",
      text: "Papa's Signs is our go-to for all mine safety signage. Their understanding of SABS compliance and the durability of their materials in the Kuruman dust is unmatched.",
      stars: 5
    },
    {
      name: "Sarah Mokoena",
      role: "Business Owner",
      company: "Lumina Boutique",
      text: "The 3D illuminated shopfront signs they created for us transformed our store's presence. Professional, creative, and fast. Highly recommended for retail branding.",
      stars: 5
    },
    {
      name: "David Venter",
      role: "Project Manager",
      company: "KGM Construction",
      text: "From massive site hoardings to vehicle decals for our entire fleet, Papa's Signs delivers quality that lasts. Their new premises are impressive and their service is top-notch.",
      stars: 5
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <SchemaMarkup data={businessSchema} />
      <Hero />
      
      {/* Large Format Printing Focus */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative opacity-0 animate-scale-in">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl animate-float"></div>
              <img 
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80" 
                alt="Large Format Printer" 
                className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-magenta p-8 rounded-2xl shadow-xl z-20 hidden md:block opacity-0 animate-fade-in delay-5">
                <Maximize className="w-10 h-10 text-white" />
                <p className="text-white font-bold mt-2">Up to 3.2m Width</p>
                <p className="text-white/80 text-xs uppercase tracking-widest">Seamless Printing</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-brand-cyan font-bold tracking-widest uppercase mb-4 text-sm opacity-0 animate-fade-in delay-1">Industrial Scale</h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-black mb-6 leading-tight opacity-0 animate-fade-in delay-2">
                Large Format <br/>
                <span className="text-brand-magenta">Without Limits</span>
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed opacity-0 animate-fade-in delay-3">
                Our facility is equipped with the latest wide-format technology, allowing us to produce stunning, durable graphics for billboards, building wraps, and massive site hoardings. We use UV-resistant inks specifically chosen to withstand the intense Northern Cape sun.
              </p>
              <ul className="space-y-4 mb-10">
                {['High-speed production for bulk orders', 'Weather-proof PVC and Mesh materials', 'Eco-solvent vibrant color matching'].map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 font-bold text-brand-dark opacity-0 animate-fade-in delay-${i + 4}`}>
                    <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                      <Zap className="w-3 h-3" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="opacity-0 animate-fade-in delay-7">
                <Link to="/services/advertising-signage" className="bg-brand-black text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-cyan transition-all inline-flex items-center gap-2 group">
                  Explore Signage Solutions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve - Verticals */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h2 className="text-brand-magenta font-bold tracking-widest uppercase mb-4 text-sm">Our Reach</h2>
            <h3 className="text-4xl font-black text-brand-black">Sectors We Specialize In</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <HardHat className="w-10 h-10" />, 
                title: "Mining & Industrial", 
                desc: "Specialized safety signage, reflective vehicle decals, and heavy-duty site boards compliant with national mine safety standards.",
                color: "bg-brand-yellow/10 text-brand-yellow"
              },
              { 
                icon: <Building2 className="w-10 h-10" />, 
                title: "Corporate & Office", 
                desc: "Professional indoor branding, sandblasted window films, 3D reception signs, and corporate identity stationery.",
                color: "bg-brand-cyan/10 text-brand-cyan"
              },
              { 
                icon: <ShoppingBag className="w-10 h-10" />, 
                title: "Retail & Promotion", 
                desc: "Vibrant shopfronts, lightboxes, pull-up banners, and promotional gifts designed to catch eyes and drive sales.",
                color: "bg-brand-magenta/10 text-brand-magenta"
              }
            ].map((v, i) => (
              <div key={i} className={`bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group opacity-0 animate-scale-in delay-${i + 2}`}>
                <div className={`${v.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {v.icon}
                </div>
                <h4 className="text-2xl font-bold text-brand-black mb-4">{v.title}</h4>
                <p className="text-gray-500 leading-relaxed mb-6">{v.desc}</p>
                <Link to="/contact" className="text-sm font-bold uppercase tracking-widest text-brand-black hover:text-brand-cyan transition-colors flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process Section (Moved Above Testimonials) */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="text-center mb-20 relative z-10 opacity-0 animate-fade-in">
            <h2 className="text-brand-cyan font-bold tracking-widest uppercase mb-4 text-sm">Workflow</h2>
            <h3 className="text-4xl font-black">The Papa's Signs Process</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {[
              { icon: <PenTool />, step: "01", title: "Consult & Design", desc: "We sit with you to understand your brand and create custom mockups." },
              { icon: <Settings />, step: "02", title: "Fabrication", desc: "Our workshop builds frames, boards, and structures from scratch." },
              { icon: <BadgeCheck />, step: "03", title: "Precision Print", desc: "High-resolution digital printing with long-lasting UV inks." },
              { icon: <Truck />, step: "04", title: "Delivery & Install", desc: "Professional installation teams ensure a perfect finish on site." }
            ].map((p, i) => (
              <div key={i} className={`text-center opacity-0 animate-fade-in delay-${i + 3}`}>
                <div className="w-16 h-16 bg-brand-cyan rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(0,174,239,0.4)] border-4 border-brand-dark animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                  {React.isValidElement(p.icon) && React.cloneElement(p.icon as React.ReactElement<any>, { className: "w-8 h-8 text-white" })}
                </div>
                <div className="text-brand-magenta font-black text-xl mb-2">{p.step}</div>
                <h4 className="text-xl font-bold mb-3">{p.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-magenta/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 opacity-0 animate-fade-in">
            <h2 className="text-brand-cyan font-bold tracking-widest uppercase mb-4 text-sm">Client Trust</h2>
            <h3 className="text-4xl md:text-5xl font-black text-brand-black mb-6">Built on Satisfaction</h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Don't just take our word for it. Here is what some of our long-term partners in Kuruman have to say.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className={`bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:border-brand-cyan/20 hover:shadow-2xl transition-all group opacity-0 animate-scale-in delay-${i + 3}`}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, si) => (
                    <Star key={si} className="w-5 h-5 fill-brand-yellow text-brand-yellow group-hover:scale-110 transition-transform" style={{ transitionDelay: `${si * 0.1}s` }} />
                  ))}
                </div>
                <div className="relative mb-8">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-brand-cyan/10 group-hover:text-brand-cyan/20 transition-colors" />
                  <p className="text-gray-700 italic text-lg leading-relaxed relative z-10">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${i === 0 ? 'bg-brand-cyan' : i === 1 ? 'bg-brand-magenta' : 'bg-brand-yellow text-brand-black'}`}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black leading-none">{t.name}</h4>
                    <p className="text-xs text-brand-cyan font-bold uppercase tracking-widest mt-1">{t.role}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-0.5">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Trust Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { val: "15+", label: "Years Experience" },
              { val: "100%", label: "Mine Compliant" },
              { val: "24hr", label: "Fastest Turnaround" },
              { val: "5k+", label: "Projects Completed" }
            ].map((s, i) => (
              <div key={i} className={`opacity-0 animate-scale-in delay-${i + 1}`}>
                <div className="text-4xl md:text-5xl font-black text-brand-black mb-2">{s.val}</div>
                <div className="text-brand-cyan font-bold text-xs uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to start CTA */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-4 bg-brand-magenta/10 rounded-full mb-8 opacity-0 animate-scale-in">
            <BadgeCheck className="w-12 h-12 text-brand-magenta" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-black mb-6 opacity-0 animate-fade-in delay-2">Let's Brand Your Future</h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed opacity-0 animate-fade-in delay-3">
            From the smallest label to the largest billboard, Papa's Signs delivers quality that lasts. Start your journey with Kuruman's most trusted printing house today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in delay-4">
            <Link 
              to="/quote" 
              className="w-full sm:w-auto bg-brand-cyan text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-magenta transition-all shadow-xl shadow-brand-cyan/20 flex items-center justify-center gap-3 active:scale-95"
            >
              Start Your Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/gallery" 
              className="w-full sm:w-auto bg-white border-2 border-gray-200 text-brand-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
