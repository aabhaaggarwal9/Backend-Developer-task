import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Library management system</h1>
      <ul>
        <li>
          <Link href="/DepartmentLeadership">Popular Departments</Link>
        </li>
        <li>
          <Link href="/BookLeadership">Popular Books</Link>
        </li>
      </ul>
    </main>
  );
}
