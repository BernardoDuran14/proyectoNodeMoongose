// Importamos el modelo Cliente para poder usarlo en este controlador
const Cliente = require("../models/cliente");

// =====================
// Crear un nuevo cliente
// =====================
exports.crearCliente = async (req, res) => {
  try {
    // Creamos una nueva instancia del modelo Cliente con los datos enviados por el cliente (desde el body del request)
    const nuevoCliente = new Cliente(req.body);

    // Guardamos ese nuevo cliente en la base de datos
    const clienteGuardado = await nuevoCliente.save();

    // Respondemos con código 201 (creado) y enviamos el cliente guardado en formato JSON
    res.status(201).json(clienteGuardado);
  } catch (error) {
    // Si algo sale mal, respondemos con un error 500 y el mensaje del error
    res.status(500).json({ error: error.message });
  }
};

// ==========================
// Obtener todos los clientes
// ==========================
exports.obtenerClientes = async (req, res) => {
  try {
    // Buscamos todos los clientes en la base de datos
    const clientes = await Cliente.find();

    // Enviamos la lista completa como respuesta en formato JSON
    res.json(clientes);
  } catch (error) {
    // Si hay un error, respondemos con código 500
    res.status(500).json({ error: error.message });
  }
};

// =====================================
// Obtener un cliente específico por ID
// =====================================
exports.obtenerClientePorId = async (req, res) => {
  try {
    // Buscamos un cliente por su ID (que viene desde la URL)
    const cliente = await Cliente.findById(req.params.id);

    // Si no se encuentra, devolvemos un 404 (no encontrado)
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    // Si se encuentra, lo devolvemos en formato JSON
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ===========================
// Actualizar un cliente por ID
// ===========================
exports.actualizarCliente = async (req, res) => {
  try {
    // Buscamos el cliente por ID y lo actualizamos con los datos del request
    // La opción { new: true } hace que se devuelva el cliente ya actualizado
    const clienteActualizado = await Cliente.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    // Si no se encuentra, devolvemos 404
    if (!clienteActualizado) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    // Devolvemos el cliente actualizado
    res.json(clienteActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ===========================
// Eliminar un cliente por ID
// ===========================
exports.eliminarCliente = async (req, res) => {
  try {
    // Buscamos al cliente por ID y lo eliminamos
    const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id);

    // Si no se encuentra, devolvemos 404
    if (!clienteEliminado) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    // Si se elimina correctamente, enviamos un mensaje de éxito
    res.json({ message: "Cliente eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
