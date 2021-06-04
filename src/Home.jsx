import React from 'react';
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home__content">
                <div className="content1">
                    <h1>FACE MASK MANAGEMENT</h1>
                </div>
                <div className="content2">
                    <h4>University of the Delhi, College of Human
                    Economics, Clothing, Textiles, and Interior
                    Design Department
                </h4>
                </div>

            </div>

            <div className="home__Image">
                <img className="home__image" src="https://friendlystock.com/wp-content/uploads/2020/04/3-chubby-man-wearing-face-mask-cartoon-clipart.jpg" />
            </div>

        </div>
    )
}

export default Home;
