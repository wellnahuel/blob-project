import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onRename: (newName: string) => void;
};

export default function RenameModal({ isOpen, onClose, onRename }: Props) {
  const [newName, setNewName] = useState("");

  const handleRename = () => {
    onRename(newName);
    setNewName("");
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{ background: "white", padding: "20px", borderRadius: "4px" }}
      >
        <h2>Rename File</h2>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New file name"
        />
        <button onClick={handleRename}>Rename</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
