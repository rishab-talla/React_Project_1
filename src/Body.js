import { useState } from "react";
import ExtensionCard from "./ExtensionCard"; 
import data from "./data.json";
import "./index.css";

const Body = ({theme, toggleThemeFunc}) => {
    const [allFilter, setAllFilter] = useState("yes");
    const [activeFilter, setActiveFilter] = useState("no");
    const [inactiveFilter, setInactiveFilter] = useState("no");

    const [cardsData, setCardsData] = useState(data);
    const [filterTab, setFilterTab] = useState("All");

    const[searchText, setSearchText] = useState("");

    const handleToggle = (name) => {
        const updated = cardsData.map((card) => {
        return card.name === name ? {...card, isActive:!card.isActive} : card;
        });
        
        setCardsData(updated);    
    }

    const handleRemoveButton = (name) => {
        const updated = cardsData.filter((card) => {
            return card.name !== name;
        });

        setCardsData(updated);
    }

    const filteredData = cardsData.filter((card) => {
        if(filterTab === "Active") return card.isActive;
        if(filterTab === "Inactive") return !card.isActive;
        return true;
    })


    return (
        <div className={`Body ${theme}`}>
            <div className="Body-head ">
                <div className="Body-head-left"
                style={{color: theme === "light" ? "hsl(225, 23%, 24%)" : "hsl(0, 0%, 93%)"}}>Extensions List</div>
                    <div className="Body-head-right-parent" style={{display: "flex",marginTop:".7rem"}}>
                    <div className="search-container"
                    style={{display:"flex", alignItems:"center", justifyContent:"space-between",marginRight:"8rem"}}>
                        <input className={`searchInput ${theme}`}
                         onChange={(e) => {
                            setSearchText(e.target.value);
                        }}

                        onKeyDown={(e) => {
                            if(e.key === "Enter"){
                                const searchData = cardsData.filter((card) => {
                                    return card.name.toLowerCase().includes(searchText.toLowerCase());
                                })

                            setCardsData(searchData);
                            setAllFilter("no");
                            setActiveFilter("no");
                            setInactiveFilter("no");
                            }

                        }}

                        style={{padding:".3rem .6rem",border:"none",borderRadius:".5rem",marginRight:".5rem",fontWeight:"bold",background: theme === "light" ? "#ffffff" 
                            : "hsl(225, 23%, 24%)" }}
                        placeholder="search for extentions..." />
                        <i
                        onClick={() => {
                            const searchData = cardsData.filter((card) => {
                                return card.name.toLowerCase().includes(searchText.toLowerCase());
                            })

                            setCardsData(searchData);
                            setAllFilter("no");
                            setActiveFilter("no");
                            setInactiveFilter("no");
                        }} 
                        style={{marginRight:".6rem"}} className="fa-solid fa-magnifying-glass"> </i>
                    </div>

                    <ul className={`Body-head-right ${theme}`}
                    style={{display:"flex"}}>
                    <li onClick={() => {

                            setAllFilter("yes");
                            setActiveFilter("no");
                            setInactiveFilter("no");
                            setFilterTab("All");
                            // setCardsData(data);
                        
                    }}
                     style={{background:allFilter === "yes" ? "hsl(3, 86%, 64%)" 
                     : `${theme === "light" ? "#ffffff" : "rgb(40, 59, 85)" }`,
                     color:allFilter === "yes" ? `${theme === "light" ? "#ffffff" : "hsl(227, 75%, 14%)"  }`:
                     `${theme === "light" ? "hsl(227, 75%, 14%)" : "hsl(217, 61%, 90%)" }`  }}>All</li>

                    <li onClick={() => {
                            
                            // const filter = data.filter((card) => {
                            //     return card.isActive === true;
                            // })
                            setActiveFilter("yes");
                            setAllFilter("no");
                            setInactiveFilter("no");
                            setFilterTab("Active");
                            // setCardsData(data);
                        
                    }} style={{background:activeFilter === "yes" ? "hsl(3, 86%, 64%)" 
                     : `${theme === "light" ? "#ffffff" : "rgb(40, 59, 85)" }`,
                     color:activeFilter === "yes" ? `${theme === "light" ? "#ffffff" : "hsl(227, 75%, 14%)" }`:
                     `${theme === "light" ? "hsl(227, 75%, 14%)" : "hsl(217, 61%, 90%)" }`}}>Active</li>

                    <li onClick={() => {
                            // const filter = data.filter((card) => {
                            //     return card.isActive === false;
                            // })
                            
                            setInactiveFilter("yes");
                            setAllFilter("no");
                            setActiveFilter("no");
                            setFilterTab("Inactive");
                            // setCardsData(data);

                    }} style={{background:inactiveFilter === "yes" ? "hsl(3, 86%, 64%)" 
                     : `${theme === "light" ? "#ffffff" : "rgb(40, 59, 85)" }`,
                     color:inactiveFilter === "yes" ? `${theme === "light" ? "#ffffff" : "hsl(227, 75%, 14%)" }`:
                     `${theme === "light" ? "hsl(227, 75%, 14%)" : "hsl(217, 61%, 90%)" }`}}>Inactive</li>
                     
                </ul>
            </div>
            </div>
            <div className={filteredData.length === 0 ? "" : "Cards-container"}>
                { filteredData.length === 0 ? (
                     <h2 className="empty-search-list"
                      style={{textAlign:"center",marginTop:"3rem"}}>No such Extension!</h2>
                     
                ) : 
                (filteredData.map((card) => 
                    (
                    <ExtensionCard
                    key = {card.name}
                    cardData = {card}
                    hasToggled = {handleToggle}
                    removeButton = {handleRemoveButton}
                    themeColor = {theme}
                    />  
                    )  
                ))
                }
                
            </div>
        </div>
    )
}

export default Body;