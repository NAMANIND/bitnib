
const mybutton = document.getElementById("scroll-top");
const dow = document.getElementById("sha");
const ani1 = document.getElementById("hide");
const ani2 = document.getElementById("nav-toggle-btn");
const ani3 = document.getElementById("brand-name");
const remo = document.getElementById("Industries-w");
const remo2 = document.getElementById("Industries");

window.onload = function() {
    var href = document.location.href;
    var str= href.substring(href.lastIndexOf('/') + 1);
    if(str == "contact"){
        document.getElementById(str).classList.add("temp2"); 
    }else{
        document.getElementById(str).classList.add("temp"); 
    }  
}


function lockScroll() {
   
    if ($('body').hasClass('lock-scroll')) {
        document.getElementById("lop").style.display="none";
        $('body').removeClass('lock-scroll');
    } else {
        document.getElementById("lop").style.display="block";
        $('body').addClass('lock-scroll');
    }
}




if(window.scrollY ==0){
    document.getElementById("sha").style.backgroundColor = "#fff8fa"; 
}


$(function(){
    boxRollovers();
});

function boxRollovers()
{
    $selector = $(".conio");
    XAngle = 0;
    YAngle = 0;
    Z = 0;
    
    $selector.on("mousemove",function(e){
        var $this = $(this);
        var XRel = e.pageX - $this.offset().left;
        var YRel = e.pageY - $this.offset().top;
        var width = $this.width();
    
        YAngle = -(0.5 - (XRel / width)) * 30; 
        XAngle = (0.5 - (YRel / width)) * 30;
        updateView($this.children(".icon"));
    });
    
    $selector.on("mouseleave",function(){
        oLayer = $(this).children(".icon");
        oLayer.css({"transform":"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
        oLayer.find("strong").css({"transform":"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
    });
}

function updateView(oLayer)
{
    oLayer.css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)","transition":"none","-webkit-transition":"none"});
    oLayer.find("strong").css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + (XAngle / 0.66) + "deg) rotateY(" + (YAngle / 0.66) + "deg)","transition":"none","-webkit-transition":"none"});
}


// var cur_width = window.innerWidth;
// if (cur_width > 1024 && cur_width > 640) {

// console.log("b");
//     // location.reload();

// } 

// console.log(cur_width);

// var width = window.innerWidth;

// window.resizeTo(400) = function() {


// }

// window.onresize(function () {
//     location.reload();
// });

// window.onresize = function() {

//     window.setTimeout(function () {
//             location.reload();
//         },1000);
//     }


//     remo.remove();

//     location.reload()= function() {
//     if(w <=800){
//        

//     }
// }


// if(width> 769){
//     window.setTimeout(function () {
//         location.reload();
//     },1000);
// }else{
//     if(width < 769){
//     window.setTimeout(function () {
//         location.reload();
//     },1000);
// }}



// window.onresize=function () {
//     var width = window.innerWidth;

//     if (width >1024 )  {
//         location.reload();
//         remo2.remove();

//     } else if (width  < 767) {
//         location.reload();
//         remo.remove();

//     }

// };



// window.addEventListener('resize', function () {
//     "use strict";
//     window.location.reload();
// })







$(document).scroll(function () {


    var top1 = $('#Projects').offset().top;
    var top2 = $('#Clients').offset().top;
    var top3 = $('#Linkdin').offset().top;
    var navi = document.getElementsByClassName("nav-con");
    var burg = document.getElementsByClassName("burg");

    var scrollPos = $(document).scrollTop();


    if ((scrollPos >= top2 && scrollPos < top3)) {
        document.getElementById("sha").style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        dow.classList.remove("sha-dow");
        document.getElementById("brimg").src = "images/brand-0-b.svg";
        // navi.forEach(element => {
        //     console.log(element.classList);
        //     // element.classList.add("navi");
        // }); 

        for (let index = 0; index < navi.length; index++) {
            navi[index].classList.add("navi");
        }

        for (let index = 0; index < burg.length; index++) {
            burg[index].style.backgroundColor = "white";
        }



    } else {
        dow.classList.add("sha-dow");
        // document.getElementById("sha").style.backgroundColor = "rgba(255,255,255,0.72)";
        document.getElementById("sha").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        document.getElementById("brimg").src = "images/brand-0.svg";
        for (let index = 0; index < navi.length; index++) {
            navi[index].classList.remove("navi");
        }
        for (let index = 0; index < burg.length; index++) {
            burg[index].style.backgroundColor = "black";
        }
    }
});



function clientdrop() {
    var clihi = document.getElementsByClassName("clihi");

  

    if ( clihi[0].classList.contains("cg")) {
        for (let index = 0; index < clihi.length; index++) {
            clihi[index].classList.remove("cg");
        }
        document.getElementById("cldr").textContent = "View All Clients";
       
    } else {
        for (let index = 0; index < clihi.length; index++) {
            clihi[index].classList.add("cg");
        }
        document.getElementById("cldr").textContent = "View Less Clients";   
    }

}








const ani4 = document.getElementById("yest");
window.onscroll = function scrollfun() {



    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        dow.style.backgroundColor = "rgba(255,255,255,0.1)";
    
        ani1.classList.add("ani1");
        ani2.classList.add("ani2");
        ani3.classList.add("ani3");
        ani4.classList.add("ani4");
    } else {
        dow.style.backgroundColor = "#fff8fa"; 
        ani1.classList.remove("ani1");
        ani2.classList.remove("ani2");
        ani3.classList.remove("ani3");
        ani4.classList.remove("ani4");
    }


    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        mybutton.style.opacity = "1";
  

    } else {
        mybutton.style.opacity = "0";
        dow.classList.remove("sha-dow");
    }

}




// const scrollTopp = window.pageYOffset || document.documentElement.scrollTop; 
// var top1 = document.querySelector('#Projects').getBoundingClientRect()+scrollTopp;
// var top2 = document.querySelector('#Clients').getBoundingClientRect()+scrollTopp;
// var top3 = document.querySelector('#Linkdin').getBoundingClientRect()+scrollTopp;

// document.querySelector(document).scroll(function() {
//   var scrollPos = document.querySelector(document).scrollTop;
//   if (scrollPos >= top1 && scrollPos < top2) {
//     dow.classList.add("sha-dow");
//     document.getElementById("sha").style.backgroundColor = "rgba(255,255,255,0.72)";
//   } else if (scrollPos >= top2 && scrollPos < top3) {
//     document.getElementById("sha").style.backgroundColor = "rgba(29,29,31,0.9)";
//     dow.classList.remove("sha-dow");
//   } else if (scrollPos >= top3) {
//     dow.classList.add("sha-dow");
//     document.getElementById("sha").style.backgroundColor = "rgba(255,255,255,0.72)";
//   }
// });


// if (scrollPos >= top1 && scrollPos < top2) {
//         dow.classList.add("sha-dow");
//         document.getElementById("sha").style.backgroundColor = "rgba(255,255,255,0.72)";
//       } else if (scrollPos >= top2 && scrollPos < top3) {
//         document.getElementById("sha").style.backgroundColor = "rgba(29,29,31,0.9)";
//         dow.classList.remove("sha-dow");
//       } else if (scrollPos >= top3) {
//         dow.classList.add("sha-dow");
//         document.getElementById("sha").style.backgroundColor = "rgba(255,255,255,0.72)";
//       }
// (entries[0].intersectionRatio>0.8)

// (entry.isIntersecting)||

// ||(entries[0].intersectionRatio<0.8)



function topfunction() {
    // document.body.scrollTop = 0,'smooth';
    // document.documentElement.scrollTop = 0,'smooth';
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function processfunction() {
    // document.body.scrollTop = 0,'smooth';
    // document.documentElement.scrollTop = 0,'smooth';
    if(window.innerWidth < 800){
        window.scrollTo({ top: $("#Process-w").offset().top, behavior: "smooth" }); 
    }else{
        window.scrollTo({ top: $("#Process").offset().top, behavior: "smooth" });
    }

   
    // window.scrollTo({ top: $("#Process-w").offset().top, behavior: "smooth" });
}




//  if (
//     "IntersectionObserver" in window &&
//     "IntersectionObserverEntry" in window &&
//     "intersectionRatio" in window.IntersectionObserverEntry.prototype
// ) {
//     let observer = new IntersectionObserver(entries => {
//         if ((entries[0].boundingClientRect.y < 0)) {
//             document.getElementById("h-scroll").classList.remove("fadeInleft");
//             document.getElementById("h-scroll").classList.add("fadeInright");
//         }else{
//             document.getElementById("h-scroll").classList.remove("fadeInright");
//         }
//     });
//     observer.observe(document.querySelector("#anchor1"));
// }


if (1) {
    var scene = document.getElementById('a-parallax');
    var parallax = new Parallax(scene);
}












