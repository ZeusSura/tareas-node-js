let fs = require("fs");
let listadoPorHacer = [];

const GuardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile("DB/data.json", data, (error) => {
    if (error) throw new Error("No se pudo grabar");
  });
};

const CargarBD = () => {
  try {
    listadoPorHacer = require("../DB/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};

const crear = (descripcion) => {
  CargarBD();
  let porHacer = {
    descripcion,
    completado: false,
  };
  listadoPorHacer.push(porHacer);
  GuardarDB();
  return porHacer;
};

const getListado = () => {
  CargarBD();
  return listadoPorHacer;
};

let Actualizar = (descripcion, completado = true) => {
  CargarBD();
  let index = listadoPorHacer.findIndex(
    (tarea) => tarea.descripcion === descripcion
  );
  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    GuardarDB();
    return "SE GUARDO CON EXITO!";
  } else {
    return false;
  }
};

let Borrar = (descripcion) => {
  CargarBD();
  let index = listadoPorHacer.findIndex(
    (tarea) => tarea.descripcion === descripcion
  );
  if (index >= 0) {
    listadoPorHacer.splice(index,1)
    GuardarDB();
    return "SE ELIMINO CON EXITO!";
  } else {
    return false;
  }
};

module.exports = {
  crear,
  getListado,
  Actualizar,
  Borrar
};
