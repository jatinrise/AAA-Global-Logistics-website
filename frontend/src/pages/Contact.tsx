import { Phone, Mail, MapPin, Clock3, Facebook, Twitter, Linkedin, Instagram, Globe, PhoneCall, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Get in touch with our team for personalized logistics solutions. We're available 24/7 to assist you with your transportation needs.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+1 9094574762</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">info@aaagloballogistics.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">211, Vardaan House</p>
                  <p className="text-gray-600">7/28, Ansari Road, Daryaganj</p>
                  <p className="text-gray-600">New Delhi, India - 110002</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock3 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Business Hours</h4>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                  <Facebook className="w-5 h-5 text-blue-600" />
                </a>
                <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                  <Twitter className="w-5 h-5 text-blue-600" />
                </a>
                <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </a>
                <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                  <Instagram className="w-5 h-5 text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <option value="">Select a service</option>
                  <option value="freight">Air Freight</option>
                  <option value="express">Ocean Freight</option>
                  <option value="warehouse">Road Transport</option>
                  <option value="custom">Custom Logistics</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  placeholder="Tell us about your transportation needs..."
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="privacy" className="rounded text-blue-600 focus:ring-blue-500" />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree to the privacy policy and terms of service
                </label>
              </div>

              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Quick Contact Buttons */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <a href="tel:+919310358386" className="flex items-center justify-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <PhoneCall className="w-6 h-6 text-blue-600" />
            <span className="font-medium">Call Now</span>
          </a>
          <a href="mailto:info@aaagloballogistics.com" className="flex items-center justify-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Mail className="w-6 h-6 text-blue-600" />
            <span className="font-medium">Email Us</span>
          </a>
          <a href="#" className="flex items-center justify-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Globe className="w-6 h-6 text-blue-600" />
            <span className="font-medium">Live Chat</span>
          </a>
        </div>
      </div>
    </section>
  );
}