function anoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true
    } else {
        return false
    }
}
let ano = parseInt(prompt("Digite um ano (ex: 2020, 2021):"))

if (anoBissexto(ano)) {
    console.log(ano + " é um ano bissexto.")
} else {
    console.log(ano + " não é um ano bissexto.")
}
