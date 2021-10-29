let a = document.getElementById('first').value;
let b = document.getElementById('second').value;


function modifyDOM() {
    document.getElementById('res').innerHTML = a + b;
    console.log(res);
}

document.addEventListener('submit', modifyDOM(), false);