import React from 'react';
import "./OffCard.css";

function OffCard(props) {
    return (
        <div className="offCard">
            <div className="offCard__content">
                <h1>Step {props.stepNum}</h1>
                <div className="offCard__content2">
                <h4>
                   {props.info}
                </h4>
                </div>
            </div>

            <div className="offCard__Image">
                <img className="OffCard__image" src={props.image} />
            </div>

        </div>
    )
}

export default OffCard;
