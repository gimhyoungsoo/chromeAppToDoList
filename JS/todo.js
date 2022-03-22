const toDoForm = document.getElementById('todo_form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.getElementById('todo_list')

const toDoArr = []
const TO_DO_LIST_ITEM = 'todoListItem'


function saveToDo(item){
    toDoArr.push(item)
    localStorage.setItem(TO_DO_LIST_ITEM, toDoArr)
}

function onDeleteToDo(evt){
    const deleteString = evt.target.parentElement.children[0].innerText 
    toDoArr.splice(deleteString)
    console.log(toDoArr)
    evt.target.parentElement.remove()
    // evt.path[1].remove()
}

function WriteToDo(newLine){
    const li = document.createElement('li')
    const span = document.createElement('span')
    span.innerText = newLine
    const btnDelete = document.createElement('button')
    btnDelete.innerText = '❌'

    li.appendChild(span)
    li.appendChild(btnDelete)
    toDoList.appendChild(li)
    console.log(toDoArr)
    btnDelete.addEventListener('click',onDeleteToDo)
}

function onToDoSubmit(evt){
    evt.preventDefault()
    const newLine = toDoInput.value
    toDoInput.value =''
    saveToDo(newLine)
    WriteToDo(newLine)
    
}

toDoForm.addEventListener('submit',onToDoSubmit)