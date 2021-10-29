let a = document.getElementById('first');
let b = document.getElementById('second');
let res = a + b;

function modifyDOM() {
    let resElement = document.getElementById('res');
    resElement.nodeValue(res);
}

document.addEventListener('submit', modifyDOM(), false);