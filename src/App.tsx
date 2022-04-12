import './App.scss';
import Home from "./pages/home/Home.page";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black-dark relative">
      <div className="bg-black-base flex-1 absolute inset-10 rounded-xl">
        <Home />
      </div>
    </div>
  );
}

export default App;
