import { Search, Package, Truck, Calendar, MapPin, Bell, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [notificationEmail, setNotificationEmail] = useState('');
  const [notificationPhone, setNotificationPhone] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  
  // Mock tracking data for demonstration
  const mockTrackingData = {
    status: 'In Transit',
    estimatedDelivery: '2024-03-20',
    origin: 'New York, NY',
    destination: 'Los Angeles, CA',
    carrier: 'TransportPro Express',
    service: 'Premium Freight',
    weight: '150 lbs',
    dimensions: '48" x 40" x 48"',
    updates: [
      {
        date: '2024-03-18 14:30',
        location: 'Denver, CO',
        status: 'Package in transit',
        description: 'Package has left the Denver distribution center'
      },
      {
        date: '2024-03-17 09:15',
        location: 'Chicago, IL',
        status: 'Package in transit',
        description: 'Package arrived at Chicago sorting facility'
      },
      {
        date: '2024-03-16 16:45',
        location: 'New York, NY',
        status: 'Package picked up',
        description: 'Package picked up by carrier'
      }
    ]
  };

  const handleTrack = () => {
    // In a real application, this would make an API call
    console.log('Tracking number:', trackingNumber);
  };

  const handleNotificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would set up notifications
    console.log('Notification settings:', { email: notificationEmail, phone: notificationPhone });
    setShowNotifications(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Track Your Shipment</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">Enter your tracking number to get real-time updates on your shipment.</p>
            
            {/* Tracking Input */}
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter tracking number"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                />
                <button 
                  onClick={handleTrack}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Track
                </button>
              </div>
              <p className="text-sm mt-2">Example: TR123456789</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Results */}
      {trackingNumber && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Shipment Overview */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <p className="font-semibold">{mockTrackingData.status}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Estimated Delivery</p>
                    <p className="font-semibold">{mockTrackingData.estimatedDelivery}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">From</p>
                    <p className="font-semibold">{mockTrackingData.origin}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Truck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">To</p>
                    <p className="font-semibold">{mockTrackingData.destination}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipment Details and Timeline */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Shipment Details */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <h2 className="text-xl font-semibold mb-6">Shipment Details</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Carrier</p>
                      <p className="font-medium">{mockTrackingData.carrier}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Service</p>
                      <p className="font-medium">{mockTrackingData.service}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Weight</p>
                      <p className="font-medium">{mockTrackingData.weight}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Dimensions</p>
                      <p className="font-medium">{mockTrackingData.dimensions}</p>
                    </div>
                  </div>

                  {/* Notification Settings */}
                  <div className="mt-6">
                    <button
                      onClick={() => setShowNotifications(true)}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2"
                    >
                      <Bell className="w-5 h-5" />
                      Set Up Notifications
                    </button>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-semibold mb-6">Shipment Updates</h2>
                  <div className="space-y-6">
                    {mockTrackingData.updates.map((update, index) => (
                      <div key={index} className="relative pl-8 pb-6 last:pb-0">
                        {index !== mockTrackingData.updates.length - 1 && (
                          <div className="absolute left-[11px] top-3 bottom-0 w-0.5 bg-gray-200"></div>
                        )}
                        <div className="absolute left-0 top-2 w-[22px] h-[22px] rounded-full bg-blue-600"></div>
                        <div>
                          <div className="flex flex-wrap gap-x-4 text-sm mb-1">
                            <span className="font-semibold">{update.date}</span>
                            <span className="text-gray-600">{update.location}</span>
                          </div>
                          <h3 className="font-medium mb-1">{update.status}</h3>
                          <p className="text-gray-600">{update.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Notification Modal */}
      {showNotifications && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Set Up Notifications</h3>
            <form onSubmit={handleNotificationSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Notifications
                  </label>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={notificationEmail}
                      onChange={(e) => setNotificationEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SMS Notifications
                  </label>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={notificationPhone}
                      onChange={(e) => setNotificationPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowNotifications(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Tracking Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
              <p className="text-gray-600">Track your shipment's location and status in real-time with our advanced tracking system.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Notifications</h3>
              <p className="text-gray-600">Receive email and SMS updates about your shipment's status and location changes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Information</h3>
              <p className="text-gray-600">Access comprehensive shipment details, including weight, dimensions, and service type.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}