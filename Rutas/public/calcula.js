function agregarPantalla(value){
    document.getElementById("pantalla").value+=value;

}

function limpiarPantalla(){
    document.getElementById("pantalla").value="";
}

function calcular(){
    try{
        
        let expresion = eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = expresion;

    } catch (error) {

        document.getElementById("pantalla").value=error;

    }
}