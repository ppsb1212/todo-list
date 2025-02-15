let todoList = [];

renderTodo();

function renderTodo(){
  let todoListHtml = '';
  todoList.forEach((list,index) =>{

  let html = `
    <div class="todo-name">${list.name}</div>
    <div class="todo-date">${list.dueDate}</div>
    <button onclick="
      todoList.splice(${index},1);
      renderTodo();
    " class="todo-delete">Delete</button>
    
    `;
  todoListHtml += html;
});
  document.querySelector('.js-result').innerHTML = todoListHtml;
}


function addTodo(){
  const inputElement = document.querySelector('.js-input');
  let name = inputElement.value;
  const dateInputElement = document.querySelector('.js-date');
  let dueDate = dateInputElement.value;

  todoList.push({
    name: name,
    dueDate: dueDate});

  inputElement.value = '';
  renderTodo();
}