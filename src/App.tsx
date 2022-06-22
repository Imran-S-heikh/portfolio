import { Route, Routes } from "react-router-dom";
import './App.scss';
import Footer from "./components/footer/Footer.component";
import Header from "./components/header/Header.component";
import About from "./pages/about/About.page";
import Contact from "./pages/contact/Contact.page";
import Home from "./pages/home/Home.page";
import Projects from "./pages/projects/Projects.page";

function App() {
  return (
    <div className="flex  min-h-screen relative font-fira">
      <div className="bg-blue-base flex-1 m-10 rounded-xl border border-gray-base">
        <div className="flex flex-col h-full">
          <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/*" element={<About/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/contact" element={<Contact/>}/>
            </Routes>

          <Footer />
        </div>

      </div>
    </div>
  );
}

export default App;
