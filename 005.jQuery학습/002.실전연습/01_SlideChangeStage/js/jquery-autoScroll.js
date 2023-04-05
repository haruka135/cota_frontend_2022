// 제이쿼리로 구현한 자동페이지 휠 JS : jquery-autoScroll.js

// 로딩구역없이 함수로 구현함! /////

/****************************************** 
    대상 변수할당하기
******************************************/
// 전체 페이지번호
let pno = 0;
// 페이지 요소
const pg = $(".page");
// 전체 페이지개수
const pgcnt = pg.length;
console.log("페이지개수:", pgcnt, pg);
// 광실행금지변수
let prot = [];
// 광스크롤금지
prot[0] = 0;
// GNB메뉴 li
const gnb = $(".gnb li");
// 인디케이터
const indic = $(".indic li");
// 각 페이지별 등장요소
const minfo = $(".minfo");

/****************************************** 
    이벤트 등록하기
******************************************/
// 윈도우 휠이벤트 발생시
$(window).on("wheel", wheelFn);
// GNB메뉴 클릭시 : 대상 - GNB메뉴(.gnb a)
$(".gnb a").click(chgMenu);
// INDIC 클릭 시 : 대상 - .indic a
$(".indic a").click(chgMenu);

// 새로고침시 스크롤위치 캐싱 변경하기
$("html,body").animate({ scrollTop: "0px" });

/**************************************** 
    함수명: wheelFn
    기능: 마우스휠 이벤트 발생시 호출됨
    -> 한페이지씩 자동스크롤 기능
****************************************/
function wheelFn() {
    // 광휠금지
    if (prot[0]) return;
    chkCrazy(0);

    console.log("휠~~~~~~!");

    // 1.휠방향 알아내기
    let delta = event.wheelDelta;
    console.log(delta);

    // 2. 방향에 따른 페이지번호 증감
    if (delta < 0) {
        pno++;
        if (pno === pgcnt) pno = pgcnt - 1;
        // 마지막 페이지번호에 고정!
    } //// if /////
    else {
        pno--;
        if (pno === -1) pno = 0;
        // 첫페이지번호에 고정!
    } //// else ////

    console.log(pno);

    // 3. 스크롤 이동하기 + 메뉴에 클래스 "on" 넣기
    // 대상: html,body -> 두개를 모두 잡아야 공통적으로 적용됨!
    movePg();
} /////////////// wheelFn 함수 ///////////////

// 광클 초기값
prot[1] = 0;

/************************************************** 
    함수명: chgMenu
    기능: 메뉴 클릭 시 메뉴변경과 페이지 이동
**************************************************/

function chgMenu() {
    // 0. 광클 금지
    if (prot[1]) return;
    chkCrazy(1);

    // 1. 클릭된 a요소의 부모 li 순번을 구함  === pno
    let idx = $(this).parent().index();

    console.log("나,클릭?", this, idx);

    // 2. 전역페이지 번호에 순번 업데이트
    pno = idx;

    // 3. 페이지 이동 + 메뉴에 클래스 "on" 넣기
    movePg();
} //////// chgMenu 함수 ////////////

/************************************************** 
    함수명: chkCrazy
    기능: 광적동작 체크하여 제어
**************************************************/

function chkCrazy(seq) {
    // 관리변수 순번

    prot[seq] = 1;
    setTimeout(() => (prot[seq] = 0), 800);
} /////// chkCrazy 함수 //////////

/************************************************** 
    함수명: movePg
    기능: 페이지 이동 애니메이션
**************************************************/

function movePg() {
    $("html,body").animate(
        {
            scrollTop: $(window).height() * pno + "px",
        },
        800,
        "easeInOutQuint",
        showEle
    ); // 이동 후 콜백함수 호출

    // 대상 : GNB메뉴, 인디케이터 메뉴
    gnb.eq(pno).addClass("on").siblings().removeClass("on");
    indic.eq(pno).addClass("on").siblings().removeClass("on");
} ///// movePg //////

// 등장할 요소 초기화

/************************************************** 
    함수명: showEle
    기능: 페이지 이동 후 요소 등장하기
**************************************************/

function showEle() {
    // .minfo 페이지별 등장하기
    pg.eq(pno).find(".minfo").css({
        opacity: "1",
        transform: "translate(-50%,-50%)",
    })
    // 등장할 요소 초기화
    .parents(".page").siblings().find(".minfo")
    .css({
        opacity: "0",
        transform: "translate(-50%,50%)",
        transition: ".6s ease-out",
    }); // css /////
} ///////// showEle 함수 //////////

// 등장액션함수 최초호출 //
setTimeout(showEle,1000);
