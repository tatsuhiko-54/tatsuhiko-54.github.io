$(window).on("load", function(){
  //最初消しとく
  $(".footer__btn").css('display' , 'none')
  $(".title").css('opacity' , '0')
  $(".detail").css('opacity' , '0')
  //feed in
  $(".content").css('display' , 'none')
  $(".footer").css('display' , 'none')
  $('.content').delay(300).fadeIn(1000);
  $('.footer').delay(300).fadeIn(1000);
});
//ボタンの設置
window.onscroll = function(){
  var scrollTop = window.pageYOffset ;
  if (scrollTop > 100 ) { 
    $('.footer__btn').fadeIn(200);
  }
  if (scrollTop == 0 ) { 
    $(".footer__btn").fadeOut(200);
  }
}

$(function(){
  //スクロール
  var scrollTop = window.pageYOffset ;
  $(".footer__btn").on("click", function(){
    $( 'html,body' ).animate( {scrollTop:0}, 'slow' );
  })

  //説明文
  $(".linkman").on("mouseover", function(){
    $('.title').css('opacity' , '1')
    $('.title').css('transition', '0.3s')
    $('.detail').css('opacity' , '1')
    $('.detail').css('transition', '0.3s')
  })
  $(".linkman").on("mouseout", function(){
    $('.title').css('opacity' , '0')
    $('.detail').css('opacity' , '0')
  })

  // リロード
  $(".header__title").on('click', function(){
    location.reload();
  })
})
