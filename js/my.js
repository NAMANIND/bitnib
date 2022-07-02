
const mybutton = document.getElementById("scroll-top");
const dow = document.getElementById("sha");
const ani1 = document.getElementById("hide");
const ani2 = document.getElementById("nav-toggle-btn");
const ani3 = document.getElementById("brand-name");
const remo = document.getElementById("hide1");
const remo2 = document.getElementById("hide2");


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
        document.getElementById("sha").style.backgroundColor = "rgba(29,29,31,0.9)";
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
        document.getElementById("sha").style.backgroundColor = "rgba(255,255,255,0.72)";
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
        document.getElementById("k3c").style.height = "110vh";
        document.getElementById("k3c2").style.height = "110vh";
        document.getElementById("cldr").textContent = "View All Clients";
       
    } else {
        document.getElementById("rowc2").style.opacity = "1";
        document.getElementById("k3c").style.height = "165vh";
        document.getElementById("k3c2").style.height = "165vh";
        document.getElementById("cldr").textContent = "View Less Clients"
    
        
    }

}









window.onscroll = function scrollfun() {

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // dow.style.backgroundColor = "rgba(255,255,255,0.72)";
    } else {
        dow.style.backgroundColor = "#fff8fa";
    }


    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
        mybutton.style.opacity = "1";
        dow.classList.add("sha-dow");
        ani1.classList.add("ani1");
        ani2.classList.add("ani2");
        ani3.classList.add("ani3");

    } else {
        mybutton.style.opacity = "0";
        dow.classList.remove("sha-dow");
        ani1.classList.remove("ani1");
        ani2.classList.remove("ani2");
        ani3.classList.remove("ani3");

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












