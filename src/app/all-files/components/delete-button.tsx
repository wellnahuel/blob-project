"use client";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

type Props = {
  url: string;
};

/**
 * `DeleteButton` is a client-side React component that renders a button for deleting a file.
 *
 * This component uses the FontAwesome trash icon and sends a `DELETE` request to the `/api/delete` endpoint with the file URL as the request body when the button is clicked. After the delete operation, it refreshes the page using the Next.js router to update the file list.
 *
 * @param {Props} props - The properties passed to the component.
 * @param {string} props.url - The URL of the file to be deleted.
 *
 * @returns {JSX.Element} The rendered `DeleteButton` component with a trash icon.
 */

export default function DeleteButton({ url }: Props) {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        await fetch(`/api/delete`, {
          method: "DELETE",
          body: JSON.stringify({ url }),
        });
        router.refresh();
      }}
    >
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  );
}
