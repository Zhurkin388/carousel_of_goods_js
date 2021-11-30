const slider = document.querySelector('.slider__list');

const step = slider.children.length / 5;

let count = 0;
let position = -11;

const getNextGoods = () => {
    count++;
    position = position -1180;

    if(count >= step) {
        count = 0;
        position = -11;
    }

    slider.style.marginLeft = position + 'px';
};

const getPrevGoods = () => {
    count--;

    position = position + 1180;

    if(count < 0) {
        count = Math.floor(step);
        position = -1180 * count;
        position -= 11;
    }

    slider.style.marginLeft = position + 'px';
};

const getTimeOutGoods = setTimeout( function tick() {
    count++;
    position = position -1180;

    if(count >= step) {
        count = 0;
        position = -11;
    }
    timerId = setTimeout(tick, 5000);

    slider.style.marginLeft = position + 'px';
}, 10000);
