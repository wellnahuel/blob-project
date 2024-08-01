"use client";

type Props = {
  url: string;
};

export function DownloadButton({ url }: Props) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank"; // Abrir en una nueva pestaña
    link.rel = "noopener noreferrer"; // Seguridad adicional
    const fileName = url.split("/").pop() || "default-filename"; // Proporcionar un valor predeterminado
    console.log(fileName);
    link.download = fileName; // Establecer el atributo de descarga al nombre del archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <button onClick={handleDownload}>Download</button>;
}
