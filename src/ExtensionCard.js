
const ExtensionCard = (props) => {
    const {cardData, hasToggled, removeButton, themeColor} = props;
    const {logo, name, description, isActive} = cardData;
    return (
        <div className={`Card ${themeColor}`}
         style={{background:themeColor === "light" ? "#ffffff" 
            : "#2c3e50"}}>
            <div className="Card-top">
                    <div className="card-img">
                        
                        <img src={logo} />
                    </div>
                    <div className="card-details">
                        <div className="card-head-head">{name}</div>
                        <div className="card-head-description">{description}</div>
                    </div>
                </div>
                <div className="card-bottom">
                    <button 
                    style={{background:"none"}}
                     onClick={() => removeButton(name)} 
                     className={`card-botton-left ${themeColor} ${themeColor === "light" ? "removeBtnLight" : "removeBtnDark"} `}>Remove</button>
                    <div onClick={() => hasToggled(name) }
                     className ={` toggle1 ${isActive ? "bg-orange" : "bg-gray"} `} style={{display:"inline-flex",marginLeft:"10rem"}}>

                        <div className={`toggle2 ${isActive ? "translate-x-5" : ""}`}></div>

                    </div>
                </div>
        </div>
    )
}

export default ExtensionCard;