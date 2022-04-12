import { Route, Routes } from "react-router-dom";
import './App.scss';
import Home from "./pages/home/Home.page";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black-dark relative">
      <div className="bg-black-base flex-1 absolute inset-10 rounded-xl">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<h1>About page</h1>} />
          <Route path="/projects" element={<h1>Projects Page</h1>} />
        </Routes> 
      </div>
    </div>
  );
}

export default App;
