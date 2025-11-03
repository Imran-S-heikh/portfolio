import GoogleAnalytics from "@dev/components/GoogleAnalytics";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.scss";

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL!),
  title: {
    default: "Full Stack Web Developer | Imran Shaikh",
    template: "%s | Imran Shaikh",
  },
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
  openGraph: {
    type: "website",
    locale: "en_US",
    countryName: "Bangladesh",
    description:
      "Explore the digital realm of Imran Shaikh, a passionate Full Stack Web Developer based in Khulna, Bangladesh. Journey through a showcase of innovative projects, crafted with the latest technologies, and experience the seamless fusion of creativity and functionality. Welcome to a world where ideas come to life through code. 🚀💻 #WebDevelopment #TechInnovation #FullStackDeveloper",
    title: "Imran Shaikh | Full Stack Web Developer Portfolio",
    alternateLocale: "bn_BD",
    siteName: "Imran Shaikh",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@imrandev",
    site: "@imrandev",
    title: "Imran Shaikh | Full Stack Web Developer Portfolio",
    description:
      "Explore the world of Imran Shaikh, a passionate Full Stack Web Developer from Khulna, Bangladesh. See ideas come to life through cutting-edge tech. Discover innovative projects and the art of seamless web development",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
      </head>
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
