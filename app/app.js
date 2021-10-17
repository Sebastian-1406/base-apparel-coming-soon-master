let formulario = document.getElementById("formulario");
let botonEnviar = document.getElementById("btn_enviar");
let email = document.getElementById("email")
const expresiones = {correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,}

const validarCampo = (e) => {
    e.preventDefault()

    if(expresiones.correo.test(email.value)){
        formulario.classList.remove("campo__incorrecto")
        formulario.reset()
    }else {
        formulario.classList.add("campo__incorrecto")
    }

}

botonEnviar.addEventListener("click", validarCampo)