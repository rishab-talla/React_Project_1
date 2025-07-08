import Header from "./Header";
import Body from "./Body";
import "./index.css"
import { useState, useEffect } from "react";

function App() {
const [isLightTheme, setIsLightTheme] = useState(false);

    useEffect(() => {

    if (isLightTheme) {
      document.body.style.backgroundColor = "#f0f4ff";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "#0f1124";
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
