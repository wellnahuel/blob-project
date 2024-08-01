import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { RefObject } from "react";

interface UploadFormProps {
  inputFileRef: RefObject<HTMLInputElement>;
  handleSubmit: (event: React.FormEvent) => void;
}

/**
 * `UploadForm` is a component that provides a file upload form with options to submit the file or navigate to the file list page.
 *
 * It includes an input field for selecting a file, a submit button for uploading the file, and a button to navigate to the file list page.
 *
 * @param {UploadFormProps} props - The props for the `UploadForm` component.
 * @returns {JSX.Element} The form component for uploading files.
 */

const UploadForm: React.FC<UploadFormProps> = ({
  inputFileRef,
  handleSubmit,
}) => {
  const router = useRouter();

  const handleGoToFileList = () => {
    router.push("/all-files");
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <label className="mb-6 text-white" htmlFor="file-input">
        Select file:
      </label>
      <Input
        id="file-input"
        type="file"
        name="file"
        required
        ref={inputFileRef}
        className="mb-6 "
      />
      <div>
        <Button className="mr-3" variant="destructive" type="submit">
          Upload
        </Button>
        <Button variant="destructive" onClick={handleGoToFileList}>
          Go to file list
        </Button>
      </div>
    </form>
  );
};

export default UploadForm;
