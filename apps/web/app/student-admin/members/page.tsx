"use client"
import AddMembers from './AddMemberForm'
import BulkImportForm from './BulkImportForm'
import {useState} from "react"

export default function MembersPage() {
  const [activeTab, setActiveTab] = useState("individual")

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setActiveTab("individual")}
          className={activeTab === "individual" ? "border-b-2 border-purple-600 font-semibold px-4 py-2" : "px-4 py-2 text-gray-500"}
        >
          Add Individually
        </button>
        <button
          onClick={() => setActiveTab("bulk")}
          className={activeTab === "bulk" ? "border-b-2 border-purple-600 font-semibold px-4 py-2" : "px-4 py-2 text-gray-500"}
        >
          Bulk Import
        </button>
      </div>

      {activeTab === "individual" && <AddMembers />}
      {activeTab === "bulk" && <BulkImportForm />}
      </div>
  )
}