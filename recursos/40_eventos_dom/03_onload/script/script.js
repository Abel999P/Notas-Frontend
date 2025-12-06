
function entrar(){
    alert ("Entrando a la página web!");
    let texto = "";
    if(navigator.cookieEnabled){
        texto = "Las Cookies estan habilitadas";
    }
    else{
        texto = "Las Cookies no estan habilitadas";
    };
    document.getElementById("mostrar").innerHTML = texto;
};