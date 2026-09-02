// --> Sirve para Registrar, Ver, Modificar y Eliminar Datos de la Tabla Princesas
const express = require('express')
// --> Trae la Conexion de la Base de Datos
const ConexionBD = require('../db/database');

// - Tiana Merida Pocahontas

// - ID, Nombre, Pelicula, Tiempo, Villano.

const verTablaPrincesas = (req, res) => {
    // --> Consulta SQL para seleccionar todos los datos de la tabla Princesas
    const query = `SELECT * FROM Princesas`
    // --> Ejecuta la consulta SQL para obtener los datos de la tabla Princesas
    ConexionBD.all(query, [], (error, Tabla) => {
        // --> Manejo de errores en caso de que la consulta falle
        if (error) {
            console.error('No se logro Ver los Datos ❌', error.message)
            return res.status(500).json({ error: 'Error al Registrar los Datos ❌' })
        }
        // --> Código 201 porque los datos se obtuvieron correctamente
        console.log('Datos Obtenidos ✅')
        return res.status(201).json(Tabla)
    })
}

// --> Exporta las funciones para que puedan ser utilizadas en otros archivos
module.exports = {verTablaPrincesas};