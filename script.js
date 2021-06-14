//const subtract = document.querySelector(".subtract");
//const reset = document.querySelector(".reset");
//const add = document.querySelector(".add");
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons")

buttons.addEventListener('click', event => {    
    if(event.target.classList.contains('add'))
    count.innerHTML++;
    setColor();

    if(event.target.classList.contains('subtract'))
    count.innerHTML--;
    setColor();

    if(event.target.classList.contains('reset'))
    count.innerHTML = 0;
    setColor();

});

const setColor = () => {
    if(count.innerHTML > 0) count.style.color = "green"; 

    else if (count.innerHTML < 0) count.style.color = "tomato"

    else count.style.color = "#fff"    
}
    /* else if(count.innerHTML < 0) count.style.color("tomato")

    else count.style.color = (#fff) */




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

