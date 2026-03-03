import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-brand-cyan font-bold tracking-wider uppercase mb-3">Get In Touch</h2>
            <h3 className="text-4xl font-extrabold mb-8">Visit Our New Shop</h3>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              We have moved to newly built premises! Come visit us for all your printing, branding, and signage needs. 
              We service Kuruman and the surrounding mining and construction industries.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-brand-cyan/20 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Physical Address</h4>
                  <p className="text-gray-400">Corner Lantana & Lilac Street<br/>(Near Rekathusa yard)<br/>Kuruman, 8460</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-magenta/20 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-brand-magenta" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Phone</h4>
                  <p className="text-gray-400">+27 53 712 3954</p>
                  <p className="text-gray-400">+27 82 775 2244</p>
                  <p className="text-gray-500 text-sm mt-1">Mon-Fri 08:00 – 17:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-yellow/20 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-brand-yellow" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email</h4>
                  <p className="text-gray-400"><span className="text-gray-500">Sales:</span> sales@papassigns.co.za</p>
                  <p className="text-gray-400"><span className="text-gray-500">Management:</span> soekie@papassigns.co.za</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder & Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-800">
             <h4 className="text-2xl font-bold mb-6 text-brand-black">Send a Message</h4>
             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-1">
                   <label className="text-sm font-semibold text-gray-600">Name</label>
                   <input type="text" className="w-full bg-gray-100 border-none rounded-lg p-3 focus:ring-2 focus:ring-brand-cyan" placeholder="Your Name" />
                 </div>
                 <div className="space-y-1">
                   <label className="text-sm font-semibold text-gray-600">Phone</label>
                   <input type="tel" className="w-full bg-gray-100 border-none rounded-lg p-3 focus:ring-2 focus:ring-brand-cyan" placeholder="082 000 0000" />
                 </div>
               </div>
               <div className="space-y-1">
                 <label className="text-sm font-semibold text-gray-600">Email</label>
                 <input type="email" className="w-full bg-gray-100 border-none rounded-lg p-3 focus:ring-2 focus:ring-brand-cyan" placeholder="you@company.com" />
               </div>
               <div className="space-y-1">
                 <label className="text-sm font-semibold text-gray-600">Message</label>
                 <textarea rows={4} className="w-full bg-gray-100 border-none rounded-lg p-3 focus:ring-2 focus:ring-brand-cyan" placeholder="Tell us about your project..."></textarea>
               </div>
               <button className="w-full bg-brand-black text-white font-bold py-4 rounded-lg hover:bg-brand-cyan transition-colors">
                 Send Request
               </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;