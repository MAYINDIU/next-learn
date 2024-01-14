import Link from "next/link";
export const metadata = {
  title: "This is a about us page",
  description: "About us page",
};
export default function AboutLayout({ children }) {
  return (
    <div>
      <nav>
        <ul class="flex gap-6">
          <li>
            {" "}
            <Link href="/about/mission">MISSION</Link>
          </li>
          <li>
            {" "}
            <Link href="/about/vission">VISSION</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
