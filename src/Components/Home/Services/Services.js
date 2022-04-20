import React from "react";
import useServices from "../../Hooks/useServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Services.css";

const Services = () => {
  const [Services, setServices] = useServices();
  return (
    <div>
      <div className="services">
        {Services.map((service) => (
          <div className="service-info" key={service.id}>
            <img src={service.img} alt="" />
            <div className="service-info-text">
              <p>Treatment : {service.name}</p>
              <p>Procedure: {service.description}</p>
              <p>Price: {service.price} Tk</p>
            </div>
            <button className="btn-cart">
              <p className="btn-text">Book an Appointment</p>
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
