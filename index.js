import readLineSync from 'readline-sync'
import ck from 'chalk'

const valores = []
let input = ""

//laço while
console.log(ck.green("-Propriedades de programas CSS-"))
console.log(ck.blue("---PROJETO M5: INDIVIDUAL"))
while (input != "sair") {

    valores.push(input)
    input = readLineSync
        .question(ck.red("Digite as propriedades: "))
        .toLocaleLowerCase()

}

//mostra o conteudo do vetor
console.log(ck.bgYellow("Os resultados das propriedades"))
console.log(ck.cyan(valores.sort().join('\n')))