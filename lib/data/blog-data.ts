export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  featuredImage: string;
  tags: string[];
  readTime: number;
  published: boolean;
  beforeAfter?: {
    before: string;
    after: string;
    description: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Sarah's Smile Transformation: From Self-Conscious to Confident",
    slug: "sarah-smile-transformation",
    excerpt: "Discover how Sarah overcame her dental anxiety and achieved the smile she always dreamed of through our comprehensive orthodontic treatment.",
    content: `
Sarah came to FaceLab feeling self-conscious about her smile. Like many adults, she had delayed orthodontic treatment and was worried about wearing braces in her professional environment.

## The Challenge

Sarah's main concerns were:
- Crowded front teeth that made her avoid smiling in photos
- An overbite that affected her confidence in meetings
- Concerns about traditional braces affecting her professional image

## Our Solution

After a comprehensive consultation, Dr. Wathsala recommended clear aligner therapy combined with our 3D smile design technology.

### Treatment Plan
1. **Digital Scanning**: We used 3D imaging to create a precise model of Sarah's teeth
2. **Virtual Treatment Planning**: Sarah could see her expected results before starting treatment
3. **Custom Clear Aligners**: Virtually invisible aligners that fit her professional lifestyle
4. **Regular Monitoring**: Monthly check-ups to ensure optimal progress

## The Results

After 14 months of treatment, Sarah's transformation was remarkable. Not only did her teeth align perfectly, but her confidence soared.

### What Sarah Says:
*"I never thought I'd have the courage to get orthodontic treatment as an adult, but FaceLab made it so easy and comfortable. The clear aligners were virtually invisible, and now I can't stop smiling!"*

## Key Takeaways

- Adult orthodontic treatment is more common and easier than ever
- Clear aligners offer a discreet solution for professional adults  
- 3D treatment planning ensures predictable results
- The confidence boost from a beautiful smile is invaluable

If you're considering orthodontic treatment, don't let age be a barrier. Contact us for a consultation and discover what's possible for your smile.
    `,
    author: "Dr. Wathsala",
    publishedAt: "2024-02-15",
    category: "patient-stories",
    featuredImage: "/images/blog/sarah-transformation.jpg",
    tags: ["orthodontics", "clear aligners", "adult treatment", "confidence"],
    readTime: 4,
    published: true,
    beforeAfter: {
      before: "/images/before-after/sarah-before.jpg",
      after: "/images/before-after/sarah-after.jpg",
      description: "Sarah's 14-month clear aligner transformation"
    }
  },
  {
    id: "2",
    title: "5 Essential Tips for Maintaining Your Oral Health",
    slug: "oral-health-maintenance-tips",
    excerpt: "Learn the fundamental practices that will keep your teeth and gums healthy throughout your life, straight from our dental experts.",
    content: `
Maintaining excellent oral health doesn't have to be complicated. Here are five essential tips that our team recommends to all patients for lifelong dental wellness.

## 1. Master Your Brushing Technique

Proper brushing is the foundation of good oral health, but many people don't brush effectively.

### The Right Way to Brush:
- Use a soft-bristled toothbrush
- Brush for at least 2 minutes, twice daily
- Use gentle, circular motions
- Don't forget your tongue and gums
- Replace your toothbrush every 3-4 months

## 2. Don't Skip the Floss

Flossing removes plaque and food particles from between teeth where your toothbrush can't reach.

### Flossing Tips:
- Floss at least once daily
- Use about 18 inches of floss
- Gently guide the floss between teeth
- Curve it around each tooth in a C-shape
- Use clean sections of floss for each tooth

## 3. Choose the Right Products

Not all dental products are created equal. Here's what to look for:

### Toothpaste:
- Contains fluoride for cavity prevention
- ADA (American Dental Association) seal of approval
- Matches your specific needs (whitening, sensitivity, etc.)

### Mouthwash:
- Therapeutic mouthwash with fluoride
- Antimicrobial properties
- Alcohol-free options for sensitive mouths

## 4. Watch Your Diet

Your diet directly impacts your oral health.

### Foods to Embrace:
- Calcium-rich foods (dairy, leafy greens)
- Crunchy fruits and vegetables
- Foods high in vitamin C
- Plenty of water

### Foods to Limit:
- Sugary snacks and drinks
- Acidic foods and beverages
- Sticky candies
- Hard foods that can crack teeth

## 5. Regular Professional Care

Home care is essential, but professional cleanings and check-ups are equally important.

### Why Regular Visits Matter:
- Early detection of problems
- Professional plaque removal
- Oral cancer screening  
- Personalized advice for your oral health

### How Often?
Most people should visit the dentist every 6 months, but your dentist may recommend more frequent visits based on your individual needs.

## Conclusion

Following these five essential tips will help you maintain excellent oral health throughout your life. Remember, prevention is always better (and less expensive) than treatment.

If you have questions about your oral health routine or need personalized advice, don't hesitate to contact our team at FaceLab.
    `,
    author: "Dr. Manjula",
    publishedAt: "2024-02-10",
    category: "tips",
    featuredImage: "/images/blog/oral-health-tips.jpg",
    tags: ["oral health", "prevention", "brushing", "flossing", "diet"],
    readTime: 5,
    published: true
  },
  {
    id: "3",
    title: "Revolutionary 3D Smile Design Technology Now Available in Sri Lanka",
    slug: "3d-smile-design-technology-sri-lanka",
    excerpt: "FaceLab introduces cutting-edge 3D smile design technology to Sri Lanka, allowing patients to preview their new smile before treatment begins.",
    content: `
We're excited to announce that FaceLab is now offering revolutionary 3D smile design technology, making us pioneers in digital dentistry in Sri Lanka.

## What is 3D Smile Design?

3D smile design is a digital treatment planning tool that allows us to design your perfect smile using advanced computer technology. This innovative approach lets you see exactly how your smile will look before we begin any treatment.

## How It Works

### Step 1: Digital Photography
We take high-resolution photos of your face and smile from multiple angles.

### Step 2: 3D Modeling
Using specialized software, we create a detailed 3D model of your teeth and facial structure.

### Step 3: Virtual Design
Our team designs your ideal smile, considering factors like:
- Facial proportions
- Lip dynamics
- Tooth shape and color
- Gum line aesthetics
- Overall facial harmony

### Step 4: Patient Preview
You can see your future smile and provide feedback before treatment begins.

### Step 5: Treatment Planning
We create a detailed treatment plan to achieve your designed smile.

## Benefits of 3D Smile Design

### For Patients:
- **Visual Confidence**: See your results before treatment
- **Better Communication**: Clearly express your aesthetic goals
- **Reduced Anxiety**: Know exactly what to expect
- **Optimal Results**: Achieve your ideal smile, not just healthy teeth

### For Treatment:
- **Precision Planning**: More accurate treatment outcomes
- **Efficient Process**: Streamlined treatment workflow
- **Predictable Results**: Minimal surprises during treatment
- **Team Coordination**: Better communication with dental labs

## Treatment Options Enhanced by 3D Design

Our 3D smile design technology can be used with various treatments:
- Veneers and crowns
- Orthodontic treatment
- Dental implants
- Full mouth rehabilitation
- Gum reshaping procedures

## The FaceLab Advantage

As the first clinic in Sri Lanka to offer this technology, we're committed to:
- Training our team on the latest techniques
- Investing in cutting-edge equipment
- Providing world-class results
- Making advanced dentistry accessible locally

## Case Study: Digital Smile Makeover

Recently, we helped a patient achieve her dream smile using 3D design technology. The process allowed us to:
- Design 8 porcelain veneers perfectly matched to her facial features
- Show her the expected results before beginning treatment
- Complete the makeover in just two visits
- Achieve results that exceeded her expectations

## The Future of Dentistry

3D smile design represents the future of aesthetic dentistry. This technology ensures that every patient receives:
- Personalized treatment planning
- Predictable outcomes
- Beautiful, natural-looking results
- Enhanced patient satisfaction

## Book Your 3D Smile Design Consultation

Ready to see your perfect smile? Contact us to schedule a 3D smile design consultation and discover what's possible for your smile.

This technology is available now at FaceLab, making us your trusted partner for advanced dental care in Sri Lanka.
    `,
    author: "Dr. Wathsala",
    publishedAt: "2024-02-08",
    category: "news",
    featuredImage: "/images/blog/3d-smile-design.jpg",
    tags: ["3D smile design", "digital dentistry", "technology", "innovation"],
    readTime: 6,
    published: true
  },
  {
    id: "4",
    title: "Michael's Journey: Overcoming Dental Anxiety for Life-Changing Results",
    slug: "michael-dental-anxiety-journey",
    excerpt: "Follow Michael's inspiring journey as he overcame severe dental anxiety to achieve the smile transformation he never thought possible.",
    content: `
Michael's story is one of courage, trust, and transformation. His journey from severe dental anxiety to a confident, radiant smile shows that it's never too late to prioritize your oral health.

## The Starting Point

Michael hadn't visited a dentist in over 10 years due to a traumatic childhood experience. When he finally came to FaceLab, he was dealing with:
- Severe tooth decay
- Missing teeth that affected his speech
- Chronic pain that impacted his daily life
- Overwhelming anxiety about dental treatment

## Building Trust and Comfort

Our approach with Michael was patient-centered and anxiety-focused:

### Initial Consultation
- Extended time for discussion and questions
- No pressure for immediate treatment
- Detailed explanation of all procedures
- Introduction to our anxiety management techniques

### Anxiety Management Strategies
- Sedation options for comfortable treatment
- Break procedures into manageable sessions
- Use of noise-canceling headphones
- Breathing exercises and relaxation techniques

## The Treatment Journey

Michael's comprehensive treatment plan included:

### Phase 1: Emergency Care
- Pain relief and infection control
- Temporary solutions for immediate comfort
- Building confidence with successful procedures

### Phase 2: Foundation Work
- Deep cleaning and gum therapy
- Cavity treatment and fillings
- Root canal therapy where needed

### Phase 3: Reconstruction
- Dental implants for missing teeth
- Crown placement for severely damaged teeth
- Bite adjustment for proper function

### Phase 4: Aesthetics
- Professional whitening treatment
- Final crown adjustments for perfect fit
- Smile design refinements

## The Transformation

After 18 months of patient, gentle care, Michael's transformation was incredible:
- Complete elimination of dental pain
- Restored ability to eat all foods
- Improved speech clarity
- Dramatic boost in confidence
- New career opportunities due to increased self-esteem

## Michael's Testimonial

*"I never thought I'd be able to sit in a dental chair again, let alone smile with confidence. The team at FaceLab didn't just fix my teeth – they changed my life. They understood my fears and worked with me every step of the way."*

## Lessons for Dental Anxiety Sufferers

Michael's journey teaches us valuable lessons:

### It's Never Too Late
- Dental technology has advanced significantly
- Modern techniques are more comfortable than ever
- Patient comfort is now a top priority

### The Right Team Makes All the Difference
- Empathetic, patient-centered care
- Clear communication throughout treatment
- Flexible scheduling and pacing

### Small Steps Lead to Big Changes
- Start with a simple consultation
- Build trust through positive experiences
- Celebrate each milestone along the way

## Our Anxiety-Free Approach

At FaceLab, we specialize in helping anxious patients through:
- **Sedation Options**: From mild relaxation to deep sedation
- **Pain-Free Techniques**: Latest anesthesia and comfort methods
- **Patient Education**: Understanding reduces fear
- **Flexible Scheduling**: Work at your comfortable pace
- **Supportive Environment**: Calm, welcoming atmosphere

## The Impact Beyond Teeth

Michael's transformation affected every aspect of his life:
- **Professional**: New job opportunities and promotions
- **Personal**: Increased social confidence
- **Health**: Better nutrition and overall wellness
- **Relationships**: More comfortable in social situations

## Take the First Step

If dental anxiety has been holding you back, remember Michael's story. That first phone call might be the hardest part, but it's also the first step toward transformation.

### What to Expect at Your First Visit:
- No treatment, just conversation
- Comfortable, pressure-free environment
- Discussion of your concerns and goals
- Overview of anxiety management options
- Personalized treatment plan development

Contact FaceLab today to begin your own transformation journey. Like Michael, you might be surprised by what's possible when fear no longer holds you back.
    `,
    author: "Dr. Manjula",
    publishedAt: "2024-02-01",
    category: "patient-stories",
    featuredImage: "/images/blog/michael-transformation.jpg",
    tags: ["dental anxiety", "transformation", "patient story", "confidence"],
    readTime: 7,
    published: true,
    beforeAfter: {
      before: "/images/before-after/michael-before.jpg",
      after: "/images/before-after/michael-after.jpg",
      description: "Michael's complete smile reconstruction over 18 months"
    }
  }
];

export function getBlogPosts(category?: string): BlogPost[] {
  let posts = blogPosts.filter(post => post.published);
  
  if (category) {
    posts = posts.filter(post => post.category === category);
  }
  
  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug && post.published);
}

export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  return getBlogPosts().slice(0, limit);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPost(currentSlug);
  if (!currentPost) return [];
  
  return getBlogPosts()
    .filter(post => 
      post.slug !== currentSlug && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
}