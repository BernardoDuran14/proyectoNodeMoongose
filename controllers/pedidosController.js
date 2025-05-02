// Importamos el modelo Pedido para interactuar con la base de datos
const Pedido = require("../models/pedido");

// ===================
// Crear un nuevo pedido
// ===================
exports.crearPedido = async (req, res) => {
  try {
    // Creamos un nuevo pedido con los datos enviados desde el body del request
    const nuevoPedido = new Pedido(req.body);

    // Guardamos ese pedido en la base de datos
    const pedidoGuardado = await nuevoPedido.save();

    // Respondemos con el pedido guardado y un estado 201 (creado)
    res.status(201).json(pedidoGuardado);
  } catch (error) {
    // Si hay un error, respondemos con estado 500 y el mensaje del error
    res.status(500).json({ error: error.message });
  }
};

// =============================================
// Obtener todos los pedidos (con el cliente incluido)
// =============================================
exports.obtenerPedidos = async (req, res) => {
  try {
    // Buscamos todos los pedidos y usamos .populate para traer los datos del cliente referenciado
    const pedidos = await Pedido.find().populate("clienteId");

    // Enviamos los pedidos encontrados como respuesta
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ========================================
// Obtener un solo pedido por su ID (con cliente)
// ========================================
exports.obtenerPedidoPorId = async (req, res) => {
  try {
    // Buscamos el pedido por su ID y también traemos los datos del cliente relacionado
    const pedido = await Pedido.findById(req.params.id).populate("clienteId");

    // Si no lo encontramos, enviamos un 404
    if (!pedido) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }

    // Si lo encontramos, lo enviamos como JSON
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ===============================
// Actualizar un pedido por su ID
// ===============================
exports.actualizarPedido = async (req, res) => {
  try {
    // Buscamos el pedido por ID y lo actualizamos con los datos recibidos
    const pedidoActualizado = await Pedido.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    // Si no se encuentra el pedido, enviamos un 404
    if (!pedidoActualizado) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }

    // Enviamos el pedido actualizado como respuesta
    res.json(pedidoActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// =============================
// Eliminar un pedido por su ID
// =============================
exports.eliminarPedido = async (req, res) => {
  try {
    // Buscamos y eliminamos el pedido por su ID
    const pedidoEliminado = await Pedido.findByIdAndDelete(req.params.id);

    // Si no se encuentra, enviamos un 404
    if (!pedidoEliminado) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }

    // Si se elimina con éxito, enviamos un mensaje de confirmación
    res.json({ message: "Pedido eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
