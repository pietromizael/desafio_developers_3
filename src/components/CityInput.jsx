import { useState, useContext } from "react";
import { PrevisionContext } from "../context/PrevisionContext.jsx";

import "./CityInput.css";

const CityInput = () => {
  const [city, setCity] = useState(null);
  const { data, setCityFetch} = useContext(PrevisionContext);
  const {hideContainer, setHideContainer} = useContext(PrevisionContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setCityFetch(city);
    setHideContainer(true);
  };

  return (
      <div className={`city ${hideContainer ? "hide" : ""}`}>
          <h2>Informações sobre o clima.</h2>
        <div className="city-container">
          <form onSubmit={handleSubmit}>
            <label>
              <span>Cidade:</span>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Digite sua cidade"
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
            <input type="submit" value="Buscar" />
          </form>
        </div>
      </div>

  );
};

export default CityInput;
