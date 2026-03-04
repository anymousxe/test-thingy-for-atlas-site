'use client'

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Atlas-Setup-1.2.7.exe'
    link.download = 'Atlas-Setup-1.2.7.exe'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="container">
      <div className="logo">⚡</div>
      <h1>Atlas IDE</h1>
      <p className="subtitle">
        Your AI-powered coding agent for desktop development
      </p>

      <ul className="features">
        <li>AI-assisted code generation and automation</li>
        <li>Built-in terminal and file management</li>
        <li>Real-time code execution</li>
        <li>Multi-language support</li>
        <li>Integrated development workflow</li>
      </ul>

      <button className="download-btn" onClick={handleDownload}>
        📥 Download Atlas v1.2.7
      </button>

      <div className="version">
        Latest Release: v1.2.7
      </div>
    </div>
  )
}
