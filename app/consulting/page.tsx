import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  ArrowRight, 
  Calendar, 
  TrendingUp, 
  Users, 
  Settings, 
  BarChart3,
  Lightbulb,
  Target,
  Zap,
  CheckCircle,
  Phone,
  Mail
} from "lucide-react";

const services = [
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "Transform your practice with cutting-edge digital solutions and workflows",
    icon: <Zap className="h-8 w-8" />,
    features: [
      "3D Imaging System Integration",
      "Digital Workflow Optimization",
      "Practice Management Software",
      "Patient Communication Tools",
      "Paperless Office Setup"
    ],
    duration: "3-6 months",
    investment: "Custom Pricing",
    results: "40% efficiency increase"
  },
  {
    id: "practice-growth",
    title: "Practice Growth Strategy",
    description: "Comprehensive business strategies to expand your patient base and revenue",
    icon: <TrendingUp className="h-8 w-8" />,
    features: [
      "Market Analysis & Positioning",
      "Marketing Strategy Development",
      "Patient Retention Programs",
      "Revenue Stream Diversification",
      "Brand Development & Design"
    ],
    duration: "2-4 months",
    investment: "LKR 200,000+",
    results: "25% revenue growth"
  },
  {
    id: "team-training",
    title: "Team Training & Development",
    description: "Enhance your team's skills and create a culture of excellence",
    icon: <Users className="h-8 w-8" />,
    features: [
      "Staff Skill Assessment",
      "Customized Training Programs",
      "Communication Workshops",
      "Performance Management Systems",
      "Leadership Development"
    ],
    duration: "1-3 months",
    investment: "LKR 150,000+",
    results: "95% staff satisfaction"
  },
  {
    id: "operations-optimization",
    title: "Operations Optimization",
    description: "Streamline your practice operations for maximum efficiency and profitability",
    icon: <Settings className="h-8 w-8" />,
    features: [
      "Workflow Process Mapping",
      "Appointment Scheduling Optimization",
      "Inventory Management Systems",
      "Quality Control Procedures",
      "Financial Performance Analytics"
    ],
    duration: "2-3 months",
    investment: "LKR 180,000+",
    results: "30% cost reduction"
  }
];

const successStories = [
  {
    clinicName: "Smile Center Colombo",
    challenge: "Outdated systems and declining patient satisfaction",
    solution: "Complete digital transformation and staff training",
    results: [
      "50% increase in new patients",
      "35% improvement in patient satisfaction",
      "40% reduction in administrative time"
    ],
    timeframe: "6 months"
  },
  {
    clinicName: "Dental Care Kandy", 
    challenge: "Low visibility and limited patient growth",
    solution: "Marketing strategy and brand development",
    results: [
      "300% increase in online visibility",
      "45% growth in patient bookings",
      "Established as leading clinic in region"
    ],
    timeframe: "4 months"
  },
  {
    clinicName: "Family Dental Galle",
    challenge: "Inefficient operations and high overhead costs",
    solution: "Operations optimization and financial restructuring",
    results: [
      "30% reduction in operating costs",
      "25% increase in productivity",
      "Improved work-life balance for staff"
    ],
    timeframe: "3 months"
  }
];

const consultingProcess = [
  {
    step: "01",
    title: "Initial Assessment",
    description: "Comprehensive evaluation of your current practice, identifying opportunities and challenges",
    duration: "1-2 weeks"
  },
  {
    step: "02", 
    title: "Strategy Development",
    description: "Custom strategy creation based on your specific goals and market conditions",
    duration: "2-3 weeks"
  },
  {
    step: "03",
    title: "Implementation Plan",
    description: "Detailed roadmap with timelines, milestones, and resource requirements",
    duration: "1 week"
  },
  {
    step: "04",
    title: "Execution & Support",
    description: "Hands-on implementation support with regular progress monitoring and adjustments",
    duration: "Ongoing"
  }
];

export default function ConsultingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 mt-16 bg-gradient-to-br from-facelab-purple/10 to-facelab-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="facelab-black">Practice </span>
            <span className="facelab-purple">Consulting</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            Transform your dental practice with expert consulting services. 
            From digital transformation to business growth strategies, we help practices thrive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-facelab-purple hover:bg-facelab-purple/90 text-white rounded-full px-8 py-6 text-lg touch-target"
            >
              Schedule Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-facelab-purple text-facelab-purple hover:bg-facelab-purple hover:text-white rounded-full px-8 py-6 text-lg touch-target"
            >
              View Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-sm">
            <div className="text-center">
              <div className="text-3xl font-bold facelab-purple">50+</div>
              <div className="text-gray-600">Practices Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold facelab-purple">40%</div>
              <div className="text-gray-600">Average Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold facelab-purple">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold facelab-purple">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 facelab-black">
              Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting solutions tailored to address the unique challenges 
              of modern dental practices
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="border-2 border-gray-100 hover:border-facelab-purple/30 transition-all duration-300 hover:shadow-xl group">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-facelab-purple/10 rounded-lg flex items-center justify-center group-hover:bg-facelab-purple/20 transition-colors">
                      <div className="facelab-purple">{service.icon}</div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:facelab-purple transition-colors mb-2">
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-sm mb-3">What&apos;s Included:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 facelab-green mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="grid grid-cols-3 gap-4 py-4 bg-gray-50 rounded-lg text-center">
                    <div>
                      <div className="text-sm font-semibold facelab-purple">{service.duration}</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold facelab-purple">{service.investment}</div>
                      <div className="text-xs text-gray-500">Investment</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold facelab-purple">{service.results}</div>
                      <div className="text-xs text-gray-500">Avg. Results</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className="w-full rounded-full touch-target border-facelab-purple text-facelab-purple hover:bg-facelab-purple hover:text-white"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-20 bg-facelab-gray-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 facelab-black">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to understanding your needs and delivering measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {consultingProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-facelab-purple rounded-full flex items-center justify-center text-white mx-auto mb-4 relative z-10">
                    <span className="text-lg font-bold">{item.step}</span>
                  </div>
                  {index < consultingProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-facelab-purple/30 z-0" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3 facelab-black">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <Badge variant="outline" className="text-xs facelab-purple">
                  {item.duration}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 facelab-black">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformations achieved through our consulting partnership
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-facelab-green/30 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg facelab-purple">{story.clinicName}</CardTitle>
                    <Badge className="bg-facelab-green text-facelab-black">
                      {story.timeframe}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-red-600">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2 facelab-purple">Solution:</h4>
                    <p className="text-gray-600 text-sm">{story.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2 facelab-green">Results:</h4>
                    <div className="space-y-1">
                      {story.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 facelab-green" />
                          <span className="text-gray-600">{result}</span>
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

      {/* Why Choose Our Consulting */}
      <section className="py-20 bg-facelab-purple text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose FaceLab Consulting?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Industry Expertise",
                description: "Deep understanding of dental practice challenges and opportunities from running our own successful clinic"
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Proven Results",
                description: "Track record of helping practices achieve measurable growth in revenue, efficiency, and patient satisfaction"
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Innovative Solutions",
                description: "Cutting-edge strategies combining technology, business acumen, and clinical excellence"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Personalized Approach",
                description: "Tailored solutions that fit your practice's unique needs, culture, and goals"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Rapid Implementation",
                description: "Fast-track your transformation with our structured implementation methodology"
              },
              {
                icon: <Settings className="h-8 w-8" />,
                title: "Ongoing Support",
                description: "Continuous guidance and support to ensure long-term success and sustainability"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-facelab-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-facelab-black">{item.icon}</div>
                  </div>
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
            Transform Your Practice Today
          </h2>
          <p className="text-xl mb-8 facelab-black opacity-80">
            Schedule a free consultation to discuss how we can help your practice 
            achieve its full potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-facelab-purple hover:bg-facelab-purple/90 text-white rounded-full px-8 py-6 text-lg touch-target"
            >
              Schedule Free Consultation
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

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-facelab-black">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+94 11 234 5678</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>consulting@facelab.lk</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}