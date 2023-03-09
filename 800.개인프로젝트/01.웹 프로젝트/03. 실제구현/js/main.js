window.addEventListener("DOMContentLoaded",()=>{
    // 슬라이드 대상 : .media-wrapper
    const slideWrapper = document.querySelectorAll(".media-wrapper");

    // 대상 셋팅하기
    slideWrapper.forEach((ele,idx)=>slideFn(ele,idx));

    // 공통 버튼 셋팅하기
    setBtn();

    // 로딩구역 호출
    loadFn();

});

function setBtn(){ 
    const mediabtn = document.querySelectorAll(".media-btn");
    
    mediabtn.forEach((ele,idx)=>{
        ele.onclick = ()=>{
            event.preventDefault();
            console.log("버튼 눌렀어");

            mediaSlide.forEach(val=>val(idx));
            
            // mediaSlide[0](idx);
            // mediaSlide[1](idx);

            // console.log(mediaSlide);
            
        };
    });
} ////////////// setBtn함수 /////////////

// 슬라이드호출 위해 전역배열변수 선언
const mediaSlide = [];

function slideFn(obj,idx) { // obj - 슬라이드부모요소 , idx - 슬라이드순번
    const mslide = obj.querySelector(".media-slide");

    let mlist = obj.querySelectorAll(".media-slide > li");

    mlist.forEach((ele,idx) => {
        ele.setAttribute("slide-data",idx);
    });

    // 각 슬라이드순번의 배열전역변수에 함수할당!
    mediaSlide[idx] = (seq) => {
        let plist = mslide.querySelectorAll("li");

        if(seq) {
            
            mslide.style.left = "-100%";
            mslide.style.transition = "left .4s ease-in-out";

            setTimeout(()=>{
                mslide.appendChild(plist[0]);
                mslide.style.left = "0";
                mslide.style.transition = "none";
            },400);
        } else {
            mslide.insertBefore(plist[plist.length - 1],plist[0]);
            mslide.style.left = "-100%";
            mslide.style.transition = "none";

            setTimeout(()=>{
                mslide.style.left = "0";
                mslide.style.transition = "left .4s ease-in-out";
            },0);
        }
    };
} ///////////////// slideFn 함수 //////////////


////// loadFn함수 //////////////////
function loadFn() {
    
    
        const bbtn = document.querySelectorAll(".bbtn");
        const bslide = document.querySelector(".business-slide");
        const bl = document.querySelectorAll(".bullet > li");
    
        let bulist = document.querySelectorAll(".business-slide li");
    
        bulist.forEach((ele,idx) => {
            ele.setAttribute("data-seq",idx);
        });
    
        const infoSlide = (seq) => {
            let commonlist = bslide.querySelectorAll("li");
    
            if(seq) {
                bslide.style.left= "-100%";
                bslide.style.transition = "left .4s ease-in-out";
    
                setTimeout(()=>{
                    bslide.appendChild(commonlist[0]);
                    bslide.style.left = "0";
                    bslide.style.transition = "none";
                },400);
            } else {
                bslide.insertBefore(commonlist[commonlist.length - 1],commonlist[0]);
                bslide.style.left = "-100%";
                bslide.style.transition = "none";
    
                setTimeout(()=>{
                    bslide.style.left = "0";
                    bslide.style.transition = "left .4s ease-in-out";
                },0);
            }
    
            bulist = bslide.querySelectorAll("li");
    
            let comseq = bulist[seq].getAttribute("data-seq");
    
            for(let x of bl) x.classList.remove("act");
    
            bl[comseq].classList.add("act");
        };
    
        bbtn.forEach((ele,idx)=>{
            ele.onclick = ()=>{
                event.preventDefault();
                console.log("버튼 눌렀어")
                infoSlide(idx);
            };
        });

} ////////// loadFn함수 ////////////////

