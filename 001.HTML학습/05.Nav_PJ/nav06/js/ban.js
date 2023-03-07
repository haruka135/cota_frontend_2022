// 네비유형 6 - 배너셋팅 JS - ban.js 

window.addEventListener('DOMContentLoaded',setBan);

// 배너 셋팅 함수 //////////
function setBan() {
    
    // 1. 호출 확인
    console.log("배너야~!");

    // 2. 대상선정: .bancont
    const bancont = document.querySelector('.bancont');
    console.log(bancont);

    // 3. 태그 구성하기
    // 태그변수
    let hcode = `<ul class="slide">`;

    for(let i = 1; i <= 14; i++) {

        hcode += `
        <li>
            <img src="./nav06/img_nav06/ban${i}.png" alt="배너이미지">
        </li>
        `;


    } //////////////////// for ///////////////////
    
    hcode += `</ul>`;

    // 4. 대상에 넣기
    bancont.innerHTML = hcode;

}//// setBan function ////////