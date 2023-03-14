
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
                event.preventDefault();
                Slider(idx);
            };
        });

    /************************************************************* 
                    함수기능 : 메뉴 클릭시 하단 메뉴 나타나기 
    *************************************************************/

        // 1. 메뉴 a 요소 수집
        const menu = document.querySelector(".hidden-ul li a:nth-of-type(1)");

        // 2. 숨겨진 메뉴 나타나기
        const hmenu = document.querySelector(".hidden-smenu");

        const closing = document.querySelector(".close");

        // 3. 함수 
        const hidden = () => {
            hmenu.style.display = "block";
            menu.style.display = "none";
            closing.style.display = "block";
        };

        const closer = () => {
            hmenu.style.display = "none";
            menu.style.display = "block";
            closing.style.display = "none";
        };

        // 4. 클릭 이벤트
        menu.onclick = () => {
            event.preventDefault();
            hidden();
        };
        closing.onclick = () => {
            event.preventDefault();
            closer();
        };

    /************************************************************* 
                    함수기능 : 인포메이션 배열넣기
    *************************************************************/
    // 0. 배열
    const pa = ["Four robotic spacecraft have visited Saturn.",
                "NASA's Pioneer 11 provided the first close look in September 1979.",
                "NASA's twin Voyager 1 and Voyager 2 spacecraft followed up with flybys nine months apart in 1980 and 1981.",
                "The Saturn System Through the Eyes of Cassini (e-Book)",
                "Each flyby revealed intriguing details about the ringed giant world,",
                "but it wasn't until the international Cassini mission arrived in orbit in 2004",
                "that our understanding of Saturn really started to take shape.",
                "Cassini studied Saturn from orbit for 13 years before its human engineers",
                "on Earth transformed it into an atmospheric probe for its spectacular final plunge into the planet in September 2017.",
                "Cassini also carried ESA's Huygens Probe, which landed on Saturn's moon Titan in 2005.",
                "From Earth, astronomers have studied Saturn with telescopes for centuries.",
                "And the Hubble Space Telescope continues to uncover new details from its perch in Earth orbit."]
    console.log(pa);
        // 1. 대상선정
        const p = document.querySelector(".history p");
        
        for(let x of pa) {
            console.log(x);
            p.innerHTML += `${x}<br>`;
        }      

        
    /************************************************************* 
                    함수기능 : explorer 슬라이드 함수
    *************************************************************/

    // 1. 대상 선정 ///////////////////////////////////////////
    // 1-1. 이벤트 대상: .ebtn
    const ebtn = document.querySelectorAll(".ebtn");

    // 1-2. 변경 대상: .explorer-slide
    const eslide = document.querySelector(".explorer-slide");

    // 1-3. 슬라이드 li list 
    let elist = document.querySelectorAll(".explorer-slide li");

    // 초기화 1 - 순번 붙이기 //////////////// 

    elist.forEach((ele,idx) => {
        ele.setAttribute("ex-seq",idx);
    });

    // 초기화 2 - 맨 뒤 요소 맨 앞으로 이동 2번 하기 //////////////
    // 맨 뒤 맨 앞 이동 함수만들기

    const echgseq = () => {
        // 현재 슬라이드 li 새로 읽기(2번 반복시 li의 순서가 달라지기 때문)
        elist = document.querySelectorAll(".explorer-slide > li");

        // 맨뒤 맨앞 이동하기 -> 변경대상: .explorer-slide -> eslide 변수
        eslide.insertBefore(elist[elist.length-1],elist[0]);
    };

    // 2번 맨뒤 맨앞이동 함수 호출하기
    for(let i=0;i<2;i++) echgseq();

    // 광클 금지 변수
    let eprot = 0;

    // 2. 슬라이드 변경 함수 만들기 

    const exSlide = (seq) => {

        // 광클 금지 설정하기
        if(eprot) return;
        eprot = 1; // 잠금!
        setTimeout(()=>{
            eprot = 0; // 해제!
        },400);

        // 0. 현재의 슬라이드 li 수집하기
        let commonli = eslide.querySelectorAll("li");

        // 1. 방향에 따른 분기
        // 1-1. 오른쪽 버튼 클릭 시

        if(seq) {
            // 1. 슬라이드 이동전 먼저 잘라낸다

            // 1-1. 바깥에 나가있는 첫번째 슬라이드 li를 잘라서 맨 뒤로 보낸다.
            eslide.appendChild(commonli[0]);
            eslide.style.left = "-125%";
            eslide.style.transition = "none";

            // 1-2. 오른쪽 버튼 클릭 시 다음 슬라이드가 나타나도록 슬라이드 박스의 left 값을 -220%로 변경시킨다.
            setTimeout(() => {
                eslide.style.left = "-250%";
                eslide.style.transition = "left .4s ease-in-out";
            },1); 
        } else {
            eslide.insertBefore(commonli[commonli.length - 1],commonli[0]);
            eslide.style.left = "-375%";
            eslide.style.transition = "none";

            setTimeout(()=> {
                eslide.style.left = "-250%";
                eslide.style.transition = "left .4s ease-in-out";
            },0);
        }

    };
    
    // 2. 이동버튼대상에 이벤트 설정하기
    ebtn.forEach((ele,idx) => {
        ele.onclick = () => {
            event.preventDefault();
            exSlide(idx);
        };
    });
});