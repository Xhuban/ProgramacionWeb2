let nombre = prompt("Ingresa tu nombre:")
let edad = prompt("Ahora ingresa tu edad:")
let peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"))
let altura = parseFloat(prompt("Ingresa tu estatura en metros:"))
let imc = peso / (altura*altura)

console.log("Hola "+nombre+".")
console.log("Tienes "+edad+" años.")
console.log("Tu Indice de Masa Corporal es de "+imc+".")
console.log("La tabla de IMC es la siguiente:")
console.log("12-17 = Poco peso")
console.log("18-24 = Saludable")
console.log("25-29 = Sobrepeso")
console.log("30-39 = Obesidad")
console.log("40-42 = Obesidad extrema")