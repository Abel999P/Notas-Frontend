
let elementos = document.querySelectorAll("p.azul");
console.log(`Num. elementos: ${elementos.length}`);
for(let elemento of elementos){
	console.log(`${elemento.innerHTML}`);
};
