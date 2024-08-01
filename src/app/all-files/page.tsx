import { list } from "@vercel/blob";
import DeleteButton from "./components/delete-button";
import { DownloadButton } from "./components/download-button";

export default async function AllFiles() {
  const { blobs } = await list();
  console.log({ blobs });
  return (
    <div>
      all files
      {blobs.map((blob) => (
        <div key={blob.url}>
          {blob.pathname} - <DeleteButton url={blob.url} /> -{" "}
          <DownloadButton url={blob.url} />
        </div>
      ))}
    </div>
  );
}
