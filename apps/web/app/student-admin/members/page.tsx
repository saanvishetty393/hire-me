'use client'
import AddMembers from './AddMemberForm'
import BulkImportForm from './BulkImportForm'
import { useState } from 'react'

export default function MembersPage() {
  const [activeTab, setActiveTab] = useState('individual')

  return (
    <div>
      <button onClick={() => setActiveTab('individual')}>Add Individually</button>
      <button onClick={() => setActiveTab('bulk')}>Bulk Import</button>

      {activeTab === 'individual' && <AddMembers />}
      {activeTab === 'bulk' && <BulkImportForm />}
    </div>
  )
}
