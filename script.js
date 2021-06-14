//const subtract = document.querySelector(".subtract");
//const reset = document.querySelector(".reset");
//const add = document.querySelector(".add");
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons")

buttons.addEventListener('click', event => {    
    if(event.target.classList.contains('add'))
    count.innerHTML++;

    if(event.target.classList.contains('subtract'))
    count.innerHTML--;

    if(event.target.classList.contains('reset'))
    count.innerHTML = 0;
});






/* add.addEventListener('click', () => {
    count.innerHTML++;
})

subtract.addEventListener('click', () => {
    count.innerHTML--;
})

reset.addEventListener('click', () => {
    count.innerHTML = 0;
})
 */

