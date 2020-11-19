'use strict';

const modal = document.getElementById('id01');

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const buttons = document.querySelectorAll('.close, .okeybtn, .cancelbtn');
for (let i=0; i < buttons.length; i +=1){
    buttons[i].addEventListener('click', () => {
        modal.classList.add('modal--hide');
        setTimeout(function () {
            modal.style.display = "none";
            modal.classList.remove('modal--hide');
        }, 400);
    });
}

