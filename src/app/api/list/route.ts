import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

/**
 * Handles the GET request to retrieve a list of blobs.
 *
 * This function fetches the list of blobs stored in Vercel's blob storage service and returns it in the response as JSON. If an error occurs during the retrieval, it returns a JSON response with an error message and a 500 status code.
 *
 * @returns {Promise<NextResponse>} A promise that resolves to the `NextResponse` object containing the list of blobs or an error message.
 *
 * @throws {500} If an error occurs while retrieving the list of blobs.
 */

export async function GET(): Promise<NextResponse> {
  try {
    const { blobs } = await list();
    return NextResponse.json({ blobs });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
