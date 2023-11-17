
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.scss";

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
