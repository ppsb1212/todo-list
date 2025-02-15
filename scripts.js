let todoList = [{
  name: 'make dinner',
  dueDate: '2025-02-15'
},{
  name: 'go gym',
  dueDate: '2025-02-15'
}];

renderTodo();

function renderTodo(){
  let todoListHtml = '';
  todoList.forEach((list,index) =>{

  let html = `
    <p>
      ${list.name}
      ${list.dueDate}
      <button onclick="
        todoList.splice(${index},1);
        renderTodo();
      ">Delete</button>
    </p>
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