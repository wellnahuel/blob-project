"use client";

import { useRouter } from "next/navigation";

type Props = {
  url: string;
};

export default function DeleteButton({ url }: Props) {
  const router = useRouter();
  /* const handleClick = async () => {
    try {
      const response = await fetch(`/api/file`, {
        method: "DELETE",
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
  }; */

  return (
    <button
      onClick={async () => {
        await fetch(`/api/avatar/upload`, {
          method: "DELETE",
          body: JSON.stringify({ url }),
        });
        router.refresh();
      }}
    >
      DELETE(en realidad es borrar)
    </button>
  );
}
