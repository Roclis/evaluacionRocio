let nombres = ["Andres","Camila","Javier","Rocio","Francisco","Jose","Luis","Sofia"];

let habilidades = [
    [20,90,40],
    [10,40,10],
    [87,36,89],
    [76,60,89],
    [46,87,56],
    [4,78,100],
    [67,62,99],
    [4,7,9],
];

function calcularpromedios(habilidades){
    let promedio = [];

    for (let i=0;i<habilidades.length;i++){
        let fila = habilidades[i];
        let suma = fila.reduce((total,habilidad)=>total+habilidad,0);
        promedio[i] = suma/fila.length
    }
    return promedio;
}

function evaluaraptitudes (nombres, promedio) {

    for (let i=0;i<promedio.length;i++){
        
        if (promedio[i]>=70) {
            console.log("El colaborador" + nombres [i] + "Supera el promedio con: " + promedio [i]);
            alert ("El colaborador" + nombres [i] + "Supera el promedio con: " + promedio [i]);
        }
        else{
            console.log("El colaborador" + nombres [i] + "No supera el promedio con: " + promedio [i]);
            alert("El colaborador" + nombres [i] + "No supera el promedio con: " + promedio [i]);
        }
    }
}
let promedio1 = calcularpromedios(habilidades);
evaluaraptitudes(nombres,promedio1);