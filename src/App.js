import React from 'react';
import './App.css';
//Importar los componentes que voy a renderizar
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
//importo el hook { useState } que usaré dentro de la función App
import { useState } from 'react'; 
import video from './components/build/Rain.mp4'
import axios from 'axios'

export default function App() {
  //defino mi estado local cities y su función seteadore setCities
  //el valor inicial de cities será un array vacío ([])
  const [cities, setCities] = useState([]);
  //defino mi variable apiKey
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b"
  //defino la función onSearch
  async function onSearch(ciudad) {

   console.log(ciudad)
    const recurso= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)

    console.log(recurso)
        if(recurso !== undefined){
          console.log('acaaa')
          const ciudad = {
            min: Math.round(recurso.data.main.temp_min),
            max: Math.round(recurso.data.temp_max),
            img: recurso.data.weather[0].icon,
            id: recurso.data.id,
            wind: recurso.data.wind.speed,
            temp: recurso.data.main.temp,
            name: recurso.data.name,
            weather: recurso.data.weather[0].main,
            clouds: recurso.data.clouds.all,
            latitud: recurso.data.coord.lat,
            longitud: recurso.data.coord.lon
          };
         
          console.log( ciudad)
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }

        

    }
    //defino la función onClose
    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id != id));
    }

  return (
    //renderizo los componentes
    <div className="App">
        <video className="video" src={video} autoPlay muted loop/>
       <div className='contain-app'>
        <Nav onSearch={onSearch}/>
        <Cards cities={cities} onClose={onClose} />
        </div>
    </div>
  );
}
