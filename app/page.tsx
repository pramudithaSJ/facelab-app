import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { siteConfig } from "@/lib/data/content";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle, Users, Calendar, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-facelab-purple/10 to-facelab-green/10 pt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="facelab-black">Look, Feel, </span>
              <span className="facelab-purple">Live Better</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Advanced dental care by Dr. Wathsala & Dr. Manjula specializing in 
              <span className="facelab-purple font-semibold"> orthodontics</span>, 
              <span className="facelab-purple font-semibold"> facial surgery</span>, and 
              <span className="facelab-purple font-semibold"> 3D smile design</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Button 
                size="lg" 
                className="bg-facelab-purple hover:bg-facelab-purple/90 text-white rounded-full px-8 py-6 text-lg touch-target"
              >
                Book Appointment
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-facelab-purple text-facelab-purple hover:bg-facelab-purple hover:text-white rounded-full px-8 py-6 text-lg touch-target"
              >
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-16 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 facelab-green" />
                <span>Licensed Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 facelab-green" />
                <span>500+ Happy Patients</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 facelab-green" />
                <span>5-Star Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 facelab-black">Our Clinical Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care using the latest technology and techniques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.services.map((service) => (
              <Card key={service.id} className="border-2 border-gray-100 hover:border-facelab-purple/30 transition-colors duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:facelab-purple transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link href="/clinical-services">
                    <Button variant="outline" className="rounded-full touch-target">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-facelab-gray-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 facelab-black">Meet Our Expert Team</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our experienced dental professionals are committed to providing exceptional care 
                and helping you achieve the perfect smile you deserve.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {siteConfig.doctors.map((doctor) => (
                  <div key={doctor.name} className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={doctor.image} alt={doctor.name} />
                      <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold facelab-black">{doctor.name}</h4>
                      <p className="text-sm text-gray-600">{doctor.specialization}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link href="/about-us">
                <Button className="bg-facelab-purple hover:bg-facelab-purple/90 rounded-full touch-target">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-white shadow-lg">
                <CardContent className="space-y-4">
                  <h3 className="text-2xl font-semibold facelab-purple">Why Choose FaceLab?</h3>
                  {[
                    "State-of-the-art 3D imaging technology",
                    "Personalized treatment plans",
                    "Experienced, licensed professionals",
                    "Comfortable, modern facilities",
                    "Comprehensive dental services"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 facelab-green" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links to Other Pages */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 facelab-black">Explore More</h2>
            <p className="text-xl text-gray-600">
              Discover our comprehensive services and educational resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-100 hover:border-facelab-green/50 transition-colors duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:facelab-green transition-colors">
                  Education
                </h3>
                <p className="text-gray-600 mb-6">
                  Professional training courses and continuing education for dental professionals
                </p>
                <Link href="/education">
                  <Button variant="outline" className="rounded-full touch-target border-facelab-green text-facelab-green hover:bg-facelab-green hover:text-white">
                    View Courses
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-gray-100 hover:border-facelab-purple/50 transition-colors duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:facelab-purple transition-colors">
                  Consulting
                </h3>
                <p className="text-gray-600 mb-6">
                  Business consulting and digital transformation for dental practices
                </p>
                <Link href="/consulting">
                  <Button variant="outline" className="rounded-full touch-target">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-gray-100 hover:border-facelab-green/50 transition-colors duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:facelab-green transition-colors">
                  Blogs
                </h3>
                <p className="text-gray-600 mb-6">
                  Patient stories, dental tips, and the latest news from our practice
                </p>
                <Link href="/blogs">
                  <Button variant="outline" className="rounded-full touch-target border-facelab-green text-facelab-green hover:bg-facelab-green hover:text-white">
                    Read Stories
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-facelab-purple text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your consultation today and take the first step towards a healthier, more beautiful smile.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-facelab-green hover:bg-facelab-green/90 text-facelab-black rounded-full px-8 py-6 text-lg touch-target"
            >
              Book Appointment
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-facelab-purple rounded-full px-8 py-6 text-lg touch-target"
            >
              Call Now: {siteConfig.contact.phone}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}