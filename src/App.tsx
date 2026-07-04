import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Invitation from "./pages/DigitalInvitation/Invitation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pechrovi" element={<HomePage />} />
      <Route path="/pechrovi/oznameni" element={<Invitation />} />
    </Routes>
  );
}

export default App;