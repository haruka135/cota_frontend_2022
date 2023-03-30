document.addEventListener("DOMContentLoaded",function() {


    const ham = document.querySelector(".ham");
    const hamspan = document.querySelectorAll(".ham span");
    const hmenu = document.querySelector(".hidden-menu");

    ham.onclick = () => {        
        hmenu.classList.toggle("on");
        ham.classList.toggle("on");
    }

    let bar_seq = 0;
    const bar = document.querySelectorAll(".bar");
    setInterval(()=>{
        bar[bar_seq].classList.remove("on");
        bar_seq++;
        if(bar_seq===3) bar_seq = 0;
        bar[bar_seq].classList.add("on")
    },3000)

    // 제이쿼리 코딩 구역 ///////////////////

    // 탑영역
    let topA = $(".main-header");
    // 비디오
    let vid = $(".vidbx video");

    /// 스크롤 이벤트 발생시 ////////////
    $(window).scroll(function(){
        let scTop = $(this).scrollTop();
        console.log(scTop);

        // 처음 스크롤 스타트시 상단 메뉴 변경하기
        if(scTop >= 100){
            topA.css({backgroundColor: "rgba(0, 0, 0, 0.4)"});
        }
        else{
            topA.css({backgroundColor: "rgba(0, 0, 0, 0)"});
        }

    }); ////////// scroll ///////////////

    // 비디오순서
    let vseq = 0;

    setInterval(()=>{
        vseq++;
        if(vseq===3) vseq=0;
        console.log(vseq);
        // 현재 비디오 보이기
        vid.eq(vseq).fadeIn(300)
        .siblings().fadeOut(300);

    },3000)

}); /////////////////////// load //////////////////////////////