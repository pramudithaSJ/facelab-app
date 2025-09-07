import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/data/content";
import Link from "next/link";
import { 
  ArrowRight, 
  Calendar, 
  Award, 
  Users, 
  Heart,
  Star,
  MapPin,
  Clock,
  Phone,
  Mail,
  GraduationCap,
  BookOpen,
  Stethoscope,
  CheckCircle
} from "lucide-react";

const doctorDetails = [
  {
    name: "Dr. Wathsala Perera",
    specialization: "Orthodontics & 3D Smile Design",
    image: "/images/doctors/dr-wathsala.jpg",
    bio: "Dr. Wathsala is a leading specialist in orthodontics and digital smile design with over 12 years of experience. She pioneered the use of 3D imaging technology in Sri Lanka and has trained over 200 dental professionals in advanced orthodontic techniques.",
    qualifications: [
      "BDS - University of Peradeniya (2009)",
      "MSc in Orthodontics - University of London (2013)",
      "Certificate in 3D Smile Design - UCLA (2016)",
      "Fellowship in Digital Dentistry - Harvard (2018)"
    ],
    specialties: [
      "Clear Aligner Therapy",
      "3D Digital Treatment Planning", 
      "Complex Orthodontic Cases",
      "Aesthetic Smile Design",
      "Adult Orthodontics"
    ],
    achievements: [
      "50+ research publications in international journals",
      "Keynote speaker at 15+ international conferences",
      "Pioneer of 3D smile design in Sri Lanka",
      "Trained 200+ dental professionals",
      "Excellence in Dentistry Award 2022"
    ],
    experience: "12+ Years",
    patients: "2000+",
    rating: 4.9
  },
  {
    name: "Dr. Manjula Silva",
    specialization: "Facial Surgery & Digital Dentistry",
    image: "/images/doctors/dr-manjula.jpg", 
    bio: "Dr. Manjula is a renowned facial surgery specialist and digital dentistry expert with 15 years of clinical excellence. He has performed over 1500 successful surgical procedures and is recognized for his innovative approach to facial aesthetic dentistry.",
    qualifications: [
      "BDS - University of Colombo (2006)",
      "FDSRCS - Royal College of Surgeons, UK (2010)",
      "MS in Oral & Maxillofacial Surgery - King's College London (2012)",
      "Fellowship in Digital Implantology - NYU (2017)"
    ],
    specialties: [
      "Facial Reconstructive Surgery",
      "Digital Implant Planning",
      "Oral & Maxillofacial Surgery",
      "Aesthetic Facial Procedures",
      "Complex Case Management"
    ],
    achievements: [
      "1500+ successful surgical procedures",
      "Member of Royal College of Surgeons",
      "International recognition for surgical innovation",
      "Established first digital surgery center in Sri Lanka",
      "Best Surgeon Award 2021"
    ],
    experience: "15+ Years",
    patients: "1500+",
    rating: 5.0
  }
];

const clinicValues = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Patient-Centered Care",
    description: "Every decision we make is focused on providing the best possible outcome for our patients"
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Excellence in Everything",
    description: "We maintain the highest standards in clinical care, technology, and patient experience"
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Continuous Learning",
    description: "We stay at the forefront of dental innovation through ongoing education and research"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team Collaboration",
    description: "Our multidisciplinary approach ensures comprehensive care for every patient"
  }
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-facelab-green/10 to-facelab-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="facelab-black">About </span>
            <span className="facelab-green">FaceLab</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            Meet the passionate team dedicated to transforming smiles and advancing 
            dental care through innovation, expertise, and compassionate service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-facelab-green hover:bg-facelab-green/90 text-facelab-black rounded-full px-8 py-6 text-lg touch-target"
            >
              Meet Our Doctors
              <Users className="ml-2 h-5 w-5" />
            </Button>
            
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-facelab-green text-facelab-green hover:bg-facelab-green hover:text-facelab-black rounded-full px-8 py-6 text-lg touch-target"
              >
                Visit Our Clinic
                <MapPin className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 facelab-black">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  FaceLab was founded in 2018 with a simple yet ambitious vision: to revolutionize 
                  dental care in Sri Lanka by combining cutting-edge technology with compassionate, 
                  personalized treatment.
                </p>
                <p>
                  What started as a small clinic has grown into a comprehensive dental center, 
                  education hub, and consulting practice. Our founders, Dr. Wathsala and Dr. Manjula, 
                  brought together their complementary expertise to create something unique in the 
                  dental landscape.
                </p>
                <p>
                  Today, we&apos;re proud to be pioneers in 3D smile design, digital dentistry, and 
                  advanced orthodontic techniques. But beyond the technology, what drives us is 
                  our commitment to helping each patient achieve not just a beautiful smile, 
                  but renewed confidence and improved quality of life.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-8 mt-8 text-center">
                <div>
                  <div className="text-3xl font-bold facelab-purple">2018</div>
                  <div className="text-sm text-gray-500">Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold facelab-purple">3500+</div>
                  <div className="text-sm text-gray-500">Patients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold facelab-purple">200+</div>
                  <div className="text-sm text-gray-500">Professionals Trained</div>
                </div>
                <div>
                  <div className="text-3xl font-bold facelab-purple">50+</div>
                  <div className="text-sm text-gray-500">Clinics Consulted</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-facelab-gray-light shadow-lg">
                <CardContent className="space-y-4">
                  <h3 className="text-2xl font-semibold facelab-purple">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    &quot;To transform lives through exceptional dental care, innovative technology, 
                    and comprehensive education that empowers both patients and dental professionals 
                    to achieve optimal oral health and beautiful smiles.&quot;
                  </p>
                  
                  <Separator className="my-6" />
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 facelab-green" />
                      <span className="text-sm">Patient-centered approach to care</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 facelab-green" />
                      <span className="text-sm">Innovation in dental technology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 facelab-green" />
                      <span className="text-sm">Excellence in professional education</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 facelab-green" />
                      <span className="text-sm">Community impact and outreach</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-20 bg-facelab-gray-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 facelab-black">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our founding doctors bring together decades of experience, advanced training, 
              and a shared passion for dental excellence.
            </p>
          </div>

          <div className="space-y-16">
            {doctorDetails.map((doctor, index) => (
              <Card key={index} className={`overflow-hidden shadow-xl ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex`}>
                {/* Doctor Image */}
                <div className="lg:w-1/3 bg-gradient-to-br from-facelab-purple/10 to-facelab-green/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Avatar className="w-32 h-32 mx-auto mb-6 shadow-lg">
                      <AvatarImage src={doctor.image} alt={doctor.name} />
                      <AvatarFallback className="text-2xl bg-facelab-purple text-white">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold">{doctor.rating}</span>
                      </div>
                      <Badge className="bg-facelab-purple">{doctor.experience}</Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3 text-sm">
                      <div className="bg-white/50 rounded-lg p-2">
                        <div className="font-semibold facelab-purple">{doctor.patients}</div>
                        <div className="text-gray-600">Patients Treated</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Doctor Details */}
                <CardContent className="lg:w-2/3 p-8 space-y-6">
                  <div>
                    <CardTitle className="text-2xl facelab-black mb-2">{doctor.name}</CardTitle>
                    <p className="text-lg facelab-purple font-semibold mb-4">{doctor.specialization}</p>
                    <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
                  </div>

                  {/* Qualifications */}
                  <div>
                    <h4 className="font-semibold facelab-black mb-3 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 facelab-purple" />
                      Qualifications
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {doctor.qualifications.map((qual, qualIndex) => (
                        <div key={qualIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 facelab-green mt-1 flex-shrink-0" />
                          <span>{qual}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold facelab-black mb-3 flex items-center gap-2">
                      <Stethoscope className="h-5 w-5 facelab-purple" />
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty, specIndex) => (
                        <Badge key={specIndex} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold facelab-black mb-3 flex items-center gap-2">
                      <Award className="h-5 w-5 facelab-purple" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {doctor.achievements.slice(0, 3).map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <Star className="h-3 w-3 facelab-green mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 facelab-black">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at FaceLab
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-facelab-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 facelab-black">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Information */}
      <section className="py-20 bg-facelab-purple text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Modern Facility</h2>
              <p className="text-xl mb-8 opacity-90">
                Experience dental care in our state-of-the-art facility designed with 
                patient comfort and safety as our top priorities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 facelab-green" />
                  <span>{siteConfig.contact.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 facelab-green" />
                  <span>{siteConfig.contact.hours}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 facelab-green" />
                  <span>{siteConfig.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 facelab-green" />
                  <span>{siteConfig.contact.email}</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-facelab-green hover:bg-facelab-green/90 text-facelab-black rounded-full px-8 py-6 text-lg touch-target"
                  >
                    Book Your Visit
                    <Calendar className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Facility Highlights</h3>
                  <div className="space-y-4">
                    {[
                      "State-of-the-art 3D imaging technology",
                      "Digital treatment planning suites",
                      "Comfortable patient lounges", 
                      "Advanced sterilization systems",
                      "Modern surgical facilities",
                      "Dedicated consultation rooms",
                      "On-site dental laboratory",
                      "Parking and accessibility features"
                    ].map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 facelab-green" />
                        <span className="opacity-90">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-facelab-green">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 facelab-black">
            Experience the FaceLab Difference
          </h2>
          <p className="text-xl mb-8 facelab-black opacity-80">
            Join thousands of satisfied patients who have chosen FaceLab for their dental care. 
            Schedule your consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-facelab-purple hover:bg-facelab-purple/90 text-white rounded-full px-8 py-6 text-lg touch-target"
              >
                Schedule Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link href="/clinical-services">
              <Button 
                variant="outline" 
                size="lg"
                className="border-facelab-black text-facelab-black hover:bg-facelab-black hover:text-white rounded-full px-8 py-6 text-lg touch-target"
              >
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}