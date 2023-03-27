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
calbx.