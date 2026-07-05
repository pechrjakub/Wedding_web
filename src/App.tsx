import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Invitation from "./pages/DigitalInvitation/Invitation";
/*<Route path="/pechrovi/oznameni/" element={<Invitation />} /> Možno přidat v případě, pokud chci mít oznámení pořád k dispozici*/ 
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pechrovi" element={<HomePage />} />
      <Route path="/pechrovi/oznameni/:slug" element={<Invitation />} />
    </Routes>
  );
}

export default App;