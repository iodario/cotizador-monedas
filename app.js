const cotizacionPesoDolar = 220;

let bucle = confirm("Bienvenido al cotizador. Desea comenzar?");

const cotizarDolar = function(pesos) {
    return pesos / cotizacionPesoDolar
}

const cotizarPesos = function (dolar) {
    return dolar * cotizacionPesoDolar
}

while (bucle) {

    let cotizador = +prompt("Desea cotizar pesos a dolar indique 1. \nDesea cotizar dolares a pesos indique 2.");

    if ((cotizador !== 1 && cotizador !== 2) || isNaN(cotizador)) {
        alert('valor no valido');

    } else if (cotizador == 1) {
        let entradaPesos = +prompt("ingrese un valor en pesos");
        alert(`${entradaPesos} pesos son ${cotizarDolar(entradaPesos)} dolares`);

    } else {
        let entradaDolar = +prompt("Ingrese un valor en dolares");
        alert(`${entradaDolar} dolares son ${cotizarPesos(entradaDolar)} pesos`);
    }

    bucle = confirm("Desea realizar otra cotizacion?");
}