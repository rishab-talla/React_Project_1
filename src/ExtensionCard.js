
const ExtensionCard = (props) => {
    const {cardData, hasToggled, removeButton} = props;
    const {logo, name, description, isActive} = cardData;
    return (
        <div className="Card backgroundColor">
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
                    <button onClick={() => removeButton(name)} className="card-botton-left">Remove</button>
                    <div onClick={() => hasToggled(name) }
                     className ={` toggle1 ${isActive ? "bg-orange" : "bg-gray"} `} style={{display:"inline-flex",marginLeft:"10rem"}}>

                        <div className={`toggle2 ${isActive ? "translate-x-5" : ""}`}></div>

                    </div>
                </div>
        </div>
    )
}

export default ExtensionCard;