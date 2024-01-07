import { PrevisionContext } from "../context/PrevisionContext";
import { useContext, useState, useEffect } from "react";

import "./NavInfo.css";

const NavInfo = () => {
  const { data, hideContainer } = useContext(PrevisionContext);

  const [horarios, setHorarios] = useState(null)


  useEffect(() => {
    if (data && data.list) {
      const newHorarios = data.list.map((city) => ({
        clima: city.weather[0].description,
        temperatura: city.main.temp,
        temperaturaMax: city.main.temp_max,
        temperaturaMin: city.main.temp_min,
        sensacaoTermica: city.main.feels_like,
        humidade: city.main.humidity
      }));
      setHorarios(newHorarios);
    }
    else {
      setHorarios(null)
    }
  }, [data]);

  return (
    <div className={`nav-container ${!hideContainer ? "hide" : ""}`}>
      <div className="title-info">
        <h3>Informações Principais</h3>
      </div>
      <div className="infos">
        <span>Clima | {horarios ? horarios[0].clima : "Nublado"} </span>
        <span>Temperatura | {horarios ? `${horarios[0].temperatura}°` : "30"}</span>
        <span>Temperatura Max | {horarios ? `${horarios[0].temperaturaMax}°` : "31°"}</span>
        <span>Temperatura Min | {horarios ? `${horarios[0].temperaturaMin}°` : "25°"}</span>
        <span>Sensação Térmica | {horarios ? `${horarios[0].sensacaoTermica}°` : "33°"} </span>
        <span>Humidade | {horarios ? horarios[0].humidade : "70"}</span>
      </div>
    </div>
  );
};

export default NavInfo;
