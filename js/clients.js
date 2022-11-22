
const mybutton = document.getElementById("scroll-top");
const dow = document.getElementById("sha");
const ani1 = document.getElementById("hide");

const remo = document.getElementById("Industries-w");
const remo2 = document.getElementById("Industries");


function lockScroll() {
   
    if ($('body').hasClass('lock-scroll')) {
        document.getElementById("lop").style.display="none";
        $('body').removeClass('lock-scroll');
    } else {
        document.getElementById("lop").style.display="block";
        $('body').addClass('lock-scroll');
    }
  }
  


window.onload = function() {
    var href = document.location.href;
    var str= href.substring(href.lastIndexOf('/') + 1);
    if(str == "contact"){
    document.getElementById(str).classList.add("temp2"); 
    }else{
        document.getElementById(str).classList.add("temp"); 
    }
  
   
}

if(window.scrollY == 0){
 
    document.getElementById("sha").style.background = "#cdd2d6";
}

const ani4 = document.getElementById("yest");
window.onscroll = function scrollfun() {



    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        dow.style.background = "rgba(255,255,255,0.1)";
    
        ani1.classList.add("ani1");
       
        ani4.classList.add("ani4");
    } else {
        dow.style.background = "#cdd2d6"; 
        ani1.classList.remove("ani1");

        ani4.classList.remove("ani4");
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



function processfunction() {
    if(window.innerWidth < 800){
        window.location= "/#Process-w";
    }else{
      window.location= "/#Process";
    }
    
    window.scrollTo({ top: $("#Process").offset().top, behavior: "smooth" });
}










