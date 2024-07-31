import { list } from "@vercel/blob";

export default async function AllFiles() {
  const { blobs } = await list();
  console.log({ blobs });
  return (
    <div>
      all files
      {blobs.map((blob) => (
        <div key={blob.size}>
          {blob.pathname} - {blob.url}
        </div>
      ))}
    </div>
  );
}
