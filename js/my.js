
const mybutton = document.getElementById("scroll-top");
const dow = document.getElementById("sha");
const ani1 = document.getElementById("hide");
const ani2 = document.getElementById("nav-toggle-btn");
const ani3 = document.getElementById("brand-name");
const remo = document.getElementById("hide1");



document.querySelector(function () {
    var width = document.querySelector(window).width();
    var screen = "";
    if (width < 1024 && width > 640) {
        screen = "small";
    } else if (width > 1024) { screen = "big"; }
    document.querySelector(window).onresize(function () {
        var cur_width = document.querySelector(window).width();

        if (cur_width < 1024 && cur_width > 640 && screen == "big") {
            location.reload();
            remo.add();
        } else if (cur_width > 1024 && screen == "small") {
            location.reload();
            remo.remove();
        }
       
    })
});




 window.onscroll = function scrollfun() {
    if(document.body.scrollTop >500 || document.documentElement.scrollTop >500){
        mybutton.style.opacity = "1";
        dow.classList.add("sha-dow");
        ani1.classList.add("ani1");
        ani2.classList.add("ani2");
        ani3.classList.add("ani3");
    }else{
        mybutton.style.opacity = "0";
        dow.classList.remove("sha-dow");
        ani1.classList.remove("ani1");
        ani2.classList.remove("ani2");
        ani3.classList.remove("ani3");
        
    }
 }


 function topfunction() {
    // document.body.scrollTop = 0,'smooth';
    // document.documentElement.scrollTop = 0,'smooth';
    window.scrollTo({top: 0, behavior: "smooth"});
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


var io = new IntersectionObserver(entries =>{
    for(const entry of entries) 
    if ((entry.isIntersecting)) {
        document.getElementById("h-scroll").classList.remove("fadeInleft");
        document.getElementById("h-scroll").classList.add("fadeInright");
    }else{
        document.getElementById("h-scroll").classList.remove("fadeInright");
        document.getElementById("h-scroll").classList.add("fadeInleft");
        
    }
    // console.log(`$(entry.target.id) is in view: ${entry.isIntersecting}`);
    // console.log(entries[0].intersectionRatio);
})




io.observe(document.querySelector("#anchor1"));







