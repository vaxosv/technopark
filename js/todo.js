let todo = ['dsadsa', "dassa", "Eeqwewqe"];

function addTodo(a) {
    todo.push(a)
    showTOdo()
}

function showTOdo() {
    console.log(todo);
}

function removeTodo(a) {
    todo.splice(a, 1)
    showTOdo()
}

function ediTodo(index, text) {
    todo[index] = text;
    showTOdo()
}
