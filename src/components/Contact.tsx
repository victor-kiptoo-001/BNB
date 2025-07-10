
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/254700000000", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+254700000000", "_self");
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600">
            Ready to book your stay? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+254 700 000 000</p>
                  <Button 
                    onClick={handleCall}
                    className="mt-2 bg-green-600 hover:bg-green-700"
                    size="sm"
                  >
                    Call Now
                  </Button>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-gray-600">Quick response via WhatsApp</p>
                  <Button 
                    onClick={handleWhatsApp}
                    className="mt-2 bg-green-600 hover:bg-green-700"
                    size="sm"
                  >
                    WhatsApp Us
                  </Button>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@eldoretbnb.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">Elgon View, Eldoret, Kenya</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Response Time</h4>
                  <p className="text-gray-600">Within 1 hour during business hours</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Interactive Map</p>
                <p className="text-sm text-gray-400">Elgon View, Eldoret</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="+254 700 000 000" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check-in Date
                  </label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check-out Date
                  </label>
                  <Input type="date" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your stay requirements, number of guests, special requests, etc."
                  rows={4}
                />
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © 2025 Eldoret BnB. All rights reserved. | Your comfort is our priority.
          </p>
        </div>
      </div>
    </section>
  );
};
