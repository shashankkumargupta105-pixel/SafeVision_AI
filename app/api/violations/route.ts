import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "100");
    const status = searchParams.get("status");

    const where = status ? { status } : {};

    const violations = await prisma.violation.findMany({
      take: limit,
      where,
      orderBy: { timestamp: "desc" },
      include: {
        worker: true,
      },
    });

    return NextResponse.json({ success: true, violations });
  } catch (error) {
    console.error("Violations fetch error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
