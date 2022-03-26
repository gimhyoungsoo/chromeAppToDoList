const toDoForm = document.getElementById('todo_form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.getElementById('todo_list')
let toDoArr = []

const TODO_KEY = 'toDoKey'



function saveToDos() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDoArr))
}


function onDeleteToDo(evt) {
    const li = evt.target.parentElement;
    li.remove();
    toDoArr = toDoArr.filter((toDo) => toDo.id !== parseInt(li.id))
    saveToDos();
}

function showToDo(newToDos) {
    const li = document.createElement('li')
    li.id = newToDos.id
    const span = document.createElement('span')
    span.innerText = newToDos.text

    const btnDelete = document.createElement('button')
    btnDelete.innerText = '❌'
    btnDelete.addEventListener('click', onDeleteToDo)

    li.appendChild(span)
    li.appendChild(btnDelete)
    toDoList.appendChild(li)
}


function onToDoSubmit(evt) {
    evt.preventDefault()
    const newToDos = toDoInput.value

    toDoInput.value = ''

    const newToDosObj = {
        text: newToDos,
        id: Date.now()
    }
    toDoArr.push(newToDosObj)
    showToDo(newToDosObj)
    saveToDos()
}

// ====================== 초기화 ==============================

toDoForm.addEventListener('submit', onToDoSubmit)

const savedItem = localStorage.getItem(TODO_KEY)
if (savedItem) {
    parsedItem = JSON.parse(savedItem)
    parsedItem.forEach(showToDo)
    toDoArr = parsedItem
}