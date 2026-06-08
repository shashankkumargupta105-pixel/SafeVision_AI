import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    // Get total workers
    const totalWorkers = await prisma.worker.count();

    // Get today's violations
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayViolations = await prisma.violation.count({
      where: {
        timestamp: {
          gte: today,
        },
      },
    });

    // Get compliance score (mock calculation)
    const complianceScore = 92; // This would be calculated from actual data

    // Get active cameras (mock)
    const activeCameras = 8;

    // Get recent alerts
    const recentAlerts = await prisma.violation.findMany({
      take: 5,
      orderBy: { timestamp: "desc" },
      include: {
        worker: true,
      },
    });

    return NextResponse.json({
      success: true,
      stats: {
        totalWorkers,
        todayViolations,
        complianceScore,
        activeCameras,
        recentAlerts,
      },
    });
  } catch (error) {
    console.error("Dashboard stats error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
