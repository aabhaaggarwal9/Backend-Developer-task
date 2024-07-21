import { readFromFile } from "@/app/service/fileUtil";
import { NextResponse } from "next/server";

export async function GET() {
  const weeklyPopular = await readFromFile("weeklyPopular.json");
  const monthlyPopular = await readFromFile("monthlyPopular.json");
  const todayTrending = await readFromFile("todayTrending.json");
  return NextResponse.json({ weeklyPopular, monthlyPopular, todayTrending });
}
