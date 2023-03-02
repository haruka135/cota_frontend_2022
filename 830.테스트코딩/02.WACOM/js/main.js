window.addEventListener('DOMContentLoaded',LoadFunction);

function LoadFunction() {

    let snumber = 0;
    let scnt = document.querySelectorAll('.slider-list li').length;

    const btn = document.querySelectorAll('.controls a');
    console.log(btn);

    const slider = document.querySelector('.slider-list');
    console.log(slider);

    const sliders = (seq) => {

        if(seq) {
            snumber++;
        }else {
            snumber--;
        }

        if(snumber === -1) snumber = scnt -1;
        else if (snumber === scnt) snumber = 0;

        slider.style.left = (snumber * -100) + "%";
        slider.style.transition = "left .5s ease-in-out";
    };

    btn.forEach = (ele,idx) => {
        ele.onclick = () => {
            sliders(idx);
        };
    };

}