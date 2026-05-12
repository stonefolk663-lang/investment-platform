import './globals.css' // We will create this next
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SpringWealth | Secure Investment Platform',
  description: 'Professional wealth management and investment tracking.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  )
}
