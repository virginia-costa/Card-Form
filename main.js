/* COMPLETE STATES */

let formulario = document.getElementById("formulario");
let completeStates = document.getElementById("completeStates")

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    formulario.style.display = "none";
    completeStates.style.display = "flex";
})

/* CAMBIOS EN LA TARJETA A MEDIDA QUE SE ESCRIBE */

/* NOMBRE */

let cardhold_name = document.getElementById("cardhold_name");
let nombreTarjeta = document.querySelector(".nombre");
let valorNombre = nombreTarjeta.textContent;

cardhold_name.addEventListener("input", function sobreescribeNombre() {
    if (cardhold_name.value.trim() === '') {
        nombreTarjeta.textContent = valorNombre;
    }
    else {
        nombreTarjeta.textContent = cardhold_name.value.toUpperCase();
    }
})

/* NUMERO DE TARJETA */

let card_number = document.getElementById("card_number");
let numeroTarjeta = document.querySelector(".numero");
let valorTarjeta = numeroTarjeta.textContent;

card_number.addEventListener("input", sobreescribeNumero);

function sobreescribeNumero() {
    let cardNumberValue = card_number.value.replace(/\s/g, '');
    let groups = [];
    for (let i = 0; i < cardNumberValue.length; i += 4) {
        groups.push(cardNumberValue.substr(i, 4));
    }
    let formattedCardNumber = groups.join(' ');
    if (formattedCardNumber.trim() === '') {
        numeroTarjeta.textContent = valorTarjeta;
    } else {
        numeroTarjeta.textContent = formattedCardNumber;
    }
};

/* MES DE LA TARJETA */

let inputMM = document.getElementById("MM");
let inputYY = document.getElementById("YY");
let caducidad = document.querySelector(".caducidad");
let valorCaducidad = caducidad.textContent;

inputMM.addEventListener("input", cambiarCaducidad);
inputYY.addEventListener("input", cambiarCaducidad);

function cambiarCaducidad() {
    let valorMM = inputMM.value;
    let valorYY = inputYY.value;

    if (!inputMM || !inputYY) {
        caducidad.textContent = valorCaducidad;
    } else {
        caducidad.textContent = (valorMM + "/" + valorYY);
    }
}

/* CVC */

let cvc = document.getElementById("CVC");
let numeroCVC = document.querySelector(".cvc");
let valorCVC = numeroCVC.textContent;

cvc.addEventListener("input", function sobreescribeCVC() {
    if (cvc.value.trim() === '') {
        numeroCVC.textContent = valorCVC;
    }
    else {
        numeroCVC.textContent = cvc.value;
    }
})

/* VALIDACIÓN DE LOS DATOS DE LA TARJETA */

/* VALIDAR QUE EL NOMBRE DE LA TARJETA NO CONTEGA OTROS CARACTERES QUE NO SEAN LETRAS */

let validarNombre = document.getElementById("cardhold_name");
let mensajeErrorNombre = document.getElementById("errorNombre");

validarNombre.addEventListener("input", validacionNombre);

function validacionNombre() {
    let nombreInput = validarNombre.value.trim();
    let nombreTipo = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s ]+$/;
    if (!nombreTipo.test(nombreInput)) {
        validarNombre.style.borderColor = "red";
        mensajeErrorNombre.innerHTML = "Wrong format. Should be a name.";
        mensajeErrorNombre.style.display = "block";
    } else {
        validarNombre.style.borderColor = "";
        mensajeErrorNombre.innerHTML = "";
        mensajeErrorNombre.style.display = "none";
    }
}

/* VALIDAR NÚMERO DE TARJETA (FORMATO NUMÉRICO Y LONGITUD) */

let validarNumero = document.getElementById("card_number");
let mensajeErrorNumero = document.getElementById("errorNumero");

validarNumero.addEventListener("input", validacionNumero);

function validacionNumero() {
    let numeroInput = validarNumero.value;
    let numeroTipo = /^\d{16}$/;
    if (!numeroTipo.test(numeroInput)) {
        validarNumero.style.borderColor = "red";
        mensajeErrorNumero.innerHTML = "Wrong format. Numbers only. Should have 16 digits.";
        mensajeErrorNumero.style.display = "block";
    } else {
        validarNumero.style.borderColor = "";
        mensajeErrorNumero.innerHTML = "";
        mensajeErrorNumero.style.display = "none";
    }
}

/* VALIDAR MES */

let validarMes = document.getElementById("MM");
let mensajeErrorMes = document.getElementById("errorMes");

validarMes.addEventListener("input", validacionMes);

function validacionMes() {
    let mesInput = validarMes.value;
    let mesTipo = /^(0?[1-9]|1[0-2])$/;
    if (!mesTipo.test(mesInput)) {
        validarMes.style.borderColor = "red";
        mensajeErrorMes.innerHTML = "Wrong format. Numbers only. Should have 2 digits.";
        mensajeErrorMes.style.display = "block";
    } else {
        validarMes.style.borderColor = "";
        mensajeErrorMes.innerHTML = "";
        mensajeErrorMes.style.display = "none";
    }
}

/* VALIDAR AÑO */

let validarAño = document.getElementById("YY");
let mensajeErrorAño = document.getElementById("errorAño");

validarAño.addEventListener("input", validacionAño);

function validacionAño() {
    let añoInput = validarAño.value;
    let añoTipo = /^(2[3-9]|[3-9][0-9])$/;
    if (!añoTipo.test(añoInput)) {
        validarAño.style.borderColor = "red";
        mensajeErrorAño.innerHTML = "Wrong format. Numbers only. Should have 2 digits.";
        mensajeErrorAño.style.display = "block";
    } else {
        validarAño.style.borderColor = "";
        mensajeErrorAño.innerHTML = "";
        mensajeErrorAño.style.display = "none";
    }
}

/* VALIDAR CVC */

let validarCVC = document.getElementById("CVC");
let mensajeErrorCVC = document.getElementById("errorCVC");

validarCVC.addEventListener("input", validacionCVC);

function validacionCVC() {
    let CVCInput = validarCVC.value;
    let CVCTipo = /^\d{3}$/;
    if (!CVCTipo.test(CVCInput)) {
        validarCVC.style.borderColor = "red";
        mensajeErrorCVC.innerHTML = "Wrong format. Numbers only. Should have 3 digits.";
        mensajeErrorCVC.style.display = "block";
    } else {
        validarAño.style.borderColor = "";
        mensajeErrorCVC.innerHTML = "";
        mensajeErrorCVC.style.display = "none";
    }
}



