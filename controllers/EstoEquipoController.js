"use strict";

const estadoEquipo = require("../models/estadoEquipos");

const obtenerEstado = async (req, res) => {
  try {
    let estados = await estadoEquipo.find({});

    if (estados.length == 0) {
      return res
        .status(404)
        .json({ message: `No hay estados en la base de datos` });
    }

    return res.status(200).json({ estados });
  } catch (error) {
    return res.status(500).json({ msg: `Error interno del server ${error}` });
  }
};

//agregar
const crearEstado = async (req, res) => {
  try {
    const { nombre, estado, fechaCrea, fechaAct } = req.body;

    if (!nombre) {
      return res.status(422).json({ message: "Datos Ivalidos" });
    }

    let nuevoEstado = new estadoEquipo({
      nombre,
      estado,
    });

    await nuevoEstado.save();
    return res.status(201).json(nuevoEstado);
  } catch (error) {
    return res
      .status(500)
      .json({ msg: `Error al procesar la peticion ${error}` });
  }
};

//funcion para actualizar
const actualizarEstado = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { nombre, estado } = req.body;

    if (!nombre) {
      return res.status(422).json({ message: "Datos Ivalidos" });
    }

    let estadoActualizado = await estadoEquipo.findByIdAndUpdate(
      id,
      {
        nombre,
        estado,
        fechaAct: Date.now(),
      },
      {
        new: true,
      }
    );

    console.log(estadoActualizado);

    if (!estadoActualizado) {
      return res
        .status(404)
        .json({ message: `El estado con id ${id} no existe` });
    }
    return res.status(200).json({ estadoActualizado });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: `Error al procesar la peticion ${error}` });
  }
};

// funciones para borrar

const eliminarEstado = async (req, res, next) => {
  const id = req.params.id;
  let estados;

  try {
    estados = await estadoE.findByIdAndDelete(id);
  } catch (error) {
    return next(error);
  }
  if (!estados) {
    return res
      .status(500)
      .json({ message: "Error, no se pudo borrar los datos" });
  }
  return res
    .status(200)
    .json({ message: "Los datos fueron borrados correctamente" });
};

module.exports = {
  obtenerEstado,
  crearEstado,
  actualizarEstado,
  eliminarEstado,
};
