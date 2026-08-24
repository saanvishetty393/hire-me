"use client";
import { useState } from "react";
import { Trash2 } from "lucide-react";

type Member = {
  id: number;
  name: string;
  username: string;
  email: string;
  joinedDate: string;
};

const initialMembers: Member[] = [
  { id: 1, name: "Priya Nair", username: "priyan", email: "priyan@stanford.edu", joinedDate: "January 2026" },
  { id: 2, name: "Marcus Webb", username: "mwebb22", email: "mwebb22@stanford.edu", joinedDate: "February 2026" },
  { id: 3, name: "Sara Kim", username: "sarak", email: "sarak@stanford.edu", joinedDate: "March 2026" },
];

export default function AllMembersTable() {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  function toggle(id: number) {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((i) => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  function handleDeleteSelected() {
    setMembers(members.filter((m) => !selectedIds.includes(m.id)));
    setSelectedIds([]);
  }

  function handleDeleteOne(id: number) {
    setMembers(members.filter((m) => m.id !== id));
    setSelectedIds(selectedIds.filter((i) => i !== id));
  }

  return (
    <div className="flex flex-col gap-3 p-4">
      <table className="border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-3 py-2"></th>
            <th className="border border-gray-300 px-3 py-2">Name</th>
            <th className="border border-gray-300 px-3 py-2">Username</th>
            <th className="border border-gray-300 px-3 py-2">Email</th>
            <th className="border border-gray-300 px-3 py-2">Joined Date</th>
            <th className="border border-gray-300 px-3 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td className="border border-gray-300 px-3 py-2">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(member.id)}
                  onChange={() => toggle(member.id)}
                />
              </td>
              <td className="border border-gray-300 px-3 py-2">{member.name}</td>
              <td className="border border-gray-300 px-3 py-2">{member.username}</td>
              <td className="border border-gray-300 px-3 py-2">{member.email}</td>
              <td className="border border-gray-300 px-3 py-2">{member.joinedDate}</td>
              <td className="border border-gray-300 px-3 py-2">
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
        className="bg-green-600 text-white rounded px-4 py-2 self-start disabled:opacity-50"
      >
        Delete Selected
      </button>
    </div>
  );
}