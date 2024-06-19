function verTriangulos(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Digite um valor válido. O valor deve ser maior que 0."
    }
    
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Não é possível formar um triângulo com esses valores."
    }
    
    if (a === b && b === c) {
        return "É um triângulo equilátero."
    } else if (a === b || a === c || b === c) {
        return "É um triângulo isósceles."
    } else {
        return "É um triângulo escaleno."
    }
}
const lado1 = parseInt(prompt("Digite o valor do primeiro lado do triângulo:\n"))
const lado2 = parseInt(prompt("Digite o valor do segundo lado do triângulo:\n"))
const lado3 = parseInt(prompt("Digite o valor do terceiro lado do triângulo:\n"))

const resultado = verTriangulos(lado1, lado2, lado3)
console.log(resultado)
