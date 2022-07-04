//Hw1

document.cookie = "name=Kseniia";
document.cookie = "age=24";

alert(document.cookie);

//Hw2

const wrapper = document.querySelector('.wrapper');
const text = document.querySelector('.text');
const ageInput = document.createElement('input');
ageInput.type = 'date';

wrapper.appendChild(ageInput);

let age = sessionStorage.getItem('age');

if (age === null) {
    ageInput.addEventListener('blur', (e) => {
        let date = new Date(e.target.value);
        date.setFullYear(new Date().getFullYear());
        sessionStorage.setItem('age', date);
        age = sessionStorage.getItem('age');
    });
} else if (age !== null) {
    ageInput.remove();
    let dateInFuture = new Date(age);
    let dateNow = new Date();
    let diffMonth = '';

    if (dateInFuture.getMonth() >= dateNow.getMonth()) {
        diffMonth = dateInFuture.getMonth() - dateNow.getMonth();
    } else if (dateInFuture.getMonth() = dateNow.getMonth()) {
        dateInFuture.setFullYear(dateInFuture.getFullYear() + 1);
        diffMonth = dateInFuture.getMonth() + 12 - dateNow.getMonth();
    }

    let difference = dateInFuture - dateNow;
    text.innerText = `Until your birthday left: ${diffMonth} month, ${Math.floor(difference / (1000 * 60 * 60 * 24))} days, ${Math.floor(difference / (1000 * 60 * 60))} hours, ${Math.floor(difference / (1000 * 60))} minutes, ${Math.floor(difference / 1000)} seconds!`
}

//Hw3

const info = document.querySelector('.info');
function setInfo() {
    return info.value = localStorage.getItem('info');
}
setTimeout(setInfo, 2000);

info.addEventListener('change', (e) => {
    localStorage.setItem('info', e.target.value);
})

//Hw4

const arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(-1, 0, 'c');
arr.splice((arr.length), 0, 'd');

console.log(arr);

