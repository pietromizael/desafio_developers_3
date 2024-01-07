import { useState, useEffect, useContext } from "react";
import { PrevisionContext } from "../context/PrevisionContext";

import "./Title.css";

const Title = () => {
  const { data, hideContainer } = useContext(PrevisionContext);

  const [city, setCity] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (data) {
      setCity(data.city);
    }
  }, [data]);

  useEffect(() => {
    if (city) {
      setLatitude(city.coord.lat);
      setLongitude(city.coord.lon);
    }
    else {
      setLatitude(null)
      setLongitude(null)
    }
  });

  return (
    <div className={`title ${!hideContainer ? "hide" : ""}`}>
      <h2>{city ? city.name : "Cidade"}</h2>
      <span>Latitude {latitude} | </span>
      <span>Longitude {longitude}</span>
    </div>
  );
};

export default Title;
