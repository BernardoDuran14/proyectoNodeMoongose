// Importamos mongoose para usarlo en la definición del esquema del cliente
const mongoose = require("mongoose");

// Creamos un esquema (estructura) para los documentos de la colección "clientes"
const ClienteSchema = new mongoose.Schema({
  // Campo "nombre": debe ser un texto (String) y es obligatorio (required: true)
  nombre: {
    type: String,
    required: true,
  },

  // Campo "email": también es obligatorio y debe ser único (no se puede repetir)
  email: {
    type: String,
    required: true,
    unique: true,
  },

  // Campo "telefono": es opcional (no tiene required), pero si se pone, debe ser texto
  telefono: {
    type: String,
  },
});

// Exportamos el modelo llamado "Cliente", basado en el esquema que creamos
// Esto crea o usa automáticamente una colección llamada "clientes" en la base de datos
module.exports = mongoose.model("Cliente", ClienteSchema);
