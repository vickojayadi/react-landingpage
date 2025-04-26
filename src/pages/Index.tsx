import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 fade-in">
            Welcome to <span className="text-violet-600">Your Brand</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in">
            Create a stunning website with our easy-to-edit landing page template. Perfect for showcasing your brand, products, or services.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm fade-in hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-violet-600">{plan.title}</h3>
                <p className="text-3xl font-bold mb-6">${plan.price}<span className="text-lg text-gray-500">/mo</span></p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
              <p className="text-gray-600 mb-6">
                We're passionate about creating beautiful, functional websites that help businesses grow. Our templates are designed to be easily customizable and user-friendly.
              </p>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg fade-in"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 fade-in">Get in Touch</h2>
          <div className="max-w-lg mx-auto fade-in">
            <Button className="bg-violet-600 hover:bg-violet-700 w-full">Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Twitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Instagram size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Youtube size={24} />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400">
            <p>&copy; 2025 Your Brand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Pricing data - easily editable
const pricingPlans = [
  {
    title: "Basic Hosting",
    price: "9.99",
    features: [
      "10 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "1 Website",
      "24/7 Support"
    ],
  },
  {
    title: "Professional",
    price: "19.99",
    features: [
      "50 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "5 Websites",
      "Priority Support",
      "Daily Backups"
    ],
  },
  {
    title: "Enterprise",
    price: "39.99",
    features: [
      "100 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "Unlimited Websites",
      "Priority Support",
      "Daily Backups",
      "Dedicated IP"
    ],
  },
];

export default Index;
