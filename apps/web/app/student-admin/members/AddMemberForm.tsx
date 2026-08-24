'use client'
import { useState } from 'react'
import { inputStyle, buttonStyle } from './styles'

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
        className={inputStyle}
      />

      <input
        placeholder="UserName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className={inputStyle}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputStyle}
      />

      <button type="submit" className={buttonStyle}>
        Add Member
      </button>
    </form>
  )
}
