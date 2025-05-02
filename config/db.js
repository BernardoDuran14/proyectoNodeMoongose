// Importamos la librería mongoose, que permite conectar y trabajar con MongoDB desde Node.js
const mongoose = require("mongoose");

// Definimos una función asincrónica llamada connectDB para manejar la conexión a la base de datos
const connectDB = async () => {
  try {
    // Intentamos conectarnos a MongoDB en el servidor local (localhost), a la base de datos llamada "ejemplo2"
    await mongoose.connect("mongodb://localhost:27017/ejemplo2", {
      useNewUrlParser: true, // Usamos el nuevo sistema de análisis de URL (buena práctica)
      useUnifiedTopology: true, // Usamos el nuevo motor de monitoreo de conexiones (más estable)
    });

    // Si la conexión es exitosa, mostramos este mensaje en consola
    console.log("MongoDB conectado a la base de datos: ejemplo2");
  } catch (error) {
    // Si ocurre un error en la conexión, lo mostramos en consola
    console.error("Error de conexión a MongoDB:", error);

    // Finalizamos el proceso de Node.js con un código de error (1 significa que hubo un problema)
    process.exit(1);
  }
};

// Exportamos la función para que pueda ser usada en otros archivos (por ejemplo, en app.js)
module.exports = connectDB;
