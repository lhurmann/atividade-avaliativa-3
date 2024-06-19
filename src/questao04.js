function notaFinal() {
    let notaFinal

    do {
        notaFinal = parseFloat(prompt('Digite sua nota final:\n'))

        if (isNaN(notaFinal) || notaFinal < 0 || notaFinal > 10) {
            console.log("Nota inválida. Insira um valor entre 0 e 10.")
        }
    } while (isNaN(notaFinal) || notaFinal < 0 || notaFinal > 10)

    if (notaFinal >= 9.0) {
        console.log(`Você tirou A`)
    } else if (notaFinal >= 8.0) {
        console.log(`Você tirou B`)
    } else if (notaFinal >= 7.0) {
        console.log(`Você tirou C`)
    } else if (notaFinal >= 6.0) {
        console.log(`Você tirou D`)
    } else {
        console.log(`Você tirou F`)
    }
}
notaFinal()
