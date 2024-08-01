"use client";

import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  url: string;
};

/**
 * `OpenButton` is a client-side React component that renders a button for opening a file.
 *
 * This component uses the FontAwesome folder open icon and initiates a file download when the button is clicked. It creates a temporary anchor (`<a>`) element to facilitate the download, setting its `href` attribute to the file URL, and programmatically clicks it to start the download.
 *
 * @param {Props} props - The properties passed to the component.
 * @param {string} props.url - The URL of the file to be opened.
 *
 * @returns {JSX.Element} The rendered `OpenButton` component with a folder open icon.
 */

export function OpenButton({ url }: Props) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    const fileName = url.split("/").pop() || "default-filename";
    console.log(fileName);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      <FontAwesomeIcon icon={faFolderOpen} />
    </button>
  );
}
