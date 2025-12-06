estado = 0

function mostrar(){
	if (estado === 0){
		estado = 1;
		document.getElementById("imagen").src = "./img/html5.png";
	}
	else{
		estado = 0;
		document.getElementById("imagen").src = "./img/javascript.png";
		
	}
};
