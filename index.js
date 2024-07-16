'use strict'

let accBtns = document.querySelectorAll('.slider__item-btn');

accBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.closest('.slider__item').querySelector('.slider__item-text');
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
})