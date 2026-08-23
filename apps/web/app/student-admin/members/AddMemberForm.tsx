'use client'
import { useState } from 'react'
export default function AddMembers() {
  const [fullName, setFullName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log('submitted:', fullName)
    console.log('submitted:', userName)
    console.log('submitted:', email)
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4">
      <input
        placeholder="FullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
      />

      <input
        placeholder="UserName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
      />

      <button type="submit" className="bg-green-600 text-white rounded px-4 py-2 self-start">
        Add Member
      </button>
    </form>
  )
}
