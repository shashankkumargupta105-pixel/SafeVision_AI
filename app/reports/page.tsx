"use client";

import { motion } from "framer-motion";
import { FileText, Download, Calendar, Filter, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function ReportsPage() {
  const [reportType, setReportType] = useState("daily");
  const [dateRange, setDateRange] = useState("week");

  const reports = [
    { id: 1, type: "Daily", date: "2024-01-15", violations: 5, compliance: 92, status: "completed" },
    { id: 2, type: "Daily", date: "2024-01-14", violations: 8, compliance: 88, status: "completed" },
    { id: 3, type: "Weekly", date: "2024-01-08", violations: 45, compliance: 90, status: "completed" },
    { id: 4, type: "Monthly", date: "2024-01-01", violations: 180, compliance: 91, status: "completed" },
  ];

  const handleDownload = (format: string) => {
    // In production, this would trigger a real download
    console.log(`Downloading report as ${format}`);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 gradient-text">Reports</h1>
          <p className="text-gray-400">Generate and download compliance reports</p>
        </motion.div>

        {/* Report Generation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Generate New Report</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Report Type</label>
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white"
              >
                <option value="daily">Daily Report</option>
                <option value="weekly">Weekly Report</option>
                <option value="monthly">Monthly Report</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Date Range</label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white"
              >
                <option value="day">Last 24 Hours</option>
                <option value="week">Last 7 Days</option>
                <option value="month">Last 30 Days</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>

            <div className="flex items-end">
              <button className="w-full btn-primary flex items-center justify-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Generate Report</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Reports List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Recent Reports</h2>
            <div className="flex items-center space-x-2">
              <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Filter className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Calendar className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400">Type</th>
                  <th className="text-left py-4 px-4 text-gray-400">Date</th>
                  <th className="text-left py-4 px-4 text-gray-400">Violations</th>
                  <th className="text-left py-4 px-4 text-gray-400">Compliance</th>
                  <th className="text-left py-4 px-4 text-gray-400">Status</th>
                  <th className="text-left py-4 px-4 text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 text-white">{report.type}</td>
                    <td className="py-4 px-4 text-gray-300">{report.date}</td>
                    <td className="py-4 px-4 text-gray-300">{report.violations}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-accent" />
                        <span className="text-white font-semibold">{report.compliance}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                        {report.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleDownload("pdf")}
                          className="p-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
                          title="Download PDF"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDownload("csv")}
                          className="p-2 bg-secondary/20 text-secondary rounded-lg hover:bg-secondary/30 transition-colors"
                          title="Download CSV"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Report Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass-card p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">238</div>
            <div className="text-gray-400">Total Reports Generated</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-4xl font-bold text-secondary mb-2">91%</div>
            <div className="text-gray-400">Average Compliance Score</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">156</div>
            <div className="text-gray-400">Total Violations Tracked</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
