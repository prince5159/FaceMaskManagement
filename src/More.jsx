import React from 'react';
import { NavLink } from 'react-router-dom';
import "./More.css";

function More() {
    return (
        <div className="more">
            <div className="more__heading">
                <h1>Cleaning Reusable Face Masks</h1>
            </div>

            <div className="middle__content">
                <img className="middle__image" src="https://imgsc.com/wp-content/uploads/2020/07/4108417-scaled.jpg" />

            </div>

            <div className="last__content">
                <h2>
                    Bring extra face masks and filters with you and place them inside a sealed bag.
                </h2>
                <h4>
                    Have another sealed bag for storing used face masks and filters.
                </h4>
            </div>

            <div className="info__box">
                <div className="box">
                    <div className="infoBox__heading">
                        More Information
                    </div>

                    <div className="links">

                        <div className="link">
                            <a href="https://www.worldometers.info/coronavirus/country/india/" target="_blank" >
                                Know Corona Cases in India
                            </a>
                        </div>
                        <div className="link">
                            <a href="https://www.worldometers.info/coronavirus/" target="_blank" >
                                Know Corona Cases in the World
                            </a>
                        </div>
                        <div className="link">
                            <a href="https://www.who.int/health-topics/coronavirus#tab=tab_2" target="_blank" >
                                Safety Measures for Covid-19
                            </a>
                        </div>
                        <div className="link">
                            <a href="https://www.who.int/news-room/q-a-detail/coronavirus-disease-covid-19-how-is-it-transmitted#:~:text=%E2%80%A2%20Current%20evidence%20suggests%20that,nose%2C%20or%20mouth." target="_blank" >
                                How Covid Spread(Know from WHO)
                            </a>
                        </div>
                        <div className="link">
                            <a href="https://www.rhodes.edu/admission-aid/admitted-students/health-forms/health-awareness/tips-maintaining-good-health" target="_blank" >
                                How to Maintain a Healty LifeStyle
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default More;
