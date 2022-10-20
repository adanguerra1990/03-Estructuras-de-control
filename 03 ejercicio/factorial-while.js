// factorial-while.js
function factorial(num) {
     let resultado = num

     if(num === 0 || num === 1)
     return 1

     while(num > 1) {
          num--;
          resultado = resultado * num
          console.log(resultado)
     }
     return resultado
}
console.log(factorial(10))
