let a = document.getElementById('first').value;
let b = document.getElementById('second').value;
let res = a + b;

function modifyDOM() {
    let resElement = document.getElementById('res');
    console.log(res);
}

document.addEventListener('submit', modifyDOM(), false);