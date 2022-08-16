import React from "react";
import "./showInformation.css";

function ShowInformation(props) {
  const renderInformation = props.items.map((actor) => {
    return (
      <div>
        <li>Name:{actor.name}</li>
        <li>last Name:{actor.lastName}</li>
        <li>Age:{actor.age}</li>
        <li>nacionality:{actor.nacionality}</li>
      </div>
    );
  });
  return (
    <div className="container-information">
      <p>Personal Information</p>
      <ul>{renderInformation}</ul>
    </div>
  );
}

export default ShowInformation;
