import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.scss";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Stack Developer | Imran Shaikh",
  description:
    "Explore the portfolio of Imran Shaikh, a skilled Full Stack Web Developer. Discover my projects and skills in web development",
  keywords: [
    "imran shaikh",
    "javascript developer",
    "solana developer",
    "full stack developer",
    "web developer",
    "react",
    "nextjs",
    "typescript",
    "blockchain",
    "rust",
  ],
  creator: "Imran Shaikh",
  authors: [{ name: "Imran Shaikh" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-black-base">
        <div className="flex  min-h-screen relative font-fira">
          <div className="bg-blue-base flex-1 lg:m-10 m-4 rounded-xl border border-gray-base relative overflow-hidden">
            <div className="flex flex-col h-full">
              <Header />

              {children}

              <Footer className="" />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
