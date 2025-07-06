
import Toggle from "./Toggle";
const ExtensionCard = (props) => {
    const {cardData} = props;
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
                    <button className="card-botton-left">Remove</button>
                    <div style={{display:"inline-flex",marginLeft:"10rem"}}>
                    <Toggle/>
                    </div>
                </div>
        </div>
    )
}

export default ExtensionCard;