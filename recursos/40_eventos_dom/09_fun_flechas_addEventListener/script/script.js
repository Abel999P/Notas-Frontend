
document.getElementById("nombre").addEventListener("focus", (evento)=>{
	evento.target.style.background = "pink";
});
document.getElementById("nombre").addEventListener("blur", (evento)=>{
	evento.target.style.background = "";
});

document.getElementById("apellido").addEventListener("focus", cambiar);
document.getElementById("apellido").addEventListener("blur",regresar);


function cambiar(evento){
	let componente = evento.target;
	componente.style.background = "yellow";
};
function regresar(evento){
	evento.target.style.background = "white";
};
