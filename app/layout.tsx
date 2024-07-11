import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import BaseLayout from "@/components/Layout/BaseLayout"
import { LoadingProvider } from "@/provider/LoadingProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "web mobile layout",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <LoadingProvider>
          <BaseLayout>{children}</BaseLayout>
        </LoadingProvider>
      </body>
    </html>
  )
}
