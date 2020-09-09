const argv = require("yargs")
  .command("crear", "crear un elemento por hacer", {
    descripcion: {
      demand: true,
      alias: "d",
      desc: "Descripción de la tarea por hacer",
    },
  })
  .command("actualizar", "Actualiza el estado de una tarea", {
    descripcion: {
      demand: true,
      alias: "d",
      desc: "Descripción de la tarea por hacer",
    },
    completado: {
        default:true,
        alias:'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
  })
  .command("borrar", "Borra na tarea", {
    descripcion: {
      demand: true,
      alias: "d",
      desc: "Descripción de la tarea por hacer",
    }
  })
  .help()
  .argv;


  module.exports = {
      argv
  }