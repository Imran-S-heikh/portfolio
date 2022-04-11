import './App.css';
import Home from "./pages/home/Home.component";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black-dark">
      <div className="bg-black-base flex-1 m-20 rounded-xl">
        <Home />
      </div>
    </div>
  );
}

export default App;
