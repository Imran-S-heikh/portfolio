import { Route, Routes } from "react-router-dom";
import './App.scss';
import Footer from "./components/footer/Footer.component";
import Header from "./components/header/Header.component";
import Home from "./pages/home/Home.page";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black-dark relative">
      <div className="bg-black-base flex-1 absolute inset-10 rounded-xl">
        <div className="flex flex-col h-full">
          <Header />

          <div className="justify-center items-center flex-1 flex my-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<h1>About page</h1>} />
              <Route path="/projects" element={<h1>Projects Page</h1>} />
            </Routes>
          </div>

          <Footer />
        </div>

      </div>
    </div>
  );
}

export default App;
