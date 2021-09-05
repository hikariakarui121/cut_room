$(function(){
  $('.nav-btn').on('click',function(){
      $(this).toggleClass("-active");
      $('.navigation').toggleClass("-active");
  })
});

// スクロール
$('a[href^="#"]').click(function(){
  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top -60;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  return false;
});