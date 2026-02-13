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

    const fechaActual = new Date();

    dia.classList.remove("error");
    mes.classList.remove("error");
    año.classList.remove("error");

    dia.previousElementSibling.classList.remove("error");
    mes.previousElementSibling.classList.remove("error");
    año.previousElementSibling.classList.remove("error");

    let hayError = false;

    if (isNaN(diaValor) || diaValor < 1 || diaValor > 31) {
        dia.classList.add("error");
        dia.previousElementSibling.classList.add("error");
        hayError = true;
    }

    if (isNaN(mesValor) || mesValor < 1 || mesValor > 12) {
        mes.classList.add("error");
        mes.previousElementSibling.classList.add("error");
        hayError = true;
    }

    if (isNaN(añoValor) || añoValor > fechaActual.getFullYear()) {
        año.classList.add("error");
        año.previousElementSibling.classList.add("error");
        hayError = true;
    }

    if (hayError) {
        resultado.textContent = "--";
        resultadoMeses.textContent = "--";
        resultadoDias.textContent = "--";
        return;
    }

    const fechaNacimiento = new Date(añoValor, mesValor - 1, diaValor);

    let edadAños = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let edadMeses = fechaActual.getMonth() - fechaNacimiento.getMonth();
    let edadDias = fechaActual.getDate() - fechaNacimiento.getDate();

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
});
