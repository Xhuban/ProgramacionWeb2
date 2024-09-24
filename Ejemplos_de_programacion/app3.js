//Parte a

let impresion1 = "";

for(let cont=0; cont<4; cont++){
    impresion1+="*";
}

for(let cont=0; cont <3; cont++){
    impresion1+="\n*"
}

console.log(impresion1);


//Parte b

let horizontal = prompt("Ingresa el tamaño horizontal del arreglo:")
let vertical = prompt("Ingresa el tamaño vertical del arreglo:")
let impresion3 = "";

for(let cont = 0; cont < horizontal; cont++){
    impresion3 += "°";
}

for(let cont=0; cont< vertical-1; cont++){
    impresion3 += "\n°";
}

console.log(impresion3);


//Parte c

let impresion4 = "";

for(let cont=0 ; cont<4 ; cont++){
    for(let cont2=0 ; cont2< 4 ; cont2 ++){
        
        if((cont==0 || cont ==3)||(cont2==0 || cont2==3)){
            impresion4+="x";
        } else {
            impresion4+=" ";
        }
    }

    impresion4+="\n";
}

console.log(impresion4);


//Parte d

let impresion5 = "";

for(let tabla = 1; tabla <=10; tabla++){
    for(let tabla2 = 1; tabla2 <=10; tabla2++){
        impresion5+=`${tabla}X${tabla2} = ${tabla*tabla2}\n`;
    }
    impresion5+="\n";
}

console.log(impresion5);