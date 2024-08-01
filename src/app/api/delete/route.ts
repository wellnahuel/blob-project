import { del } from "@vercel/blob";
import { NextResponse } from "next/server";

/**
 * Handles the DELETE request to remove a blob from storage.
 *
 * This function deletes a blob specified by its URL from Vercel's blob storage service. The URL of the blob to be deleted is expected to be provided in the request body as JSON. After successfully deleting the blob, it returns an empty JSON response.
 *
 * @param {Request} request - The incoming HTTP request object containing the URL of the blob to delete in the request body.
 *
 * @returns {Promise<NextResponse>} A promise that resolves to the `NextResponse` object containing an empty JSON response after the deletion is processed.
 *
 * @throws {500} If an error occurs while deleting the blob.
 */

export async function DELETE(request: Request) {
  const json = await request.json();
  console.log({ json });
  await del(json.url);
  return NextResponse.json({});
}
