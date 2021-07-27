let botonEnviar = document.getElementById("boton");
let email = document.getElementById("email");

const expresiones = {correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,}

const validarCampo = () => {
    let formulario = document.getElementById("formulario");
    let expresionEmail = expresiones.correo.test(email.value)

    if(expresionEmail){
        formulario.classList.remove("mensaje-incorrecto");
        expresionEmail = true;
    }else{
        formulario.classList.add("mensaje-incorrecto");
        expresionEmail = false;
    }

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        if(expresionEmail){
            formulario.reset()
        }

    })

}


botonEnviar.addEventListener("click", validarCampo)


