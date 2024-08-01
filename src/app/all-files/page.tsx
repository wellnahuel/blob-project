import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { list } from "@vercel/blob";
import DeleteButton from "./components/delete-button";
import GoBackButton from "./components/go-back-button";
import { OpenButton } from "./components/open-button";

/**
 * `AllFiles` is a server-side component that fetches and displays a list of blobs.
 *
 * This component renders a table with columns for URL, pathname, download, open, and delete actions. It also includes a "Go Back" button to navigate to the previous page. The component fetches the blob data from an API and renders it in a table format.
 *
 * @returns {JSX.Element} The rendered `AllFiles` component with a table of blobs and a "Go Back" button.
 */

export default async function AllFiles() {
  const { blobs } = await list();
  console.log({ blobs });

  return (
    <div className="h-screen bg-black">
      <Table className="w-[60vw] m-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-400">Url</TableHead>
            <TableHead className="text-gray-400">Pathname</TableHead>
            <TableHead className="text-gray-400">Download</TableHead>
            <TableHead className="text-gray-400">Open</TableHead>
            <TableHead className="text-gray-400">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-white">
          {blobs.length > 0 ? (
            blobs.map((blob, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <a href={blob.url} target="_blank" rel="noopener noreferrer">
                    {blob.url}
                  </a>
                </TableCell>
                <TableCell>{blob.pathname}</TableCell>
                <TableCell className="flex justify-center">
                  <a
                    href={blob.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faDownload} />
                  </a>
                </TableCell>
                <TableCell className="">
                  <OpenButton url={blob.url} />
                </TableCell>
                <TableCell>
                  <DeleteButton url={blob.url} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <GoBackButton />
    </div>
  );
}
