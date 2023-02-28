// 도깨비 PJ 링크 시스템

window.addEventListener("DOMContentLoaded",()=>{
    console.log("로딩완료");

    // 링크 시스템 : 메뉴의 a요소 링크를 셋업한다.

    // 대상: .top a -> 상단 영역의 모든 a요소

    const link = document.querySelectorAll("top a");

    // 클릭 이벤트 함수 셋팅하기 //

    for(let x of link) { // x는 각 a 요소
        x.onclick = () => {
            // 1. a 요소의 글자 데이터
            let atxt = x.innerText;

            // 만약 이미지가 있으면 img 요소의 alt 읽어서 atxt에 재할당
            // if(null) {
            // if(undefined) {
            // -> 데이터가 null인 경우는 if문에서
            // -> 데이터가 undefined인 경우는 if문에서
            // false와 같이 취급
            // 만약 요소가 없으면 null이 리턴된다.
            // undefined는 변수의 값이나 함수가 생성되지 않은 경우 리턴되는 기본 할당값

            // 클릭된 a요소 하위의 img 요소를 가져옴
            let chk = x.querySelector('img');

            if(chk) {
                // atxt 변수에 img의 alt 속성값 넣기
                atxt = chk.alt;
                console.log("재할당", atxt);
            }

            console.log(atxt,chk);

            // 주소할당변수
            let url;

            // 2. 링크 분기하기
            switch(atxt) {
                case "인물관계도" : url="cat"; break;
                case "로그인": url="login"; break;
                case "회원가입": url="member"; break;
                case "tvN로고": url = "index"; break;
                default: url="esc";
            }

            if(url === "esc") {
                alert(`공사중입니다~`);
            }
            else if (
                atxt === "트위터 바로가기" ||
                atxt === "인스타그램 바로가기" ||
                atxt === "페이스북 바로가기"
            ){
                window.open().location.href= url;
            }
            else {

                // 메인 페이지 이동일 경우
                // html?code=m을 보내주자!

                location.href = 
                url + ".html" + (atxt === "tvN로고")?"?code=m":"";
            }
        };
    }
}); ///////////// 로드구역