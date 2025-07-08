import { useState } from "react";
const Header = ({theme, toggleThemeFunc}) => {

    

    return (
        <div className={`header-head ${theme === "light" ? "backgroundColorLight" : ".backgroundColorDark"} ${theme}`}>
            <img src="/assets/images/logo.svg" />
            <div onClick={() => toggleThemeFunc()}
             className= {`icon-sun-container
            ${theme === "light" ? "backgroundColorLight" : ".backgroundColorDark"} ${theme}`} >
                <img src="/assets/images/icon-sun.svg" />
            </div>
        </div>
        
    )
}

export default Header;
