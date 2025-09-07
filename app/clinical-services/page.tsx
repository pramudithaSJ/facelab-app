import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { siteConfig } from "@/lib/data/content";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle, Star, Users, Clock } from "lucide-react";

export default function ClinicalServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 mt-16 pb-20 bg-gradient-to-br from-facelab-purple/10 to-facelab-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="facelab-black">Clinical </span>
            <span className="facelab-purple">Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            Comprehensive dental care using state-of-the-art technology and proven techniques 
            to deliver exceptional results for every patient.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-facelab-purple hover:bg-facelab-purple/90 text-white rounded-full px-8 py-6 text-lg touch-target"
            >
              Book Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-facelab-purple text-facelab-purple hover:bg-facelab-purple hover:text-white rounded-full px-8 py-6 text-lg touch-target"
            >
              View Before & After
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service) => (
              <Card key={service.id} className="group border-2 border-gray-100 hover:border-facelab-purple/30 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl group-hover:facelab-purple transition-colors">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 facelab-green" />
                      <span>Personalized treatment plan</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 facelab-green" />
                      <span>Latest technology & techniques</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 facelab-green" />
                      <span>Expert professional care</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="rounded-full touch-target mb-4 w-full"
                  >
                    Learn More Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Galleries */}
      <section className="py-20 bg-facelab-gray-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 facelab-black">
              Before & After Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the amazing transformations we&apos;ve achieved for our patients. 
              Real results from real people who trusted us with their smiles.
            </p>
          </div>

          {siteConfig.services.map((service) => (
            <div key={service.id} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{service.icon}</span>
                <h3 className="text-2xl font-semibold facelab-purple">
                  {service.name} Results
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.beforeAfter.map((item, index) => (
                  <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-2 h-64 md:h-80">
                        {/* Before Image */}
                        <div className="relative bg-gray-100 flex flex-col">
                          <div className="absolute top-2 left-2 z-10">
                            <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                              Before
                            </span>
                          </div>
                          <div className="flex-1 flex items-center justify-center">
                            <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                              <span className="text-gray-400 text-sm">Before Image</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* After Image */}
                        <div className="relative bg-gray-50 flex flex-col">
                          <div className="absolute top-2 right-2 z-10">
                            <span className="bg-facelab-green text-facelab-black px-2 py-1 rounded text-sm font-medium">
                              After
                            </span>
                          </div>
                          <div className="flex-1 flex items-center justify-center">
                            <div className="w-24 h-24 bg-facelab-green/20 rounded-lg flex items-center justify-center">
                              <span className="text-gray-600 text-sm">After Image</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-white">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Case #{index + 1}</span>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-facelab-purple">
                                View Full Size
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                                <div className="text-center">
                                  <h4 className="font-semibold mb-2">Before Treatment</h4>
                                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                                    <span className="text-gray-400">Before Image Placeholder</span>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <h4 className="font-semibold mb-2">After Treatment</h4>
                                  <div className="aspect-square bg-facelab-green/10 rounded-lg flex items-center justify-center">
                                    <span className="text-gray-600">After Image Placeholder</span>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 facelab-black">
              Our Treatment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From consultation to completion, we ensure every step of your treatment 
              is comfortable, transparent, and focused on achieving the best results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Comprehensive examination and discussion of your goals",
                icon: <Users className="h-8 w-8" />
              },
              {
                step: "02", 
                title: "Digital Analysis",
                description: "3D imaging and digital treatment planning",
                icon: <Star className="h-8 w-8" />
              },
              {
                step: "03",
                title: "Treatment Plan",
                description: "Customized treatment plan with timeline and costs",
                icon: <Calendar className="h-8 w-8" />
              },
              {
                step: "04",
                title: "Follow-up Care", 
                description: "Ongoing support and maintenance guidance",
                icon: <Clock className="h-8 w-8" />
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-facelab-purple rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-facelab-green rounded-full flex items-center justify-center text-facelab-black text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 facelab-black">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose FaceLab */}
      <section className="py-20 bg-facelab-purple text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose FaceLab for Your Dental Care?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: "Expert Specialists",
                description: "Dr. Wathsala and Dr. Manjula bring years of specialized experience"
              },
              {
                icon: "🔬",
                title: "Advanced Technology",
                description: "State-of-the-art 3D imaging and digital treatment planning"
              },
              {
                icon: "💯",
                title: "Proven Results",
                description: "500+ successful treatments with exceptional outcomes"
              },
              {
                icon: "🤝",
                title: "Personalized Care",
                description: "Individual treatment plans tailored to your unique needs"
              },
              {
                icon: "🏥",
                title: "Modern Facilities",
                description: "Comfortable, hygienically maintained treatment environment"
              },
              {
                icon: "📞",
                title: "Ongoing Support",
                description: "Comprehensive aftercare and maintenance guidance"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="opacity-90">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-facelab-green">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 facelab-black">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl mb-8 facelab-black opacity-80">
            Book your consultation today and discover how we can help you achieve 
            the smile you&apos;ve always wanted.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-facelab-purple hover:bg-facelab-purple/90 text-white rounded-full px-8 py-6 text-lg touch-target"
            >
              Book Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-facelab-black text-facelab-black hover:bg-facelab-black hover:text-white rounded-full px-8 py-6 text-lg touch-target"
              >
                Contact Us
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