import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import News from "./components/News";

export const metadata: Metadata = {
  title: "Score",
  description: "Created by Atharv Mahabal",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body>
        <main className='relative bg-black text-white font-[outfit] select-none'>
          <Navbar />
          <section className='flex flex-col gap-4 md:gap-0 md:flex-row'>
            <Sidebar />
            {children}
            <News />
          </section>
        </main>
      </body>
    </html>
  );
}
