"use client";

import { PutBlobResult } from "@vercel/blob";
import { useRef, useState } from "react";
import Modal from "./components/Modal";
import UploadForm from "./components/UploadForm";

/**
 * `AvatarUploadPage` is a page component for uploading avatars.
 *
 * This component allows users to select a file, upload it to a server, and manage the file upload state.
 * It also displays a modal with messages about the upload status and the link to the uploaded file.
 *
 * @returns {JSX.Element} The component that represents the avatar upload page.
 */

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
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
      setShowModal(true);
      return;
    }

    const file = inputFileRef.current.files[0];

    if (file.size > 5 * 1024 * 1024) {
      setModalContent(
        "The file exceeds the 5MB limit. Please select a smaller file."
      );
      setShowModal(true);
      return;
    }

    try {
      // Notify API call started
      await notifyApiCall("pokemon", "POST"); // Example endpoint for 'upload started'
      setModalContent("File uploading.");
      setShowModal(true);

      // Start uploading the file
      const newBlob = await fetch(
        `/api/upload?filename=${encodeURIComponent(file.name)}`,
        {
          method: "POST",
          body: file,
        }
      ).then((res) => res.json());

      setBlob(newBlob);
      setModalContent("File uploaded successfully.");
      setShowModal(true);

      // Notify API call succeeded
      await notifyApiCall("pokemon/pikachu", "POST");
    } catch (error) {
      setModalContent("Error uploading file.");
      setShowModal(true);

      // Notify API call failed
      await notifyApiCall("invalid-endpoint", "POST"); // This endpoint does not exist
    }
  };

  return (
    <div className="flex items-center justify-center h-full min-h-screen bg-black">
      <div className="text-center p-4 shadow-md rounded-lg bg-gray-950">
        <h1 className="text-2xl font-bold mb-4 text-white">
          Upload Your Avatar
        </h1>
        <UploadForm inputFileRef={inputFileRef} handleSubmit={handleSubmit} />
        {blob && (
          <div className="mt-4 text-white">
            Blob url:{" "}
            <a href={blob.url} className="text-blue-500">
              {blob.url}
            </a>
          </div>
        )}
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          modalContent={modalContent}
        />
      </div>
    </div>
  );
}
