import { Calendar, User, ArrowLeft, Share2, Bookmark, ThumbsUp, MessageSquare } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

export default function BlogPost() {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);

  // Mock blog post data
  const post = {
    id: 1,
    title: "The Future of Logistics: AI and Automation",
    content: `
      <p className="mb-6">The logistics industry is undergoing a dramatic transformation, driven by advances in artificial intelligence and automation technologies. These innovations are reshaping how goods are transported, stored, and delivered across the global supply chain.</p>

      <h2 className="text-2xl font-bold mb-4">The Rise of AI in Logistics</h2>
      <p className="mb-6">Artificial Intelligence is revolutionizing logistics operations in several key areas:</p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Predictive Analytics for Route Optimization</li>
        <li className="mb-2">Automated Warehouse Management</li>
        <li className="mb-2">Real-time Fleet Management</li>
        <li className="mb-2">Demand Forecasting</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Automation Technologies</h2>
      <p className="mb-6">Automation is becoming increasingly prevalent in modern logistics operations:</p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Robotic Process Automation (RPA)</li>
        <li className="mb-2">Autonomous Vehicles</li>
        <li className="mb-2">Automated Sorting Systems</li>
        <li className="mb-2">Drone Delivery Systems</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Impact on the Industry</h2>
      <p className="mb-6">The integration of AI and automation is having far-reaching effects on the logistics sector:</p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Increased Operational Efficiency</li>
        <li className="mb-2">Reduced Human Error</li>
        <li className="mb-2">Lower Operational Costs</li>
        <li className="mb-2">Improved Customer Satisfaction</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Future Outlook</h2>
      <p className="mb-6">Looking ahead, we can expect to see continued innovation and adoption of these technologies. Companies that embrace these changes will be better positioned to compete in the evolving logistics landscape.</p>
    `,
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "March 15, 2024",
    author: "John Smith",
    authorRole: "Senior Logistics Analyst",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    category: "Technology",
    readTime: "5 min read",
    tags: ["AI", "Automation", "Future Tech", "Innovation"],
    relatedPosts: [
      {
        id: 2,
        title: "Sustainable Shipping Practices",
        excerpt: "Learn about eco-friendly shipping methods...",
        image: "https://images.unsplash.com/photo-1623000850264-b2dc5dc9c61d?ixlib=rb-4.0.3",
        date: "March 10, 2024",
        author: "Sarah Johnson"
      },
      {
        id: 3,
        title: "Supply Chain Optimization Strategies",
        excerpt: "Discover effective strategies for optimizing...",
        image: "https://images.unsplash.com/photo-1586528116493-da8b772f0c47?ixlib=rb-4.0.3",
        date: "March 5, 2024",
        author: "Michael Chen"
      }
    ]
  };

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setHasLiked(!hasLiked);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <Link to="/blog" className="flex items-center text-white mb-4 hover:text-gray-200">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>{post.author}</span>
              </div>
              <span className="text-sm bg-blue-500 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
              
              {/* Tags */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engagement */}
              <div className="mt-8 flex items-center gap-6">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 ${hasLiked ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  <ThumbsUp className="w-5 h-5" />
                  <span>{likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600">
                  <MessageSquare className="w-5 h-5" />
                  <span>12 Comments</span>
                </button>
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center gap-2 ${isBookmarked ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  <Bookmark className="w-5 h-5" />
                  <span>{isBookmarked ? 'Saved' : 'Save'}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>

              {/* Author Bio */}
              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{post.author}</h3>
                    <p className="text-gray-600">{post.authorRole}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  John is a senior logistics analyst with over 10 years of experience in the industry.
                  He specializes in supply chain optimization and emerging technologies.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Posts */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-6">Related Posts</h3>
                <div className="space-y-6">
                  {post.relatedPosts.map(relatedPost => (
                    <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="block group">
                      <div className="flex gap-4">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-medium group-hover:text-blue-600 transition-colors">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{relatedPost.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-600 text-white p-6 rounded-lg mt-8">
                <h3 className="font-semibold text-lg mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-sm mb-4">Get the latest updates and insights delivered to your inbox.</p>
                <form>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 mb-4"
                  />
                  <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}