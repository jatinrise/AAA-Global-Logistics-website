import { Award, Users, Globe, Truck, BarChart, Clock, Shield, Target, BarChart as ChartBar, Heart, Zap, Coffee, User2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const milestones = [
    { year: 2025, title: "Company Founded", description: "Started with a vision to revolutionize logistics" }
  ];

  const coreValues = [
    { icon: <Heart className="w-6 h-6" />, title: "Customer First", description: "We prioritize our clients' needs above all else" },
    { icon: <Shield className="w-6 h-6" />, title: "Integrity", description: "Honesty and transparency in all operations" },
    { icon: <Zap className="w-6 h-6" />, title: "Innovation", description: "Continuously improving our services" },
    { icon: <Globe className="w-6 h-6" />, title: "Global Mindset", description: "Think globally, act locally" },
    { icon: <Coffee className="w-6 h-6" />, title: "Collaboration", description: "Working together for better results" },
    { icon: <Target className="w-6 h-6" />, title: "Excellence", description: "Striving for the highest standards" }
  ];

  const teamMembers = [
    {
      name: "Akshay Dhingra",
      role: "CO Founder",
      image: "",
      bio: ""
    },
    {
      name: "Ankush Dhingra",
      role: "CO Founder",
      image: "",
      bio: ""
    },
    {
      name: "Navjeet Kaur Luthra",
      role: "CO Founder",
      image: "",
      bio: ""
    }
  ];

  const stats = [
    { number: "15K+", label: "Employees Worldwide" },
    { number: "500+", label: "Distribution Centers" },
    { number: "10M+", label: "Packages Delivered" },
    { number: "99.9%", label: "Delivery Success Rate" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Our Story</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Since 2025, AAA Global logistics has been revolutionizing the logistics industry with innovative solutions and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide innovative, sustainable, and reliable logistics solutions that empower businesses worldwide to thrive in the global marketplace.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the world's most trusted and technologically advanced logistics partner, setting new standards for efficiency, sustainability, and customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center transform hover:-translate-y-1 transition duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our actions and define our culture
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <div className="text-blue-600">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped our growth
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experts driving our success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition duration-300">
               <img
                  src={member.image || "../../images/profile.png"}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognized for our commitment to quality and excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold">ISO 9001:2015</h3>
              <p className="text-gray-600">Quality Management</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold">ISO 27001</h3>
              <p className="text-gray-600">Information Security</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold">ISO 14001</h3>
              <p className="text-gray-600">Environmental Management</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold">OHSAS 18001</h3>
              <p className="text-gray-600">Safety Management</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our mission to transform the logistics industry. We're always looking for talented individuals to join our growing team.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Contact Us
            </Link>
            <Link to="/careers" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}