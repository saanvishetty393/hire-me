import Link from 'next/link'

export default function StudentAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <nav>
        <Link href="/student-admin/job-feed">Job Feed</Link>
        <Link href="/student-admin/applications">My Applications</Link>
        <Link href="/student-admin/members">Members</Link>
      </nav>
      <main>{children}</main>
    </div>
  )
}
