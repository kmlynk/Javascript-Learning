const todoList = [{
  name: 'Make Dinner',
  dueDate: '2023-06-12'
}, {
  name: 'Wash Dishes',
  dueDate: '2023-06-13'
}]

refreshTodoList()

function refreshTodoList() {
  let todoListHTML = ''

  // Generating HTML
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i]
    
    // Destructuring
    /**
     * const name = todoObject.name
     */
    const {name, dueDate} = todoObject

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="css-deleteButton" onclick="
        todoList.splice(${i}, 1) 
        refreshTodoList()
      "> Delete </button> 
    `
    todoListHTML += html 
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML
}

function addToDo() {
  const inputElement = document.querySelector('.js-todoInput')
  const name = inputElement.value

  const dateInputElement = document.querySelector('.js-dueDateInput')
  const dueDate = dateInputElement.value
  
  todoList.push({
    name,
    dueDate
  })

  inputElement.value = ''

  refreshTodoList()
}