import React from "react";
import { useState, useEffect } from "react";
import { api } from "../Services/api";
import "./TarjetasP.css"

function Tarjetas() {
  // --> DB:Vacio, Capturamos
  const [BaseDatos, setBaseDeDatos] = useState([]);
  console.log(BaseDatos," + ",setBaseDeDatos)
  useEffect(() => {
    // --> Metodo para ver tablas
    const verTablas = async () => {
      // - Si
      try {
        // - Capturamos la url
        const buscar = await api.get("/verTabla");
        setBaseDeDatos(buscar.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    verTablas();
  }, []);
  return (
    <>
      <div className="Princesas">
        {BaseDatos.map((i) => (
          <div key={i.ID_Princesa} className="Tarjeta">
            <h1>{i.Nombre}</h1>
            <h2>Pelicula: {i.Pelicula}</h2>
            <h3>Fecha: {i.Tiempo}</h3>
            <h3>Villano: {i.Villano}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Tarjetas;
