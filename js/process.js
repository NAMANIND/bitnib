function qs(selector, all = false) {
    return all
      ? document.querySelectorAll(selector)
      : document.querySelector(selector);
  }
  
  const sections = qs(".section", true);
  const timeline = qs(".timeline");
  const line = qs(".line");
  line.style.bottom = `calc(100% - 20px)`;
  let prevScrollY = window.scrollY;
  let up, down;
  let full = false;
  let set = 0;
  const targetY = window.innerHeight * 0.8;



  
function lockScroll() {
   
  if ($('body').hasClass('lock-scroll')) {
      document.getElementById("lop").style.display="none";
      $('body').removeClass('lock-scroll');
  } else {
      document.getElementById("lop").style.display="block";
      $('body').addClass('lock-scroll');
  }
}

  
  function scrollHandler(e) {
    const { scrollY } = window;
    up = scrollY < prevScrollY;
    down = !up;
    const timelineRect = timeline.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;
  
    const dist = targetY - timelineRect.top;
    // console.log(dist);
  
    if (down && !full) {
      set = Math.max(set, dist);
      line.style.bottom = `calc(100% - ${set}px)`;
    }
  
    if (dist > timeline.offsetHeight + 100 && !full) {
      full = true;
      line.style.bottom = `-100px`;
    }
  
    sections.forEach((item) => {
      // console.log(item);
      const rect = item.getBoundingClientRect(); //     console.log(rect);
  
      if (rect.top + item.offsetHeight/1.5 < targetY) {
        item.classList.add("show-me");
      }
    }); // console.log(up, down);
  
    prevScrollY = window.scrollY;
  }
  
  scrollHandler();
  line.style.display = "block";
  window.addEventListener("scroll", scrollHandler);
  


  window.onload = function() {
    var href = document.location.href;
    var str= href.substring(href.lastIndexOf('/') + 1);
    document.getElementById(str).classList.add("temp"); 
  }

