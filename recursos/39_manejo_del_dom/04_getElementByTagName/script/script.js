let parrafos = document.getElementsByTagName("p");
console.log(`Num. parrafos: ${parrafos.length}`);
for(let i=0; i<parrafos.length;i++){
	console.log(`${i} - ${parrafos[i].innerHTML}`)
}
