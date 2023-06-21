import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-900 flex px-8 pb-4  flex-col background-homepage text-white min-h-screen">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
