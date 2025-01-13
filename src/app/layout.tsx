import type { Metadata } from "next";
import { Poppins } from "next/font/google";  // Import the Poppins font
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],  
  subsets: ["latin"],  
  display: "swap",  
  variable: "--font-poppins",  
});

export const metadata: Metadata = {
  title: "SeaMatrix - 2540121644",
  description: "SeaMatrix - Samuel Eka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
