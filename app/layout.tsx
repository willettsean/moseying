import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';

const inter = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Willett Travelogue",
  description: "Stories on the topic of moseying about",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='navbar-container'> 
        <Navbar />
      </div>
      {children}
      </body>
    </html>
  );
}
