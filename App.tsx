// ---------------------------------------------------------
// Name: [Your Name Here]
// Course: COMP213 - Web Development
// Semester: Fall 2025
// Assignment: Final Term Project - Real Estate Website
// Date: December 5, 2025
// ---------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { AGENT_NAME, AGENT_TITLE, AGENT_EMAIL, AGENT_PHONE, AGENT_MISSION, AGENT_IMAGE, PROPERTIES, TESTIMONIALS, CREDITS } from './constants';
import { Property } from './types';
import { Phone, Mail, MapPin, Home, Info, List, ArrowRight, CheckCircle2 } from 'lucide-react';

// --- Components ---

// Navigation Header Component
// Displays the logo and main menu links. Sticky position keeps it visible.
const Header = ({ setView }: { setView: (view: string) => void }) => (
  <header className="bg-white/95 backdrop-blur-sm border-b border-brand-100 sticky top-0 z-50 transition-all duration-300">
    <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
      {/* Logo Area */}
      <div 
        onClick={() => setView('home')} 
        className="cursor-pointer group"
      >
        <h1 className="text-3xl font-serif font-bold text-brand-900 group-hover:text-brand-600 transition-colors">
          Rivera Real Estate
        </h1>
        <p className="text-xs tracking-[0.2em] text-brand-500 uppercase mt-2 font-medium">Your Key to a Brighter Future</p>
      </div>

      {/* Main Navigation Menu (Desktop) */}
      <nav className="hidden md:flex space-x-10 text-sm font-medium text-neutral-500">
        <button onClick={() => setView('home')} className="hover:text-brand-600 transition-colors py-2 uppercase tracking-wide">Home</button>
        <button onClick={() => setView('listings')} className="hover:text-brand-600 transition-colors py-2 uppercase tracking-wide">Properties</button>
        <button onClick={() => setView('contact')} className="hover:text-brand-600 transition-colors py-2 uppercase tracking-wide">Contact</button>
        <button onClick={() => setView('sitemap')} className="hover:text-brand-600 transition-colors py-2 uppercase tracking-wide">Site Map</button>
      </nav>
      
      {/* Mobile Menu Icon (Placeholder for responsiveness) */}
      <div className="md:hidden text-brand-600 cursor-pointer">
        <List size={28} />
      </div>
    </div>
  </header>
);

// Footer Component
// Contains contact info, quick links, and copyright
const Footer = ({ setView }: { setView: (view: string) => void }) => (
  <footer className="bg-brand-50 border-t border-brand-100 mt-auto">
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-neutral-600">
      {/* Column 1: Agent Mission */}
      <div>
        <h3 className="font-serif font-bold text-xl text-brand-900 mb-6">{AGENT_NAME}</h3>
        <p className="leading-loose pr-6">
          {AGENT_TITLE}. Providing professional real estate services with a focus on honesty, integrity, and a bright outlook for your future home.
        </p>
      </div>
      
      {/* Column 2: Contact Details */}
      <div>
        <h3 className="font-serif font-bold text-xl text-brand-900 mb-6">Contact Info</h3>
        <div className="space-y-4">
          <p className="flex items-center gap-3"><Phone size={18} className="text-brand-400"/> {AGENT_PHONE}</p>
          <p className="flex items-center gap-3"><Mail size={18} className="text-brand-400"/> {AGENT_EMAIL}</p>
          <p className="flex items-center gap-3"><MapPin size={18} className="text-brand-400"/> 100 Progress Campus Dr</p>
        </div>
      </div>
      
      {/* Column 3: Site Map Links */}
      <div>
        <h3 className="font-serif font-bold text-xl text-brand-900 mb-6">Quick Links</h3>
        <ul className="space-y-3">
          <li><button onClick={() => setView('listings')} className="hover:text-brand-600 transition-colors">Available Properties</button></li>
          <li><button onClick={() => setView('contact')} className="hover:text-brand-600 transition-colors">Contact Form</button></li>
          <li><button onClick={() => setView('sitemap')} className="hover:text-brand-600 transition-colors">Site Map & Credits</button></li>
        </ul>
      </div>
    </div>
    
    {/* Copyright Bar */}
    <div className="bg-white border-t border-brand-100 text-center py-8 text-neutral-400 text-xs tracking-wide">
      © 2025 Rivera Real Estate. COMP213 Term Project. All Rights Reserved.
    </div>
  </footer>
);

// --- Page Components ---

// 1. Home Page
// Displays the agent profile (image right), mission statement, and testimonials.
const HomePage = ({ setView }: { setView: (view: string) => void }) => (
  <div className="animate-fade-in">
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50 py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-10 text-center md:text-left z-10">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-brand-900 leading-[1.1]">
            Find Your Place <br/>
            <span className="text-brand-500 bg-clip-text">In The Sun</span>
          </h2>
          <div className="w-24 h-1 bg-brand-200 mx-auto md:mx-0"></div>
          <p className="text-lg md:text-xl text-neutral-600 leading-[2] max-w-xl">
            {AGENT_MISSION}
          </p>
          <div className="pt-6">
            <button 
              onClick={() => setView('listings')}
              className="bg-brand-600 text-white px-10 py-4 rounded-full hover:bg-brand-500 transition-all shadow-xl shadow-brand-200/50 font-bold tracking-wide transform hover:-translate-y-1"
            >
              View Listings
            </button>
          </div>
        </div>
        
        {/* Right Side: Agent Image (as requested in requirements) */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <div className="relative w-full max-w-md">
            {/* Decorative background blobs for 'airy' feel */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-200 rounded-full blur-3xl opacity-60"></div>
            
            {/* Main Agent Photo */}
            <img 
              src={AGENT_IMAGE} 
              alt={AGENT_NAME} 
              className="relative rounded-[3rem] shadow-2xl w-full h-[32rem] object-cover object-center border-[12px] border-white z-20"
            />
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-30 max-w-[200px]">
              <p className="font-serif font-bold text-brand-900 text-lg">Top Rated</p>
              <p className="text-neutral-500 text-sm">Dedicated to your happiness since 2015.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* Testimonials Section */}
    <section className="max-w-5xl mx-auto py-24 px-6">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-serif font-bold text-brand-900 mb-4">Client Feedback</h3>
        <p className="text-neutral-500 uppercase tracking-widest text-sm">Stories of Success</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {TESTIMONIALS.map(t => (
          <article key={t.id} className="bg-white p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow border border-neutral-50">
            <div className="mb-6 text-brand-300">
              {/* SVG Quote Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <p className="text-neutral-600 italic mb-8 leading-loose text-lg">"{t.text}"</p>
            <div className="flex items-center gap-5 border-t border-neutral-100 pt-6">
              <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 font-serif font-bold text-xl">
                {t.author[0]}
              </div>
              <div>
                <p className="font-bold text-brand-900 text-lg">{t.author}</p>
                <p className="text-xs tracking-wider uppercase text-brand-400 font-medium">{t.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </div>
);

// 2. Available Properties Page
// Displays all listings as clickable cards.
const ListingsPage = ({ setView }: { setView: (view: string) => void }) => (
  <div className="max-w-7xl mx-auto px-6 py-20 animate-fade-in">
    <div className="text-center mb-20">
      <span className="text-brand-500 font-bold tracking-widest uppercase text-sm">Our Portfolio</span>
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mt-4 mb-6">Available Properties</h2>
      <div className="w-16 h-1 bg-brand-200 mx-auto mb-6"></div>
      <p className="text-neutral-600 max-w-2xl mx-auto leading-loose text-lg">
        Explore our curated selection of fine homes. Each property is chosen for its unique character, location, and potential to become your perfect sanctuary.
      </p>
    </div>

    {/* Grid of Property Cards */}
    <div className="grid md:grid-cols-3 gap-12">
      {PROPERTIES.map(property => (
        <article key={property.id} className="bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-neutral-100 hover:shadow-xl hover:shadow-brand-100 transition-all border border-neutral-100 group flex flex-col h-full transform hover:-translate-y-2 duration-300">
          {/* Property Image Thumbnail */}
          <div className="h-72 overflow-hidden relative">
            <img 
              src={property.imageUrl} 
              alt={property.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-brand-900 uppercase tracking-widest shadow-sm">
              {property.type}
            </div>
          </div>
          
          {/* Property Short Info */}
          <div className="p-10 flex flex-col flex-grow">
            <div className="mb-6">
              <span className="font-serif font-bold text-3xl text-brand-600 block mb-3">${property.price.toLocaleString()}</span>
              <h3 className="font-bold text-neutral-800 text-xl leading-tight mb-3 group-hover:text-brand-700 transition-colors">{property.title}</h3>
              <p className="text-sm text-neutral-500 flex items-center gap-2">
                <MapPin size={16} className="text-brand-400" /> {property.address}
              </p>
            </div>
            
            <div className="flex justify-between text-sm text-neutral-500 border-t border-neutral-100 pt-8 mt-auto">
              <span className="flex items-center gap-2"><Home size={16} className="text-brand-300"/> {property.bedrooms} Beds</span>
              <span className="flex items-center gap-2">{property.bathrooms} Baths</span>
              <span className="flex items-center gap-2">{property.sqft} sqft</span>
            </div>
            
            <button 
              onClick={() => setView(`property-${property.id}`)}
              className="w-full mt-8 text-white bg-brand-900 font-medium hover:bg-brand-700 flex items-center justify-center gap-2 rounded-xl py-4 transition-all shadow-md"
            >
              View Property Details
            </button>
          </div>
        </article>
      ))}
    </div>
  </div>
);

// 3. Property Details Page
// Shows full details for a specific property, including gallery.
const PropertyDetailPage = ({ id, setView }: { id: string, setView: (view: string) => void }) => {
  const property = PROPERTIES.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Reset selected image when property changes
  useEffect(() => {
    setSelectedImage(null);
  }, [id]);

  if (!property) return <div>Property not found</div>;

  const displayImage = selectedImage || property.imageUrl;

  return (
    <div className="animate-fade-in bg-white">
      {/* Breadcrumb Navigation */}
      <nav className="bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-neutral-500 flex items-center gap-2">
          <button onClick={() => setView('home')} className="hover:text-brand-600 transition-colors">Home</button>
          <span className="text-neutral-300">/</span>
          <button onClick={() => setView('listings')} className="hover:text-brand-600 transition-colors">Properties</button>
          <span className="text-neutral-300">/</span>
          <span className="text-brand-900 font-medium truncate">{property.title}</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Image Gallery */}
          <div className="space-y-8">
             <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
               <img 
                src={displayImage} 
                alt={property.title} 
                className="w-full h-[600px] object-cover transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-32"></div>
              <div className="absolute bottom-6 left-6 text-white font-medium text-sm bg-black/30 backdrop-blur px-4 py-2 rounded-full">
                {selectedImage === null ? "Main Exterior View" : "Interior View"}
              </div>
             </div>
             
             {/* Thumbnail Selection */}
             <div>
                <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4">Gallery Views</p>
                <div className="grid grid-cols-3 gap-4">
                    {/* Main Image Thumbnail */}
                    <div 
                        onClick={() => setSelectedImage(null)}
                        className={`overflow-hidden rounded-xl border shadow-sm cursor-pointer transition-all ${selectedImage === null ? 'border-brand-500 ring-2 ring-brand-200' : 'border-neutral-100 hover:shadow-md'}`}
                    >
                        <img 
                        src={property.imageUrl} 
                        alt="Exterior View"
                        className="h-24 w-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <p className="text-xs text-center py-2 bg-neutral-50 text-neutral-500 font-medium">Main View</p>
                    </div>

                    {/* Gallery Thumbnails (Interiors) */}
                    {property.gallery.map((img, index) => (
                    <div 
                        key={index} 
                        onClick={() => setSelectedImage(img)}
                        className={`overflow-hidden rounded-xl border shadow-sm cursor-pointer transition-all ${selectedImage === img ? 'border-brand-500 ring-2 ring-brand-200' : 'border-neutral-100 hover:shadow-md'}`}
                    >
                        <img 
                        src={img} 
                        alt={`Interior view ${index + 1}`}
                        className="h-24 w-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <p className="text-xs text-center py-2 bg-neutral-50 text-neutral-500 font-medium">Interior View {index + 1}</p>
                    </div>
                    ))}
                </div>
             </div>
          </div>

          {/* Right Column: Property Information */}
          <div className="py-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-brand-50 text-brand-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{property.type}</span>
              <span className="bg-green-50 text-green-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Active Listing</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-4 leading-[1.2]">{property.title}</h1>
            <p className="flex items-center gap-2 text-neutral-500 mb-8 text-lg">
              <MapPin size={20} className="text-brand-500" /> {property.address}
            </p>
            
            <div className="bg-neutral-50 p-8 rounded-2xl mb-10 border border-neutral-100">
               <p className="text-4xl text-brand-600 font-bold mb-2">${property.price.toLocaleString()}</p>
               <p className="text-neutral-400 text-sm">Est. Mortgage: ${(property.price * 0.005).toFixed(0)}/mo</p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 text-neutral-700 mb-10">
              <div className="text-center p-4 border border-neutral-100 rounded-xl">
                <span className="block font-bold text-3xl text-brand-900">{property.bedrooms}</span>
                <span className="text-xs uppercase tracking-wider text-neutral-400">Bedrooms</span>
              </div>
              <div className="text-center p-4 border border-neutral-100 rounded-xl">
                <span className="block font-bold text-3xl text-brand-900">{property.bathrooms}</span>
                <span className="text-xs uppercase tracking-wider text-neutral-400">Bathrooms</span>
              </div>
              <div className="text-center p-4 border border-neutral-100 rounded-xl">
                <span className="block font-bold text-3xl text-brand-900">{property.sqft}</span>
                <span className="text-xs uppercase tracking-wider text-neutral-400">Sq Ft</span>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="font-serif font-bold text-2xl text-brand-900 mb-6 border-b border-brand-100 pb-2">Description</h3>
              <p className="text-neutral-600 leading-loose text-lg">
                {property.description}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="font-serif font-bold text-2xl text-brand-900 mb-6 border-b border-brand-100 pb-2">Property Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {property.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-neutral-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center">
                      <CheckCircle2 size={14} className="text-brand-600" /> 
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => setView('contact')}
              className="w-full bg-brand-900 text-white py-5 rounded-xl hover:bg-brand-800 transition-all shadow-xl shadow-brand-200 font-bold text-lg tracking-wide uppercase"
            >
              Request a Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. Contact Form Page
// Collects user information and property preferences.
const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! Your message has been sent to ${AGENT_EMAIL}. We will contact you shortly.`);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-6">Contact Us</h2>
        <div className="w-20 h-1 bg-brand-200 mx-auto mb-6"></div>
        <p className="text-neutral-600 leading-loose text-lg max-w-xl mx-auto">
          We are dedicated to helping you find your future home. Please fill out the form below with your preferences.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-neutral-100 space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="block text-xs font-bold text-brand-900 mb-3 uppercase tracking-widest ml-1">First Name</label>
            <input required type="text" placeholder="John" className="w-full px-6 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-neutral-300" />
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-900 mb-3 uppercase tracking-widest ml-1">Last Name</label>
            <input required type="text" placeholder="Doe" className="w-full px-6 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-neutral-300" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="block text-xs font-bold text-brand-900 mb-3 uppercase tracking-widest ml-1">Email Address</label>
            <input required type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-neutral-300" />
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-900 mb-3 uppercase tracking-widest ml-1">Phone Number</label>
            <input required type="tel" placeholder="(555) 555-5555" className="w-full px-6 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-neutral-300" />
          </div>
        </div>

        {/* Property Preferences Section */}
        <div className="border-t border-neutral-100 pt-6">
            <h4 className="font-serif font-bold text-xl text-brand-900 mb-6">Property Preferences</h4>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-xs font-bold text-brand-900 mb-3 uppercase tracking-widest ml-1">Property Type</label>
                <div className="relative">
                    <select className="w-full px-6 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer text-neutral-600">
                    <option>House</option>
                    <option>Condominium</option>
                    </select>
                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none text-brand-500">
                        <ArrowRight size={16} className="rotate-90"/>
                    </div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-900 mb-3 uppercase tracking-widest ml-1">Price Range</label>
                <div className="relative">
                    <select className="w-full px-6 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer text-neutral-600">
                    <option>$300,000 - $500,000</option>
                    <option>$500,000 - $800,000</option>
                    <option>$800,000 - $1,200,000</option>
                    <option>$1,200,000 +</option>
                    </select>
                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none text-brand-500">
                        <ArrowRight size={16} className="rotate-90"/>
                    </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
            <div>
                <label className="block text-xs font-bold text-brand-900 mb-3 uppercase tracking-widest ml-1">Bedrooms</label>
                <input type="number" min="1" placeholder="3" className="w-full px-6 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
                <label className="block text-xs font-bold text-brand-900 mb-3 uppercase tracking-widest ml-1">Bathrooms</label>
                <input type="number" min="1" placeholder="2" className="w-full px-6 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" />
            </div>
            </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-brand-900 mb-3 uppercase tracking-widest ml-1">Additional Comments</label>
          <textarea rows={5} className="w-full px-6 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"></textarea>
        </div>

        <button type="submit" className="w-full bg-brand-600 text-white font-bold text-lg py-5 rounded-xl hover:bg-brand-500 transition-all shadow-xl shadow-brand-200 mt-4 tracking-wide uppercase">
          Submit Inquiry
        </button>
      </form>
    </div>
  );
};

// 5. Site Map & Credits Page
// Lists all pages in the site and credits resources used.
const SitemapPage = ({ setView }: { setView: (view: string) => void }) => (
  <div className="max-w-5xl mx-auto px-6 py-20 animate-fade-in">
    
    <div className="grid md:grid-cols-2 gap-20">
        {/* Site Map Column */}
        <div>
            <h2 className="text-3xl font-serif font-bold text-brand-900 mb-10 border-b-2 border-brand-100 pb-4 inline-block">Site Map</h2>
            <nav>
                <ul className="space-y-6 text-lg">
                    <li>
                        <button onClick={() => setView('home')} className="group flex items-center gap-4 text-neutral-600 hover:text-brand-600 transition-colors">
                            <span className="w-10 h-10 rounded-full bg-neutral-100 group-hover:bg-brand-100 flex items-center justify-center transition-colors"><Home size={20}/></span> 
                            <span className="font-medium">Home Page</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setView('listings')} className="group flex items-center gap-4 text-neutral-600 hover:text-brand-600 transition-colors">
                            <span className="w-10 h-10 rounded-full bg-neutral-100 group-hover:bg-brand-100 flex items-center justify-center transition-colors"><List size={20}/></span>
                            <span className="font-medium">Available Properties</span>
                        </button>
                        {/* Nested Property Links */}
                        <ul className="ml-14 mt-4 space-y-3 border-l-2 border-brand-50 pl-6">
                            {PROPERTIES.map(p => (
                                <li key={p.id}>
                                    <button onClick={() => setView(`property-${p.id}`)} className="text-neutral-500 hover:text-brand-600 text-base transition-colors py-1 block">
                                        {p.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <button onClick={() => setView('contact')} className="group flex items-center gap-4 text-neutral-600 hover:text-brand-600 transition-colors">
                            <span className="w-10 h-10 rounded-full bg-neutral-100 group-hover:bg-brand-100 flex items-center justify-center transition-colors"><Mail size={20}/></span>
                            <span className="font-medium">Contact Form</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setView('sitemap')} className="group flex items-center gap-4 text-neutral-600 hover:text-brand-600 transition-colors">
                            <span className="w-10 h-10 rounded-full bg-neutral-100 group-hover:bg-brand-100 flex items-center justify-center transition-colors"><Info size={20}/></span>
                            <span className="font-medium">Site Map & Credits</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>

        {/* Credits Column */}
        <div>
            <h2 className="text-3xl font-serif font-bold text-brand-900 mb-10 border-b-2 border-brand-100 pb-4 inline-block">Credits</h2>
            <p className="mb-8 text-neutral-500 leading-relaxed">
                We gratefully acknowledge the following resources used in the development of this website, helping us achieve our airy and professional design:
            </p>
            <div className="space-y-6">
                {CREDITS.map((credit, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-all group">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-brand-900 text-lg group-hover:text-brand-600 transition-colors">{credit.resource}</h4>
                            <a href={credit.url} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-brand-500 transition-colors">
                                <ArrowRight size={20} -45/>
                            </a>
                        </div>
                        <p className="text-neutral-500 text-sm leading-relaxed">{credit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  </div>
);

// --- Main App Component ---
// Manages the state for the current view (simulating pages)

export default function App() {
  // 'home' is the default starting page
  const [currentView, setCurrentView] = useState('home');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-neutral-800 bg-white selection:bg-brand-100 selection:text-brand-900">
      <Header setView={setCurrentView} />
      
      <main className="flex-grow">
        {currentView === 'home' && <HomePage setView={setCurrentView} />}
        {currentView === 'listings' && <ListingsPage setView={setCurrentView} />}
        {currentView === 'contact' && <ContactPage />}
        {currentView === 'sitemap' && <SitemapPage setView={setCurrentView} />}
        
        {/* Dynamic routing for property details */}
        {currentView.startsWith('property-') && (
          <PropertyDetailPage id={currentView.split('-')[1]} setView={setCurrentView} />
        )}
      </main>

      <Footer setView={setCurrentView} />
    </div>
  );
}