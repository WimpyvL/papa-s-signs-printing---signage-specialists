import React from 'react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-brand-cyan/10 p-3 rounded-xl">
            <ShieldCheck className="w-8 h-8 text-brand-cyan" />
          </div>
          <h1 className="text-4xl font-black text-brand-black">Privacy Policy</h1>
        </div>

        <div className="prose prose-brand max-w-none text-gray-600 space-y-6">
          <p className="text-sm text-gray-400">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-brand-magenta" /> 1. Introduction
            </h2>
            <p>
              At Papa's Signs, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This policy outlines how we collect, use, and protect the data you provide to us through our website and during the course of our business operations in Kuruman.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-magenta" /> 2. Information We Collect
            </h2>
            <p>We may collect personal information such as your name, email address, phone number, and physical address when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request a quote through our AI Smart Assistant or contact forms.</li>
              <li>Place an order for printing or signage services.</li>
              <li>Communicate with our sales or support team.</li>
              <li>Interact with our website and digital tools.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-brand-magenta" /> 3. Use of Information
            </h2>
            <p>Your information is used exclusively to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process your requests and provide accurate project estimates.</li>
              <li>Fulfill and deliver your signage and printing orders.</li>
              <li>Communicate important updates regarding your project.</li>
              <li>Improve our services and user experience.</li>
            </ul>
            <p className="mt-4">We do not sell, rent, or trade your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">4. POPIA Compliance</h2>
            <p>
              Papa's Signs complies with the Protection of Personal Information Act (POPIA) of South Africa. We implement strict security measures to prevent unauthorized access, disclosure, or destruction of your personal data.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mt-12">
            <h2 className="text-xl font-bold text-brand-black mb-2">Contact Our Privacy Officer</h2>
            <p className="text-sm">If you have any questions regarding this policy or wish to update your information, please contact:</p>
            <p className="mt-2 font-bold text-brand-cyan">privacy@papassigns.co.za</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;