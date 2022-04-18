const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 5) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} x ${i} = ${base * i}\n`.random;
    }
    if (listar) {
      console.log("==================".random);
      console.log("Tabla del:".random, base);
      console.log("==================".random);

      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    const nombreArchivo = `Tabla del: ${base} hasta ${hasta}`.random;
    return nombreArchivo;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
