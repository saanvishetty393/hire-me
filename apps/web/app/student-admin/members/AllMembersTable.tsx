'use client'
import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { cellStyle, buttonStyle } from './styles'

type Member = {
  id: number
  name: string
  username: string
  email: string
  joinedDate: string
}

const initialMembers: Member[] = [
  {
    id: 1,
    name: 'Priya Nair',
    username: 'priyan',
    email: 'priyan@stanford.edu',
    joinedDate: 'January 2026',
  },
  {
    id: 2,
    name: 'Marcus Webb',
    username: 'mwebb22',
    email: 'mwebb22@stanford.edu',
    joinedDate: 'February 2026',
  },
  {
    id: 3,
    name: 'Sara Kim',
    username: 'sarak',
    email: 'sarak@stanford.edu',
    joinedDate: 'March 2026',
  },
]

export default function AllMembersTable() {
  const [members, setMembers] = useState<Member[]>(initialMembers)
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  function toggle(id: number) {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((i) => i !== id))
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }

  function handleDeleteSelected() {
    setMembers(members.filter((m) => !selectedIds.includes(m.id)))
    setSelectedIds([])
  }

  function handleDeleteOne(id: number) {
    setMembers(members.filter((m) => m.id !== id))
    setSelectedIds(selectedIds.filter((i) => i !== id))
  }

  return (
    <div className="flex flex-col gap-3 p-4">
      <table className="border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className={cellStyle}></th>
            <th className={cellStyle}>Name</th>
            <th className={cellStyle}>Username</th>
            <th className={cellStyle}>Email</th>
            <th className={cellStyle}>Joined Date</th>
            <th className={cellStyle}></th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td className={cellStyle}>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(member.id)}
                  onChange={() => toggle(member.id)}
                />
              </td>
              <td className={cellStyle}>{member.name}</td>
              <td className={cellStyle}>{member.username}</td>
              <td className={cellStyle}>{member.email}</td>
              <td className={cellStyle}>{member.joinedDate}</td>
              <td className={cellStyle}>
                <button onClick={() => handleDeleteOne(member.id)}>
                  <Trash2 size={16} className="text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleDeleteSelected}
        disabled={selectedIds.length === 0}
        className={`${buttonStyle} disabled:opacity-50`}
      >
        Delete Selected
      </button>
    </div>
  )
}
