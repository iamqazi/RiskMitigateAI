import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
