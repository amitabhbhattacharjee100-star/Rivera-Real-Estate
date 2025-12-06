import { Property, Testimonial, Credit } from './types';

export const AGENT_NAME = "Alexander Rivera";
export const AGENT_TITLE = "Senior Real Estate Associate";
export const AGENT_EMAIL = "alex.rivera@example.com";
export const AGENT_PHONE = "(555) 123-4567";
// Agent's professional mission statement
export const AGENT_MISSION = "My mission is to help you find not just a house, but a place where life's best memories will unfold. I believe in transparency, dedication, and making the journey to your new home as bright and optimistic as the future that awaits you there.";
export const AGENT_IMAGE = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";

// Mock data for the 3 required property listings
export const PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Sunnyside Victorian Charm",
    address: "123 Maple Avenue, Heritage District",
    price: 850000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    type: "House",
    description: "A beautifully restored Victorian home featuring original hardwood floors, high ceilings, and a wrap-around porch. Perfect for families looking for character and modern amenities combined. The spacious backyard includes a mature oak tree and a garden shed.",
    features: ["Hardwood Floors", "Wrap-around Porch", "Updated Kitchen", "Large Backyard", "Fireplace"],
    imageUrl: "https://images.unsplash.com/photo-1605276374104-51474146e8db?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=400", // Living Room
      "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&q=80&w=400", // Kitchen
      "https://images.unsplash.com/photo-1595861183185-1d6505342d2a?auto=format&fit=crop&q=80&w=400"  // Porch/Garden
    ]
  },
  {
    id: "2",
    title: "Modern Downtown Loft",
    address: "405 Tech Blvd, Unit 12B, City Center",
    price: 525000,
    bedrooms: 1,
    bathrooms: 1.5,
    sqft: 950,
    type: "Condominium",
    description: "Experience urban living at its finest in this open-concept loft. Floor-to-ceiling windows offer panoramic views of the skyline. Includes smart home integration, a chef's kitchen with quartz countertops, and building amenities like a rooftop pool and gym.",
    features: ["Skyline Views", "Smart Home Ready", "Rooftop Pool Access", "Concierge", "Underground Parking"],
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1542841791-1925b02a2bbb?auto=format&fit=crop&q=80&w=400"
    ]
  },
  {
    id: "3",
    title: "Tranquil Garden Estate",
    address: "789 Willow Lane, Green Valley",
    price: 1200000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3200,
    type: "House",
    description: "Escape to your own private sanctuary in this expansive estate. Surrounded by lush gardens and walking paths, this home features a gourmet kitchen, a home theater, and a master suite with a spa-like bath. The perfect blend of luxury and nature.",
    features: ["Gourmet Kitchen", "Home Theater", "Spa Bathroom", "3-Car Garage", "Walking Paths"],
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=400", // Living Room
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=400", // Bedroom
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400"  // Bathroom
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Sarah & Tom Jenkins",
    text: "Alexander made finding our first home such a joy. His optimism kept us going until we found the perfect fit!",
    role: "First-time Buyers"
  },
  {
    id: "t2",
    author: "Marcus Chen",
    text: "Professional, airy, and bright - just like the condo he found for me. Highly recommended.",
    role: "Investor"
  }
];

// Resources used for the project
export const CREDITS: Credit[] = [
  {
    resource: "Unsplash.com",
    url: "https://unsplash.com",
    description: "Source for royalty-free real estate and agent photography."
  },
  {
    resource: "Google Fonts",
    url: "https://fonts.google.com",
    description: "Used 'Inter' for body text and 'Playfair Display' for headings."
  },
  {
    resource: "Tailwind CSS",
    url: "https://tailwindcss.com",
    description: "CSS framework used for the airy layout and color styling."
  },
  {
    resource: "Icon Library",
    url: "https://lucide.dev",
    description: "Open source icons used for the contact section and navigation."
  }
];