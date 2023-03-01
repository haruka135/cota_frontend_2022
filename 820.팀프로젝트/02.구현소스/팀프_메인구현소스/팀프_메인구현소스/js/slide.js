
window.addEventListener("DOMContentLoaded",() => {

        // 슬라이드 번호
        let slidenum = 0;

        let slidecnt = document.querySelectorAll(".slider li").length;

        // 1. 대상 선정

        // 1-1. 이벤트 대상 : .sbtn
        const sbtn = document.querySelectorAll(".sbtn");
        console.log(sbtn);

        // 1-2. 변경 대상: .slider
        const slider = document.querySelector(".slider");
        console.log(slider);

        // 2. 슬라이드 함수
        const Slider = (seq) => {
            if(seq) {
                slidenum++;
            } else {
                slidenum--;
            }

            if(slidenum === -1) slidenum = slidecnt -1;
            else if (slidenum === slidecnt) slidenum = 0;

            // 이동하기
            
            slider.style.left = (slidenum * -100) + "%";
            slider.style.transition = "left 0.5s ease-in-out";

        };

        // 3. 대상에 이벤트 설정하기

        sbtn.forEach((ele,idx) => {

            ele.onclick = () => {
                Slider(idx);
            };

        });

});