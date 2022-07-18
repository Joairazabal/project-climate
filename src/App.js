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
    const recurso= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`).data
    // const city= await Promise.resolve(recurso.data)
    // console.log(city)
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
         
          console.log(city, ciudad)
          setCities(oldCities => [...oldCities, city]);
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
