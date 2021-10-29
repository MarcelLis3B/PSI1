const a = document.getElementById('first');
const b = document.getElementById('second');
const p = document.getElementById('p');
const button = document.getElementById('button');

function modifyDOM() {
    const result = parseInt(a.value) + parseInt(b.value);
    p.innerHTML = `Wynik to: ${result}`;
}

button.addEventListener('click', modifyDOM);