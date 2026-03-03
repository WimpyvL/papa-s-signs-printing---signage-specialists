import React from 'react';
import Contact from '../components/Contact';
import SchemaMarkup from '../components/SchemaMarkup';

const ContactPage: React.FC = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Papa's Signs",
    "description": "Get in touch with Papa's Signs in Kuruman for all your printing and signage needs.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Papa's Signs",
      "telephone": "+27 53 712 3954",
      "email": "sales@papassigns.co.za",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Corner Lantana & Lilac Street",
        "addressLocality": "Kuruman",
        "postalCode": "8460",
        "addressCountry": "ZA"
      }
    }
  };

  return (
    <div className="pt-20 animate-fade-in">
      <SchemaMarkup data={contactSchema} />
      <Contact />
    </div>
  );
};

export default ContactPage;