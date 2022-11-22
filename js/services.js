$(function(){
  boxRollovers();
});

function boxRollovers()
{
  $selector = $(".outg");
  XAngle = 0;
  YAngle = 0;
  Za = 0;
  
  $selector.on("mousemove",function(e){
      var $this = $(this);
      var XRel = e.pageX - $this.offset().left;
      var YRel = e.pageY - $this.offset().top;
      var width = $this.width();
  
      YAngle = -(0.5 - (XRel / width)) * 15; 
      XAngle = (0.5 - (YRel / width)) * 15;
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
  oLayer.css({"transform":"perspective(525px) translateZ(" + Za + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)" ,"transition":"none","-webkit-transition":"none"});
  oLayer.find("strong").css({"transform":"perspective(525px) translateZ(" + Za + "px) rotateX(" + (XAngle / 0.66) + "deg) rotateY(" + (YAngle / 0.66) + "deg)","transition":"none","-webkit-transition":"none"});
}





















   $(window).scroll(function() {
    var windscroll = $(window).scrollTop();
  
    if (windscroll >= 100) {
      $('section').each(function(i) {
        // The number at the end of the next line is how pany pixels you from the top you want it to activate.
        if ($(this).position().top <= windscroll - 200) {
          $('#serv li.active').removeClass('active');
          $('#serv li').eq(i).addClass('active');
        }
      });
  
    } else {
  
      $('#serv li.active').removeClass('active');
      $('#serv li:first').addClass('active');
    }
   
  }).scroll();
  
  //Default active on home
//   $('#s1').addClass("active");
  
  
  /*
  Smooth scrolling
  */
  $("#s1").click(function() {
       $('html, body').animate({
           scrollTop:        $("#1").offset().top-100
       }, 1000);
    return false;
   });
  
  $("#s2").click(function() {
       $('html, body').animate({
           scrollTop:        $("#2").offset().top-0
       }, 1000);
    return false;
   });
  
  $("#s3").click(function() {
       $('html, body').animate({
           scrollTop:        $("#3").offset().top-100
       }, 1000);
    return false;
   });
  

   function processfunction() {

    if(window.innerWidth < 800){
      window.location= "/#Process-w";
  }else{
    window.location= "/#Process";
  }
  
    window.scrollTo({ top: $("#Process").offset().top, behavior: "smooth" });
}




$(window).scroll(function(){
  inViewport();
});

$(window).resize(function(){
  inViewport();
});

function inViewport(){
  $('.highlight-illustration').each(function(){
    var divPos = $(this).offset().top,
            topOfWindow = $(window).scrollTop();
    
    if( divPos < topOfWindow+800 ){
      $(this).addClass('underline-path');
    }
  });
};


