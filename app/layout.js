import "./globals.css"

export const metadata = {
  title: "Next 13",
  description: "Intro to Next.js version 13",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
