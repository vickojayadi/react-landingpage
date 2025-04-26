
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-violet-600">Brand</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#features" className="text-gray-700 hover:text-violet-600 px-3 py-2">Features</a>
              <a href="#about" className="text-gray-700 hover:text-violet-600 px-3 py-2">About</a>
              <a href="#contact" className="text-gray-700 hover:text-violet-600 px-3 py-2">Contact</a>
              <Button className="bg-violet-600 hover:bg-violet-700">Get Started</Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-violet-600"
            >
              <Menu />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="block text-gray-700 hover:text-violet-600 px-3 py-2">Features</a>
              <a href="#about" className="block text-gray-700 hover:text-violet-600 px-3 py-2">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-violet-600 px-3 py-2">Contact</a>
              <Button className="w-full bg-violet-600 hover:bg-violet-700 mt-4">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
