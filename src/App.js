import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SingleFruit } from "./components/SingleFruitPage";
import { AllFruits } from "./components/AllFruits";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<AllFruits />} />
          <Route path="/:id" element={<SingleFruit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
