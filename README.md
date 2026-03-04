# Atlas IDE Download Site

A simple, elegant download page for Atlas IDE built with Next.js and ready to deploy on Vercel.

## Setup Instructions

1. **Upload the Setup File**
   - Place `Atlas-Setup-1.2.7.exe` in the `public/` folder

2. **Deploy to Vercel**
   ```bash
   npm install
   vercel
   ```

3. **Or Run Locally**
   ```bash
   npm install
   npm run dev
   ```
   Then visit `http://localhost:3000`

## Features

- Clean, modern UI with gradient background
- One-click download button
- Mobile responsive
- Fast and lightweight
- Zero dependencies (other than Next.js)

## File Structure

```
atlas-download-site/
├── app/
│   ├── layout.js       (Root layout)
│   ├── page.js         (Main download page)
│   └── globals.css     (Styling)
├── public/
│   └── Atlas-Setup-1.2.7.exe  (YOUR SETUP FILE HERE)
├── package.json
├── next.config.js
├── vercel.json
└── README.md
```

## Notes

- The download button will trigger a direct download of the exe file
- No backend needed - everything is static
- Works out of the box with Vercel's free tier
