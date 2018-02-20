var init = function () {
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  populate(todosArray);
}

var populate = function (todos) {
  // this function needs to:
  // - loop through the array of todos, invoking addItem() for each todo item
}

var addItem = function (item) {
  var ul = document.querySelector('#todo-list');
  // this function needs to:
  // - create an li element containing the string 'item'
  const listItem = document.createElement('li');
  listItem.innerText = item;
  // - append the li to the "todo-list" ul
  ul.appendChild(listItem);
}

var handleButtonClick = function () {
  // this function needs to:
  // - get hold of the input box's value
  const input = document.querySelector('#new-item').value;
  console.log(input);
  // - append it to the "todo-list" ul by invoking addItem()
  addItem(input);
  // - add it to local storage by invoking save()
  save(input);
}

var save = function (newItem) {

// - get the data back from local storage and parse to an array
  jsonToDoList = localStorage.getItem('todolist');
  todolist = JSON.parse(jsonToDoList) || [];
  todolist.push(newItem);
  console.log(todolist);
  // - add the newItem to the array
  // - stringify the updated array
  newJsonToDoList = JSON.stringify(todolist);
  // - save it back to localstoage
  localStorage.setItem('todolist', newJsonToDoList);
}

window.addEventListener('load', init);
