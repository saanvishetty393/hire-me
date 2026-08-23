import Link from 'next/link'

export default function StudentAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <nav className="flex flex-col gap-3 w-48 p-4 border-r border-gray-200">
        <Link href="/student-admin/job-feed">Job Feed</Link>
        <Link href="/student-admin/applications">My Applications</Link>
        <Link href="/student-admin/members">Members</Link>
      </nav>
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
