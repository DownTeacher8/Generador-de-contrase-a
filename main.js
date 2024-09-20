let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");
let botonLimpiar = document.getElementById("botonlimpiar");

const cadenadecaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"

function generar(){

    let numerodigitado = parseInt (cantidad.value);
    console.log(numerodigitado);
    if( numerodigitado < 8){alert("La cantidad debe ser mayor o igual a 8");}

    
let password = "";
for(let i= 0; i < numerodigitado; i++){

    let caracteraleatorio = cadenadecaracteres [Math.floor(Math.random() * cadenadecaracteres.length)];
    console.log(caracteraleatorio);

    password+=caracteraleatorio;
    
}


contrasena.value = password;

}

function esContrasenaSegura(contrasena) {
    const tieneMayusculas = /[A-Z]/.test(contrasena);
    const tieneMinusculas = /[a-z]/.test(contrasena);
    const tieneNumeros = /[0-9]/.test(contrasena);
    const tieneCaracteresEspeciales = /[!@#$%^&*()]/.test(contrasena);

    return {
        esSegura: tieneMayusculas && tieneMinusculas && tieneNumeros && tieneCaracteresEspeciales,
        tieneMayusculas,
        tieneMinusculas,
        tieneNumeros,
        tieneCaracteresEspeciales
    };
}

function validar(password) {
    const resultadoValidacion = esContrasenaSegura(password);

    if (resultadoValidacion.esSegura) {
        alert("La contraseña es fuerte.");
    } else {
        let mensaje = "La contraseña generada no es segura. Necesita:";
        if (!resultadoValidacion.tieneMayusculas) {
            mensaje += "\n- Al menos una letra mayúscula.";
        }
        if (!resultadoValidacion.tieneMinusculas) {
            mensaje += "\n- Al menos una letra minúscula.";
        }
        if (!resultadoValidacion.tieneNumeros) {
            mensaje += "\n- Al menos un número.";
        }
        if (!resultadoValidacion.tieneCaracteresEspeciales) {
            mensaje += "\n- Al menos un carácter especial.";
        }
        alert(mensaje);
    }
}

let texto = "textop";
console.log(typeof cantidad);

function limpiar() {
    contrasena.value = ''; 
    cantidad.value = '';   
}


boton.addEventListener('click', generar);
botonLimpiar.addEventListener('click', limpiar);









