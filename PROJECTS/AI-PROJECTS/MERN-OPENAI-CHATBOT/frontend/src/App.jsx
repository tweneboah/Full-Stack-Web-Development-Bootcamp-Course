import { BrowserRouter, Route, Routes } from "react-router-dom";
import GenerateImage from "./components/GenerateImage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GenerateImage />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
