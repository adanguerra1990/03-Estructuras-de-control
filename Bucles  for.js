// Bucles for

for(let i = 0; i < 10; i++) {
     // esto es un bucle
     console.log(i)
}

let lista = [1, 2, 5, 6, 8, 10]
for (let i = 0; i < lista.length; i++) {
     console.log(lista[i])
}

// estructura for..of
for (let valor of lista) {
     console.log(valor)
}

// Estructura forEach 
lista.forEach(valor => {
     console.log(valor)
})

// estructuras for..in
let persona = {
     nombre: "Adan",
     apellido: "Guerra",
     edad: 34,
     isDeveloper: true
}

// forma de acceder las propiedades de la variable
console.log(persona.nombre)

let prop = "edad"
console.log(persona[prop])

for (let propiedad in persona) {
     console.log(propiedad)
     console.log(persona[propiedad])
}