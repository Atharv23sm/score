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
          <div className="absolute z-50 w-full h-0 backdrop-blur opacity-0 animate-[firstload_2s] flex justify-center items-center">
            <div className="-mt-[4vw] font-[righteous] animate-[firstloadtext_2s]">score</div>
          </div>
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
