import React from "react";
import "./informacion.css";
import List from "../Lista/Lista";

const Biography = (props) => {
return (
  <div>
    <h3>{props.titulo}</h3>
    <p>{props.parrafo } </p>
  </div>
)
}

const Informacion = (props) => {
  return (
    <div>
      <List
        titulo="Experiencia en peliculas"
        items={props.experience}
      />
      <List
        titulo="Educacion"
        items={props.educacion}
      />
      <Biography
        titulo="Biografia"
        parrafo={props.biography}
      />
    </div>
  );
};

export default Informacion;
