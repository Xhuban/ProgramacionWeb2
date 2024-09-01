//Vidas totales que tendrá el usuario y la máquina
let vidasUsuario = 5;
let vidasMaquina = 2;

//Rango de números en el que la máquina generará un número aleatorio
let minimoMaquina = 1;
let maximoMaquina = 3;


while ((vidasMaquina > 0) && (vidasUsuario > 0)){
    versus();
}

obtenerGanador(vidasUsuario);



function generarNumero(minimo, maximo){
    return Math.floor(Math.random()*(maximo - minimo + 1) + minimo);
}

function versus(){
    let entrada = parseInt(prompt(`
        Numero de vidas del usuario: `+ vidasUsuario +`
        Numero de vidas de la maquina: `+ vidasMaquina +`
        Ingresa un numero del `+ minimoMaquina +` al `+ maximoMaquina +`
        `));
    
    let numeroMaquina = generarNumero(minimoMaquina,maximoMaquina);
    

    if (entrada == numeroMaquina){
        vidasMaquina = vidasMaquina - 1;
        alert(`
            El numero es: `+ numeroMaquina +`
            Acertaste
            Vidas de la maquina se redujo a `+ vidasMaquina +`
            `);
    } else {
        vidasUsuario = vidasUsuario -1;
        alert(`
            El numero es: `+ numeroMaquina +`
            Fallaste
            Vidas del usuario se redujo a `+ vidasUsuario +`
            `);
    }
}

function obtenerGanador(vidasUsuario){
    if (vidasUsuario > 0){
        alert(`
            ¡Felicidades!
            Has ganado :D
            `);
    } else {
        alert(`
            Has perdido :(
            Sigue participando
            `);
    }
}