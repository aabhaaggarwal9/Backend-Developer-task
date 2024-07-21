import { readFromFile, writeToFile } from "@/app/service/fileUtil";
import { NextResponse } from "next/server";

export async function GET() {
  const lastWeekWinner = await readFromFile("lastWeekWinner.json");
  const top5Department = await readFromFile("top5Department.json");
  return NextResponse.json({ lastWeekWinner, top5Department });
}
