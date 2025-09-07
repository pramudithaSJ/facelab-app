"use client";

import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { siteConfig } from "@/lib/data/content";
import { toast } from "sonner";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  Stethoscope
} from "lucide-react";

const appointmentTypes = [
  { value: "consultation", label: "General Consultation" },
  { value: "orthodontics", label: "Orthodontics" },
  { value: "surgery", label: "Facial Surgery" },
  { value: "3d-design", label: "3D Smile Design" },
  { value: "cleaning", label: "Cleaning & Hygiene" },
  { value: "emergency", label: "Emergency" },
  { value: "other", label: "Other" }
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    appointmentType: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Appointment request submitted successfully! We'll contact you within 24 hours to confirm.");
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        appointmentType: "",
        preferredDate: "",
        preferredTime: "",
        message: ""
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-facelab-purple/10 to-facelab-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="facelab-black">Contact </span>
            <span className="facelab-purple">Us</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            Ready to transform your smile? Get in touch with our team to schedule 
            your consultation or ask any questions about our services.
          </p>

          {/* Quick Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 facelab-purple" />
              <span className="font-medium">{siteConfig.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 facelab-purple" />
              <span className="font-medium">{siteConfig.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 facelab-purple" />
              <span className="font-medium">{siteConfig.contact.hours}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 facelab-black">Get in Touch</h2>
                <p className="text-gray-600 text-lg">
                  We're here to help you achieve the smile you've always wanted. 
                  Contact us to schedule your appointment or learn more about our services.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <Card className="border-l-4 border-l-facelab-purple">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-facelab-purple/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 facelab-purple" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <p className="text-gray-600 mb-1">{siteConfig.contact.phone}</p>
                        <p className="text-sm text-gray-500">Available during business hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-facelab-green">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-facelab-green/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 facelab-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-gray-600 mb-1">{siteConfig.contact.email}</p>
                        <p className="text-sm text-gray-500">We respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-facelab-purple">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-facelab-purple/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 facelab-purple" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Location</h3>
                        <p className="text-gray-600 mb-1">{siteConfig.contact.address}</p>
                        <p className="text-sm text-gray-500">Free parking available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-facelab-green">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-facelab-green/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 facelab-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Business Hours</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 2:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Emergency Contact */}
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-800 mb-2">Emergency Contact</h3>
                  <p className="text-red-700 mb-3">
                    For dental emergencies outside business hours, call our emergency line:
                  </p>
                  <p className="font-semibold text-red-800">+94 77 123 4567</p>
                  <p className="text-sm text-red-600 mt-2">
                    Emergency services available 24/7
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Appointment Booking Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader className="bg-facelab-purple text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Book Your Appointment
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="flex items-center gap-2 mb-2">
                          <User className="h-4 w-4" />
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                          className="touch-target"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="lastName" className="mb-2 block">Last Name *</Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                          className="touch-target"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                          <Mail className="h-4 w-4" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="touch-target"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                          <Phone className="h-4 w-4" />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+94 XX XXX XXXX"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          className="touch-target"
                        />
                      </div>
                    </div>

                    {/* Appointment Details */}
                    <div>
                      <Label className="flex items-center gap-2 mb-2">
                        <Stethoscope className="h-4 w-4" />
                        Type of Appointment *
                      </Label>
                      <Select 
                        value={formData.appointmentType} 
                        onValueChange={(value) => handleInputChange("appointmentType", value)}
                        required
                      >
                        <SelectTrigger className="touch-target">
                          <SelectValue placeholder="Select appointment type" />
                        </SelectTrigger>
                        <SelectContent>
                          {appointmentTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferredDate" className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4" />
                          Preferred Date *
                        </Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          required
                          className="touch-target"
                        />
                      </div>
                      
                      <div>
                        <Label className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4" />
                          Preferred Time
                        </Label>
                        <Select 
                          value={formData.preferredTime} 
                          onValueChange={(value) => handleInputChange("preferredTime", value)}
                        >
                          <SelectTrigger className="touch-target">
                            <SelectValue placeholder="Select preferred time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div>
                      <Label htmlFor="message" className="flex items-center gap-2 mb-2">
                        <MessageSquare className="h-4 w-4" />
                        Additional Message (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Please share any specific concerns, questions, or additional information that would help us prepare for your visit..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        rows={4}
                        className="resize-none touch-target"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-facelab-purple hover:bg-facelab-purple/90 rounded-full py-6 text-lg touch-target"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Book Appointment
                        </>
                      )}
                    </Button>
                    
                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy. 
                      We'll contact you within 24 hours to confirm your appointment.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder & Additional Info */}
      <section className="py-20 bg-facelab-gray-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map Placeholder */}
            <div>
              <h3 className="text-2xl font-bold mb-6 facelab-black">Find Us</h3>
              <Card className="overflow-hidden shadow-lg">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Coming Soon</p>
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <div className="space-y-2">
                    <p className="font-semibold">FaceLab Dental Clinic</p>
                    <p className="text-gray-600">{siteConfig.contact.address}</p>
                    <div className="flex items-center gap-2 text-sm text-facelab-purple">
                      <MapPin className="h-4 w-4" />
                      <span>Get Directions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* What to Expect */}
            <div>
              <h3 className="text-2xl font-bold mb-6 facelab-black">What to Expect</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <CheckCircle className="h-5 w-5 facelab-green" />,
                    title: "Confirmation Call",
                    description: "We'll contact you within 24 hours to confirm your appointment and answer any questions."
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 facelab-green" />,
                    title: "Comprehensive Consultation",
                    description: "Your first visit includes a thorough examination and discussion of your dental goals."
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 facelab-green" />,
                    title: "Personalized Treatment Plan",
                    description: "We'll create a customized treatment plan tailored to your specific needs and preferences."
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 facelab-green" />,
                    title: "Comfortable Environment",
                    description: "Relax in our modern, comfortable facility designed with your comfort in mind."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
                    {item.icon}
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}