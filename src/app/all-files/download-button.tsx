"use client";

import { useRouter } from "next/navigation";

type Props = {
  url: string;
};

export default function DownloadButton({ url }: Props) {
  const router = useRouter();
  const handleClick = async () => {
    try {
      const response = await fetch(`/api/file`, {
        method: "DELETE",
        /* headers: {
          "Content-Type": "application/json",
        }, */
        body: JSON.stringify({ url }),
      });
      router.refresh();

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      // Optionally, you can handle the response here
      console.log("File deletion successful");
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  return <button onClick={handleClick}>DOWNLOAD</button>;
}
