import React from 'react';
import { Gavel, Clock, CreditCard, Truck } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-brand-magenta/10 p-3 rounded-xl">
            <Gavel className="w-8 h-8 text-brand-magenta" />
          </div>
          <h1 className="text-4xl font-black text-brand-black">Terms of Service</h1>
        </div>

        <div className="prose prose-brand max-w-none text-gray-600 space-y-6">
          <p className="text-sm text-gray-400">Effective Date: January 1, {new Date().getFullYear()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-brand-cyan" /> 1. Quotations and Pricing
            </h2>
            <p>
              All quotations provided by our AI assistant or sales staff are valid for 14 days. Prices are subject to change based on final material availability and technical specifications provided after site assessment. A 50% deposit is required before production commences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-cyan" /> 2. Turnaround Times
            </h2>
            <p>
              While we strive for the fastest turnaround in Kuruman, lead times provided are estimates. Complex manufacturing, large-format printing, and mining-specific fabrication may vary based on current workshop capacity and material supply chains.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-2">
              <Truck className="w-5 h-5 text-brand-cyan" /> 3. Delivery and Installation
            </h2>
            <p>
              Papa's Signs provides professional installation services. Clients are responsible for ensuring that necessary permissions (e.g., municipal approvals or site access) are obtained prior to our arrival. We are not liable for delays caused by lack of site access or inaccurate measurements provided by the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">4. Warranty and Liability</h2>
            <p>
              Our signs are manufactured to withstand the Northern Cape climate. We provide a limited warranty on UV stability and material structural integrity. This warranty does not cover damage caused by extreme weather events, vandalism, or unauthorized third-party modifications.
            </p>
          </section>

          <section className="bg-brand-black text-white p-8 rounded-2xl mt-12">
            <h2 className="text-xl font-bold mb-4">Governing Law</h2>
            <p className="text-sm text-gray-400">
              These terms are governed by the laws of the Republic of South Africa. Any disputes shall be subject to the exclusive jurisdiction of the courts in the Northern Cape region.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;