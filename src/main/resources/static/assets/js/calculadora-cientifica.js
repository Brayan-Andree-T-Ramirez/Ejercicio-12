alert("Funciona calculadora cientifica");

//Para la potencia
let esperandoPotencia = false;
let base = null;

function agregar(digito){
//Default + concatena
    if(esperandoPotencia) {
        resultado = Math.pow(base, digito);
        document.getElementById("display").value=resultado;
        base = null;
        esperandoPotencia = false;
    }else{
        display = document.getElementById("display").value;
        digitos = display + digito;
        document.getElementById("display").value=digitos;
    }

}

function limpiarDisplay(){
    document.getElementById("display").value="";
}

function calcularResultado(){
    //expresion 5 + 9  -89
    expresion = document.getElementById("display").value;
     return document.getElementById("display").value=eval(expresion);
}

function calcularRaiz(){
    resultado = Math.sqrt(calcularResultado());
    document.getElementById("display").value=resultado;
}

function calcularLogaritmo(){
    resultado = Math.log(calcularResultado());
    document.getElementById("display").value=resultado;
}
function prepararPotencia(){
    base = calcularResultado();
    esperandoPotencia = true;
    document.getElementById("display").value='';
}