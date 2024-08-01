import { del, put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const { url, newName } = await request.json();

  if (!url || !newName) {
    return NextResponse.json(
      { error: "URL and newName are required" },
      { status: 400 }
    );
  }

  try {
    // Obtener el archivo actual (si es necesario)
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching the file");
    }
    const fileBlob = await response.blob();

    // Generar la nueva URL para el archivo con el nuevo nombre
    const newFileUrl = new URL(newName, new URL(url).origin).toString();

    // Subir el archivo con el nuevo nombre
    await put(newFileUrl, fileBlob, { access: "public" });

    // Eliminar el archivo antiguo
    await del(url);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
