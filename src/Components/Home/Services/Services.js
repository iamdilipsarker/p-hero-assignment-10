import React from "react";
import useServices from "../../Hooks/useServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Services.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [Services, setServices] = useServices();
  const navigate = useNavigate();

  return (
    <div>
      <h3 className="text-center pt-3">My Services</h3>
      <div className="services">
        {Services.map((service) => (
          <div className="service-info" key={service.id}>
            <img src={service.img} alt="" />
            <div className="service-info-text">
              <p>Treatment : {service.name}</p>
              <p>
                Procedure: <small>{service.description}</small>
              </p>
              <p>Cost: {service.cost} Tk</p>
            </div>
            <button className="btn-cart" onClick={() => navigate("/checkout")}>
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
