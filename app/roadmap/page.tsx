import { motion } from "framer-motion";
import { Calendar, Rocket, Smartphone, Cpu, Brain, TrendingUp } from "lucide-react";

export default function RoadmapPage() {
  const features = [
    {
      quarter: "Q1 2026",
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile Application",
      description: "Native mobile apps for iOS and Android with real-time alerts and dashboard access.",
      status: "upcoming",
    },
    {
      quarter: "Q2 2026",
      icon: <Cpu className="w-10 h-10" />,
      title: "IoT Sensor Integration",
      description: "Integration with IoT sensors for enhanced environmental monitoring and safety data collection.",
      status: "upcoming",
    },
    {
      quarter: "Q3 2026",
      icon: <Brain className="w-10 h-10" />,
      title: "AI Analytics",
      description: "Advanced AI-powered analytics for predictive safety insights and risk assessment.",
      status: "upcoming",
    },
    {
      quarter: "Q4 2026",
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Predictive Safety Monitoring",
      description: "Machine learning models to predict potential safety incidents before they occur.",
      status: "upcoming",
    },
  ];

  const upcomingFeatures = [
    { icon: <Calendar className="w-6 h-6" />, title: "Gloves Detection", desc: "Detect safety gloves usage" },
    { icon: <Calendar className="w-6 h-6" />, title: "Goggles Detection", desc: "Monitor eye protection compliance" },
    { icon: <Rocket className="w-6 h-6" />, title: "Multi-Site Support", desc: "Manage multiple facilities" },
    { icon: <Calendar className="w-6 h-6" />, title: "Advanced Analytics", desc: "Deep insights and reporting" },
  ];

  const statusClasses = {
    upcoming: "bg-blue-500/20 border-blue-500/30 text-blue-400",
    inProgress: "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
    completed: "bg-green-500/20 border-green-500/30 text-green-400",
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
          <h1 className="text-5xl font-bold mb-6 gradient-text">Future Roadmap</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Exciting features and enhancements planned for SafeVision AI
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">2026 Roadmap</h2>
            <p className="text-gray-400">Planned releases and feature additions</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent" />

            <div className="space-y-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Quarter Badge */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-primary rounded-full text-white font-bold z-10">
                    {feature.quarter}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="glass-card p-8 hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="text-primary mb-4">{feature.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-400 mb-4">{feature.description}</p>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${statusClasses[feature.status as keyof typeof statusClasses]}`}
                      >
                        {feature.status}
                      </span>
                    </motion.div>
                  </div>

                  {/* Empty Space for Timeline */}
                  <div className="hidden lg:block w-2/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Upcoming Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">Shape the Future</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Have a feature suggestion? We'd love to hear from you. Help us build the future of workplace safety.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Submit Feature Request
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
