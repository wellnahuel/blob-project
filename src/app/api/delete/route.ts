import { del } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const json = await request.json();
  console.log({ json });
  await del(json.url);
  return NextResponse.json({});
}
