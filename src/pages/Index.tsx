
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

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
          <div className="flex justify-center gap-4 fade-in">
            <Button className="bg-violet-600 hover:bg-violet-700">Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm fade-in">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              <Button className="bg-violet-600 hover:bg-violet-700">Learn More</Button>
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
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Brand</h3>
            <p className="text-gray-400">Creating beautiful websites made easy.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Your Brand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Features data - easily editable
const features = [
  {
    title: "Easy to Edit",
    description: "Customize your landing page with simple text edits and component modifications.",
  },
  {
    title: "Responsive Design",
    description: "Your website will look great on all devices, from mobile phones to desktop computers.",
  },
  {
    title: "Modern UI",
    description: "Clean, modern design with smooth animations and intuitive navigation.",
  },
];

export default Index;
