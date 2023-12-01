// Табло
let levo = document.querySelector('.left');
let pravo = document.querySelector('.right');
let mid = document.querySelector('.mid')
//Функции
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const umno = document.querySelector('.multiply');
const delo = document.querySelector('.division');
const udo = document.querySelector('.clear');
//ответ
const otvet = document.querySelector('.otvet');


plus.onclick = () => {
    let sum = Number(levo.value) + Number(pravo.value);
    otvet.innerHTML = sum;
    mid.innerHTML = '+'
}

minus.onclick = () => {
    let sum = Number(levo.value) - Number(pravo.value);
    otvet.innerHTML = sum;
    mid.innerHTML = '-'
}

umno.onclick = () => {
    let sum = Number(levo.value) * Number(pravo.value)
    otvet.innerHTML = sum
    mid.innerHTML = '*'
}

delo.onclick = () => {
    let sum = Number(levo.value) / Number(pravo.value)
    otvet.innerHTML = sum;
    mid.innerHTML = '÷'
}

//Удаление 

udo.onclick = () => {
    otvet.innerHTML = '';
    levo.value = '';
    pravo.value = '';
}

//Изменение

let calc = document.querySelector('.calculator')
const input = document.querySelector('.input');

input.addEventListener("change", () => {
    calc.style.backgroundColor = input.value;
});



