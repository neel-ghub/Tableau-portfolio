import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SinglePageLayout from "./pages/SinglePageLayout";
import MultiPageLayout from "./pages/MultiPageLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/single" element={<SinglePageLayout />} />
          <Route path="/multi" element={<MultiPageLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
