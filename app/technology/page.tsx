import { motion } from "framer-motion";
import { Code, Server, Database, Cpu, Globe, Layout } from "lucide-react";

export default function TechnologyPage() {
  const techCategories = [
    {
      title: "AI & Computer Vision",
      icon: <Cpu className="w-10 h-10" />,
      color: "primary",
      technologies: [
        { name: "Python", desc: "Core AI development language" },
        { name: "YOLOv8", desc: "State-of-the-art object detection" },
        { name: "OpenCV", desc: "Image processing and analysis" },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-10 h-10" />,
      color: "secondary",
      technologies: [
        { name: "Node.js", desc: "Server-side runtime" },
        { name: "Next.js APIs", desc: "REST API development" },
        { name: "PostgreSQL", desc: "Relational database" },
      ],
    },
    {
      title: "Frontend",
      icon: <Layout className="w-10 h-10" />,
      color: "accent",
      technologies: [
        { name: "Next.js 15", desc: "React framework with App Router" },
        { name: "Tailwind CSS", desc: "Utility-first styling" },
        { name: "Framer Motion", desc: "Smooth animations" },
      ],
    },
    {
      title: "Deployment",
      icon: <Globe className="w-10 h-10" />,
      color: "purple",
      technologies: [
        { name: "Vercel", desc: "Cloud platform for frontend" },
        { name: "Neon DB", desc: "Serverless PostgreSQL" },
        { name: "Edge Computing", desc: "Low-latency processing" },
      ],
    },
  ];

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    purple: "text-purple-500",
  };

  const bgClasses = {
    primary: "bg-primary/20 border-primary/30",
    secondary: "bg-secondary/20 border-secondary/30",
    accent: "bg-accent/20 border-accent/30",
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
          <h1 className="text-5xl font-bold mb-6 gradient-text">Technology Stack</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built with cutting-edge technologies for optimal performance and reliability
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <div className={`${colorClasses[category.color]} mb-6`}>{category.icon}</div>
              <h2 className="text-2xl font-bold text-white mb-6">{category.title}</h2>
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-lg border ${bgClasses[category.color]} hover:border-${category.color}-50 transition-all duration-300`}
                  >
                    <h3 className="text-lg font-semibold text-white mb-1">{tech.name}</h3>
                    <p className="text-gray-400 text-sm">{tech.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">System Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/30">
              <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold text-white mb-2">Edge AI Layer</h3>
              <p className="text-gray-400 text-sm">YOLOv8 + OpenCV on edge devices</p>
            </div>
            <div className="text-center p-6 bg-secondary/10 rounded-lg border border-secondary/30">
              <Server className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold text-white mb-2">API Layer</h3>
              <p className="text-gray-400 text-sm">Next.js APIs + PostgreSQL</p>
            </div>
            <div className="text-center p-6 bg-accent/10 rounded-lg border border-accent/30">
              <Layout className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold text-white mb-2">Presentation Layer</h3>
              <p className="text-gray-400 text-sm">Next.js + Tailwind CSS UI</p>
            </div>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-gray-400">Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">&lt;200ms</div>
              <div className="text-gray-400">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">95+</div>
              <div className="text-gray-400">Lighthouse Score</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
