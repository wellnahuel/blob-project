import { list } from "@vercel/blob";
import DownloadButton from "./download-button";

export default async function AllFiles() {
  const { blobs } = await list();
  console.log({ blobs });
  return (
    <div>
      all files
      {blobs.map((blob) => (
        <div key={blob.url}>
          {blob.pathname} - <DownloadButton url={blob.url} />
        </div>
      ))}
    </div>
  );
}
