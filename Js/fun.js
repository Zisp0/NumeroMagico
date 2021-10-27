var nombre;
var num;
var intR = 10;
var numR = Math.trunc(Math.random() * 1000);
document.getElementById("btnNum").hidden = true;
document.getElementById("num").hidden = true;
function guardarNombre(){
    nombre = document.getElementById("nombre").value;
    if(nombre == ""){
        alert("Por favor digite su nombre");
        return;
    }

    ocultar();
}

function ocultar(){
    document.getElementById("bienvenida").innerHTML = "";
    document.getElementById("digNombre").innerHTML = "";
    document.getElementById("btnNombre").hidden = true;
    document.getElementById("nombre").hidden = true;

    mostrar();
}

function mostrar(){
    document.getElementById("digNum").innerHTML = "Por favor digite el número";
    document.getElementById("int").innerHTML = "Intentos restantes";
    document.getElementById("btnNum").hidden = false;
    document.getElementById("num").hidden = false;
    document.getElementById("intentos").innerHTML = intR;
    document.getElementById("img").src = "../circle.png"
}

function validar(){
    num = document.getElementById("num").value;
    if(num < 1 || num > 1000){
        alert(nombre + ", por favor digite un número entre 1 y 1000.");
        return;
    }

    intR--;
    
    if(numR == num){
        alert("¡Felicidades, " + nombre + ", adivinó el número mágico en " + (10 - intR) + " intentos!");
        reiniciar();
    }else if(numR > num){
        document.getElementById("resultado").innerHTML = "El número mágico es mayor";
    }else{
        document.getElementById("resultado").innerHTML = "El número mágico es menor";
    }

    if(intR == 0){
        alert("Lo sentimos, " + nombre + ", pero ha gastado todos sus intentos.\nEl número mágico era " + numR + ".");
        reiniciar();
    }
    
    document.getElementById("intentos").innerHTML = intR;
}

function reiniciar(){
    intR = 10;
    numR = Math.trunc(Math.random() * 1000);
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("num").value = "";
}