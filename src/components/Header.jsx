import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export function Header() {
  return (
    <header className="text-red-500 text-xl border-b-2">
      <Link href="/" className="mx-10">
        Index
      </Link>
      <Link href="/about" className="mx-10">
        About
      </Link>
    </header>
  );
}
