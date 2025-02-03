import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Tracking from './pages/Tracking';
import logo from "../images/logo4.png";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <img 
                    src={logo} 
                    alt="AAA Global Logistics" 
                    className="h-8 w-auto sm:h-10"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Home</Link>
                <Link to="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Services</Link>
                <Link to="/tracking" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Tracking</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">About</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Contact</Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/services" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md" onClick={() => setIsMenuOpen(false)}>Services</Link>
                <Link to="/tracking" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md" onClick={() => setIsMenuOpen(false)}>Tracking</Link>
                <Link to="/about" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="mb-4">
                  <img 
                    src={logo} 
                    alt="AAA Global Logistics" 
                    className="h-10 w-auto"
                  />
                </div>
                <p className="text-gray-400">Your trusted logistics partner for global transportation solutions.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                  <li><Link to="/tracking" className="text-gray-400 hover:text-white">Track Shipment</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><Link to="/services" className="text-gray-400 hover:text-white">Air Freight</Link></li>
                  <li><Link to="/services" className="text-gray-400 hover:text-white">Ocean Freight</Link></li>
                  <li><Link to="/services" className="text-gray-400 hover:text-white">Road Transport</Link></li>
                  <li><Link to="/services" className="text-gray-400 hover:text-white">Warehousing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>211, Vardaan House</li>
                  <li>7/28, Ansari Road, Daryaganj</li>
                  <li>New Delhi, India - 110002</li>
                  <li>Phone: +1 9094574762</li>
                  <li>Email: info@aaagloballogistics.com</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} AAA Global Logistics. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;