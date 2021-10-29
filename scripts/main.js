let a = document.getElementById('first').value;
let b = document.getElementById('second').value;


function modifyDOM() {
    document.getElementById('res').innerHTML = parseInt(a) + parseInt(b);
}

document.addEventListener('submit', modifyDOM(), false);