const todoList = []

refreshTodoList()

function refreshTodoList() {
  let todoListHTML = ''

  // Generating HTML
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i]
    const html = `<p>${i+1}. ${todo}</p>`
    todoListHTML += html 
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML
}

function addToDo() {
  const inputElement = document.querySelector('.js-todoInput')
  const todo = inputElement.value
  
  todoList.push(todo)

  inputElement.value = ''

  refreshTodoList()
}

function handleKeyPress(event) {
  if (event.key == 'Enter') {
    addToDo()
  }
}