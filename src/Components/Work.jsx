import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "PickMeals",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi qui aspernatur doloremque facere perspiciatis incidunt?",
    },
    {
      Image: ChooseMeals,
      title: "ChooseMeals",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, architecto!",
    },
    {
      Image: DeliveryMeals,
      title: "DeliveryMeals",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ets",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary0subheading">Work</p>
        <h1 className="primary0subheading">How it Works?</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          doloremque soluta rem ut alias tempora iste neque ad cum dolore.
        </p>
      </div>
      <div className="work-section-button">
        {workInfoData.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.Image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
