function busqueda_secuencial(arr,elemento){
	for(let i=0;i<arr.length;i++){
		if (arr[i]===elemento){
			return i;
		}
	}
	return -1;
}

let miArray = [3,1,4,2,5]
let elemento = 2

let resultado = busqueda_secuencial(miArray, elemento);
console.log("El elemento",elemento," se encuentra en el indice ",resultado)


