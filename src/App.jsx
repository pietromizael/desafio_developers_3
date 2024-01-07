import CityInput from "./components/CityInput";
import NavInfo from "./components/NavInfo";
import Title from "./components/Title";
import RainContainer from "./components/RainContainer";

import { PrevisionContextProvider } from "./context/PrevisionContext";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <PrevisionContextProvider>
          <CityInput />
          <Title />
          <NavInfo />
          <RainContainer />
        </PrevisionContextProvider>
      </div>
    </>
  );
}

export default App;
