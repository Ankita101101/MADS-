import { Navigate, Route, Routes } from "react-router-dom";
import Academy from "./Pages/Academy";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/academy" element={<Academy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;