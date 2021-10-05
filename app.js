window.onload = main;

function main(){
    let boton = document.getElementById("button");// traemos el btn desde html a js
    boton.addEventListener('click', calcular);//le decimos que espere el click para realizar lo que dice la funcion calcular
}

function calcular(){
    let peso = document.getElementById("peso").value;//traemos el dato del peso desde el html
    let altura = document.getElementById("altura").value;//treaemos el dato de la altura desde html
    let resultado = peso/(altura * altura);//calculamos el IMC
    let resp = document.getElementById("respuesta");
    resp.innerHTML = "<h2>Su Indice de masa corporal es: " + resultado + "</h2>";//ponemos el resultado en el html
}