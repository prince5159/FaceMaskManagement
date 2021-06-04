import React from 'react';
import "./Service.css";
import Card from "./Card.jsx";
import OffCard from "./OffCard";

function Service() {
    return (
        <>
            <div className="service">
                <div className="service__content">
                    <div className="content1">
                        <h1>PROPER WAY TO WAER A FACE MASK</h1>
                    </div>
                    <div className="content2">
                        <h4>
                            Knowing the appropriate ways
                            to wear, take off, clean, and
                            store face masks are critical.
                    </h4>
                    </div>
                    <div className="content3">
                        <p>
                            Using face masks incorrectly may hamper its effectiveness in
                            reducing the risk of virus transmission.
                    </p>
                    </div>
                </div>

                <div className="service__Image">
                    <img className="service__image" src="https://ak.picdn.net/shutterstock/videos/1056022271/thumb/12.jpg" />
                </div>

            </div>

            <div className="mask">
                <div id="MASK_ON" className="maskOn">
                    <div className="maskOn_row1">
                        <Card
                            stepNumber="1"
                            content="Wash hands with soap
                                     and water or sanitize
                                     hands with alcohol
                                     before wearing a face
                                     mask"
                            image="https://i.pinimg.com/originals/74/04/53/7404537c7b55826feb7f9a65b4f61282.gif"
                        />
                        <Card
                            stepNumber="2"
                            content="Do not touch the face
                                     mask while using it.
                                     Wash or sanitize hands
                                     immediately when you
                                     accidentally touched it."
                            image="https://cdn.dribbble.com/users/1815739/screenshots/12127270/dribbble_washing_hands_v1.gif"
                        />
                    </div>
                    <div className="maskOn_row2">
                        <Card
                            stepNumber="3"
                            content="mouth, and chin are
                                     fully covered. There
                                     should be no gaps at
                                     the edges of the face
                                     mask."
                            image="https://cdn.dribbble.com/users/513631/screenshots/11982336/media/df1c98fd359a4a2637f41f527025211c.gif"
                        />
                        <Card
                            stepNumber="4"
                            content="Never share face
                                     masks with anyone."
                            image="https://cdn.dribbble.com/users/1815739/screenshots/12127297/dribbble_people_talking_v1.gif"
                        />
                    </div>
                </div>

                <div id="MASK_OFF" className="maskOff">
                    <div className="maskOff__heading">
                        <h1>Proper Way to Take Off a Face Mask</h1>
                    </div>

                    <div className="maskOff__steps">
                        <OffCard
                            stepNum="1"
                            info="Wash hands with soap and water or
                                  sanitize hands with alcohol before
                                  removing a face mask."
                            image="https://thumbs.dreamstime.com/z/digital-illustration-cartoon-wash-your-hands-icon-cartoon-wash-your-hands-icon-177246448.jpg"
                        />
                        <OffCard
                            stepNum="2"
                            info="Remove the face mask by the ear
                                   bands. Do not pull it under the chin to
                                   prevent cross contamination."
                            image="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/05_take_off-01.jpg"
                        />
                        <OffCard
                            stepNum="3"
                            info="Once removed, fold the face mask
                                   inwards where it touched the mouth."
                            image="https://i.pinimg.com/originals/28/14/db/2814db0d4c7a1eedc31d35efd713491a.png"
                        />
                        <OffCard
                            stepNum="4"
                            info="For disposable face masks, roll used
                                   mask, wrap in tissue, and put in a
                                   sealed bag."
                            image="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/wash-face-mask.png"
                        />
                        <OffCard
                            stepNum="5"
                            info="Used face masks and filters must be
                                  thrown into a yellow trash bin."
                            image="https://5.imimg.com/data5/FI/RO/MW/SELLER-47379854/medical-waste-container-250x250.jpg"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;;

