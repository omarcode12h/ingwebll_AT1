"use strict";

const mongoose = require("mongoose");

const TipoequipoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    enum: ["en uso", "en bodega", "depreciado"],
  },
  estado: {
    type: Boolean,
    required: true,
  },

  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },

  fechaActualizacion: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("estadoEquipos", TipoequipoSchema);
