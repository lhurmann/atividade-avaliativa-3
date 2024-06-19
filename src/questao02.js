function calcularSalario() {
    const diasNoMes = 30
    let horasTrabalhadas = parseFloat(prompt('Quantas horas você trabalha? '))
    let salarioHora = parseFloat(prompt('Quanto vale sua hora trabalhada? R$'))
    let porcentagemDesconto = parseFloat(prompt('Quantos porcento é descontado do seu salário? %'))

    let salarioBruto = horasTrabalhadas * salarioHora * diasNoMes
    let valorDesconto = (porcentagemDesconto / 100) * salarioBruto
    let salarioLiquido = salarioBruto - valorDesconto

    console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`)
    console.log(`Valor do Desconto (${porcentagemDesconto}%): R$ ${valorDesconto.toFixed(2)}`)
    console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`)
}
calcularSalario()