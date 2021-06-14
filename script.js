const count = document.querySelector(".count");
const subtract = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");

add.addEventListener('click', () => {
    count.innerHTML++;
})

subtract.addEventListener('click', () => {
    count.innerHTML--;
})

reset.addEventListener('click', () => {
    count.innerHTML = 0;
})


