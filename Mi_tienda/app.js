
//Función que maneja el flujo principal del programa
function iniciarPrograma() {
    let continuar = true;
    let carrito = [];
    let total = 0;

    while (continuar) {
        let seleccion = obtenerSeleccion();

        let articulo = {
            nombre: "",
            precio: 0
        };


        switch (seleccion) {
            case 1:
                articulo.nombre = "Camisa";
                articulo.precio = 300;
                break;

            case 2:
                articulo.nombre = "Pantalón";
                articulo.precio = 500;
                break;

            case 3:
                articulo.nombre = "Zapatos";
                articulo.precio = 800;
                break;

            case 4:
                articulo.nombre = "Sombrero";
                articulo.precio = 200;
                break;

            case 5:
                mostrarCarrito(carrito, total);
                break;

            case 6:
                let decision = 0;

                while(decision!==1 && decision!==2){
                    decision = parseInt(prompt(`¿Quieres salir de la tienda?
                            
                            1. Sí
                            2. No
                            `));

                    if (decision === 1) {
                        continuar = false;
                        alert("Programa finalizado.");
                    } else if (decision!==2){
                        alert("Número de selección no válido.");
                    }
                }
                break;

            default:
                alert("Número de selección no válido.")
                break;
        }


        if (articulo.nombre && articulo.precio) {
            carrito.push(articulo);
            total += articulo.precio;
            alert(`Se agregó ${articulo.nombre} correctamente al carrito de compras.`);
        }






    }
}

//Funcion para mostrar las opciones al usuario y obtener su seleccion
function obtenerSeleccion() {
    return parseInt(prompt(`Seleccione un producto para agregar al carrito:
        
        1. Camisa          $300
        2. Pantalón        $500
        3. Zapatos         $800
        4. Sombrero      $200

        5. Ver Carrito y Total
        
        6. Salir
        `));
}


//Funcion para mostrar el estado actual del carrito
function mostrarCarrito(carrito, total) {
    console.log(typeof (carrito));
    let mensaje = "Tu carrito de compras es: \n\n";
    carrito.forEach((articulo, indice) => {
        mensaje += `${indice + 1}.- ${articulo.nombre}    -    $${articulo.precio}\n`;
    });

    mensaje += `\nTotal: $${total}`;

    alert(mensaje);
}

iniciarPrograma();