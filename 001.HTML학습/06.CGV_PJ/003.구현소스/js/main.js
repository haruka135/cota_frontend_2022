// CGV 메인 페이지

// 로드구역

window.addEventListener("DOMContentLoaded",() => {

    /********************************************** 
        [ 포스터 메뉴 클릭 시 클래스 주기 ]
        - 포스터 메뉴 클릭 시 해당 li에 클래스 'on'을 주고 
        나머지 li는 'on'을 모두 지워서 선택된 li만 일어서 있는 css가 적용되게 한다
    **********************************************/

    // 대상: .mlist ul>li -> 이벤트 + 변경대상 일치
    const mlist = document.querySelector(".mlist ul>li");
    console.log(mlist);

    // 2. 클릭 이벤트 함수 설정
    // for of
    for (let x of mlist) {
        x.onclick = () => {
            mlist.forEach(ele=>Element.ClassList.remove("on"));

            x.classList.add("on");
        };
    }
});