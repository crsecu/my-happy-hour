import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "./Pages/Layout";
import Homepage from "./Pages/Homepage";
import Faq from "./components/Faq/Faq";
import Login from "./components/Login/Login";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(function () {}, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="faq" element={<Faq />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
