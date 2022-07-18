const mybutton = document.getElementById("scroll-top");
const dow = document.getElementById("sha");
const ani1 = document.getElementById("hide");
const ani2 = document.getElementById("nav-toggle-btn");
const ani3 = document.getElementById("brand-name");
const remo = document.getElementById("Industries-w");
const remo2 = document.getElementById("Industries");

if(window.scrollY ==0){
 
    dow.style.backgroundImage   = "#fff";
}

window.onscroll = function scrollfun() {



    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        dow.style.backgroundImage = "rgba(255,255,255,0.1)";
    
        ani1.classList.add("ani1");
        ani2.classList.add("ani2");
        ani3.classList.add("ani3");
    } else {
        dow.style.backgroundImage   = "#fff";
        ani1.classList.remove("ani1");
        ani2.classList.remove("ani2");
        ani3.classList.remove("ani3");
    }


    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.opacity = "1";
  

    } else {
        mybutton.style.opacity = "0";
        dow.classList.remove("sha-dow");
    }

}

function topfunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}




