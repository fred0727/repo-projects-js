const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';
  
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    
    span.textContent = todo;
    button.textContent = 'Eliminar';
    
    button.addEventListener('click', () => {
      todos.splice(index, 1);
      renderTodos();
    });
    
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
  });
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const todo = todoInput.value.trim();
  
  if (todo.length) {
    todos.push(todo);
    todoInput.value = '';
    renderTodos();
  }
});

renderTodos();
