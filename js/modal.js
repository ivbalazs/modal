'use strict';

const modal = document.getElementById('id01');

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementsByClassName('close')[0].addEventListener('click', function () {
    modal.classList.add('modal--hide');
    setTimeout(function () {
        modal.style.display = "none";
        modal.classList.remove('modal--hide');
    }, 400);
});

document.getElementsByClassName('okeybtn')[0].addEventListener('click', function () {
    modal.classList.add('modal--hide');
    setTimeout(function () {
        modal.style.display = "none";
        modal.classList.remove('modal--hide');
    }, 400);
});

document.getElementsByClassName('cancelbtn')[0].addEventListener('click', function () {
    modal.classList.add('modal--hide');
    setTimeout(function () {
        modal.style.display = "none";
        modal.classList.remove('modal--hide');
    }, 400);
});

