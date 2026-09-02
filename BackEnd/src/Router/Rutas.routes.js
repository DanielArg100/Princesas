const express= require('express')
// --> Rutas de la API para la Tabla Princesas
const Rutas= express.Router()
// --> Trae la Función para Registrar Datos en la Tabla Princesas
const FuncionverTabla= require('../Controller/Princesas.controller')

// --> Rutas para Ver los Datos de la Tabla Princesas
Rutas.get('/verTabla',FuncionverTabla.verTablaPrincesas)

// --> Exporta las rutas para que puedan ser utilizadas en otros archivos
module.exports=Rutas;