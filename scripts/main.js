let a = document.getElementById('first');
let b = document.getElementById('second');
let res = a + b;

function modifyDOM() {
    let resElement = document.getElementById('res');
    console.log(res);
}

document.addEventListener('submit', modifyDOM(), false);