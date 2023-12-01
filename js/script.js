// Табло
let left_input = document.querySelector('.left');
let right_input = document.querySelector('.right');
let middle_mark = document.querySelector('.mid')
//Функции
const plus_button = document.querySelector('.plus');
const minus_button = document.querySelector('.minus');
const multiply_button = document.querySelector('.multiply');
const division_button = document.querySelector('.division');
const clear_button = document.querySelector('.clear');
//ответ
const result = document.querySelector('.otvet');


plus_button.onclick = () => {
    let sum = Number(left_input.value) + Number(right_input.value);
    result.innerHTML = sum;
    middle_mark.innerHTML = '+'
}

minus_button.onclick = () => {
    let sum = Number(left_input.value) - Number(right_input.value);
    result.innerHTML = sum;
    middle_mark.innerHTML = '-'
}

multiply_button.onclick = () => {
    let sum = Number(left_input.value) * Number(right_input.value)
    result.innerHTML = sum
    middle_mark.innerHTML = '*'
}

division_button.onclick = () => {
    let sum = Number(left_input.value) / Number(right_input.value)
    result.innerHTML = sum;
    middle_mark.innerHTML = '÷'
}

//Удаление 

clear_button.onclick = () => {
    result.innerHTML = '';
    left_input.value = '';
    right_input.value = '';
    middle_mark.innerHTML = '';
}

//Изменение цвета

let calculator = document.querySelector('.calculator')
const color_input = document.querySelector('.input');

color_input.addEventListener("change", () => {
    calculator.style.backgroundColor = color_input.value;
});



