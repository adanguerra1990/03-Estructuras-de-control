// comparaciones 

let a = 5
console.log(typeof a)
let b = "5"
console.log(typeof a)

// == Se usa para comparar el valor
// === se usa para comparar el valor y el tipo

if (a == b) {
     console.log("a es igual  a b - debil")
}
if (a === b) {
     console.log("a es igual  a b - Fuerte")
}

let c = 4
let d = "4"

if (c != d) {
     console.log("c es diferente a d")
}
if (c !== d) {
     console.log("c es diferente a d")
}


// comparaciones mayor que menor que
let max = 10
let min = 5

if (max > min) {
     console.log("max es mayor que min")
}
if (max >= 10) {
     console.log("max es mayor o igual que min")
}
if (min < max) {
     console.log("min es menos que max")
}
if (min <= max) {
     console.log("min es menor o igual que max")
}