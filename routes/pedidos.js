// Importamos Express para poder usar su sistema de rutas
const express = require("express");

// Creamos un enrutador que usaremos para definir nuestras rutas
const router = express.Router();

// Importamos el controlador de pedidos, que contiene las funciones para cada acción
const pedidosController = require("../controllers/pedidosController");

// ====================
// Rutas para pedidos
// ====================

// Ruta para crear un nuevo pedido
// Método POST → Se usa cuando el cliente quiere guardar un nuevo pedido en la base de datos
router.post("/", pedidosController.crearPedido);

// Ruta para obtener todos los pedidos
// Método GET → Se usa para leer todos los pedidos guardados (con información del cliente)
router.get("/", pedidosController.obtenerPedidos);

// Ruta para obtener un pedido específico por su ID
// :id representa un valor dinámico (el ID del pedido)
router.get("/:id", pedidosController.obtenerPedidoPorId);

// Ruta para actualizar un pedido específico por su ID
// Método PUT → Se usa para cambiar la información completa de ese pedido
router.put("/:id", pedidosController.actualizarPedido);

// Ruta para eliminar un pedido por su ID
// Método DELETE → Se usa para borrar ese pedido de la base de datos
router.delete("/:id", pedidosController.eliminarPedido);

// Exportamos este conjunto de rutas para que pueda ser usado en el archivo principal de la app
module.exports = router;
