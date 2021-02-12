const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list') // this is the actual list
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  var input = prompt("Please enter a some text");
  if(input === null || input ==="") {
    alert("Must have some sort of imput");
  }
  else {
    var increment = parseInt(itemCountSpan.innerText) + 1; // grab text parse it then increment
    itemCountSpan.textContent = increment;
    var incrementUnchecked = parseInt(uncheckedCountSpan.innerText) + 1;
    uncheckedCountSpan.textContent = incrementUnchecked;

    var elementToList = document.createElement("li"); // create a li 
    elementToList.appendChild(document.createTextNode(input)); // create text that will become a child of the individual element
    list.appendChild(elementToList); // this element will now become a child of the list

    var check = document.createElement("input");
    check.type = 'checkbox';
    check.value = '1'; // 1 is off, 0 is on
    elementToList.appendChild(check);
    check.onclick = function() {
      if(check.value === '0') {
        var increment2 = parseInt(uncheckedCountSpan.innerText) + 1;
        uncheckedCountSpan.textContent = increment2;
        check.value = '1';
      }
      else if(check.value === '1') {
        var decrement1 = parseInt(uncheckedCountSpan.innerText) - 1;
        uncheckedCountSpan.textContent = decrement1;
        check.value = '0';
      }
    }

    var buttonNextToElement = document.createElement("button");
    buttonNextToElement.innerText = 'remove';
    elementToList.appendChild(buttonNextToElement);
    buttonNextToElement.onclick = function() {
      var decrement = parseInt(itemCountSpan.innerText) - 1;
      itemCountSpan.textContent = decrement;
      if(check.value === '1') {
        var decrement2 = parseInt(uncheckedCountSpan.innerText) - 1;
        uncheckedCountSpan.textContent = decrement2;
      }
      list.removeChild(elementToList);
    };


  }
}

