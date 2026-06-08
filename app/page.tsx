import React from "react";
import { motion } from "framer-motion";
import { Shield, Camera, CheckCircle, Zap, Clock, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const statistics = [
    { icon: <CheckCircle className="w-8 h-8" />, value: "99%", label: "Detection Accuracy" },
    { icon: <Zap className="w-8 h-8" />, value: "<200ms", label: "Latency" },
    { icon: <Clock className="w-8 h-8" />, value: "24/7", label: "Monitoring" },
    { icon: <Eye className="w-8 h-8" />, value: "25 FPS", label: "Processing" },
  ];

  const features = [
    { icon: <Camera className="w-6 h-6" />, title: "Worker Detection", desc: "Real-time worker identification" },
    { icon: <Shield className="w-6 h-6" />, title: "Helmet Detection", desc: "Monitor head protection compliance" },
    { icon: <Eye className="w-6 h-6" />, title: "Violation Detection", desc: "Instant PPE violation alerts" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-8"
            >
              <Shield className="w-24 h-24 mx-auto text-primary" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">AI-Powered</span>
              <br />
              <span className="text-white">Workplace Safety Monitoring</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Detect PPE violations in real-time using Edge AI, Computer Vision and YOLOv8.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Watch Demo
              </motion.button>
            </div>

            {/* Hero Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16 glass-card p-8 max-w-4xl mx-auto"
            >
              <div className="relative h-64 bg-black/50 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-16 h-16 mx-auto text-primary mb-4 animate-pulse" />
                    <p className="text-gray-400">Live CCTV Monitoring Simulation</p>
                    <div className="mt-4 flex justify-center gap-4">
                      <div className="px-4 py-2 bg-green-500/20 border border-green-500 rounded-lg">
                        <span className="text-green-400 text-sm">Worker Detected</span>
                      </div>
                      <div className="px-4 py-2 bg-blue-500/20 border border-blue-500 rounded-lg">
                        <span className="text-blue-400 text-sm">Helmet: OK</span>
                      </div>
                      <div className="px-4 py-2 bg-purple-500/20 border border-purple-500 rounded-lg">
                        <span className="text-purple-400 text-sm">Vest: OK</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Key Features</h2>
            <p className="text-gray-400">Advanced AI-powered safety monitoring capabilities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link href="/features">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Explore All Features
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
