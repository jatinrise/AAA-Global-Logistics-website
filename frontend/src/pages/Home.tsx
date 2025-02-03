import { 
  Truck, 
  Shield, 
  Target, 
  Award, 
  ArrowRight, 
  Users, 
  Globe, 
  BarChart, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Star,
  ShoppingBag,
  Package,
  Factory,
  Link2,
  CheckCircle,
  TrendingUp,
  Zap,
  Settings,
  Download,
  FileText,
  Briefcase,
  Layers,
  PieChart,
  BarChart2,
  Percent,
  DollarSign,
  Building2,
  Recycle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const stats = [
    { number: "1M+", label: "Shipments Delivered", description: "Successfully completed deliveries worldwide" },
    { number: "50+", label: "Countries Served", description: "Global presence across continents" },
    { number: "98%", label: "Customer Satisfaction", description: "Consistently exceeding expectations" },
    { number: "24/7", label: "Support Available", description: "Round-the-clock customer service" }
  ];

  const clients = [
    { name: "Tech Solutions Inc.", logo: <Globe className="w-12 h-12 text-gray-400" /> },
    { name: "Global Retail Co.", logo: <ShoppingBag className="w-12 h-12 text-gray-400" /> },
    { name: "E-commerce Express", logo: <Package className="w-12 h-12 text-gray-400" /> },
    { name: "Manufacturing Pro", logo: <Factory className="w-12 h-12 text-gray-400" /> },
    { name: "Logistics Plus", logo: <Truck className="w-12 h-12 text-gray-400" /> },
    { name: "Supply Chain Corp", logo: <Link2 className="w-12 h-12 text-gray-400" /> }
  ];

  const achievements = [
    {
      year: "2023",
      title: "Excellence in Logistics",
      description: "Awarded for outstanding service quality"
    },
    {
      year: "2022",
      title: "Environmental Leadership",
      description: "Recognized for sustainable practices"
    },
    {
      year: "2021",
      title: "Innovation Award",
      description: "Pioneer in digital logistics solutions"
    }
  ];

  const industrySolutions = [
    {
      title: "E-commerce",
      icon: <ShoppingBag className="w-6 h-6" />,
      description: "Streamlined fulfillment and last-mile delivery solutions for online retailers",
      features: ["Same-day delivery", "Order tracking", "Returns management"]
    },
    {
      title: "Manufacturing",
      icon: <Factory className="w-6 h-6" />,
      description: "Integrated logistics solutions for manufacturing supply chains",
      features: ["Just-in-time delivery", "Inventory management", "Production support"]
    },
    {
      title: "Technology",
      icon: <Settings className="w-6 h-6" />,
      description: "Specialized handling of sensitive technology equipment",
      features: ["Climate control", "Secure transport", "White glove service"]
    }
  ];

  const resources = [
    {
      title: "Logistics Guide 2024",
      icon: <FileText className="w-6 h-6" />,
      description: "Comprehensive guide to modern logistics practices",
      downloadLink: "#"
    },
    {
      title: "Industry Report",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Latest trends and insights in global logistics",
      downloadLink: "#"
    },
    {
      title: "Case Studies",
      icon: <CheckCircle className="w-6 h-6" />,
      description: "Success stories from our satisfied clients",
      downloadLink: "#"
    }
  ];

  const industryMetrics = [
    {
      title: "Cost Reduction",
      icon: <DollarSign className="w-6 h-6" />,
      value: "25%",
      description: "Average cost savings for clients"
    },
    {
      title: "Efficiency Gain",
      icon: <TrendingUp className="w-6 h-6" />,
      value: "40%",
      description: "Improvement in operational efficiency"
    },
    {
      title: "Customer Satisfaction",
      icon: <Star className="w-6 h-6" />,
      value: "98%",
      description: "Client satisfaction rate"
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Giant",
      industry: "Retail",
      challenge: "Managing peak season delivery volumes",
      solution: "Implemented automated sorting system",
      results: ["50% faster processing", "99.9% delivery accuracy", "30% cost reduction"],
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Manufacturing Leader",
      industry: "Industrial",
      challenge: "Supply chain optimization",
      solution: "Custom logistics network design",
      results: ["35% inventory reduction", "45% lead time improvement", "20% cost savings"],
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const sustainabilityInitiatives = [
    {
      title: "Carbon Neutral Fleet",
      description: "Transitioning to electric vehicles and sustainable fuels",
      metric: "50% reduction in emissions",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: "Green Warehousing",
      description: "Solar-powered facilities with energy-efficient systems",
      metric: "75% renewable energy use",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Waste Reduction",
      description: "Implementing recycling and packaging optimization",
      metric: "90% waste recycled",
      icon: <Recycle className="w-6 h-6" />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Logistics Solutions for Your Business</h1>
              <p className="text-xl mb-8">Reliable, efficient, and secure transportation services worldwide.</p>
              <div className="space-x-4">
                <Link to="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                  Get Started
                </Link>
                <Link to="/tracking" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                  Track Shipment
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Logistics" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition duration-300">
                <h2 className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</h2>
                <p className="font-semibold text-gray-800 mb-2">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose AAA Global Logistics?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We deliver excellence in logistics with our comprehensive suite of services and unwavering commitment to quality.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">Extensive coverage across continents</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Secure Transport</h3>
              <p className="text-gray-600">Advanced security measures</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">Punctual and reliable service</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Quality Service</h3>
              <p className="text-gray-600">Excellence in every delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive logistics solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Air Freight" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Air Freight</h3>
                <p className="text-gray-600 mb-4">Fast and reliable air transportation services worldwide.</p>
                <Link to="/services" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Ocean Freight" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Ocean Freight</h3>
                <p className="text-gray-600 mb-4">Cost-effective sea transportation for large shipments.</p>
                <Link to="/services" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Road Transport" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Road Transport</h3>
                <p className="text-gray-600 mb-4">Flexible and efficient ground transportation solutions.</p>
                <Link to="/services" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Industry Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Tailored logistics solutions for your specific industry needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real-world examples of how we've helped businesses transform their logistics operations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">{study.industry}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800">Challenge:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Commitment to Sustainability</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Leading the way in sustainable logistics practices</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sustainabilityInitiatives.map((initiative, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <div className="text-green-600">{initiative.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{initiative.title}</h3>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-600 font-semibold">{initiative.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today to discuss your logistics needs and get a customized solution for your business.</p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Contact Us
            </Link>
            <Link to="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}