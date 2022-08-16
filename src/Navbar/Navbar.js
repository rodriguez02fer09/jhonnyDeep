import React from "react";
import "./navbar.css"
// Definición
function NavBar(props) {
  const optionsRender = props.opciones.map((opt) => {
    return (
      <li>
        <a href=" ">{opt}</a>
      </li>
    );
  });

  return (
    <header>
      <ul>{optionsRender}</ul>
    </header>
  );
}
export default NavBar;
