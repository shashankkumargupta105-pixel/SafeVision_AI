import { motion } from "framer-motion";
import { Shield, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold gradient-text">SafeVision AI</span>
            </motion.div>
            <p className="text-gray-400 mb-4">
              AI-powered Industrial Worker Safety Monitoring System using Computer Vision and Edge AI.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>contact@safevision.ai</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/features" className="text-gray-400 hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/technology" className="text-gray-400 hover:text-primary transition-colors">Technology</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Team</h3>
            <p className="text-gray-400 mb-2">Team TECH ARKA</p>
            <p className="text-gray-400 text-sm">GL Bajaj Group of Institutions, Mathura</p>
            <p className="text-gray-400 text-sm mt-2">Tata Technologies InnoVent Competition</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SafeVision AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
