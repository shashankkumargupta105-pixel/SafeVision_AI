import { motion } from "framer-motion";
import { AlertTriangle, Clock, DollarSign, FileText, Video, Cpu, Shield, Bell } from "lucide-react";

export default function AboutPage() {
  const problems = [
    {
      icon: <AlertTriangle className="w-12 h-12" />,
      title: "Workplace Injuries",
      description: "Thousands of workers suffer injuries annually due to lack of proper safety equipment and monitoring.",
      color: "red",
    },
    {
      icon: <Clock  className="w-12 h-12" />,
      title: "Production Downtime",
      description: "Safety incidents lead to significant production losses and operational disruptions.",
      color: "orange",
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Financial Losses",
      description: "Companies face massive costs from accidents, compensation claims, and regulatory fines.",
      color: "yellow",
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Regulatory Penalties",
      description: "Non-compliance with safety regulations results in severe legal and financial consequences.",
      color: "purple",
    },
  ];

  const solution = [
    {
      icon: <Video className="w-10 h-10" />,
      title: "Computer Vision",
      description: "Advanced image processing and analysis using state-of-the-art CV algorithms.",
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "OpenCV",
      description: "Real-time frame processing and enhancement for accurate detection.",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "YOLOv8",
      description: "State-of-the-art object detection for workers, helmets, and safety vests.",
    },
    {
      icon: <Bell className="w-10 h-10" />,
      title: "Real-Time Alerts",
      description: "Instant notifications via email, SMS, and dashboard for immediate action.",
    },
  ];

  const colorClasses = {
    red: "text-red-500",
    orange: "text-orange-500",
    yellow: "text-yellow-500",
    purple: "text-purple-500",
  };

  const bgClasses = {
    red: "bg-red-500/20 border-red-500/30",
    orange: "bg-orange-500/20 border-orange-500/30",
    yellow: "bg-yellow-500/20 border-yellow-500/30",
    purple: "bg-purple-500/20 border-purple-500/30",
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 gradient-text">About SafeVision AI</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming workplace safety with intelligent AI-powered monitoring
          </p>
        </motion.div>

        {/* Problem Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">The Problem</h2>
            <p className="text-gray-400">Critical challenges facing industrial workplaces today</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className={`glass-card p-8 border ${bgClasses[problem.color]} hover:border-${problem.color}-50 transition-all duration-300`}
              >
                <div className={`${colorClasses[problem.color]} mb-4`}>{problem.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{problem.title}</h3>
                <p className="text-gray-400">{problem.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12"
          >
            <h3 className="text-3xl font-bold text-center mb-8 gradient-text">The Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">2.8M</div>
                <div className="text-gray-400">Workplace Deaths Annually</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-secondary mb-2">$250B</div>
                <div className="text-gray-400">Global Economic Loss</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">374M</div>
                <div className="text-gray-400">Non-Fatal Injuries</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Solution Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Solution</h2>
            <p className="text-gray-400">How SafeVision AI addresses these challenges</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
