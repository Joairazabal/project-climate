import React, { useState } from "react";
import './Search.css'

export default function SearchBar({onSearch}) {
  //defino estado local para ir guardando lo que escriba el 
  //usuario en la barra de búsqueda
  const [city, setCity] = useState("");
  //defino una función que afectará a mi estado
  //para pasarle el onChange del input
  const handleInputChange = (e) => {
    e.preventDefault();
    setCity(e.target.value)
  }
  return (
    <div className="contain-search">
    <form className="group" onSubmit={(e) => {
      e.preventDefault();
      //cuando haga el submit ejecutaré la función onSearch 
      //con mi estado city es decir, lo que sea que haya escrito
      //el usuario.
      onSearch(city);
    }}>
      <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
      <input
      className="search"
        type="text"
        placeholder="city..."
        onChange={(e)=>handleInputChange(e)}
      />
      <button className="buscar" type="submit">Search</button>
    </form>
    </div>
  );
}
