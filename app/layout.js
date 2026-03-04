import './globals.css'

export const metadata = {
  title: 'Atlas IDE',
  description: 'Download Atlas - Your AI Coding Agent',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
