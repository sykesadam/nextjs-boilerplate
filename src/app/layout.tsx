import { Inter } from "next/font/google"
import { Providers } from "@/components/providers"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"

import "./globals.css"

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
})

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					inter.variable
				)}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
