import { Poppins } from "next/font/google"
import Header from "./components/Header"
import "./globals.css"

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Bat Media",
  description: "Web development. Simple project to see Nexs.js version 13",
  keywords:
    "web development, next, javascript, react, html, css, battaglia, developer, dev",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
