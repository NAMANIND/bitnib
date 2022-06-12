
const mybutton = document.getElementById("scroll-top");
const dow = document.getElementById("sha");

 window.onscroll = function scrollfun() {
    if(document.body.scrollTop >500 || document.documentElement.scrollTop >500){
        mybutton.style.opacity = "1";
        dow.classList.add("sha-dow");
    }else{
        mybutton.style.opacity = "0";
        dow.classList.remove("sha-dow");
    }
 }


 function topfunction() {
    // document.body.scrollTop = 0,'smooth';
    // document.documentElement.scrollTop = 0,'smooth';
    window.scrollTo({top: 0, behavior: "smooth"});
 }