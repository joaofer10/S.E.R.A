// array para acumular as tarefas
let listaTarefas = []

let tarefa = prompt('digite uma tarefa')

while (tarefa !== '0') {
    // insere o valor na proxima posição vazia
    listaTarefas.push(tarefa)
    tarefa = prompt('digite uma tarefa (para encerrar digite 0)')
}
// repetiçao facil
listaTarefas.forEach(e => {
    console.log('tarefa: ' + e)
})