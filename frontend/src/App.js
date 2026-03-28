import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SinglePageLayout from "./pages/SinglePageLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<SinglePageLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
