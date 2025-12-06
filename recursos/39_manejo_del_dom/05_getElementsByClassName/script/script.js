
let elementos = document.getElementsByClassName("azul");

console.log(`Num. elmeentos: ${elementos.length}`);

for(let elemento of elementos){
	console.log(`${elemento.innerHTML}`);
};

