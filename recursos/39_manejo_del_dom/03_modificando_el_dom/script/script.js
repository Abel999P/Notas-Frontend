let cabecero = document.getElementById("cabecero");
console.log(`Valor cabecero: ${cabecero.innerHTML}`);
let parrafo = document.getElementById("parrafo");
console.log(`Valor de parrafo: ${parrafo.innerHTML}`);
parrafo.innerHTML = "Nuevo valor del parrafo";
cabecero.innerHTML = "Nuevo Cabecero";

