
const mybutton = document.getElementById("scroll-top");
const dow = document.getElementById("sha");
const ani1 = document.getElementById("hide");
const ani2 = document.getElementById("nav-toggle-btn");
const ani3 = document.getElementById("brand-name");
const remo = document.getElementById("Industries-w");
const remo2 = document.getElementById("Industries");




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

    if (document.getElementById("rowc2").style.opacity === "1") {
        document.getElementById("rowc2").style.opacity = "0";
        document.getElementById("k3c").style.height = "90vh";
        document.getElementById("k3c2").style.height = "90vh";
        document.getElementById("cldr").textContent = "View All Clients";
       
    } else {
        document.getElementById("rowc2").style.opacity = "1";
        document.getElementById("k3c").style.height = "125vh";
        document.getElementById("k3c2").style.height = "125vh";
        document.getElementById("cldr").textContent = "View Less Clients"
    
        
    }

}









window.onscroll = function scrollfun() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // dow.style.backgroundColor = "rgba(255,255,255,0.72)";
        dow.style.height= "60px";
        ani2.style.top= "0.9rem";
        dow.style.paddingBottom="40px";
      
        
   
     
    } else {
        dow.style.backgroundColor = "#fff8fa";
        dow.style.height= "99px";
        ani2.style.top= "3.4rem";
        dow.style.paddingBottom="0px";
      
      
    }

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        // dow.style.backgroundColor = "rgba(255,255,255,0.72)";
        // dow.style.height= "60px";
        // ani2.style.top= "0.9rem";
        // dow.style.paddingBottom="40px";
        dow.classList.add("axil-sticky");
        ani1.classList.add("ani1");
        ani2.classList.add("ani2");
        ani3.classList.add("ani3");
    } else {
        dow.style.backgroundColor = "#fff8fa";
        // dow.style.height= "99px";
        // ani2.style.top= "3.4rem";
        // dow.style.paddingBottom="0px";
        dow.classList.remove("axil-sticky");
        ani1.classList.remove("ani1");
        ani2.classList.remove("ani2");
        ani3.classList.remove("ani3");
    }


    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        mybutton.style.opacity = "1";
  

    } else {
        mybutton.style.opacity = "0";
        dow.classList.remove("sha-dow");
    }









    // var io = new IntersectionObserver(entries => {
    //     for (const entry of entries){
    //         if (window.innerWidth > 1024)  {
    //             if ((entry.isIntersecting)) {
    //                 document.getElementById("sha").style.backgroundColor = "rgba(29,29,31,0.9)";
    //                 dow.classList.remove("sha-dow");

    //             } else if((!entry.isIntersecting)) {
    //                 dow.classList.add("sha-dow");
    //                 document.getElementById("sha").style.backgroundColor = "rgba(255,255,255,0.72)";
    //             }

    //         } else if (window.innerWidth < 700) {
    //             if ((entries[0].intersectionRatio>0.6)) {
    //                 document.getElementById("sha").style.backgroundColor = "rgba(29,29,31,0.9)";
    //                 dow.classList.remove("sha-dow");
    //             } else if((!entry.isIntersecting) || (entries[0].intersectionRatio<0.8)) {
    //                 dow.classList.add("sha-dow");
    //                 document.getElementById("sha").style.backgroundColor = "rgba(255,255,255,0.72)";
    //             }

    //         }

    //     }

    //     // console.log(`$(entry.target.id) is in view: ${entry.isIntersecting}`);
    //     // console.log(entries[0].intersectionRatio);
    // })
    // io.observe(document.querySelector("#Clients"));

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












