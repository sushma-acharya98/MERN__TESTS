'use client'
import { Inter } from "next/font/google";
import "./globals.css";;
import Providers from "./provider";
import Nav from "@/component/navBar/page";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className="site_wrapper">
          <Nav/>
        <Providers>
          {children}
        </Providers>
      </div>
      </body>
    </html>
  );
}
