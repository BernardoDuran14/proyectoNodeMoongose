// Importamos mongoose, que nos permite trabajar con MongoDB usando modelos
const mongoose = require("mongoose");

// Creamos el esquema para los documentos de la colección de pedidos
const PedidoSchema = new mongoose.Schema({
  // clienteId es la referencia al cliente que hizo el pedido
  // Es un ObjectId (tipo de dato especial de MongoDB que apunta a otro documento)
  // "ref: 'Cliente'" indica que se relaciona con el modelo Cliente
  clienteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
    required: true,
  },

  // fecha_pedido indica cuándo se hizo el pedido
  // Si no se especifica, se pone la fecha y hora actual por defecto
  fecha_pedido: {
    type: Date,
    required: true,
    default: Date.now,
  },

  // productos es un arreglo (lista) de productos incluidos en el pedido
  productos: [
    {
      // producto_id es el identificador del producto (por ahora como String)
      producto_id: {
        type: String,
        required: true,
      },

      // cantidad indica cuántas unidades del producto se pidieron
      cantidad: {
        type: Number,
        required: true,
      },

      // precio_unitario es el precio por unidad del producto
      precio_unitario: {
        type: Number,
        required: true,
      },
    },
  ],

  // total es el monto total del pedido (sumando todos los productos)
  total: {
    type: Number,
    required: true,
  },
});

// Exportamos el modelo 'Pedido' basado en el esquema
// MongoDB usará la colección 'pedidos' automáticamente
module.exports = mongoose.model("Pedido", PedidoSchema);
