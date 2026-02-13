const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const año = document.getElementById("año");
const btnCalcular = document.getElementById("calcular");
const resultado = document.getElementById("reyears");
const resultadoMeses = document.getElementById("remonths");
const resultadoDias = document.getElementById("redays");

btnCalcular.addEventListener("click", () => {
    const diaValor = parseInt(dia.value);
    const mesValor = parseInt(mes.value);
    const añoValor = parseInt(año.value);

    const fechaNacimiento = new Date(añoValor, mesValor - 1, diaValor);
    const fechaActual = new Date();
    let edadAños = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let edadMeses = fechaActual.getMonth() - fechaNacimiento.getMonth();
    let edadDias = fechaActual.getDate() - fechaNacimiento.getDate();

    if (
        isNaN(diaValor) ||
        isNaN(mesValor) ||
        isNaN(añoValor) ||
        mesValor < 1 || mesValor > 12 ||
        diaValor < 1 || diaValor > 31 ||
        añoValor > new Date().getFullYear()
    ) {
        resultado.textContent = "--";
        resultadoMeses.textContent = "--";
        resultadoDias.textContent = "--";
        return;
    }


    if (edadMeses < 0 || (edadMeses === 0 && edadDias < 0)) {
        edadAños--;
        edadMeses += 12;
    }

    if (edadDias < 0) {
        const diasUltimoMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate();
        edadDias += diasUltimoMes;
        edadMeses--;
    }

    resultado.textContent = edadAños;
    resultadoMeses.textContent = edadMeses;
    resultadoDias.textContent = edadDias;

})






