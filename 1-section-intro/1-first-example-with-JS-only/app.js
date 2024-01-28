
const button = document.querySelector('button');
const input = document.querySelector('input');
const goals = document.querySelector('ul');

function addGoal() {
    const newGoal = document.createElement('li');
    newGoal.textContent = input.value;
    goals.appendChild(newGoal);
}

button.addEventListener('click', addGoal);