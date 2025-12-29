import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Provider from "@/app/provider";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "./ConvexClientProvider";

export const metadata: Metadata = {
  title: "AI Trip Planner",
  description:
    "Plan your trips with AI — powered by Next.js, Clerk, Convex, and Mapbox",
};

// Configure Outfit font
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${outfit.variable} bg-gray-50 text-gray-900`}>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
