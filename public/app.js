var init = function () {
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  populate(todosArray);
}

var populate = function (todos) {
  // this function needs to:
  // - loop through the array of todos, invoking addItem() for each todo item
  for(item of todos){
    addItem(item);
  }
}

var addItem = function (item) {
  var ul = document.querySelector('#todo-list');
  // this function needs to:
  // - create an li element containing the string 'item'
  const toDoListItem = document.createElement('li');
  toDoListItem.innerText = item;
  // - append the li to the "todo-list" ul
  ul.appendChild(toDoListItem);
}

var handleButtonClick = function () {
  // this function needs to:
  // - get hold of the input box's value
  const input = document.querySelector('#new-item');
  const value = input.value;
  console.log(input);
  // - append it to the "todo-list" ul by invoking addItem()
  addItem(value);
  // - add it to local storage by invoking save()
  save(value);

  input.value = '';
}

var save = function (newItem) {

// - get the data back from local storage and parse to an array
  const savedJSONToDoList = localStorage.getItem('todoList');
  const savedToDoList = JSON.parse(savedJSONToDoList) || [];
  savedToDoList.push(newItem);
  // console.log(todolist);
  // - add the newItem to the array
  // - stringify the updated array
  const updatedJSONToDoList = JSON.stringify(savedToDoList);
  // - save it back to localstoage
  localStorage.setItem('todoList', updatedJSONToDoList);
}

document.addEventListener('DOMContentLoaded', init);
