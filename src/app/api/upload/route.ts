import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

/**
 * Handles the POST request to upload a file.
 *
 * This function extracts the `filename` from the query parameters of the request URL and uses it to store the uploaded file using Vercel's blob storage service. It returns a JSON response with the details of the uploaded blob or an error message if the filename is not provided.
 *
 * @param {Request} request - The incoming HTTP request.
 * @returns {Promise<NextResponse>} A promise that resolves to the `NextResponse` object.
 *
 * @throws {400} If the filename is missing or the request body is empty.
 */

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename") || "";
  console.log({ filename });

  if (filename && request.body) {
    const blob = await put(filename, request.body, {
      access: "public",
    });

    return NextResponse.json(blob);
  } else {
    return NextResponse.json(
      { error: "Filename is required" },
      { status: 400 }
    );
  }
}
