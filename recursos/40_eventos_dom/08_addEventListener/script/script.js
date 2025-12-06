document.getElementById('nombre').addEventListener('focus',cambiar);
document.getElementById('nombre').addEventListener('blur',regresar);

document.getElementById('apellido').addEventListener('focus',cambiar);
document.getElementById('apellido').addEventListener('blur',regresar);


function cambiar(evento){
	let componente = evento.target;
	componente.style.background = "yellow";
};
function regresar(evento){
	evento.target.style.background = "white";
};



