import "./globals.css";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:{
    default:'Next.js',
    template:"%s | Component",
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
