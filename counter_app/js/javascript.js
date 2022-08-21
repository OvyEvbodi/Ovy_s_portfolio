

count = 0
function increase(){
	let countEl = document.getElementById("count");
	count += 1
	countEl.textContent = count
}

function save(){
	let countEl = document.getElementById("count");
	let prev = document.getElementById("prev_count");
	prev.textContent += "-" + count
    count = 0
	countEl.textContent = count
}