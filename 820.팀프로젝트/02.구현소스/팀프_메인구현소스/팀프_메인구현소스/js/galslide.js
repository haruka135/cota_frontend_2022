window.addEventListener("DOMContentLoaded",()=> {

    const glist = document.querySelectorAll(".gal-slide>li");

    glist.forEach((ele,idx) => {
        ele.setAttribute("data-seq",idx);
    });
    
    // 1-3. 갤러리 이벤트 대상: .btn
    const btn = document.querySelectorAll(".btn");
    
    // 1-4. 갤러리 변경 대상: .gal-slide
    const gslide = document.querySelector(".gal-slide");

    const bullet = document.querySelectorAll(".bullet li");
    
    const galslide = (seq) => {
        
        // 0. 슬라이드 li 수집하기
        let glist = gslide.querySelectorAll("li");

        if(seq) {
            gslide.style.left = "-100%";
            gslide.style.transition = "left .4s ease-in-out";

            setTimeout(()=>{
                gslide.appendChild(glist[0]);
                gslide.style.left = "0";
                gslide.style.transition = "none";
            },400)
        } else {
            gslide.insertBefore(glist[glist.length-1],glist[0]);
            gslide.style.left = "-100%";
            gslide.style.transition = "none";
            
            setTimeout(()=>{
                gslide.style.left = "0";
                gslide.style.transition = "left .4s ease-in-out";
            },0);
        }

        glist = gslide.querySelector("li");

        let gseq = glist[seq].getAttribute("data-seq");

        for (let x of bullet) x.classList.remove("on");
       
        bullet[gseq].classList.add("on");

    };
   
     btn.forEach((ele,idx) => {
               ele.onclick = () => {
                event.preventDefault();
                console.log("test");
                   galslide(idx);
               }
           });
});