const sql = require('sqlite3').verbose()
const path = require("path")
const { ERROR } = require('sqlite3')

//--> Crea la Base de Datos y la Tabla Princesas si no existen
const ConexionBD = new sql.Database('./src/db/data.db', (error) => {
    //--> Manejo de errores en caso de que la base de datos no se pueda crear
    if(error){
        console.error('No se Creo la Base de Datos ❌',error.message)
    }
    else{
        console.log('Se Creo la Base de Datos Correctamente ✅')
        // --> .RUN Para ejecutar una consulta SQL que crea la tabla Princesas si no existe
        ConexionBD.run(
            // --> Consulta SQL para crear la tabla Princesas con los campos ID_Planeta, Nombre, Descripcion y Dis
            `
                CREATE TABLE IF NOT EXISTS Princesas(
                    ID_Princesa INTEGER PRIMARY KEY AUTOINCREMENT,
                    Nombre TEXT NOT NULL,
                    Historia TEXT NOT NULL,
                    Personalidad TEXT NOT NULL
                )
            `,(error)=>{
                if(error){
                    console.error('No se Logro crear la Tabla Tabla Princesas❌',error.message)
                }
                else{
                    console.log('Tabla Princesas creada con exito ✅')
                }
            }
        )
    }
})
// --> Exporta la conexión a la base de datos para que pueda ser utilizada en otros archivos
module.exports=ConexionBD;