import { Plane, Ship, Truck, Warehouse, Package, Clock, Shield, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">Comprehensive logistics solutions tailored to meet your transportation needs.</p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Air Freight */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Plane className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Air Freight</h2>
              <p className="text-gray-600 mb-6">Fast and reliable air transportation services for time-sensitive cargo. Global coverage with dedicated air freight solutions.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-3 text-blue-600" />
                  Express delivery worldwide
                </li>
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-3 text-blue-600" />
                  Secure cargo handling
                </li>
                <li className="flex items-center text-gray-600">
                  <Target className="w-5 h-5 mr-3 text-blue-600" />
                  Door-to-door service
                </li>
              </ul>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Get a Quote
              </Link>
            </div>
            {/* Ocean Freight */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Ship className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Ocean Freight</h2>
              <p className="text-gray-600 mb-6">Cost-effective sea transportation solutions for large shipments. Global network of shipping routes and partners.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-3 text-blue-600" />
                  Regular scheduled services
                </li>
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-3 text-blue-600" />
                  Container tracking
                </li>
                <li className="flex items-center text-gray-600">
                  <Target className="w-5 h-5 mr-3 text-blue-600" />
                  Port-to-port delivery
                </li>
              </ul>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Get a Quote
              </Link>
            </div>

            {/* Road Transport */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Road Transport</h2>
              <p className="text-gray-600 mb-6">Flexible and efficient ground transportation solutions. Extensive fleet for all cargo types.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-3 text-blue-600" />
                  Express delivery options
                </li>
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-3 text-blue-600" />
                  Real-time tracking
                </li>
                <li className="flex items-center text-gray-600">
                  <Target className="w-5 h-5 mr-3 text-blue-600" />
                  Nationwide coverage
                </li>
              </ul>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Get a Quote
              </Link>
            </div>

            {/* Warehousing */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Warehouse className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Warehousing</h2>
              <p className="text-gray-600 mb-6">Modern warehousing and distribution solutions. Strategic locations for optimal supply chain management.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-3 text-blue-600" />
                  24/7 security
                </li>
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-3 text-blue-600" />
                  Climate control
                </li>
                <li className="flex items-center text-gray-600">
                  <Target className="w-5 h-5 mr-3 text-blue-600" />
                  Inventory management
                </li>
              </ul>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Package className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Package Consolidation</h3>
              <p className="text-gray-600">Optimize shipping costs by consolidating multiple packages into single shipments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cargo Insurance</h3>
              <p className="text-gray-600">Comprehensive insurance coverage for your valuable shipments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored logistics solutions to meet your specific requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ship?</h2>
          <p className="text-xl mb-8">Contact us today to discuss your logistics needs and get a customized quote.</p>
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}