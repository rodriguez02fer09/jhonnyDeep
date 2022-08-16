import React from 'react';
import NavBar from './Navbar/Navbar';

import './App.css';
import ShowInformation from './ShowInformation/ShowInformation';
import Informacion  from './Informacion/Informacion';

const optionNavBar = ["Home", "About", "Career", "Education"];
const personalInformation = [
  {
    name: "Johnny",
    lastName: "Deep",
    age: "59",
    nacionality: "USA",
  },
];
const experienceAndEducation = {
  experience: ["Piratas del caribe 1", "Piratas del caribe 2"],
  educacion: ["University of Arts"],
  biography: "John Christopher Depp II (Owensboro, Kentucky; 9 de junio de 1963) es un actor, productor de cine y músico estadounidense. Ha sido nominado en tres ocasiones al Óscar y recibió un Globo de Oro,1​ un premio del Sindicato de Actores y un César.2​Comenzó su carrera en la película de terror A Nightmare on Elm Street de 1984 como Glen Lantz, una de las víctimas de Freddy Krueger. Dos años después, en 1986, tuvo un papel de reparto en Platoon dirigido por Oliver Stone. Su papel de Tom Hanson en la serie de televisión 21 Jump Street lo convirtió en un ídolo adolescente.3​ Mientras trabajaba en esta, Depp actuó en la película Edward Scissorhands, que le valió su primera nominación al Globo de Oro y reconocimiento por parte de la crítica. Posteriormente protagonizó la mayoría de las películas en las que trabajó, entre ellas Sleepy Hollow (1999), Pirates of the Caribbean: The Curse of the Black Pearl (2003) y sus respectivas secuelas, Charlie y la fábrica de chocolate (2005), Sweeney Todd: The Demon Barber of Fleet Street (2008), Alicia en el país de las maravillas (2010) y su secuela Alicia a través del espejo (2016), Animales fantásticos y donde encontrarlos (2016) y su secuela Animales fantásticos: Los crímenes de Grindelwald (2018), entre otras.​",
};
function App() {
  return (
    <div className="App">
      <NavBar opciones={optionNavBar} />
       <section>
         <img
           width="400px"
           height="400px"
           src="johnnydeep.jpeg"
           alt="Foto de Amber"
         />
        <ShowInformation items={personalInformation} />
       </section>
      <Informacion
        experience={experienceAndEducation.experience}
        educacion={experienceAndEducation.educacion}
        biography={experienceAndEducation.biography}
      />
    </div>
  );
}

export default App;









