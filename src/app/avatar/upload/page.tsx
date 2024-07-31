"use client";

import { type PutBlobResult } from "@vercel/blob";
import { upload } from "@vercel/blob/client";
import { useRef, useState } from "react";

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const notifyApiCall = async (endpoint: string, method: "POST" | "GET") => {
    try {
      await fetch(`https://pokeapi.co/api/v2/${endpoint}`, { method });
    } catch (error) {
      console.error("Error calling PokéAPI:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!inputFileRef.current?.files) {
      setModalContent("No file selected");
      console.log(modalContent);

      setShowModal(true);
      return;
    }

    const file = inputFileRef.current.files[0];

    if (file.size > 5 * 1024 * 1024) {
      setModalContent(
        "El archivo supera el límite de 5MB. Por favor seleccione un archivo más pequeño."
      );
      console.log(modalContent);

      setShowModal(true);
      return;
    }

    try {
      // Notify API call started
      await notifyApiCall("pokemon", "POST"); // Example endpoint for 'upload started'
      setModalContent("Archivo subiendose.");
      console.log(modalContent);

      setShowModal(true);

      // Start uploading the file
      const newBlob = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/avatar/upload",
      });

      setBlob(newBlob);

      // Notify API call succeeded
      setModalContent("Archivo subido exitosamente.");
      console.log(modalContent);

      setShowModal(true);
      await notifyApiCall("pokemon/pikachu", "POST");
    } catch (error) {
      setModalContent("Error al subir el archivo.");
      console.log(modalContent);

      setShowModal(true);

      // Notify API call failed
      await notifyApiCall("invalid-endpoint", "POST"); // This endpoint does not exist
    }
  };

  return (
    <>
      <h1>Upload Your Avatar</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="file-input">Seleccione archivo:</label>
        <input
          id="file-input"
          name="file"
          ref={inputFileRef}
          type="file"
          required
        />
        <button type="submit">Upload</button>
      </form>

      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}

      {/* Modal for notifications */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </>
  );
}
