import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
const ContactSection = () => {
  return <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-400 text-lg font-medium mb-4">Get In Touch</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            CONTACT US
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Visit Our Parlour</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-orange-500 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600"> Traffic Chowk, Biratnagar</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-orange-500 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+44 20 7946 0958</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="text-orange-500 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@kirancakeparlour.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="text-orange-500 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Opening Hours</h4>
                  <p className="text-gray-600">Mon - Sat: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;