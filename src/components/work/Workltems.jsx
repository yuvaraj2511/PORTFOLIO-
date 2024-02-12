import React from "react";

const Workltems = ({ item }) => {
  return (
    <div className="work__Card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="woke__title">{item.title}</h3>
      <a href="#" className="work__button">
        Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default Workltems;
