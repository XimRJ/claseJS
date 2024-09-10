
let num1=1 

let num2= 2.0

let cadena= "hola mundo"

console.log(num1)
console.log(num2)
console.log(cadena)

console.log("hola mundo")

const txt1= new String("hola tonotos")
console.log(txt1)

console.log('1.2.3.4.5'.split('.'))
console.log(txt1.split(''))

console.log(txt1.length)
console.log(txt1.charAt(11))

//Arreglos

let animales=['tigre','ballena','lobo','aguila']
console.log(animales.length)
console.log(animales.pop())
console.log(animales)

console.log(animales.push("perro"))
console.log(animales)

let numeros= [11,10,5,4,12]
console.log(numeros.reverse())

// UwUn't?
let juntar= numeros.join();
console.log(juntar)

let anio=[1995,1999,2024,2020]

function encontrar(item){
    return item >= 2000

}

console.log(anio.find(encontrar))

let vestimenta= ['camisa','gorra','pantalon']
function mifuncion(item,index){
    console.log(index+":" + item)
} 
vestimenta.forEach(mifuncion)

let array= Array.from("1A2B3C4D")

console.log(array)


//every
let num =[32,33,15,40]
mifuncion1()
function validarArray(item){
    return item>= 19
}
function mifuncion1(){
    console.log(num.every(validarArray))
}

//De un determinado arreglo con nombre y edad
//buscar aquellas personal con mas de cinco años
//5 elementos

let personas=[
    {nombre: "Alan", edad:65},
    {nombre: "Abdiel", edad:10},
    {nombre: "Cesar", edad:3},
    {nombre: "Diego", edad:5},
    {nombre: "Mario", edad:6},
]

let busqueda=personas.filter(persona=>persona.edad>5)

console.log(busqueda)

// Hacer una busqueda de 10 trabajadores donde sean developers

console.log("hola tonoto")


