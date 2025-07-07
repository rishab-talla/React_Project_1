import { useState } from "react";
import ExtensionCard from "./ExtensionCard"; 
import data from "./data.json";
const Body = () => {
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
        <div className="Body">
            <div className="Body-head ">
                <div className="Body-head-left">Extensions List</div>
                <ul className="Body-head-right ">
                    <li >
                        <input onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        style={{color:"white",background:"rgb(40, 59, 85)",padding:".3rem .6rem",border:"none", borderRadius:".5rem",
                            marginRight:".5rem", fontWeight:"bold"
                        }}
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
                    </li>

                    <li onClick={() => {

                            setAllFilter("yes");
                            setActiveFilter("no");
                            setInactiveFilter("no");
                            setFilterTab("All");
                            setCardsData(data);
                        
                    }}
                     style={{background:allFilter === "yes" ? "rgb(255, 0, 0)" : "rgb(40, 59, 85)"}}>All</li>

                    <li onClick={() => {
                            
                            // const filter = data.filter((card) => {
                            //     return card.isActive === true;
                            // })
                            setActiveFilter("yes");
                            setAllFilter("no");
                            setInactiveFilter("no");
                            setFilterTab("Active");
                            setCardsData(data);
                        
                    }} style={{background:activeFilter === "yes" ? "rgb(255, 0, 0)" : "rgb(40, 59, 85)" }}>Active</li>

                    <li onClick={() => {
                            // const filter = data.filter((card) => {
                            //     return card.isActive === false;
                            // })
                            
                            setInactiveFilter("yes");
                            setAllFilter("no");
                            setActiveFilter("no");
                            setFilterTab("Inactive");
                            setCardsData(data);

                    }} style={{background:inactiveFilter === "yes" ? "rgb(255, 0, 0)" : "rgb(40, 59, 85)" }}>Inactive</li>
                </ul>
            </div>
            <div className="Cards-container">
                {filteredData.map((card) => {
                    return (
                    <ExtensionCard
                    key = {card.name}
                    cardData = {card}
                    hasToggled = {handleToggle}
                    removeButton = {handleRemoveButton}
                    />  
                    )  
                })}
                
            </div>
        </div>
    )
}

export default Body;