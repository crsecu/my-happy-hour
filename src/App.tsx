import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Nav from "./components/Nav/Nav";
import Faq from "./components/Faq/Faq";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="faq" element={<Faq />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
