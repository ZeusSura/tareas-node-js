let argv = require("./config/yargs").argv;
let porHacer = require("./por_hacer/por-hacer");
let colors = require("colors");
let comando = argv._[0];
switch (comando) {
  case "crear":
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;
  case "listar":
    let listado = porHacer.getListado();
    for (let tarea of listado) {
      console.log("\n=====Por hacer=====".green);
      console.log(tarea.descripcion);
      console.log("Estado: " + tarea.completado);
      console.log("===================".green);
    }
    break;
  case "actualizar":
    let actualizado = porHacer.Actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;
  case "borrar":
    let borrado = porHacer.Borrar(argv.descripcion);
    console.log(borrado);
    break;
  default:
    console.log("Comando no reconozido");
}
