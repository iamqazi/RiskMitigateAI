import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "RiskMitigateAI ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {" "}
      <head>
        <link rel="icon" href="/Favicon.png" type="image/x-icon" />
      </head>
      <body className="bg-black">
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
