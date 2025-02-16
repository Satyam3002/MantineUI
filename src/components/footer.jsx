import { Button } from '@mantine/core';
import PrimaryButton from './UI/PrimaryButton';
import { IconArrowRight } from '@tabler/icons-react';
import { IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin } from '@tabler/icons-react';
const Footer = () => {
  return (
    <footer className="bg-[#003B7B] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <img src="/Logo Icon.png" alt="Whitepace" className="h-8 mb-4" />
            <p className="text-sm text-gray-300">
              whitepace was created for the new ways we live and work. We make a better workspace around the world
            </p>
          </div>

          {/* Product Column */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Overview</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Customer stories</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Guides & tutorials</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Help center</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">About us</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Media kit</a></li>
            </ul>
          </div>

          {/* Try It Today Section */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Try It Today</h3>
            <p className="text-sm text-gray-300 mb-4">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <PrimaryButton>Try Whitepace free →</PrimaryButton>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-700">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <button className="text-sm text-gray-300 hover:text-white">
              English
            </button>
            <a href="#" className="text-sm text-gray-300 hover:text-white">Terms & privacy</a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">Security</a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">Status</a>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-300 hover:text-white">
              <IconBrandFacebook size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <IconBrandTwitter size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <IconBrandLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;