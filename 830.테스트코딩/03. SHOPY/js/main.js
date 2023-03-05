window.addEventListener("DOMContentLoaded",() => {

    let slilist = document.querySelectorAll(".slide");

    slilist.forEach((ele,idx) => {
        ele.setAttribute("data-seq",idx);
    });

    const SearchBtn = document.querySelector(".image li span");

    const form = document.querySelector("header form");

    const button = document.querySelectorAll(".btn");

    const sslide = document.querySelector(".main-slides ul");

    const sbullet = document.querySelectorAll(".control");

    let prot = 0;

    function highSlide(sseq) {

        if(prot) return;
        prot = 1;
        setTimeout(() => {
            prot = 0;
        },400)

        let commonlist = slide.querySelectorAll("li");

        if(seq) {
            sslide.style.top = "-100%";
            sslide.style.transition = "top .4s ease-in-out";

            setTimeout(()=>{
                sslide.appendChild(clist[0]);
                sslide.style.top = "0";
                sslide.style.transition = "none";
            },400);
        } else {
            sslide.insertBefore(commonlist[commonlist.length-1],commonlist[0]);
            sslide.style.top = "-100%";
            sslide.style.transition = "none";

            setTimeout(()=>{
                sslide.style.top = "0";
                sslide.style.transition = "top .4s ease-in-out";
            },0);
        }

       commonlist = sslide.querySelectorAll("li");

       let commonseq = commonlist[sseq].getAttribute("data-seq");

       for(let x of sbullet) {
        x.classList.remove("active");
       }

       sbullet[sseq].classList.add("active");


    }

    function search() {
        form.classList.toggle("active");
    }
    
    function searchover() {
        form.classList.remove("active");
    }

    SearchBtn.onclick = () => {
        search();
    }

    SearchBtn.onmouseout = () => {
        searchover();
    }

    button.forEach((ele,idx) => {
        ele.onclick = () => {
            highSlide(idx);
        };
    });


    const color = {"color1":"red","color2":"navy","color3":"sky","color4":"green"};
    const colorspan = document.querySelectorAll(".color span");

    for(let x in color) {
        console.log(color[x]);
    }

    

});