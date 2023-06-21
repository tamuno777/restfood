import React from "react";
import PickMeals from "../asset/pick-meals-image.png";
import ChooseMeals from "../asset/choose-image.png";
import DeliveryMeals from "../asset/delivery-image.png";


const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-container">
      
      <div className="about-section-text-container">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        < p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, unde dicta ex quam doloremque itaque voluptatum aperiam. Iure, ex architecto?</p>
     
        </div >

        <div className="work-section-bottom">
          {
            workInfoData.map((data) => (
              <div className="work-section-info" key={data.title}>
                <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
                </div>

                <h2>{data.title}</h2>
                <p>{data.text}</p>

              </div>
            ))
          }

        </div>
      
    </div>
  );
};

export default Work;