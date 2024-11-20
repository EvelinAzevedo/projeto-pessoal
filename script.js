const arr = []
let option = false

function criarMenu(menu){ 
    menu = 'Seja bem vindo à sua lista de matérias :)\n'
    menu += '\nEscolha uma das opções a seguir!\n'
    menu += '\n1- Escrever uma nova matéria\n'
    menu += '\n2- Checar lista de materias adicionadas\n'
    menu += '\n3- Sair\n'
    return prompt(menu)
}
function adicionar(materia) {
    arr.push(materia)
}

do {
    option = criarMenu()

    switch (option) {
        case '1':
            adicionar(prompt('Escreva a matéria que você deseja adicionar.'))
            break
        case '2':
            let materias = ''
            for (let i = 0; i < arr.length; i++) {
                materias += `${i + 1}ª matéria: ${arr[i]}\n`
            }
            alert(materias)
            break
        case '3':
            alert('saindo...')
            break
        default:
            alert('Opção inválida!')
    }
} while (option !== '3')
// do {
//     option = confirm(confirmacao)
//     adicionar(prompt('Escreva o nome da matéria'))
// } while (option === true)



