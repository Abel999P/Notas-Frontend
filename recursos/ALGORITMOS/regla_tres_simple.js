

let n1=1
let d1=2

let n2=0
let d2=16


function r_tres_simple(n1,d1,n2,d2){
	if (n1===0){
		n1 = (d1*n2)/d2;
		return n1;
	}
	else if(d1===0){
		d1 = (n1*d2)/n2;
		return d1; 
	}
	else if(n2===0){
		n2 = (d2*n1)/d1;
		return n2;
	}
	else if(d2===0){
		d2 = (n2*d1)/n1
		return d2;
	}
	else{
		return -1
	}
}


console.log(r_tres_simple(n1,d1,n2,d2));


