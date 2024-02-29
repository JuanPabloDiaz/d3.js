import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "Template App",
  description:
    "Follow tailwindcss installation guide to get started. Install the dependencies and run the development server.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="container mt-10">{children}</div>
      </body>
    </html>
  );
}
