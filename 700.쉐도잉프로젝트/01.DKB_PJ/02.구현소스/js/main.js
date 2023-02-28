// 도깨비 PJ 메인 페이지 JS - main.js

///// 로드 구역 ////////////////////
window.addEventListener('DOMContentLoaded',() => {
    console.log('로딩완료');

    // 구현 내용: 내부 링크 클릭하여 index 페이지 이동 시 파라미터로 구분하여
    // 메인 페이지 애니메이션 중지

    // 1. 파라미터 읽어오기
    let pm = location.href;

    // 2. 파라미터 유무로 분기하기
    // 물음표로 존재여부로 애니메이션 실행 가부 결정
    if(pm.indexOf('?') !== -1) {

        // 파라미터 값만 잘라서 추출
        pm.split('?')[1].split('=')[1];
        console.log(pm); 

        // pm 값이 "m"이면 애니메이션 중지
        if (pm === 'm') {
            // body의 클래스를 제거함
            document.body.classList.remove('on');
        } /////////////////////// if /////////////////////

    } ////////////////// if ////////////////////



}); //////////////////////////// 로드 구역 ///////////////////