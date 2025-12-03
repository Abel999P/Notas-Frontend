function buscar_subcadena(cadena,subcadena){
	let n = cadena.length;
	let m = subcadena.length;
	let ocurrencia = [];
	for(let i=0; i < n-m+1 ;i++){
		let j = 0;
		while(j<m){
			if (cadena[i+j]!==subcadena[j]){
				break;
			}
			j++;
		}
		if( j === m ){
			ocurrencia.push(i);
		}
	}
	return ocurrencia;
}

let cadenaPrincipal = "esto no abra de terminar abra";
let subcadena = "abra";
let resultado = buscar_subcadena(cadenaPrincipal, subcadena);
console.log("ocurrencia encontrada en la posiciones ",resultado);

