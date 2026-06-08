"use client";

import { motion } from "framer-motion";
import { Camera, Shield, Activity, AlertTriangle, Play, Pause, Maximize } from "lucide-react";
import { useState } from "react";

export default function MonitoringPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedCamera, setSelectedCamera] = useState(1);

  const cameras = [
    { id: 1, name: "Zone A - Main Production", status: "active" },
    { id: 2, name: "Zone B - Assembly Line", status: "active" },
    { id: 3, name: "Zone C - Warehouse", status: "active" },
    { id: 4, name: "Zone D - Loading Dock", status: "inactive" },
  ];

  const detectionBoxes = [
    { id: 1, type: "worker", x: 20, y: 30, width: 15, height: 40, color: "green" },
    { id: 2, type: "helmet", x: 22, y: 32, width: 8, height: 8, color: "blue" },
    { id: 3, type: "vest", x: 22, y: 45, width: 12, height: 15, color: "purple" },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 gradient-text">Live Monitoring</h1>
          <p className="text-gray-400">Real-time CCTV feed with AI detection overlay</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Camera Feed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Camera className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold text-white">{cameras[selectedCamera - 1].name}</h2>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-400">Live</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Feed Simulation */}
            <div className="relative h-96 bg-black/50 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-20 h-20 mx-auto text-primary mb-4 animate-pulse" />
                  <p className="text-gray-400">Live CCTV Feed</p>
                </div>
              </div>

              {/* Detection Boxes */}
              {detectionBoxes.map((box) => (
                <motion.div
                  key={box.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute border-2 rounded"
                  style={{
                    left: `${box.x}%`,
                    top: `${box.y}%`,
                    width: `${box.width}%`,
                    height: `${box.height}%`,
                    borderColor: box.color === "green" ? "#22C55E" : box.color === "blue" ? "#0EA5E9" : "#A855F7",
                  }}
                >
                  <div
                    className="absolute -top-6 left-0 px-2 py-1 text-xs rounded"
                    style={{
                      backgroundColor: box.color === "green" ? "#22C55E" : box.color === "blue" ? "#0EA5E9" : "#A855F7",
                    }}
                  >
                    {box.type}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Detection Legend */}
            <div className="mt-4 flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded" />
                <span className="text-sm text-gray-400">Worker</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded" />
                <span className="text-sm text-gray-400">Helmet</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-purple-500 rounded" />
                <span className="text-sm text-gray-400">Safety Vest</span>
              </div>
            </div>
          </motion.div>

          {/* Camera List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-bold text-white mb-6">Cameras</h3>
            <div className="space-y-3">
              {cameras.map((camera) => (
                <button
                  key={camera.id}
                  onClick={() => setSelectedCamera(camera.id)}
                  className={`w-full p-4 rounded-lg border transition-all ${
                    selectedCamera === camera.id
                      ? "bg-primary/20 border-primary"
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Camera className="w-5 h-5 text-primary" />
                      <span className="text-white text-sm">{camera.name}</span>
                    </div>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        camera.status === "active" ? "bg-green-500" : "bg-gray-500"
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Real-time Stats */}
            <div className="mt-8 space-y-4">
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-white font-semibold">Helmet Compliance</span>
                </div>
                <div className="text-2xl font-bold text-green-500">95%</div>
              </div>

              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <Activity className="w-5 h-5 text-blue-500" />
                  <span className="text-white font-semibold">Vest Compliance</span>
                </div>
                <div className="text-2xl font-bold text-blue-500">88%</div>
              </div>

              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span className="text-white font-semibold">Active Violations</span>
                </div>
                <div className="text-2xl font-bold text-red-500">2</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
