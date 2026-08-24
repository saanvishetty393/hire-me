"use client"
import AddMembers from './AddMemberForm'
import BulkImportForm from './BulkImportForm'
import { useState } from "react"
import { Users, TrendingUp, Clock } from "lucide-react"

export default function MembersPage() {
  const [activeTab, setActiveTab] = useState("individual")

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Members</h1>

      <div className="flex gap-4 mb-6">
        <div className="flex items-center gap-3 border border-gray-300 rounded p-4 flex-1">
          <Users className="text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Total Members</p>
            <p className="text-xl font-semibold">128</p>
          </div>
        </div>
        <div className="flex items-center gap-3 border border-gray-300 rounded p-4 flex-1">
          <TrendingUp className="text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Active This Week</p>
            <p className="text-xl font-semibold">34</p>
          </div>
        </div>
        <div className="flex items-center gap-3 border border-gray-300 rounded p-4 flex-1">
          <Clock className="text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Pending Invites</p>
            <p className="text-xl font-semibold">5</p>
          </div>
        </div>
      </div>

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