// Importamos Express para poder usar su enrutador
const express = require("express");

// Creamos una instancia del enrutador de Express
const router = express.Router();

// Importamos el controlador que contiene la lógica para cada ruta de cliente
const clientesController = require("../controllers/clientesController");

// ====================
// Rutas para clientes
// ====================

// Ruta para crear un nuevo cliente
// Método POST → Se usa para enviar datos y crear algo nuevo en la base de datos
router.post("/", clientesController.crearCliente);

// Ruta para obtener todos los clientes
// Método GET → Se usa para leer o consultar información
router.get("/", clientesController.obtenerClientes);

// Ruta para obtener un cliente específico por su ID
// :id es un parámetro dinámico que se recibe desde la URL
router.get("/:id", clientesController.obtenerClientePorId);

// Ruta para actualizar un cliente por su ID
// Método PUT → Se usa para actualizar toda la información de un recurso
router.put("/:id", clientesController.actualizarCliente);

// Ruta para eliminar un cliente por su ID
// Método DELETE → Se usa para eliminar un recurso
router.delete("/:id", clientesController.eliminarCliente);

// Exportamos el enrutador para poder usarlo en el archivo principal (app.js o index.js)
module.exports = router;
