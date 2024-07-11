import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Place, defaultPlace } from "../utils/Place";

const BASE_URL = "https://api.openbrewerydb.org/v1/breweries";

function PlaceDetail(): React.JSX.Element {
  const [placeData, setPlaceData] = useState<Place>(defaultPlace);
  const { id } = useParams();

  console.log("DETAIL", placeData);

  // API call to get information about the selected place
  useEffect(
    function () {
      async function getDetails() {
        try {
          const res = await fetch(`${BASE_URL}/${id}`);
          const data: Place = await res.json();
          setPlaceData(data);
        } catch (err) {
          console.log("ERROR ", err);
        }
      }

      getDetails();
    },
    [id]
  );

  return (
    <div>
      <h1>Info about each Place</h1>
      <h3>{placeData.name}</h3>
      <p>Address: {placeData.address_1}</p>
      <p>Phone number: {placeData.phone}</p>
    </div>
  );
}

export default PlaceDetail;
