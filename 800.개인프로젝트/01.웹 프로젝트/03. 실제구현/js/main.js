document.addEventListener("DOMContentLoaded",function() {

    const ham = document.querySelector(".ham a");
    const hamspan = document.querySelectorAll(".ham a span");
    const hmenu = document.querySelector(".hidden-menu");

    ham.onclick = () => {
        hmenu.classList.toggle("on");
    }

    let bar_seq = 0;
    const bar = document.querySelectorAll(".bar");
    setInterval(()=>{
        bar[bar_seq].classList.remove("on");
        bar_seq++;
        if(bar_seq===3) bar_seq = 0;
        bar[bar_seq].classList.add("on")
    },3000)

});