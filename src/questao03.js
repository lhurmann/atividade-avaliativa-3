function calcularMedia(n1, n2, n3) {
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    n3 = parseFloat(n3)

    let media = (n1 * 0.3 + n2 * 0.3 + n3 * 0.4) / (0.3 + 0.3 + 0.4)

    return media
}
let nota1 = prompt('Qual a primeira nota?\n')
let nota2 = prompt('Qual a segunda nota?\n')
let nota3 = prompt('Qual a terceira nota?\n')

let mediaFinal = calcularMedia(nota1, nota2, nota3)

console.log(`A média do aluno é ${mediaFinal.toFixed(2)}`)