"use client";
import { useState } from "react";
import { Upload } from "lucide-react";

type MemberRow = {
  name: string;
  username: string;
  email: string;
};

export default function BulkImportForm() {
  const [rows, setRows] = useState<MemberRow[]>([]);

  async function processFile(file: File) {
    const text = await file.text();
    const lines = text.split("\n");
    const parsedRows = lines.slice(1).map((line) => {
      const [name = "", username = "", email = ""] = line.split(",");
      return { name, username, email };
    });
    setRows(parsedRows);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  }

  function handleDrop(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  }

  function handleDragOver(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
  }

  function handleImport() {
    console.log(rows);
  }

  return (
    <div className="flex flex-col gap-3 p-4">
      <label
        htmlFor="csv-upload"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded p-8 cursor-pointer text-gray-500"
      >
        <Upload size={24} />
        <p>Drag and drop your CSV file here, or click to browse</p>
        <input
          id="csv-upload"
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      <table className="border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-3 py-2">Name</th>
            <th className="border border-gray-300 px-3 py-2">Username</th>
            <th className="border border-gray-300 px-3 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-3 py-2">{row.name}</td>
              <td className="border border-gray-300 px-3 py-2">{row.username}</td>
              <td className="border border-gray-300 px-3 py-2">{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleImport}
        className="bg-green-600 text-white rounded px-4 py-2 self-start"
      >
        Import Members
      </button>
    </div>
  );
}