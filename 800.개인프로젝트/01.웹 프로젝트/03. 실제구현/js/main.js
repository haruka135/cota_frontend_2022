window.addEventListener("DOMContentLoaded",loadFn);

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
}