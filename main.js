let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena');

const  cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_.'

function generar(){
    let numeroDigitado = parseInt (cantidad.value);

    if( numeroDigitado < 8){
        alert("La seguridad de la contraseña es débil, crea una de 8 o más dígitos");
    }
    
    

    let password = '';
    for(let i= 0; i < numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];

        password+=caracterAleatorio;
        
    }
    contraseña.value = password;
}





