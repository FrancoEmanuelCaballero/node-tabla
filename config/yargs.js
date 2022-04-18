const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Numero base de la tabla de multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Numero hasta donde multiplicaras",
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
