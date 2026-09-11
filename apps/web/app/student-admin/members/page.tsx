'use client'
import AddMembers from './AddMemberForm'
import BulkImportForm from './BulkImportForm'
import AllMembersTable from './AllMembersTable'
import { useState } from 'react'
import { Users, TrendingUp, Clock } from 'lucide-react'

export default function MembersPage() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Members</h1>

      <div className="flex gap-4 mb-6">
        <div className="flex items-center gap-3 border border-border-subtle rounded p-4 flex-1">
          <Users className="text-text-muted" />
          <div>
            <p className="text-sm text-text-muted">Total Members</p>
            <p className="text-xl font-semibold">128</p>
          </div>
        </div>
        <div className="flex items-center gap-3 border border-border-subtle rounded p-4 flex-1">
          <TrendingUp className="text-text-muted" />
          <div>
            <p className="text-sm text-text-muted">Active This Week</p>
            <p className="text-xl font-semibold">34</p>
          </div>
        </div>
        <div className="flex items-center gap-3 border border-border-subtle rounded p-4 flex-1">
          <Clock className="text-text-muted" />
          <div>
            <p className="text-sm text-text-muted">Pending Invites</p>
            <p className="text-xl font-semibold">5</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setActiveTab('all')}
          className={
            activeTab === 'all'
              ? 'border-b-2 border-brand font-semibold px-4 py-2'
              : 'px-4 py-2 text-text-muted'
          }
        >
          All Members
        </button>
        <button
          onClick={() => setActiveTab('individual')}
          className={
            activeTab === 'individual'
              ? 'border-b-2 border-brand font-semibold px-4 py-2'
              : 'px-4 py-2 text-text-muted'
          }
        >
          Add Individually
        </button>
        <button
          onClick={() => setActiveTab('bulk')}
          className={
            activeTab === 'bulk'
              ? 'border-b-2 border-brand font-semibold px-4 py-2'
              : 'px-4 py-2 text-text-muted'
          }
        >
          Bulk Import
        </button>
      </div>

      {activeTab === 'all' && <AllMembersTable />}
      {activeTab === 'individual' && <AddMembers />}
      {activeTab === 'bulk' && <BulkImportForm />}
    </div>
  )
}
