
const ExtensionCard = (props) => {
    const {cardData, hasToggled, removeButton, themeColor} = props;
    const {logo, name, description, isActive} = cardData;
    return (
        <div className={`Card ${themeColor}`}
         style={{background:themeColor === "light" ? "#ffffff" 
            : "hsl(225, 23%, 24%)",position:"relative",
            color:themeColor === "light" ? "hsl(227, 75%, 14%)" : "hsl(0, 0%, 93%)"}}>
            <div className="Card-top">
                    <div className="card-img">
                        
                        <img src={process.env.PUBLIC_URL + logo} alt="Extension-img" />
                    </div>
                    <div className="card-details">
                        <div className="card-head-head" 
                        style={{color: themeColor === "light" ? "hsl(225, 23%, 24%)" : "hsl(0, 0%, 93%)"}}>{name}</div>
                        <div className="card-head-description"
                        style={{color: themeColor === "light" ? "hsl(225, 23%, 24%)" : "hsl(0, 0%, 93%)"}}>{description}</div>
                    </div>
                </div>
                <div style={{alignItems:"center",display:"flex", justifyContent:"space-between"}}
                 className="card-bottom">
                    <button 
                    style={{background:"none",display:"block",
                        border:`1px solid ${themeColor === "light" ? "hsl(225, 23%, 24%)" : " hsl(0, 0%, 78%)"}`, color: themeColor === "light" ? "hsl(225, 23%, 24%)" : "hsl(0, 0%, 93%)"}}
                     onClick={() => removeButton(name)} 
                     className={`card-botton-left ${themeColor} ${themeColor === "light" ? "removeBtnLight" : "removeBtnDark"} `}>
                        Remove
                        </button>
                    
                    <div onClick={() => hasToggled(name) }
                     className ={` toggle1 ${isActive ? "bg-orange" : "bg-gray"} `}>

                        <div className={`toggle2 ${isActive ? "translate-x-5" : ""}`}></div>

                    </div>
                </div>
        </div>
    )
}

export default ExtensionCard;