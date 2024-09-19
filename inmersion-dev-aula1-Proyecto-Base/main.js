let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena');
let mensaje = document.getElementById('mensaje');

const  cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_.'

function generar(){
    let numeroDigitado = parseInt (cantidad.value);
    if(numeroDigitado) {
        if( numeroDigitado < 8){
            alert("La seguridad de la contraseña es débil, crea una de 8 o más dígitos");
    } else { 

        let password = '';
        
        for(let i= 0; i < numeroDigitado; i++){
            let indiceAleatorio = [Math.floor(Math.random() * cadenaCaracteres.length)];
            let caracterAleatorio = cadenaCaracteres[indiceAleatorio];

            password+=caracterAleatorio;
        }

        contraseña.value = password;
        
        if(validar(password))
            mensaje.innerText = 'Fuerte.';
        else
            mensaje.innerText = 'Débil.';
    }
        } else {
            alert("Ingresa un número o cifra")
        }
    }

function validar(cadena) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_.])[A-Za-z\d!@#$%^&*()-_.]{8,}$/;
    return regex.test(cadena);
    }

function limpiar() {
    cantidad.value = '';
    contraseña.value = '';
    mensaje.innerText = '';
}