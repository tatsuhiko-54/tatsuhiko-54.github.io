$(window).on("load", function(){
  //最初消しとく
  $(".footer__btn").css('display' , 'none')
  $(".top-image").delay(300).fadeIn(1000);
  //feed in
  $(".content").css('display' , 'none')
  $('.content').delay(300).fadeIn(1000);
  $(".footer").css('display' , 'none')
  $('.footer').delay(300).fadeIn(1000);
  //一文字ずつ

});


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
  //写真
  window.onscroll = function(){
    var scrollTop = window.pageYOffset ;

    if (scrollTop == 0 ) { 
    $(".top-image").css('opacity', '1')
    $('.top-image').css('transition', '0.5s')

    $(".man-2").css('opacity', '0')
    $('.man-2').css('transition', '0.5s')
    }
    if (scrollTop > 10 ) { 
      $(".top-image").css('opacity', '0')
      $('.top-image').css('transition', '0.5s')
    
      $(".man-2").css('opacity', '1')
      $('.man-2').css('transition', '0.5s')
    }
    if (scrollTop > 50 ) { 
      $('.footer__btn').fadeIn(200);
    }
    if (scrollTop == 0 ) { 
      $(".footer__btn").fadeOut(200);
    }
    if (scrollTop > 900 ) { 
      $('.giga-man').css('background-color', 'skyblue');
      $('.giga-man').css('transition', '1.3s')
    }
    if (scrollTop < 1400 ) { 
      $('.giga-man').css('background-color', '');
      $('.giga-man').css('transition', '1.0s')
    }
  }
})
