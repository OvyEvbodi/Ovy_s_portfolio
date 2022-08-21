
const input = document.getElementById('input');
const ulEl = document.getElementById('ul');
const addBtn = document.getElementById('add');
const delBtn = document.getElementById('del');
input.addEventListener('keydown', (event)=>{
    if (event.key == "Enter")
    addItem();
})
function addItem(){
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = "";
}
//initializing li array
let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];
itemsArray.forEach(liMaker);
function liMaker(task){
    const li = document.createElement('li')
    li.textContent = task;
    ulEl.appendChild(li);
}
//add function
addBtn.addEventListener('click', ()=>{
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = "";
})
//delete function
delBtn.addEventListener('click', ()=>{
    localStorage.clear();
    ulEl.innerHTML = "";
    itemsArray = [];
})
