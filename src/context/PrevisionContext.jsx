import { createContext, useState } from "react";

export const PrevisionContext = createContext()

export function PrevisionContextProvider({children}) {
    const [data, setData] = useState(null)

    const [hideContainer, setHideContainer] = useState(false);

    const [backButton, setBackButton] = useState(false)
  
    const setCityFetch = (city) => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=pt_br&units=metric&appid=095004660f2019fffa4d18aab871dabc`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }

    return (
      <PrevisionContext.Provider value={{data, setData, hideContainer, setHideContainer, backButton, setBackButton, setCityFetch}}>
        {children}
      </PrevisionContext.Provider>
    )
}