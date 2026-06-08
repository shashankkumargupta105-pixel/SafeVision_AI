"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Camera, Users, Shield, TrendingUp, AlertTriangle, Activity, Clock, LayoutDashboard, FileText, Settings, Menu } from "lucide-react";

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: "cameras", label: "Cameras", icon: <Camera className="w-5 h-5" /> },
    { id: "violations", label: "Violations", icon: <AlertTriangle className="w-5 h-5" /> },
    { id: "workers", label: "Workers", icon: <Users className="w-5 h-5" /> },
    { id: "reports", label: "Reports", icon: <FileText className="w-5 h-5" /> },
    { id: "settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "24", label: "Total Workers", color: "primary" },
    { icon: <AlertTriangle className="w-8 h-8" />, value: "5", label: "Today's Violations", color: "red" },
    { icon: <Shield className="w-8 h-8" />, value: "92%", label: "Compliance Score", color: "accent" },
    { icon: <Camera className="w-8 h-8" />, value: "8", label: "Active Cameras", color: "secondary" },
  ];

  const recentAlerts = [
    { id: 1, worker: "John Doe", type: "No Helmet", location: "Zone A", time: "2 min ago" },
    { id: 2, worker: "Jane Smith", type: "No Vest", location: "Zone B", time: "5 min ago" },
    { id: 3, worker: "Bob Wilson", type: "No Helmet", location: "Zone A", time: "8 min ago" },
  ];

  const violationTrends = [
    { day: "Mon", violations: 8 },
    { day: "Tue", violations: 6 },
    { day: "Wed", violations: 10 },
    { day: "Thu", violations: 5 },
    { day: "Fri", violations: 7 },
    { day: "Sat", violations: 3 },
    { day: "Sun", violations: 2 },
  ];

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    red: "text-red-500",
  };

  const bgClasses = {
    primary: "bg-primary/20 border-primary/30",
    secondary: "bg-secondary/20 border-secondary/30",
    accent: "bg-accent/20 border-accent/30",
    red: "bg-red-500/20 border-red-500/30",
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-16 h-full w-64 glass-card border-r border-white/10 z-40 transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <div className="p-6">
            <h2 className="text-xl font-bold gradient-text mb-6">Admin Dashboard</h2>
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id ? "bg-primary/20 text-primary" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden fixed bottom-4 right-4 z-50 btn-primary p-3"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu />
        </button>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold mb-8 gradient-text capitalize">{activeTab}</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass-card p-6 border ${bgClasses[stat.color as keyof typeof bgClasses]}`}
                >
                  <div className={`${colorClasses[stat.color as keyof typeof colorClasses]} mb-4`}>{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Charts and Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Violation Trends Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold text-white mb-6">Violation Trends</h3>
                <div className="h-64 flex items-end justify-between space-x-2">
                  {violationTrends.map((data, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${(data.violations / 10) * 100}%` }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div className="w-full bg-gradient-primary rounded-t-lg" style={{ height: `${(data.violations / 10) * 100}%` }} />
                      <div className="mt-2 text-xs text-gray-400">{data.day}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Recent Alerts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold text-white mb-6">Recent Alerts</h3>
                <div className="space-y-3">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">{alert.worker}</span>
                        <span className="text-xs text-gray-400">{alert.time}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {alert.type} - {alert.location}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Compliance Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Compliance Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/30">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-gray-400">Helmet Compliance</div>
                </div>
                <div className="text-center p-6 bg-secondary/10 rounded-lg border border-secondary/30">
                  <div className="text-4xl font-bold text-secondary mb-2">88%</div>
                  <div className="text-gray-400">Vest Compliance</div>
                </div>
                <div className="text-center p-6 bg-accent/10 rounded-lg border border-accent/30">
                  <div className="text-4xl font-bold text-accent mb-2">92%</div>
                  <div className="text-gray-400">Overall Compliance</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
