import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UK Expert Amazon Consultants | E-commerce Growth Experts",
  description:
    "Boost your online store with expert Amazon, Shopify, eBay, and Walmart consulting services. We help brands increase sales, improve visibility, and achieve long-term e-commerce growth with customized strategies.",
  keywords: [
    "Amazon consultant",
    "E-commerce expert",
    "Shopify consultant",
    "Amazon growth services",
    "Walmart marketplace expert",
    "eBay consulting",
    "Amazon PPC",
    "E-commerce marketing",
    "Amazon seller support",
    "Online store growth",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background`}>
        <link rel="icon" href="/favicon.svg" />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#18181b",
              color: "#fff",
              border: "1px solid #27272a",
            },
          }}
        />
      </body>
    </html>
  );
}
