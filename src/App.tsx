import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Place } from "./utils/Place";

import Layout from "./Pages/Layout";
import Homepage from "./Pages/Homepage";
import Faq from "./components/Faq/Faq";
import Login from "./components/Login/Login";
import PlaceDetail from "./Pages/PlaceDetail";

const URL = "https://api.openbrewerydb.org/v1/breweries?per_page=6";

function App() {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch(URL);
        const data: Place[] = await res.json();
        setPlaces(data);
      } catch (err) {
        console.log("ERROR ", err);
      }
    }

    fetchData();
  }, []);

  console.log(places);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage places={places} />} />
          <Route path="faq" element={<Faq />} />
          <Route path="login" element={<Login />} />
          <Route path="/placeDetail/:name" element={<PlaceDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
