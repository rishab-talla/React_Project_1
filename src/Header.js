import { useState } from "react";
const Header = ({theme, toggleThemeFunc}) => {

    

    return (
        <div className={`header-head ${theme === "light" ? "backgroundColorLight" : "backgroundColorDark"} ${theme}`}>
            <img className="extension-logo" src={process.env.PUBLIC_URL +"/assets/images/logo.svg"} />
            <div onClick={() => toggleThemeFunc()}
             className= {`icon-sun-container  ${theme}`} >
                <img className="theme-logo" src={theme === "dark" ? process.env.PUBLIC_URL +"/assets/images/icon-sun.svg" :
                    process.env.PUBLIC_URL + "/assets/images/icon-moon.svg"
                 } />
            </div>
        </div>
        
    )
}

export default Header;
