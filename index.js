// Importamos el módulo express para crear el servidor
const express = require("express");

// Creamos una instancia de la aplicación Express
const app = express();

// Importamos la función que conecta a la base de datos MongoDB
const connectDB = require("./config/db");

// Llamamos a la función para conectar a la base de datos "ejemplo2"
connectDB();

// Middleware que permite que Express entienda los datos en formato JSON
// Es necesario para poder leer lo que se envía en el cuerpo de las peticiones (req.body)
app.use(express.json());

// ============================
// Definir las rutas de la API
// ============================

// Cualquier ruta que empiece con /api/clientes usará las rutas definidas en routes/clientes.js
app.use("/api/clientes", require("./routes/clientes"));

// Cualquier ruta que empiece con /api/pedidos usará las rutas definidas en routes/pedidos.js
app.use("/api/pedidos", require("./routes/pedidos"));

// Definimos el puerto en el que se va a ejecutar el servidor
// Si existe una variable de entorno PORT, la usa; si no, usará el 3000 por defecto
const PORT = process.env.PORT || 3000;

// Iniciamos el servidor y mostramos un mensaje cuando esté listo
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
