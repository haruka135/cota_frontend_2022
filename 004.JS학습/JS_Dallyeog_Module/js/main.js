// 2023캘린더

// 모듈 불러오기 : import
import MakeDallyeok from "./calendar.js";
// 현재 같은 위치일지라도 ./를 반드시 써야 불러옴.

// 생성자함수를 인스턴스로 호출하기
// 인스턴스 생성 : 특정 메모리 구역에 모듈을 로딩시켜서 개별화 기능이 적용되게 하는 것

// 우리가 만든 달력 생성자 함수에서 전달값을 받는 것은 달력을 넣을 요소의 선택자 정보
// 달력넣을 요소 : .calbx

let calbx = new MakeDallyeok(".calbx");
// 초기화함수를 호출함
calbx.initDallyeok();
// 다음달 달력호출
calbx.nextCal();

// 다른 요소에 달력 추가 생성하기
let calbx2 = new MakeDallyeok(".calbx2");
// 초기화 함수 호출
calbx2.initDallyeok();


//// 제이쿼리 라이브러리를 html페이지 상단에 호출후 사용
$(".myipt").click(function(){
    console.log(this);
    $(this).next().find(".calender").show();
});

$(".calender").click(function() {
    $(this).hide();
});