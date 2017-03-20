$(document).ready(function(){
  $('.menu').click(function(e){
    e.stopPropagation();
    $('#main_nav').toggleClass('active');
  });
  $('#article_content').fitVids();
});