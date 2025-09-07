export const siteConfig = {
  name: "FaceLab",
  tagline: "Look, Feel, Live Better",
  description: "Dental clinic by Dr. Wathsala & Dr. Manjula specializing in Orthodontics, Facial surgery, and 3D smile design.",
  doctors: [
    {
      name: "Dr. Wathsala",
      specialization: "Orthodontics & 3D Smile Design",
      image: "/images/doctors/dr-wathsala.jpg",
      bio: "Specialist in advanced orthodontic treatments and digital smile design with over 10 years of experience."
    },
    {
      name: "Dr. Manjula", 
      specialization: "Facial Surgery & Digital Dentistry",
      image: "/images/doctors/dr-manjula.jpg",
      bio: "Expert in facial surgery and digital dentistry, committed to delivering exceptional patient outcomes."
    }
  ],
  services: [
    {
      id: "orthodontics",
      name: "Orthodontics",
      description: "Advanced braces and clear aligners for perfect smiles",
      icon: "🦷",
      image: "/images/backgrounds/orthodontics-bg.jpg",
      beforeAfter: [
        { before: "/images/before-after/ortho-before-1.jpg", after: "/images/before-after/ortho-after-1.jpg" },
        { before: "/images/before-after/ortho-before-2.jpg", after: "/images/before-after/ortho-after-2.jpg" }
      ]
    },
    {
      id: "surgery",
      name: "Facial Surgery",
      description: "Professional surgical procedures for optimal facial aesthetics",
      icon: "✨",
      image: "/images/backgrounds/surgery-bg.jpg",
      beforeAfter: [
        { before: "/images/before-after/surgery-before-1.jpg", after: "/images/before-after/surgery-after-1.jpg" }
      ]
    },
    {
      id: "3d-design",
      name: "3D Smile Design",
      description: "Digital technology for personalized smile transformations",
      icon: "🎨",
      image: "/images/backgrounds/3d-design-bg.jpg",
      beforeAfter: [
        { before: "/images/before-after/design-before-1.jpg", after: "/images/before-after/design-after-1.jpg" }
      ]
    }
  ],
  contact: {
    phone: "+94 11 234 5678",
    email: "info@facelab.lk",
    address: "123 Dental Street, Colombo 03, Sri Lanka",
    hours: "Mon-Fri: 9AM-6PM, Sat: 9AM-2PM"
  }
};

export const blogCategories = [
  { id: "patient-stories", name: "Patient Stories", color: "bg-facelab-purple" },
  { id: "tips", name: "Dental Tips", color: "bg-facelab-green" },
  { id: "news", name: "News & Updates", color: "bg-facelab-gray-light" }
];

export const navigationItems = [
  { 
    name: "Clinical Services", 
    href: "/clinical-services",
    description: "Orthodontics, Surgery & 3D Smile Design",
    icon: "🦷"
  },
  { 
    name: "Education", 
    href: "/education",
    description: "Professional Training & Certifications",
    icon: "🎓"
  },
  { 
    name: "Consulting", 
    href: "/consulting",
    description: "Practice Growth & Business Solutions",
    icon: "💼"
  },
  { 
    name: "About Us", 
    href: "/about-us",
    description: "Meet Dr. Wathsala & Dr. Manjula",
    icon: "👨‍⚕️"
  },
  { 
    name: "Contact", 
    href: "/contact",
    description: "Book Consultation & Get Directions",
    icon: "📞"
  },
  { 
    name: "Blogs", 
    href: "/blogs",
    description: "Tips, Stories & Latest Updates",
    icon: "📝"
  }
];