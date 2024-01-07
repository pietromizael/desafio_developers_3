import { useContext, useState, useEffect } from "react";
import {PrevisionContext} from "../context/PrevisionContext"

import "./RainContainer.css";

const RainContainer = () => {
  const {data, setData, hideContainer, setHideContainer} = useContext(PrevisionContext)
  
  const [horariosChuva, setHorariosChuva] = useState(null)
  
  useEffect(() => {
    if(data && data.list) {
      const newHorariosChuva = data.list.map((city) => ({
        horario: city.weather[0].description,
      }))
      setHorariosChuva(newHorariosChuva)
    }
    else {
      setHorariosChuva(null)
    }
  }, [data])

  const handleButton = () => {
    setHideContainer(false)
    setData(null)
  }

  if(horariosChuva) console.log(horariosChuva)

  return (
    <div className={`container-with-button ${!hideContainer ? "hide" : ""}`}>
    <div className="rain-container">
      <h3>Probabilidade de chuva</h3>
      <div className="span-container">
        <div className="p-container">
          <p>18:00</p>
          <p>{horariosChuva ? horariosChuva[0].horario : "Nublado"}</p>
        </div>
        <div className="p-container">
          <p>21:00</p>
          <p>{horariosChuva ? horariosChuva[1].horario : "Nublado"}</p>
        </div>
        <div className="p-container">
          <p>00:00</p>
          <p>{horariosChuva ? horariosChuva[2].horario : "Nublado"}</p>
        </div>
        <div className="p-container">
          <p>03:00</p>
          <p>{horariosChuva ? horariosChuva[3].horario : "Nublado"}</p>
        </div>
        <div className="p-container">
          <p>06:00</p>
          <p>{horariosChuva ? horariosChuva[4].horario : "Nublado"}</p>
        </div>
        <div className="p-container">
          <p>09:00</p>
          <p>{horariosChuva ? horariosChuva[5].horario : "Nublado"}</p>
        </div>
      </div>
    </div>
    <button onClick={handleButton}>Voltar</button>
    </div>
  );
};

export default RainContainer;
