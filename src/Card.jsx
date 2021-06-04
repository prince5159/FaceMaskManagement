import React from 'react';
import "./Card.css";

function Card(props) {
    return (
        <div className="card">
            <div className="card__content">
                <div className="card__content1">
                    <h1>Step {props.stepNumber}</h1>
                </div>
                <div className="card__content2">
                    <h4>
                        {props.content}
                    </h4>
                </div>
            </div>
            <div className="Card__Image">
                <img className="card__image" src={props.image} />

            </div>

        </div>
    )
}

export default Card;
