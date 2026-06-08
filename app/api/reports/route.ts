import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "50");

    const reports = await prisma.report.findMany({
      take: limit,
      orderBy: { generatedAt: "desc" },
    });

    return NextResponse.json({ success: true, reports });
  } catch (error) {
    console.error("Reports fetch error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { reportType, data } = body;

    const report = await prisma.report.create({
      data: {
        reportType,
        data,
      },
    });

    return NextResponse.json(
      { success: true, message: "Report generated successfully", report },
      { status: 201 }
    );
  } catch (error) {
    console.error("Report generation error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
