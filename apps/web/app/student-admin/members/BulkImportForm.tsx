'use client'
import { useState } from 'react'

type MemberRow = {
  name: string
  username: string
  email: string
}

export default function BulkImportForm() {
  const [content, setContent] = useState('')
  const [rows, setRows] = useState<MemberRow[]>([])

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    const text = await file.text()
    const lines = text.split('\n')
    const rows = lines.slice(1).map((line) => {
      const [name = '', username = '', email = ''] = line.split(',')
      return { name, username, email }
    })
    setContent(text)
    setRows(rows)
  }
  function handleImport() {
    console.log(rows)
  }
  return (
    <div className="flex flex-col gap-3 p-4">
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <pre>{content}</pre>
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
  )
}
