function calcularVenda() {
    const quaCin = 0.45
    const trin = 0.30
    let porcentagem = 0
    let valorCompra = parseFloat(prompt('Digite o valor do produto comprado: R$'))

    if (valorCompra < 20.00){
        porcentagem = valorCompra * quaCin
    } else {
        porcentagem = valorCompra * trin
    }

    let valorFinal = valorCompra + porcentagem
    
    console.log(`O valor de venda do produto é: R$${valorFinal.toFixed(2)}`)
}
calcularVenda()