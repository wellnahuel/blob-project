"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

/**
 * `GoBackButton` is a client-side React component that renders a button to navigate back to the file upload page.
 *
 * This component uses the Next.js router to redirect the user to the root ("/") path when the button is clicked. It is styled using Tailwind CSS and includes a `Button` component with a destructive variant.
 *
 * @returns {JSX.Element} The rendered `GoBackButton` component with a button to navigate to the upload file page.
 */

const GoBackButton: React.FC = () => {
  const router = useRouter();

  const handleGoToUploadImage = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center">
      <Button variant="destructive" onClick={handleGoToUploadImage}>
        Go to upload file
      </Button>
    </div>
  );
};

export default GoBackButton;
