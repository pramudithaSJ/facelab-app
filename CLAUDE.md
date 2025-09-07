# FaceLab Website - Claude Code Documentation

## Project Overview
This is a mobile-first dental clinic website for FaceLab, a dental practice in Sri Lanka specializing in orthodontics, facial surgery, and 3D smile design. The website serves as both a patient-facing platform and a professional education/consulting hub.

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom FaceLab brand colors
- **UI Components**: shadcn/ui component library
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Notifications**: Sonner (toast notifications)
- **Language**: TypeScript throughout

## Brand Colors & Design
- **Primary Purple**: #7277FF (`--facelab-purple`)
- **White**: #FCFCFD (`--facelab-white`)
- **Black**: #202023 (`--facelab-black`)
- **Accent Green**: #C1FC39 (`--facelab-green`)
- **Light Gray**: #F5F5F7 (`--facelab-gray-light`)

## Brand Assets & Logo System
### Available Logo Variations (`/public/logos/`)
- **Primary Color Logos**: 
  - `logo-default-primary-x.svg` (horizontal)
  - `logo-default-primary-y.svg` (vertical)
- **Black Variations**: 
  - `logo-dafault-black-x.svg` (horizontal)
  - `logo-dafault-black-y.svg` (vertical)
- **White Variations**: 
  - `logo-dafault-white-x.svg` (horizontal)
  - `logo-dafault-white-y.svg` (vertical)
- **Icon-Only Versions**: 
  - `logo-only-primary.svg`
  - `logo-only-black.svg`
  - `logo-only-white.svg`

### Logo Usage Guidelines
- **Navigation Bar**: `logo-default-primary-x.svg` (desktop), `logo-only-primary.svg` (mobile)
- **Footer**: `logo-dafault-white-y.svg` (vertical white version)
- **Mobile Menu Overlay**: `logo-dafault-white-x.svg` (horizontal white version)
- **Loading States**: `logo-only-primary.svg` with animation

### Responsive Logo Sizing
- **Desktop Navigation**: 120-140px width
- **Tablet Navigation**: 100-120px width  
- **Mobile Navigation**: 36px x 36px (icon-only)
- **Footer**: 80px width (desktop), 60px (mobile)
- **Mobile Menu**: 160px width for impact

## Design Approach
- **Mobile-first responsive design** (320px+)
- **Floating rounded navigation bar** (rootocode.io inspired) with glassmorphism
- **Professional logo integration** with smart context switching
- **Touch-friendly interactions** (44px+ minimum button sizes)
- **Clean, professional medical aesthetic**
- **Smooth animations and transitions**

## Project Structure

### Pages
1. **Homepage** (`/`) - Hero section with tagline "Look, Feel, Live Better"
2. **Clinical Services** (`/clinical-services`) - Treatment details with before/after galleries
3. **Education** (`/education`) - Professional training courses and certifications
4. **Consulting** (`/consulting`) - Business consulting services for dental practices
5. **About Us** (`/about-us`) - Doctor profiles and clinic information
6. **Contact** (`/contact`) - Appointment booking with comprehensive forms
7. **Blogs** (`/blogs`) - Blog system with categories and individual post pages

### Key Components
- `Navigation` - Responsive floating navigation with logo integration and mobile hamburger menu
- `Footer` - Enhanced footer with logo branding, social media, and expanded sections
- Various page-specific components using shadcn/ui

### Data Structure
- `lib/data/content.ts` - Site configuration, doctor info, services, contact details
- `lib/data/blog-data.ts` - Blog posts with full content, categories, and metadata
- Image placeholders ready for real content in `/public/images/`

## Development Commands

### Start Development Server
```bash
npm run dev
```
Server runs at http://localhost:3000

### Build for Production
```bash
npm run build
```

### Type Checking
```bash
npm run typecheck
```

### Linting
```bash
npm run lint
```

## Key Features Implemented

### Navigation & Branding
- **Logo Integration**: Professional logo display in navigation bar
  - Desktop: Horizontal primary logo (120-140px width)
  - Mobile: Icon-only version (36x36px) for space efficiency
  - Smart logo switching based on background context
- **Responsive Navigation**: Floating rounded navigation bar with glassmorphism effect
- **Mobile Menu Enhancement**: Full-screen overlay with prominent logo branding
- **Interactive Elements**: Logo click-to-home functionality and hover animations
- **Accessibility**: Proper alt text and focus management for all logo elements

### Footer Enhancement (Enhanced 2025 - Simplified)
- **Fixed Font Visibility Issues**: Added explicit text color classes (`text-white`, `text-gray-300`) to all elements for proper visibility on dark background
- **Clean 3-Column Layout**: Simplified from complex multi-section layout to clean 3-column structure:
  1. **Brand & Social** - Logo, tagline, description, and social media links
  2. **Quick Links & Contact** - Navigation links and complete contact information
  3. **Newsletter & Services** - Email signup, services list, and call-to-action button
- **Mobile-First Responsive Design**: 
  - Simple responsive grid: `grid-cols-1 md:grid-cols-3`
  - Mobile typography scaling (`text-sm sm:text-base`, `text-base sm:text-lg`)
  - Proper mobile spacing and padding with `sm:` prefixes
  - Touch-friendly interactions with adequate padding
  - Centered mobile layout, left-aligned desktop layout
- **Improved Readability**: 
  - Consistent typography hierarchy with proper contrast
  - Better spacing between sections and elements
  - Simplified newsletter form (full-width input, prominent subscribe button)
  - Clean visual separation between sections
- **Maintained Functionality**: All existing links, contact info, and interactive elements preserved

### Forms & Interactions
- Contact/appointment booking form with validation
- Toast notifications for user feedback
- Touch-friendly button sizes and interactions

### Content Management
- Structured blog system with categories (Patient Stories, Tips, News)
- Before/after image galleries (placeholders ready)
- Doctor profiles with qualifications and achievements

### Responsive Design
- Mobile breakpoints: 320px-767px (mobile), 768px-1023px (tablet), 1024px+ (desktop)
- Typography scales appropriately across devices
- Grid layouts adapt to screen sizes

## Content Areas Ready for Real Data

### Images & Assets Ready
- **Logo Assets**: Complete logo suite available in `/public/logos/`
  - Primary, black, white, and icon-only variations
  - SVG format for crisp scaling across all devices
- **Doctor Photos**: Professional headshots needed (`/public/images/doctors/`)
- **Treatment Photos**: Before/after galleries (`/public/images/before-after/`)
- **Background Images**: Service page backgrounds (`/public/images/backgrounds/`)
- **Blog Images**: Featured images for articles (`/public/images/blog/`)
- **Facility Photos**: Clinic environment and equipment shots

### Content to Update
- Replace placeholder blog posts in `blog-data.ts` with real content
- Update doctor bios and qualifications in `content.ts`
- Add real contact information and address
- Update service descriptions and pricing

## Notable Technical Decisions

### Custom CSS Classes
- `.glassmorphism` - Backdrop blur effect for navigation
- `.float-animation` - Subtle floating animation
- `.touch-target` - Ensures 44px minimum touch targets
- `.line-clamp-*` - Text truncation utilities
- Custom Tailwind color utilities for brand colors

### Component Architecture
- **Logo Component System**: Reusable Logo component with smart theming
  - Automatic sizing based on screen breakpoints
  - Context-aware color switching (primary/white/black)
  - Performance optimized with inline critical SVGs
- **Enhanced Navigation**: Logo-integrated navigation with responsive behavior
- **Footer Enhancement**: Multi-section footer with branding and social elements
- All components use TypeScript for type safety
- Consistent use of shadcn/ui components for UI consistency
- Mobile-first responsive design patterns throughout
- Reusable card layouts for content sections

### Performance Considerations
- **SVG Logo Optimization**: Inline critical logos, lazy load decorative ones
- **Smart Asset Loading**: Context-based logo variant selection
- **Accessibility First**: Proper alt text and semantic markup for all logos
- Next.js Image component ready for optimization
- Component lazy loading where appropriate
- Efficient bundle splitting with App Router

## Future Enhancements Ready to Implement

### Backend Integration
- Forms ready for backend API connections
- Blog system can be connected to CMS
- Appointment booking can integrate with scheduling systems

### Advanced Features
- **Enhanced Footer Sections**: Social media, certifications, newsletter signup
- **Interactive Logo Elements**: Hover animations and loading state integration
- **Smart Branding System**: Context-aware logo switching and sizing
- User authentication for blog admin
- Payment integration for education courses
- Advanced search and filtering
- Multi-language support structure in place

## Development Notes
- **Logo Integration Ready**: Complete logo system with responsive behavior
- **Brand Guidelines Established**: Clear usage patterns for all logo variations
- All placeholder content is clearly marked and ready for replacement
- Image paths are structured and consistent
- Component props are fully typed
- Responsive design tested across all major breakpoints
- Accessibility considerations built into component structure
- Logo accessibility with proper alt text and focus management

## Contact & Support Information
- Practice Phone: +94 11 234 5678
- Email: info@facelab.lk
- Address: 123 Dental Street, Colombo 03, Sri Lanka
- Hours: Mon-Fri: 9AM-6PM, Sat: 9AM-2PM

## Brand Message
**Tagline**: "Look, Feel, Live Better"
**Mission**: Transform lives through exceptional dental care, innovative technology, and comprehensive education that empowers both patients and dental professionals.