import './globals.css'
import Navbar from './(components)/Navbar'

export const metadata = {
  title: 'Al2 Showcase',
  description: 'Simple static project/team showcase.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-gray-900">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="border-t border-gray-200 mt-16">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Al2</span>
            <span>Built with Next.js + Tailwind</span>
          </div>
        </footer>
      </body>
    </html>
  )
}
