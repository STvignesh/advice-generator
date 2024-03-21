import "./App.css";
import logo from "./images/pattern-divider-desktop.svg";
import logo1 from "./images/pattern-divider-mobile.svg";
import diceLogo from "./images/icon-dice.svg";
import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState();
  const [id, setId] = useState();
  const [error, setError] = useState("");
  async function getAdvice() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const { slip } = await response.json();
      console.log(slip);
      console.log(slip.advice);
      setAdvice(`"${slip.advice}"`);
      setId(slip.id);
    } catch (error) {
      setError(error);
    }
  }
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div className="main-container">
      <div className="outer-cont">
        <div className="advice-container-box">
          <h2 className="adviceNumber">advice #{id}</h2>
          <p className="advice">{error === "" ? advice : error}</p>
          <div
            className="
          logo-cont"
          >
            <img
              src={logo}
              alt="seperator-logo"
              className="logo-seperator-desktop"
            ></img>
            <img
              src={logo1}
              alt="seperator-logo"
              className="logo-seperator-mobile"
            ></img>
            <button className="btn" onClick={getAdvice}>
              <img
                src={diceLogo}
                alt="diceLogo"
                className="dice-logo"
                onClick={getAdvice}
              ></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
