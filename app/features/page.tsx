import { motion } from "framer-motion";
import { Users, Shield,  AlertTriangle, ClipboardCheck, TrendingUp, Mail, MessageSquare } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Worker Detection",
      description: "Real-time worker identification and tracking across multiple camera feeds.",
      color: "primary",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Helmet Detection",
      description: "Monitor head protection compliance with advanced AI detection algorithms.",
      color: "secondary",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety Vest Detection",
      description: "Verify high-visibility safety equipment usage in hazardous areas.",
      color: "accent",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Violation Detection",
      description: "Instant PPE violation alerts with detailed incident reporting.",
      color: "red",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Attendance Tracking",
      description: "Automated worker presence monitoring and attendance records.",
      color: "purple",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Compliance Analytics",
      description: "Track safety performance metrics with comprehensive scoring system.",
      color: "blue",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Alerts",
      description: "Automatic notifications sent to supervisors for immediate action.",
      color: "green",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "SMS Alerts",
      description: "Emergency notifications via SMS for critical safety violations.",
      color: "orange",
    },
  ];

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    red: "text-red-500",
    purple: "text-purple-500",
    blue: "text-blue-500",
    green: "text-green-500",
    orange: "text-orange-500",
  };

  const borderClasses = {
    primary: "border-primary/30",
    secondary: "border-secondary/30",
    accent: "border-accent/30",
    red: "border-red-500/30",
    purple: "border-purple-500/30",
    blue: "border-blue-500/30",
    green: "border-green-500/30",
    orange: "border-orange-500/30",
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
          <h1 className="text-5xl font-bold mb-6 gradient-text">Powerful Features</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive AI-powered safety monitoring capabilities for modern industrial workplaces
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`glass-card p-6 border ${borderClasses[feature.color]} hover:border-${feature.color}-50 transition-all duration-300 cursor-pointer`}
            >
              <div className={`${colorClasses[feature.color]} mb-4`}>{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Real-Time Monitoring</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">24/7 continuous surveillance of all work areas</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">Multi-camera support with synchronized feeds</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">Instant detection with sub-200ms latency</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">Edge AI processing for minimal bandwidth usage</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Intelligent Alerts</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">Customizable alert thresholds and rules</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">Multi-channel notifications (Email, SMS, Dashboard)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">Escalation protocols for critical violations</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">Historical alert tracking and analytics</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
