import Header from "./Header";
import Body from "./Body";
import "./index.css"
import { useState, useEffect } from "react";

function App() {
const [isLightTheme, setIsLightTheme] = useState(false);

    useEffect(() => {

    if (isLightTheme) {
      document.body.style.background = "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)";
      document.body.style.color = "black";
    } else {
      document.body.style.background = "linear-gradient(180deg, #040918 0%, #091540 100%)";
      document.body.style.color = "white";
    }
  }, [isLightTheme]);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <div className={isLightTheme ? "light" : "dark"}>
      <Header 
      theme={isLightTheme ? "light" : "dark"}
      toggleThemeFunc = {toggleTheme}/>
      <Body
      theme={isLightTheme ? "light" : "dark"}
      toggleThemeFunc = {toggleTheme}/>
    </div>
  );
}

export default App;
