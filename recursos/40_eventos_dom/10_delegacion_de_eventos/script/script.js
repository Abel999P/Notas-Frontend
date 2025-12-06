
const forma = document.getElementById("forma");

forma.addEventListener("focus", (evento)=>{
	evento.target.style.background = "yellow";
}, true);

forma.addEventListener("blur", (evento)=>{
	evento.target.style.background = "white";
}, true);


