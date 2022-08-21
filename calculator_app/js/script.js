let inputEl = document.getElementById("input_el");
let exp = "";

function press(key){
    exp += key;
    inputEl.value = exp;
}
function equal(){
    inputEl.value = eval(exp);
    let prev = inputEl.value;
    let storageEl = document.getElementById("storage");
    storageEl.textContent += '- ' + prev;
    exp = "";
}
function clean(){
   exp = "";
   inputEl.value = exp;
   storageEl.textContent = "";
   
}

