import { useState } from "react";
import ExtensionCard from "./ExtensionCard"; 
import data from "./data.json";
const Body = () => {
    const [allFilter, setAllFilter] = useState("yes");
    const [activeFilter, setActiveFilter] = useState("no");
    const [inactiveFilter, setInactiveFilter] = useState("no");
    const [filteredData, setFilteredData] = useState(data);

    return (
        <div className="Body">
            <div className="Body-head ">
                <div className="Body-head-left">Extensions List</div>
                <ul className="Body-head-right ">
                    <li onClick={() => {
                        if(allFilter === "no") {
                            setAllFilter("yes");
                            setActiveFilter("no");
                            setInactiveFilter("no");
                            setFilteredData(data);
                        }
                    }}
                     style={{background:allFilter === "yes" ? "rgb(255, 0, 0)" : "rgb(40, 59, 85)"}}>All</li>

                    <li onClick={() => {
                        if(activeFilter === "no") {
                            
                            const filter = data.filter((card) => {
                                return card.isActive === true;
                            })
                            setFilteredData(filter);
                            setActiveFilter("yes");
                            setAllFilter("no");
                            setInactiveFilter("no");
                        }
                    }} style={{background:activeFilter === "yes" ? "rgb(255, 0, 0)" : "rgb(40, 59, 85)" }}>Active</li>

                    <li onClick={() => {
                        if(inactiveFilter === "no") {
                            const filter = data.filter((card) => {
                                return card.isActive === false;
                            })
                            setFilteredData(filter);
                            setInactiveFilter("yes");
                            setAllFilter("no");
                            setActiveFilter("no");
                        }
                    }} style={{background:inactiveFilter === "yes" ? "rgb(255, 0, 0)" : "rgb(40, 59, 85)" }}>Inactive</li>
                </ul>
            </div>
            <div className="Cards-container">
                {filteredData.map((card) => {
                    return (
                    <ExtensionCard
                    cardData = {card}/>  
                    )  
                })}
                
            </div>
        </div>
    )
}

export default Body;