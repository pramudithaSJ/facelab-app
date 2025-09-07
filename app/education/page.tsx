import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  ArrowRight, 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  Video,
  Medal,
  Star,
  CheckCircle
} from "lucide-react";

const courses = [
  {
    id: "advanced-orthodontics",
    title: "Advanced Orthodontics Masterclass",
    description: "Comprehensive training in modern orthodontic techniques including clear aligners and 3D treatment planning.",
    instructor: "Dr. Wathsala",
    duration: "3 Days",
    students: "50+",
    rating: 4.9,
    price: "LKR 150,000",
    level: "Advanced",
    format: "In-Person",
    topics: [
      "3D Digital Treatment Planning",
      "Clear Aligner Therapy",
      "Complex Case Management",
      "Patient Communication",
      "Business Integration"
    ],
    nextDate: "March 15-17, 2024",
    includes: [
      "3-day intensive training",
      "Hands-on practice sessions", 
      "Digital planning software access",
      "Certificate of completion",
      "Networking lunch sessions",
      "Course materials & resources"
    ]
  },
  {
    id: "3d-smile-design", 
    title: "Digital 3D Smile Design Workshop",
    description: "Master the art of digital smile design using cutting-edge 3D technology and aesthetic principles.",
    instructor: "Dr. Manjula",
    duration: "2 Days",
    students: "35+",
    rating: 4.8,
    price: "LKR 120,000",
    level: "Intermediate",
    format: "Hybrid",
    topics: [
      "Digital Photography in Dentistry",
      "3D Smile Design Software",
      "Aesthetic Treatment Planning",
      "Patient Case Presentations",
      "Integration with Lab Workflows"
    ],
    nextDate: "April 8-9, 2024",
    includes: [
      "2-day comprehensive workshop",
      "Software training & license",
      "Live patient demonstrations",
      "Certificate of completion",
      "Digital resource library",
      "6-month online support"
    ]
  },
  {
    id: "facial-surgery-fundamentals",
    title: "Facial Surgery Fundamentals",
    description: "Essential surgical techniques and safety protocols for facial dental procedures.",
    instructor: "Dr. Manjula",
    duration: "4 Days",
    students: "25+",
    rating: 5.0,
    price: "LKR 200,000",
    level: "Advanced",
    format: "In-Person",
    topics: [
      "Surgical Planning & Assessment",
      "Anesthesia & Pain Management",
      "Surgical Techniques & Tools",
      "Post-operative Care",
      "Complication Management"
    ],
    nextDate: "May 20-23, 2024",
    includes: [
      "4-day intensive program",
      "Live surgery observations",
      "Hands-on surgical practice",
      "Professional certification",
      "Mentor support program",
      "Advanced instruments kit"
    ]
  }
];

const certifications = [
  {
    name: "FaceLab Advanced Practitioner",
    description: "Comprehensive certification covering all aspects of modern dental practice",
    duration: "6 months",
    modules: 12,
    price: "LKR 450,000"
  },
  {
    name: "Digital Dentistry Specialist",
    description: "Specialization in 3D imaging, digital workflows, and modern dental technology",
    duration: "4 months", 
    modules: 8,
    price: "LKR 320,000"
  },
  {
    name: "Orthodontic Excellence Program",
    description: "Advanced orthodontic techniques and practice management certification",
    duration: "5 months",
    modules: 10,
    price: "LKR 380,000"
  }
];

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 mt-16 pb-20 bg-gradient-to-br from-facelab-green/10 to-facelab-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="facelab-black">Professional </span>
            <span className="facelab-green">Education</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            Advance your dental career with world-class training programs designed by 
            leading experts Dr. Wathsala and Dr. Manjula.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-facelab-green hover:bg-facelab-green/90 text-facelab-black rounded-full px-8 py-6 text-lg touch-target"
            >
              Browse Courses
              <BookOpen className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-facelab-green text-facelab-green hover:bg-facelab-green hover:text-facelab-black rounded-full px-8 py-6 text-lg touch-target"
            >
              View Certifications
              <Medal className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-sm">
            <div className="text-center">
              <div className="text-3xl font-bold facelab-green">500+</div>
              <div className="text-gray-600">Professionals Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold facelab-green">15+</div>
              <div className="text-gray-600">Courses Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold facelab-green">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold facelab-green">98%</div>
              <div className="text-gray-600">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 facelab-black">
              Featured Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hands-on courses designed to elevate your skills and advance your dental practice
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="border-2 border-gray-100 hover:border-facelab-green/30 transition-all duration-300 hover:shadow-xl group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge 
                      variant={course.level === 'Advanced' ? 'default' : 'secondary'}
                      className={course.level === 'Advanced' ? 'bg-facelab-purple' : 'bg-facelab-green text-facelab-black'}
                    >
                      {course.level}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:facelab-green transition-colors">
                    {course.title}
                  </CardTitle>
                  
                  <p className="text-gray-600 text-sm">{course.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Instructor */}
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={`/images/doctors/${course.instructor.toLowerCase().replace(' ', '-').replace('.', '')}.jpg`} />
                      <AvatarFallback>{course.instructor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{course.instructor}</div>
                      <div className="text-xs text-gray-500">Lead Instructor</div>
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="grid grid-cols-3 gap-4 text-center py-4 bg-gray-50 rounded-lg">
                    <div>
                      <Clock className="h-4 w-4 mx-auto mb-1 facelab-green" />
                      <div className="text-xs font-medium">{course.duration}</div>
                    </div>
                    <div>
                      <Users className="h-4 w-4 mx-auto mb-1 facelab-green" />
                      <div className="text-xs font-medium">{course.students}</div>
                    </div>
                    <div>
                      <Video className="h-4 w-4 mx-auto mb-1 facelab-green" />
                      <div className="text-xs font-medium">{course.format}</div>
                    </div>
                  </div>

                  {/* Key Topics */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Topics:</h4>
                    <div className="space-y-1">
                      {course.topics.slice(0, 3).map((topic, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle className="h-3 w-3 facelab-green" />
                          <span>{topic}</span>
                        </div>
                      ))}
                      {course.topics.length > 3 && (
                        <div className="text-xs text-gray-500 ml-5">
                          +{course.topics.length - 3} more topics
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Price & Next Date */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg facelab-purple">{course.price}</span>
                      <Badge variant="outline" className="text-xs">
                        {course.nextDate}
                      </Badge>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-facelab-green hover:bg-facelab-green/90 text-facelab-black rounded-full touch-target">
                    Enroll Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Programs */}
      <section className="py-20 bg-facelab-gray-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 facelab-black">
              Professional Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive certification programs to establish your expertise and 
              credibility in specialized dental fields
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-facelab-purple/30 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-facelab-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Medal className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl facelab-purple">{cert.name}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center space-y-6">
                  <p className="text-gray-600">{cert.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 py-4 bg-white rounded-lg shadow-sm">
                    <div>
                      <div className="text-2xl font-bold facelab-purple">{cert.modules}</div>
                      <div className="text-xs text-gray-500">Modules</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold facelab-purple">{cert.duration}</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-2xl font-bold facelab-black">{cert.price}</div>
                    <Button 
                      variant="outline" 
                      className="w-full rounded-full touch-target border-facelab-purple text-facelab-purple hover:bg-facelab-purple hover:text-white"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Education */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 facelab-black">
              Why Choose FaceLab Education?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "Expert Instructors",
                description: "Learn directly from Dr. Wathsala & Dr. Manjula with years of clinical experience"
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Hands-On Training",
                description: "Practical sessions with real cases and live patient demonstrations"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Small Class Sizes", 
                description: "Personalized attention with limited enrollment for optimal learning"
              },
              {
                icon: <Medal className="h-8 w-8" />,
                title: "Recognized Certification",
                description: "Industry-recognized credentials that enhance your professional standing"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-facelab-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="facelab-black">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 facelab-black">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-facelab-purple text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of dental professionals who have transformed their practice 
            with our comprehensive training programs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-facelab-green hover:bg-facelab-green/90 text-facelab-black rounded-full px-8 py-6 text-lg touch-target"
            >
              View All Courses
              <BookOpen className="ml-2 h-5 w-5" />
            </Button>
            
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-facelab-purple rounded-full px-8 py-6 text-lg touch-target"
              >
                Contact for Custom Training
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