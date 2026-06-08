import { motion } from "framer-motion";
import { Video, Cpu, Shield, AlertCircle, Bell, LayoutDashboard } from "lucide-react";

export default function ArchitecturePage() {
  const steps = [
    {
      icon: <Video className="w-10 h-10" />,
      title: "CCTV Camera",
      description: "Continuous video stream capture from existing CCTV cameras in industrial facilities.",
      color: "primary",
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "OpenCV Processing",
      description: "Real-time frame processing and image enhancement using OpenCV library.",
      color: "secondary",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "YOLOv8 Detection",
      description: "Advanced object detection using YOLOv8 to identify workers, helmets, and safety vests.",
      color: "accent",
    },
    {
      icon: <AlertCircle className="w-10 h-10" />,
      title: "Compliance Verification",
      description: "Intelligent analysis to detect PPE compliance violations in real-time.",
      color: "red",
    },
    {
      icon: <Bell className="w-10 h-10" />,
      title: "Alert Engine",
      description: "Generate real-time alerts via email, SMS, and dashboard notifications.",
      color: "purple",
    },
    {
      icon: <LayoutDashboard className="w-10 h-10" />,
      title: "Dashboard",
      description: "Centralized monitoring interface with live feeds, analytics, and reports.",
      color: "blue",
    },
  ];

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    red: "text-red-500",
    purple: "text-purple-500",
    blue: "text-blue-500",
  };

  const borderClasses = {
    primary: "border-primary/30",
    secondary: "border-secondary/30",
    accent: "border-accent/30",
    red: "border-red-500/30",
    purple: "border-purple-500/30",
    blue: "border-blue-500/30",
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
          <h1 className="text-5xl font-bold mb-6 gradient-text">System Architecture</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive 6-step process for intelligent workplace safety monitoring
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Step Number */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-primary rounded-full items-center justify-center text-white font-bold z-10">
                  {index + 1}
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`glass-card p-8 border ${borderClasses[step.color as keyof typeof borderClasses]} hover:border-${step.color}-50 transition-all duration-300`}
                  >
                    <div className={`${colorClasses[step.color as keyof typeof colorClasses]} mb-4`}>{step.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </motion.div>
                </div>

                {/* Empty Space for Timeline */}
                <div className="hidden lg:block w-2/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full items-center justify-center text-white font-bold flex">
                {index + 1}
              </div>
              <div className={`glass-card p-6 border ${borderClasses[step.color as keyof typeof borderClasses]} flex-1`}>
                <div className={`${colorClasses[step.color as keyof typeof colorClasses]} mb-2`}>{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Architecture Overview</h2>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            {steps.map((step, index) => (
              <>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-4 text-center min-w-[120px]"
                >
                  <div className="text-white font-semibold text-sm">{step.title}</div>
                </motion.div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block text-primary text-2xl">↓</div>
                )}
         </ >
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
