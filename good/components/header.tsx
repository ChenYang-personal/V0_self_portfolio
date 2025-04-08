import Link from "next/link"

export function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Chen Yang
        </Link>
        <div className="flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </a>
          <a href="#experience" className="text-sm font-medium hover:underline underline-offset-4">
            Experience
          </a>
          <a href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
